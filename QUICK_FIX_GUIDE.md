# Quick GitHub Push Instructions

## Option 1: If you already have a GitHub repository

Run these commands:
```bash
cd C:/Users/manum/.gemini/antigravity/scratch/proexpo-erp
git remote add origin https://github.com/YOUR_USERNAME/proexpo-erp.git
git branch -M main
git push -u origin main
```

## Option 2: Create a new repository first

1. Go to: https://github.com/new
2. Repository name: `proexpo-erp`
3. Keep it private or public (your choice)
4. **DO NOT** initialize with README, .gitignore, or license
5. Click "Create repository"

Then run:
```bash
cd C:/Users/manum/.gemini/antigravity/scratch/proexpo-erp
git remote add origin https://github.com/YOUR_USERNAME/proexpo-erp.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## What's Already Done ✅

- ✅ Git repository initialized
- ✅ All files committed
- ✅ Firebase OAuth fix documentation added

## What You Need to Do Right Now 🔴

### URGENT: Fix Google OAuth (this can't be done via code)

1. Go to: https://console.firebase.google.com/project/manu-erp/authentication/providers
2. Click on "Settings" tab
3. Click on "Authorized domains"
4. Click "Add domain"
5. Type: `proexpo-erp.netlify.app`
6. Click "Add"

**This will immediately fix your Google login issue!** No code changes or redeployment needed.

Then you can push to GitHub using the commands above.
