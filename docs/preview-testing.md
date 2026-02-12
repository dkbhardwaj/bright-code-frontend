# Testing Preview Functionality

This guide explains how to test the WordPress preview functionality locally and in production.

## Prerequisites

- Next.js dev server running (`npm run dev`)
- WordPress backend accessible
- `NEXTJS_PREVIEW_SECRET` configured in both environments

## Environment Setup

### 1. Verify Environment Variables

**Next.js (.env.local):**
```bash
NEXTJS_PREVIEW_SECRET="your-secret-key-here"
```

**WordPress:**
Set in `wp-config.php` or hosting environment:
```php
putenv('NEXTJS_PREVIEW_SECRET=your-secret-key-here');
putenv('NEXTJS_FRONTEND_URL=http://localhost:3000');
```

### 2. Generate a Secure Secret

```bash
openssl rand -base64 32
```

> [!IMPORTANT]
> Use the same secret in both Next.js and WordPress!

---

## Testing Scenarios

### Test 1: NotFoundContent Component

**Purpose**: Verify that pages with null data show a helpful error message.

**Steps**:
1. Navigate to `http://localhost:3000/services`
2. Verify you see the NotFoundContent component (not an empty page)
3. Check that the message is clear and helpful
4. Click "Go to Homepage" button - should redirect to `/`
5. Test on mobile viewport for responsiveness

**Expected Result**:
- Beautiful gradient background with centered card
- Clear "Page Not Found" message
- Working navigation buttons
- Smooth animations on page load

---

### Test 2: Preview API Error Handling

**Purpose**: Verify improved error messages help with debugging.

#### Test 2a: Missing Secret
```bash
curl -i "http://localhost:3000/api/preview?id=123&type=page&slug=test"
```

**Expected Response** (401):
```json
{
  "message": "Authentication required",
  "error": "Missing preview secret. Please provide a valid secret parameter.",
  "hint": "URL format: /api/preview?secret=YOUR_SECRET&id=PAGE_ID&type=page&slug=page-slug"
}
```

#### Test 2b: Invalid Secret
```bash
curl -i "http://localhost:3000/api/preview?secret=wrong&id=123&type=page&slug=test"
```

**Expected Response** (401):
```json
{
  "message": "Invalid secret",
  "error": "The provided secret does not match the configured preview secret.",
  "hint": "Verify that NEXTJS_PREVIEW_SECRET is set correctly in both WordPress and Next.js"
}
```

#### Test 2c: Missing Parameters
```bash
curl -i "http://localhost:3000/api/preview?secret=YOUR_SECRET&id=123"
```

**Expected Response** (400):
```json
{
  "message": "Missing required parameters",
  "error": "The following parameters are required but missing: type, slug",
  "missingParams": ["type", "slug"],
  "hint": "URL format: /api/preview?secret=YOUR_SECRET&id=PAGE_ID&type=page&slug=page-slug"
}
```

#### Test 2d: Invalid Post Type
```bash
curl -i "http://localhost:3000/api/preview?secret=YOUR_SECRET&id=123&type=invalid&slug=test"
```

**Expected Response** (400):
```json
{
  "message": "Invalid post type",
  "error": "Post type must be one of: page, post",
  "providedType": "invalid",
  "validTypes": ["page", "post"]
}
```

---

### Test 3: Preview Mode Activation

**Purpose**: Test the complete preview flow.

#### Option A: Direct URL Test

Replace `YOUR_SECRET` with your actual secret:

```
http://localhost:3000/api/preview?secret=YOUR_SECRET&id=1&type=page&slug=test-page
```

**Expected Behavior**:
1. Redirects to `/test-page`
2. Enhanced preview banner appears at top with:
   - Red gradient background
   - Warning icon with pulse animation
   - "Preview Mode" message
   - Page status badge (if available)
   - Last modified timestamp (if available)
   - "Exit Preview" button
3. Page content loads (draft content if available)

