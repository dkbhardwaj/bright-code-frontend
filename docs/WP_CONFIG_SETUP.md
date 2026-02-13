# WordPress wp-config.php Configuration for JWT Authentication

## What to Add to Your wp-config.php

Add the following code to your `wp-config.php` file **BEFORE** the line that says:
```php
/* That's all, stop editing! Happy publishing. */
```

---

## Complete Configuration Code

```php
/**#@+
 * Authentication unique keys and salts.
 */
define('AUTH_KEY',         'Tym;r|C |KipOB{:){T(K!pZ{_*}6Nc+ckf$^R F_6XYg&7.9L-Ly:1/?Ec?6m1S');
define('SECURE_AUTH_KEY',  'zFThu.>feXNI@n{d/&+;:z=%D2XK6u{R(jP_}pNz^eiW!^=FxBlJH2d^ok`Wn{/v');
define('LOGGED_IN_KEY',    '(kyi+i9ojgn#R;WxPa7UQs9TJ0~P3TFY^?r9Ht}:AP8>,+ KjQ)2iRmG5c,|foFY');
define('NONCE_KEY',        'Le;(1%W?|i:;,$]WtF-TLtRZjsym[+Iwq1t!:N3M0Q*&&SdpjZ4&&-|#cfmh6I)J');
define('AUTH_SALT',        '3[M.s-9/`mKd-vV-,53yxMyW>-v-@d7BVk3AP,=CA2Ohml8Oag-7DM+?<f{8|3P:');
define('SECURE_AUTH_SALT', 'Bmi^M&pMA?4u=qH6.L4mrmj8F(tt:a*TLC~cF@Z^^d~`N 3T4Do&$~T;|?o= }0/');
define('LOGGED_IN_SALT',   '`-p5<+p=d/5bI~x!^e5%o(;z^+>1j*->Z*XI|Wn6pH8KDB@QxX%Dz@[9@U jd}M}');
define('NONCE_SALT',       '= L!T+k?^?/0&MKT6g.&F2A~b{RHBcbc2?|:|t58RYqi3,sH_[DCY/ndlts__9&f');
/**#@-*/

// ============================================================================
// JWT Authentication Configuration for WPGraphQL
// ============================================================================

// JWT Secret Key - Used to sign and verify JWT tokens
define('GRAPHQL_JWT_AUTH_SECRET_KEY', 'DkVp7UFcmbUdWvXMIzZIyafrMFGBu5mkyQkLhT+uF7w=');

// Optional: Configure token expiration (default is 300 seconds / 5 minutes)
// This affects the authToken, not the refreshToken
define('GRAPHQL_JWT_AUTH_EXPIRATION', 300);

// Enable CORS for GraphQL endpoint
add_filter('graphql_response_headers_to_send', function($headers) {
    return array_merge($headers, [
        'Access-Control-Allow-Origin' => '*',
        'Access-Control-Allow-Methods' => 'POST, GET, OPTIONS',
        'Access-Control-Allow-Credentials' => 'true',
        'Access-Control-Allow-Headers' => 'Authorization, Content-Type'
    ]);
});
```

---

## Important Notes

1. **Keep your existing AUTH_KEY, SECURE_AUTH_KEY, etc.** - These are for WordPress's standard authentication
2. **Add the new GRAPHQL_JWT_AUTH_SECRET_KEY** - This is specifically for JWT authentication
3. **The JWT secret is:** `DkVp7UFcmbUdWvXMIzZIyafrMFGBu5mkyQkLhT+uF7w=`

---

## Location in wp-config.php

Your `wp-config.php` should look like this:

```php
<?php
// ... other WordPress configuration ...

/**#@+
 * Authentication unique keys and salts.
 */
define('AUTH_KEY',         'Tym;r|C |KipOB{:){T(K!pZ{_*}6Nc+ckf$^R F_6XYg&7.9L-Ly:1/?Ec?6m1S');
// ... rest of your keys ...

// ============================================================================
// JWT Authentication Configuration for WPGraphQL
// ============================================================================
define('GRAPHQL_JWT_AUTH_SECRET_KEY', 'DkVp7UFcmbUdWvXMIzZIyafrMFGBu5mkyQkLhT+uF7w=');

add_filter('graphql_response_headers_to_send', function($headers) {
    return array_merge($headers, [
        'Access-Control-Allow-Origin' => '*',
        'Access-Control-Allow-Methods' => 'POST, GET, OPTIONS',
        'Access-Control-Allow-Credentials' => 'true',
        'Access-Control-Allow-Headers' => 'Authorization, Content-Type'
    ]);
});

/* That's all, stop editing! Happy publishing. */
```

---

## Next Steps

After adding this to your `wp-config.php`:

1. **Save the file** and upload it to your WordPress server (if editing locally)
2. **Verify the JWT plugin is installed and active** in WordPress Admin → Plugins
3. **Get your JWT token:**
   ```bash
   node scripts/get-jwt-token.js YOUR_USERNAME YOUR_PASSWORD
   ```
4. **Copy the refresh token** and add it to `.env.local`
5. **Test authentication:**
   ```bash
   node scripts/test-jwt-auth.js
   ```
