const firebaseConfig = {
  apiKey: "AIzaSyBEBeQETBXujDWhtRmMCTTN6SBW4n2Jh28",
  authDomain: "manu-erp.firebaseapp.com",
  projectId: "manu-erp",
  storageBucket: "manu-erp.firebasestorage.app",
  messagingSenderId: "922581843530",
  appId: "1:922581843530:web:ab683ead58eb2c6cc4b0b3"
};


let db, auth, provider;

// Safety Check: Use Mock if keys are missing
if (firebaseConfig.apiKey === "YOUR_API_KEY") {
    console.warn("⚠️ FIREBASE NOT CONFIGURED: Running in Offline Demo Mode.");
    window.isDemoMode = true;

    // MOCK FIREBASE IMPLEMENTATION (Local Storage)
    const mockUser = {
        uid: 'demo-user-123',
        displayName: 'Demo User',
        email: 'demo@proexpo.com',
        photoURL: null
    };

    auth = {
        onAuthStateChanged: (cb) => {
            // Check session
            const session = localStorage.getItem('pe_auth_session');
            if (session) cb(mockUser);
            else cb(null);
            return () => { }; // unsubscribe
        },
        signInWithPopup: async () => {
            localStorage.setItem('pe_auth_session', 'true');
            window.location.reload();
            return { user: mockUser };
        },
        signOut: async () => {
            localStorage.removeItem('pe_auth_session');
            return true;
        },
        GoogleAuthProvider: class { }
    };

    const mockDoc = (path) => ({
        get: async () => {
            const data = localStorage.getItem('pe_firestore_' + path);
            return {
                exists: !!data,
                data: () => data ? JSON.parse(data) : {}
            };
        },
        set: async (data, opts) => {
            let finalData = data;
            if (opts && opts.merge) {
                const existing = localStorage.getItem('pe_firestore_' + path);
                const prev = existing ? JSON.parse(existing) : {};
                finalData = { ...prev, ...data };
            }
            localStorage.setItem('pe_firestore_' + path, JSON.stringify(finalData));
        }
    });

    db = {
        collection: (colName) => ({
            doc: (docId) => mockDoc(`${colName}/${docId}`)
        })
    };

    // Polyfill global firebase object for app.js
    window.firebase = {
        auth: () => auth,
        firestore: () => db,
        auth: { GoogleAuthProvider: class { } }
    };
    // Fix for app.js calling new firebase.auth.GoogleAuthProvider()
    window.firebase.auth.GoogleAuthProvider = class { };
    // Fix for app.js calling firebase.auth().signInWithPopup
    window.firebase.auth = () => auth;
    window.firebase.firestore = () => db;

} else {
    // REAL FIREBASE INITIALIZATION
    try {
        firebase.initializeApp(firebaseConfig);
        db = firebase.firestore();
        auth = firebase.auth();
        provider = new firebase.auth.GoogleAuthProvider();
    } catch (e) {
        console.error("Firebase Init Error:", e);
        alert("Firebase Configuration Error. Check console.");
    }
}