#### Option B: WordPress Admin Test

1. Log into WordPress admin
2. Create or edit a page (don't publish)
3. Click "Preview" button
4. Should redirect to Next.js with preview banner
5. Verify draft content displays

---

### Test 4: Enhanced Preview Banner

**Purpose**: Verify the improved preview banner design and functionality.

**Steps**:
1. Activate preview mode (see Test 3)
2. Verify banner appearance:
   - Fixed at top of page
   - Red gradient background
   - Smooth slide-down animation
   - Warning icon pulses
   - Status badge displays (if page has status)
   - Last modified date shows (if available)
3. Test "Exit Preview" button:
   - Click button
   - Should redirect and clear preview mode
   - Banner should disappear
4. Test responsive design:
   - Resize browser to mobile width
   - Banner should stack vertically
   - Button should be full width

---

### Test 5: Exit Preview Flow

**Purpose**: Verify preview mode can be exited properly.

**Steps**:
1. Enter preview mode
2. Click "Exit Preview" button in banner
3. Verify:
   - Preview banner disappears
   - Redirects to same page or home
   - Page shows published content (not draft)
   - Console shows exit log

**Alternative Test**:
```
http://localhost:3000/api/exit-preview
```

Should clear preview cookies and redirect to home.

---

## Console Logging

All preview operations now log to the console for debugging:

### Preview API Logs
```
[Preview API] Request received: { hasSecret: true, id: '123', type: 'page', slug: 'test', timestamp: '...' }
[Preview API] Enabling preview mode for: { id: '123', type: 'page', slug: 'test' }
[Preview API] Redirecting to: /test
```

### Exit Preview Logs
```
[Exit Preview API] Clearing preview mode { redirectTo: '/', timestamp: '...' }
[Exit Preview API] Redirecting to: /
```

### Error Logs
```
[Preview API] Error: Invalid secret provided
[Preview API] Error: Missing parameters: ['type', 'slug']
[Preview API] Error: Invalid post type: invalid
```

---

## Troubleshooting

### Issue: Preview banner not showing

**Solutions**:
1. Check browser console for errors
2. Verify cookies are being set (check DevTools → Application → Cookies)
3. Ensure `preview` prop is true in page component
4. Check that PreviewBanner component is imported correctly

### Issue: NotFoundContent not displaying

**Solutions**:
1. Verify page data is actually null (check console logs)
2. Check that NotFoundContent is imported in `[...pages].tsx`
3. Ensure CSS module is loading correctly

### Issue: "Invalid secret" error

**Solutions**:
1. Verify secret matches in both `.env.local` and WordPress
2. Check for extra spaces or quotes in environment variables
3. Restart Next.js dev server after changing `.env.local`
4. URL-encode special characters (e.g., `+` becomes `%2B`)

### Issue: Draft content not loading

**Solutions**:
1. Verify GraphQL query includes `asPreview: true`
2. Check post ID is correct
3. Test query directly in GraphiQL
4. Verify WordPress user has permission to view drafts

---

## Production Testing Checklist

Before deploying to production:

- [ ] Generate new production secret
- [ ] Set environment variables in production hosting
- [ ] Test preview flow on staging first
- [ ] Verify preview banner appears correctly
- [ ] Test exit preview functionality
- [ ] Check console logs are working
- [ ] Verify error messages are helpful
- [ ] Test on multiple devices/browsers
- [ ] Ensure NotFoundContent displays for missing pages

---

## Quick Reference

### Preview URL Format
```
/api/preview?secret=SECRET&id=PAGE_ID&type=TYPE&slug=SLUG
```

### Exit Preview URL
```
/api/exit-preview?redirect=/optional-path
```

### Environment Variables
- `NEXTJS_PREVIEW_SECRET` - Required in both Next.js and WordPress
- `NEXTJS_FRONTEND_URL` - Required in WordPress (defaults to localhost:3000)
