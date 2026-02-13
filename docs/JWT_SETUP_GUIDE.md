# WordPress JWT Authentication Setup Guide

This guide will help you configure JWT authentication for WordPress to enable secure preview functionality.

## Prerequisites

- Access to WordPress admin panel
- Ability to edit `wp-config.php` on your WordPress server
- WordPress credentials (username and password)

---

## Step 1: Install WPGraphQL JWT Authentication Plugin

### Option A: Via WordPress Admin (Recommended)

1. Log in to your WordPress admin panel
2. Navigate to **Plugins → Add New**
3. Search for **"WPGraphQL JWT Authentication"**
4. Click **Install Now**, then **Activate**

### Option B: Manual Installation

```bash
# SSH into your WordPress server
cd /path/to/wordpress/wp-content/plugins

# Clone the plugin repository
git clone https://github.com/wp-graphql/wp-graphql-jwt-authentication.git

# Or download and extract the ZIP file
wget https://github.com/wp-graphql/wp-graphql-jwt-authentication/archive/refs/heads/main.zip
unzip main.zip
```

Then activate the plugin via WordPress Admin → Plugins.

---

## Step 2: Configure JWT Secret in wp-config.php

### Generate a Secure Secret Key

Choose one of these methods to generate a secure secret:

**Method 1: WordPress Salt Generator (Recommended)**
```bash
# Visit this URL in your browser:
https://api.wordpress.org/secret-key/1.1/salt/

# Copy one of the generated keys
```

**Method 2: OpenSSL**
```bash
openssl rand -base64 32
```

**Method 3: Node.js**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

### Add Configuration to wp-config.php

1. **Access your WordPress server** (via FTP, SSH, or hosting control panel)
2. **Locate `wp-config.php`** in the WordPress root directory
3. **Add the following code** BEFORE the line that says `/* That's all, stop editing! Happy publishing. */`:

```php
// ============================================================================
// JWT Authentication Configuration
// ============================================================================

// Define the secret key for JWT authentication
// IMPORTANT: Replace 'your-super-secret-key-here' with the key you generated above
define('GRAPHQL_JWT_AUTH_SECRET_KEY', 'your-super-secret-key-here');

// Optional: Configure token expiration (default is 300 seconds / 5 minutes)
// The refresh token doesn't expire, so this mainly affects the authToken
define('GRAPHQL_JWT_AUTH_EXPIRATION', 300);

// Enable CORS for GraphQL endpoint (allows requests from your Next.js frontend)
add_filter('graphql_response_headers_to_send', function($headers) {
    return array_merge($headers, [
        'Access-Control-Allow-Origin' => '*',
        'Access-Control-Allow-Methods' => 'POST, GET, OPTIONS',
        'Access-Control-Allow-Credentials' => 'true',
        'Access-Control-Allow-Headers' => 'Authorization, Content-Type'
    ]);
});
```

4. **Save the file**

### Verify Plugin is Active

1. Go to **WordPress Admin → Plugins**
2. Confirm **WPGraphQL JWT Authentication** is listed and **Active**
3. Navigate to **GraphQL → Settings** (if available) to verify JWT settings

---

## Step 3: Obtain JWT Refresh Token

Now that WordPress is configured, you need to generate a refresh token.

### Using the Helper Script (Easiest)

We've created a helper script to make this easy:

```bash
# Navigate to your Next.js project
cd /Users/ganeshthakur/Sites/bright-code/bright-code-frontend

# Run the script with your WordPress credentials
node scripts/get-jwt-token.js YOUR_USERNAME YOUR_PASSWORD
```

**Example:**
```bash
node scripts/get-jwt-token.js admin MySecurePassword123
```

**Expected Output:**
```
🔐 Attempting to authenticate with WordPress...

GraphQL URL: https://dev-bright-codeio.pantheonsite.io/graphql
Username: admin

✅ Authentication successful!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

User Information:
  Name:  Admin User
  Email: admin@example.com
  ID:    1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔄 Refresh Token (use this in .env.local):
  eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Copy the Refresh Token** from the output.

### Alternative: Using GraphiQL IDE

If you prefer a visual interface:

1. Navigate to: `https://dev-bright-codeio.pantheonsite.io/graphql`
2. Paste this mutation:

```graphql
mutation LoginUser {
  login(
    input: {
      username: "your-username"
      password: "your-password"
    }
  ) {
    authToken
    refreshToken
    user {
      id
      name
      email
    }
  }
}
```

