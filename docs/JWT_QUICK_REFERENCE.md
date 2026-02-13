# JWT Authentication - Quick Reference

## 🚀 Quick Start (5 Steps)

### 1️⃣ Install WordPress Plugin
```
WordPress Admin → Plugins → Add New
Search: "WPGraphQL JWT Authentication"
Install & Activate
```

### 2️⃣ Configure wp-config.php
```php
// Add before "That's all, stop editing!"
define('GRAPHQL_JWT_AUTH_SECRET_KEY', 'your-secret-key-here');
```

**Generate secret:**
```bash
openssl rand -base64 32
```

### 3️⃣ Get JWT Token
```bash
node scripts/get-jwt-token.js YOUR_USERNAME YOUR_PASSWORD
```

### 4️⃣ Add to .env.local
```bash
WORDPRESS_AUTH_REFRESH_TOKEN=your-refresh-token-here
```

### 5️⃣ Restart & Test
```bash
npm run dev
node scripts/test-jwt-auth.js
```

---

## 📁 Files Created

| File | Purpose |
|------|---------|
| `scripts/get-jwt-token.js` | Get refresh token from WordPress |
| `scripts/test-jwt-auth.js` | Verify authentication works |
| `docs/JWT_SETUP_GUIDE.md` | Complete setup instructions |
| `scripts/README.md` | Scripts documentation |

---

## 🔧 Commands

```bash
# Get token
node scripts/get-jwt-token.js admin password123

# Test authentication
node scripts/test-jwt-auth.js

# Restart dev server
npm run dev
```

---

## ✅ Success Checklist

- [ ] JWT plugin installed in WordPress
- [ ] Secret key in wp-config.php
- [ ] Token obtained via script
- [ ] Token in .env.local
- [ ] Dev server restarted
- [ ] Test script passes
- [ ] Preview works in WordPress

---

## 🐛 Troubleshooting

| Error | Fix |
|-------|-----|
| Invalid secret | Add `GRAPHQL_JWT_AUTH_SECRET_KEY` to wp-config.php |
| Auth failed | Generate new token |
| Plugin not found | Install WPGraphQL JWT Authentication |
| Test fails | Check token in .env.local, restart server |

---

## 📚 Full Documentation

See [`docs/JWT_SETUP_GUIDE.md`](../docs/JWT_SETUP_GUIDE.md) for complete instructions.
