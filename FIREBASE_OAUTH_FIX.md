# Firebase OAuth Domain Authorization Fix

## Problem
When deploying to Netlify, you may encounter this error:
```
Firebase: This domain is not authorized for OAuth operations for your Firebase project.
Edit the list of authorized domains from the Firebase console.
(auth/unauthorized-domain)
```

## Solution

### 1. Add Netlify Domain to Firebase Authorized Domains

1. **Go to Firebase Console**: https://console.firebase.google.com/
2. **Select your project**: `manu-erp`
3. **Navigate to**: Authentication → Settings → Authorized domains
4. **Click**: "Add domain"
5. **Enter**: `proexpo-erp.netlify.app`
6. **Click**: "Add"

### 2. Verify All Required Domains Are Listed

Make sure these domains are authorized:
- ✅ `localhost` (for local development)
- ✅ `manu-erp.firebaseapp.com` (Firebase hosting)
- ✅ `proexpo-erp.netlify.app` (Netlify deployment)
- ✅ Any custom domains you're using

### 3. Wait and Test

- Changes take effect immediately (no need to redeploy)
- Refresh your Netlify app and try logging in again
- If it still doesn't work, clear your browser cache

## Important Notes

- **This setting is ONLY in Firebase Console** - it cannot be changed via code
- Each deployment domain must be explicitly authorized
- Subdomains (like deploy-preview--proexpo-erp.netlify.app) also need to be added if you want OAuth on preview deployments
- You can use wildcards for Netlify preview URLs: `*.netlify.app` (but be careful with security implications)

## Current Firebase Configuration

Project ID: `manu-erp`
Auth Domain: `manu-erp.firebaseapp.com`
Current Deployment: `proexpo-erp.netlify.app`

## Quick Reference Links

- Firebase Console: https://console.firebase.google.com/project/manu-erp/authentication/providers
- Netlify Dashboard: https://app.netlify.com/sites/proexpo-erp

---

**Last Updated**: 2026-01-20