3. Replace `your-username` and `your-password` with your actual credentials
4. Click **Execute Query**
5. Copy the `refreshToken` from the response

---

## Step 4: Add Token to .env.local

1. **Open your `.env.local` file:**
   ```bash
   cd /Users/ganeshthakur/Sites/bright-code/bright-code-frontend
   nano .env.local  # or use your preferred editor
   ```

2. **Add the refresh token:**
   ```bash
   NEXT_PUBLIC_WORDPRESS_API_URL=https://dev-bright-codeio.pantheonsite.io/wp-json/wp/v2
   WP_GRAPHQL_URL=https://dev-bright-codeio.pantheonsite.io/graphql
   NEXT_PUBLIC_WP_GRAPHQL_URL=https://dev-bright-codeio.pantheonsite.io/graphql
   NEXTJS_PREVIEW_SECRET=mC0QfIGWXZW01JHzlBEio2yeOMTK9jJOeAejft76Kg
   WORDPRESS_AUTH_REFRESH_TOKEN=paste-your-refresh-token-here
   ```

3. **Save the file**

4. **Restart your development server:**
   ```bash
   # Stop the current server (Ctrl+C in the terminal running npm run dev)
   # Then start it again:
   npm run dev
   ```

---

## Step 5: Test Authentication

Use the test script to verify everything is working:

```bash
node scripts/test-jwt-auth.js
```

**Expected Output (Success):**
```
🧪 Testing JWT Authentication...

✅ WORDPRESS_AUTH_REFRESH_TOKEN is set
   Length: 245 characters

🔍 Testing GraphQL query with authentication...
   Endpoint: https://dev-bright-codeio.pantheonsite.io/graphql

✅ Authentication Successful!

Authenticated User:
  Name:         Admin User
  Email:        admin@example.com
  ID:           1
  Capabilities: edit_posts, edit_pages, ...

✨ JWT authentication is working correctly!
   Your preview functionality should now work with authenticated requests.
```

---

## Step 6: Test Preview Functionality

1. **Go to WordPress Admin** and edit any page
2. **Make some changes** (don't publish)
3. **Click the "Preview" button**
4. **Verify:**
   - ✅ Redirects to Next.js frontend
   - ✅ Preview banner appears
   - ✅ All sections display correctly
   - ✅ No authentication errors in browser console

---

## Troubleshooting

### Error: "Invalid secret"

**Cause:** The JWT secret in `wp-config.php` doesn't match or isn't set.

**Solution:**
1. Verify `GRAPHQL_JWT_AUTH_SECRET_KEY` is defined in `wp-config.php`
2. Ensure the secret is a strong, random string
3. Restart your WordPress server/PHP-FPM after making changes

### Error: "Authentication failed"

**Cause:** The refresh token is invalid or expired.

**Solution:**
1. Generate a new token: `node scripts/get-jwt-token.js <username> <password>`
2. Update `.env.local` with the new token
3. Restart your dev server

### Error: "Plugin not found"

**Cause:** WPGraphQL JWT Authentication plugin is not installed or activated.

**Solution:**
1. Go to WordPress Admin → Plugins
2. Verify the plugin is installed and active
3. If not, install it following Step 1

### Preview shows "Draft Content Not Available"

**Cause:** Authentication headers are not being sent or token is invalid.

**Solution:**
1. Run `node scripts/test-jwt-auth.js` to verify authentication
2. Check browser DevTools → Network tab → GraphQL request headers
3. Ensure `Authorization: Bearer <token>` header is present
4. Verify `.env.local` has the correct token and dev server was restarted

---

## Security Notes

⚠️ **Important Security Considerations:**

1. **Never commit `.env.local` to version control** - It contains sensitive tokens
2. **Use strong, unique secrets** - Generate them using secure methods
3. **Refresh tokens periodically** - While they don't expire by default, it's good practice to rotate them
4. **Restrict CORS in production** - The CORS configuration above allows all origins (`*`). In production, restrict this to your specific domain

---

## Next Steps

Once authentication is working:
- ✅ Preview functionality will work with draft content
- ✅ You can preview unpublished changes
- ✅ All page builder sections will render correctly in preview mode

If you encounter any issues, refer to the troubleshooting section or check the [WPGraphQL JWT Authentication documentation](https://github.com/wp-graphql/wp-graphql-jwt-authentication).
