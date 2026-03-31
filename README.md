# OmniTask - Community Rotation & Rental Management Engine

A PWA-based Community Rotation & Rental Management Engine with **cloud sync** support.

## Features

- **Flexible Unit Model** - Add unlimited rental units
- **Dynamic Groups** - Organize units into sets
- **Task Configuration** - Daily/Weekly/Custom frequency, All Units/Group assignments
- **Smart Shift Algorithm** - Swap with debt tracking
- **Financial Ledger** - Track rent, EB bills, maintenance
- **Auto-Deduction** - Approved issues auto-deduct from rent
- **Cloud Sync (NEW!)** - Sync data across mobile + PC using Firebase

## Deployment to GitHub Pages

1. Upload these files to your GitHub repo:
   - `index.html`
   - `manifest.json`
   - `sw.js`

2. Enable GitHub Pages in repo Settings → Pages → Source: main/root

## Cloud Sync Setup (Firebase)

### Option 1: Use Demo Firebase (No Setup)
The app includes a demo Firebase config. It will work but you should replace it with your own.

### Option 2: Create Your Own Firebase Project (Recommended)

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" → Name it (e.g., "omnitask-sync")
3. Enable **Authentication**:
   - Go to Authentication → Sign-in method
   - Enable "Google" provider
4. Enable **Firestore Database**:
   - Go to Firestore Database → Create database
   - Start in "test mode" (for development)
5. Get your config:
   - Go to Project Settings (gear icon)
   - Scroll to "Your apps" → Click Web icon (</>)
   - Register app and copy the config
6. Update `index.html`:
   - Replace the `firebaseConfig` object with your config

```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abcdef"
};
```

### How Cloud Sync Works

1. **Sign in** with Google on any device (mobile/PC)
2. Data automatically **uploads to Firebase**
3. On another device, sign in with same Google account
4. Click **"Sync Now"** or it auto-loads on sign-in
5. All data syncs across devices in real-time

### Sync Status Indicators

- 🟢 **Connected** - Signed in and synced
- 🟡 **Syncing** - Currently syncing data
- 🔴 **Disconnected** - Not signed in (local only)

## Without Firebase (Offline Mode)

The app works 100% offline using IndexedDB. Cloud sync is optional.

- All data stored locally in browser
- Export/Import JSON for manual backup
- No internet required for core features

## File Structure

```
omnitask/
├── index.html      # Main application
├── manifest.json   # PWA manifest
├── sw.js          # Service worker
└── README.md      # Documentation
```

## Browser Support

- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers (iOS/Android)

## License

MIT - Free to use and modify

---

Built with ❤️ for community management
