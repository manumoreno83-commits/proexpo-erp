# Deployment & Setup Guide

## 1. Firebase Setup (Required for Login & Database)
To enable Google Login and Database (Firestore), follow these steps:

1. Go to [Firebase Console](https://console.firebase.google.com/) and create a new project (e.g., "proexpo-erp").
2. **Enable Authentication**:
   - Go to **Build > Authentication**.
   - Click "Get Started".
   - Select **Google** and enable it.
3. **Enable Database**:
   - Go to **Build > Firestore Database**.
   - Click "Create Database".
   - Choose a location (e.g., eur3 for Europe).
   - **Important**: Start in **test mode** (or production mode, but you might need to update rules).
4. **Get Configuration**:
   - Click the "Gear" icon (Project Settings).
   - Scroll down to "Your apps" and click the web icon (`</>`).
   - Register the app (e.g., "ProExpoWeb").
   - **Copy the `firebaseConfig` object**.

## 2. Update Code
Open the file `firebase-config.js` in your `erp-system` folder and paste your config:

```javascript
const firebaseConfig = {
    apiKey: "YOUR_COPIED_KEY",
    authDomain: "...",
    projectId: "...",
    // ...
};
```

## 3. Deploy Online via Firebase Hosting

You can deploy this app for free using Firebase Hosting.

1. **Install Firebase Tools** (requires Node.js):
   ```bash
   npm install -g firebase-tools
   ```

2. **Login**:
   ```bash
   firebase login
   ```

3. **Initialize Project**:
   Run this command inside your `erp-system` folder:
   ```bash
   firebase init
   ```
   - Select **Hosting**.
   - Select **Use an existing project** (choose the one you created).
   - Public directory: `.` (current directory) OR if asked, just press Enter to use default then changing it. **Better**: Just answer `.` for public directory.
   - Configure as single-page app? **No** (since index.html is the main entry but we aren't using pushstate routing, actually **No** is safer unless using URL routing).
   - Overwrite index.html? **NO** (Crucial!).

4. **Deploy**:
   ```bash
   firebase deploy
   ```

You will get a URL like `https://proexpo-erp.web.app`. Your app is now online with Google Login and Database!

## Alternative: Netlify Drop
If you don't want to use the command line:

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop the `erp-system` folder.
3. It will be online instantly, but for "Google Login" to work, you must add the Netlify URL to your **Firebase Authentication > Settings > Authorized Domains** list.
