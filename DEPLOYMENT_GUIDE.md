# Quick Deployment Guide
## Pro Expo ERP System

---

## Option 1: GitHub Pages (Recommended)

### Step 1: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `proexpo-erp`
3. Keep it **Private** (recommended)
4. **Don't** initialize with README
5. Click "Create repository"

### Step 2: Push Your Code
```powershell
# Navigate to your project
cd "C:\Users\manum\Dropbox\PE\z_TARIFAS\erp-system"

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/proexpo-erp.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to repository Settings
2. Click "Pages" in left sidebar
3. Source: Select "main" branch
4. Click "Save"
5. Your site will be at: `https://YOUR_USERNAME.github.io/proexpo-erp/`

---

## Option 2: Netlify Drop (Fastest - 30 seconds!)

### Steps:
1. Go to https://app.netlify.com/drop
2. Drag and drop your `erp-system` folder
3. Done! You'll get a URL like: `https://random-name-12345.netlify.app`

### To Update:
- Just drag and drop the folder again to update

---

## Option 3: Firebase Hosting

### Step 1: Install Firebase Tools
```powershell
npm install -g firebase-tools
```

### Step 2: Login
```powershell
firebase login
```

### Step 3: Initialize
```powershell
cd "C:\Users\manum\Dropbox\PE\z_TARIFAS\erp-system"
firebase init
```
- Select: **Hosting**
- Use existing project or create new
- Public directory: `.` (current directory)
- Single-page app: **No**
- Overwrite index.html: **NO**

### Step 4: Deploy
```powershell
firebase deploy
```

Your site will be at: `https://PROJECT-ID.web.app`

---

## 🔐 Firebase Configuration (Required for Login & Database)

### Step 1: Create Firebase Project
1. Go to https://console.firebase.google.com/
2. Click "Add project"
3. Name: "proexpo-erp"
4. Follow setup wizard

### Step 2: Enable Authentication
1. In Firebase Console → Build → Authentication
2. Click "Get Started"
3. Enable **Google** sign-in
4. Add authorized domain (your deployment URL)

### Step 3: Enable Firestore Database
1. Build → Firestore Database
2. Click "Create Database"
3. Start in **test mode** (or production with rules)
4. Choose location: `eur3` (Europe)

### Step 4: Get Configuration
1. Project Settings (gear icon)
2. Scroll to "Your apps"
3. Click web icon `</>`
4. Register app: "ProExpoWeb"
5. **Copy the firebaseConfig object**

### Step 5: Update firebase-config.js
```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

---

## 📝 Pre-Deployment Checklist

- [ ] All code changes committed
- [ ] Firebase config updated (if using Firebase)
- [ ] Test locally first
- [ ] Backup current data
- [ ] Update CHANGELOG.md with version
- [ ] Test on mobile devices after deployment

---

## 🚀 Recommended Deployment Strategy

**For Quick Testing:**
→ Use **Netlify Drop** (instant, no setup)

**For Production:**
→ Use **GitHub Pages** + **Firebase** (authentication, database, file storage)

---

## 🔄 How to Update After Deployment

### GitHub Pages:
```powershell
git add .
git commit -m "Update: description of changes"
git push origin main
```
*Updates automatically in 1-2 minutes*

### Netlify:
- Drag and drop folder again
*Updates instantly*

### Firebase:
```powershell
firebase deploy
```
*Updates in ~30 seconds*

---

## 🆘 Troubleshooting

**Issue: "git: command not found"**
- Install Git: https://git-scm.com/download/win

**Issue: "firebase: command not found"**
- Install Node.js first: https://nodejs.org/
- Then run: `npm install -g firebase-tools`

**Issue: Login not working**
- Check Firebase config is correct
- Verify authorized domains in Firebase Console
- Check browser console for errors

**Issue: White screen after deployment**
- Check browser console for errors
- Verify all file paths are correct
- Test locally first with: `python -m http.server 8000`

---

*Last Updated: January 20, 2026*
