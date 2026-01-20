# 🚀 How to Fix Google Login - Complete Guide

## The Problem
You're seeing this error on your Netlify site:
```
Firebase: This domain is not authorized for OAuth operations for your Firebase project.
```

## The Solution (Takes 1 Minute) ✅

### Step 1: Open Firebase Console
Click this link to go directly to the right page:
👉 **https://console.firebase.google.com/project/manu-erp/authentication/settings**

(You should already be logged in as `manumoreno83@gmail.com`)

---

### Step 2: Find "Authorized domains"
On the page, you'll see a sidebar on the left. Look for:
- **"Configuración"** (Settings) tab - should already be selected
- Under **"Dominios"**, click on **"Dominios autorizados"** (Authorized domains)

---

### Step 3: Click the "Add domain" Button
On the right side of the page, you'll see a blue button that says:
**"Agregar un dominio"** (Add domain)

Click it!

---

### Step 4: Enter Your Netlify Domain
A dialog box will appear asking for the domain. Type exactly:

```
proexpo-erp.netlify.app
```

Then click **"Add"** or **"Agregar"**

---

### Step 5: Done! 🎉

That's it! Your domain is now authorized. 

**The change takes effect immediately** - you don't need to:
- ❌ Redeploy your site
- ❌ Change any code
- ❌ Wait for anything to propagate

Just refresh your Netlify site and try to log in with Google again. It should work perfectly now!

---

## What You'll See

### Current Authorized Domains:
- ✅ `localhost` (for local development)
- ✅ `manu-erp.firebaseapp.com` (Firebase hosting)
- ✅ `manu-erp.web.app` (Firebase hosting)
- ✅ `stirring-pika-794eba.netlify.app` (old Netlify domain)

### After Adding:
- ✅ `localhost`
- ✅ `manu-erp.firebaseapp.com`
- ✅ `manu-erp.web.app`
- ✅ `stirring-pika-794eba.netlify.app`
- ✅ **`proexpo-erp.netlify.app`** ⭐ **NEW!**

---

## Quick Links

- 🔗 **Firebase Console (Direct)**: https://console.firebase.google.com/project/manu-erp/authentication/settings
- 🔗 **Your Netlify App**: https://proexpo-erp.netlify.app
- 🔗 **GitHub Repository**: https://github.com/manumoreno83-commits/proexpo-erp

---

## Troubleshooting

### "I don't see the Add domain button"
Make sure you're on the right tab:
1. Click **"Authentication"** in the left sidebar
2. Click **"Settings"** in the top navigation
3. In the left sidebar under "Dominios", click **"Dominios autorizados"**

### "The error still appears after adding the domain"
1. Hard refresh your browser: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
2. Clear your browser cache
3. Try in an incognito/private window
4. Verify the domain was added correctly (no typos)

### "Can I add wildcards?"
Yes! If you want to allow all Netlify preview URLs, you can add:
```
*.netlify.app
```
But for security, it's better to add specific domains only.

---

**Last Updated**: 2026-01-20
**Status**: ✅ Ready to fix!
