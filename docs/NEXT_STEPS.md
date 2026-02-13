# Next Steps: Install WPGraphQL JWT Authentication Plugin

## ✅ What's Done

- [x] JWT secret key configured in wp-config.php
- [x] CORS settings added for GraphQL endpoint
- [x] WordPress authentication keys updated
- [x] Helper scripts created for token generation and testing

## 🎯 What's Next

### Step 1: Install the WPGraphQL JWT Authentication Plugin

You need to install the **WPGraphQL JWT Authentication** plugin in your WordPress admin panel.

#### Option A: Via WordPress Admin (Recommended)

1. **Log in to WordPress Admin**
   - Go to: `http://localhost/bright-codeio/wp-admin` (or your WordPress admin URL)
   
2. **Navigate to Plugins**
   - Click **Plugins** → **Add New** in the left sidebar

3. **Search for the Plugin**
   - In the search box, type: **"WPGraphQL JWT Authentication"**
   - Look for the plugin by **WPGraphQL**

4. **Install and Activate**
   - Click **Install Now**
   - After installation, click **Activate**

#### Option B: Manual Installation (If not available in WordPress.org)

If the plugin is not available in the WordPress plugin directory:

```bash
# Navigate to your WordPress plugins directory
cd /Users/ganeshthakur/Sites/bright-code/bright-codeio/wp-content/plugins

# Clone the plugin repository
git clone https://github.com/wp-graphql/wp-graphql-jwt-authentication.git

# Or download the ZIP and extract it
# wget https://github.com/wp-graphql/wp-graphql-jwt-authentication/archive/refs/heads/main.zip
# unzip main.zip
```

Then activate it via WordPress Admin → Plugins.

---

### Step 2: Verify Plugin Installation

After installing and activating:

1. Go to **WordPress Admin → Plugins**
2. Verify **WPGraphQL JWT Authentication** is listed and shows as **Active**
3. You should see it alongside the **WPGraphQL** plugin

---

### Step 3: Get Your JWT Token

Once the plugin is active, run the helper script to get your JWT refresh token:

```bash
cd /Users/ganeshthakur/Sites/bright-code/bright-code-frontend

# Replace YOUR_USERNAME and YOUR_PASSWORD with your WordPress credentials
node scripts/get-jwt-token.js YOUR_USERNAME YOUR_PASSWORD
```

**Example:**
```bash
node scripts/get-jwt-token.js admin MyPassword123
```

**Expected Output:**
```
✅ Authentication successful!

🔄 Refresh Token (use this in .env.local):
  eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...
```

**Copy the refresh token** from the output.

---

### Step 4: Add Token to .env.local

1. Open your `.env.local` file:
   ```bash
   cd /Users/ganeshthakur/Sites/bright-code/bright-code-frontend
   nano .env.local  # or use your preferred editor
   ```

2. Add the refresh token:
   ```bash
   WORDPRESS_AUTH_REFRESH_TOKEN=paste-your-refresh-token-here
   ```

3. Your complete `.env.local` should look like:
   ```bash
   NEXT_PUBLIC_WORDPRESS_API_URL=https://dev-bright-codeio.pantheonsite.io/wp-json/wp/v2
   WP_GRAPHQL_URL=https://dev-bright-codeio.pantheonsite.io/graphql
   NEXT_PUBLIC_WP_GRAPHQL_URL=https://dev-bright-codeio.pantheonsite.io/graphql
   NEXTJS_PREVIEW_SECRET=mC0QfIGWXZW01JHzlBEio2yeOMTK9jJOeAejft76Kg
   WORDPRESS_AUTH_REFRESH_TOKEN=your-actual-refresh-token-here
   ```

---

### Step 5: Restart Development Server

Stop and restart your Next.js dev server to load the new environment variable:

```bash
# Press Ctrl+C to stop the current server
# Then restart:
npm run dev
```

---

### Step 6: Test Authentication

Run the test script to verify everything is working:

```bash
node scripts/test-jwt-auth.js
```

**Expected Output (Success):**
```
✅ Authentication Successful!

Authenticated User:
  Name:         Your Name
  Email:        your@email.com
  ID:           1

✨ JWT authentication is working correctly!
```

---

### Step 7: Test Preview Functionality

1. Go to **WordPress Admin** and edit any page
2. Make some changes (don't publish)
3. Click the **"Preview"** button
4. Verify:
   - ✅ Redirects to Next.js frontend (localhost:3000)
   - ✅ Preview banner appears at the top
   - ✅ All page builder sections display correctly
   - ✅ No authentication errors in browser console

---

## 🐛 Troubleshooting

### Plugin Installation Issues

**Problem:** Can't find the plugin in WordPress admin

**Solution:** 
- Make sure **WPGraphQL** plugin is installed first (it's a dependency)
- Try manual installation using the git clone method above

---

### Token Generation Issues

**Problem:** `get-jwt-token.js` returns authentication error

**Possible Causes:**
1. Plugin not installed or not active
2. JWT secret not configured in wp-config.php (already done ✅)
3. Incorrect WordPress credentials

**Solution:**
- Verify plugin is active in WordPress Admin → Plugins
- Double-check your WordPress username and password
- Check WordPress error logs for more details

---

### Test Script Issues

**Problem:** `test-jwt-auth.js` fails

**Possible Causes:**
1. Token not added to .env.local
2. Dev server not restarted after adding token
3. Token is invalid or expired

**Solution:**
- Verify token is in .env.local
- Restart dev server: `npm run dev`
- Generate a new token if needed

---

## 📚 Quick Reference

```bash
# Install plugin (manual method)
cd /Users/ganeshthakur/Sites/bright-code/bright-codeio/wp-content/plugins
git clone https://github.com/wp-graphql/wp-graphql-jwt-authentication.git

# Get JWT token
cd /Users/ganeshthakur/Sites/bright-code/bright-code-frontend
node scripts/get-jwt-token.js YOUR_USERNAME YOUR_PASSWORD

# Test authentication
node scripts/test-jwt-auth.js

# Restart dev server
npm run dev
```

---

## ✅ Success Checklist

- [ ] WPGraphQL JWT Authentication plugin installed
- [ ] Plugin activated in WordPress Admin
- [ ] JWT token obtained via script
- [ ] Token added to .env.local
- [ ] Dev server restarted
- [ ] Test script passes
- [ ] Preview works in WordPress

---

Once you complete these steps, your WordPress preview functionality will be fully configured with JWT authentication! 🎉
