# JWT Authentication Helper Scripts

This directory contains helper scripts for configuring and testing JWT authentication with WordPress.

## Scripts

### 1. `get-jwt-token.js`

Obtains a JWT refresh token from WordPress via GraphQL mutation.

**Usage:**
```bash
node scripts/get-jwt-token.js <username> <password>
```

**Example:**
```bash
node scripts/get-jwt-token.js admin MyPassword123
```

**What it does:**
- Authenticates with WordPress using your credentials
- Retrieves both `authToken` and `refreshToken`
- Displays user information
- Provides the refresh token to add to `.env.local`

---

### 2. `test-jwt-auth.js`

Tests that JWT authentication is working correctly.

**Usage:**
```bash
node scripts/test-jwt-auth.js
```

**What it does:**
- Checks if `WORDPRESS_AUTH_REFRESH_TOKEN` is set in `.env.local`
- Makes an authenticated GraphQL query
- Verifies the token is valid
- Displays authenticated user information

**Run this after:**
- Installing the JWT plugin in WordPress
- Configuring the JWT secret in `wp-config.php`
- Adding the refresh token to `.env.local`

---

## Quick Start

1. **Get your JWT token:**
   ```bash
   node scripts/get-jwt-token.js your-username your-password
   ```

2. **Copy the refresh token** from the output

3. **Add it to `.env.local`:**
   ```bash
   WORDPRESS_AUTH_REFRESH_TOKEN=your-refresh-token-here
   ```

4. **Restart your dev server:**
   ```bash
   npm run dev
   ```

5. **Test authentication:**
   ```bash
   node scripts/test-jwt-auth.js
   ```

---

## Full Setup Guide

For complete setup instructions including WordPress configuration, see:
[`docs/JWT_SETUP_GUIDE.md`](../docs/JWT_SETUP_GUIDE.md)

---

## Troubleshooting

### "Invalid credentials" error
- Verify your WordPress username and password are correct
- Ensure you have admin access to WordPress

### "Plugin not found" error
- Install WPGraphQL JWT Authentication plugin in WordPress
- Activate the plugin

### "Invalid secret" error
- Add `GRAPHQL_JWT_AUTH_SECRET_KEY` to your `wp-config.php`
- See the full setup guide for details

### Token test fails
- Verify the token was added to `.env.local` correctly
- Ensure you restarted the dev server after adding the token
- Try generating a new token
