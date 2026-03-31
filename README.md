# OmniTask - Community Rotation & Rental Management Engine

A highly configurable, PWA-based Community Rotation & Rental Management Engine that works fully offline and can be hosted on GitHub Pages.

## Features

### Core Features
- **Flexible Unit Model** - Add unlimited rental units with occupant info
- **Dynamic Groups** - Create sets/groups to organize units
- **Task Configuration Engine** - JSON-based task definitions with:
  - Assignment types: All Units, Specific Group, Independent Only
  - Exclusions - exclude specific units from tasks
  - Frequency: Daily, Weekly, or Custom (every X days)
  - Rotation Order: Ascending, Descending, Random

### Smart Shift Algorithm
- When a member is unavailable, they can swap with another
- **Debt-Based Rotation**: The system tracks swaps and schedules debt repayment
- Fair rotation maintained through automatic slot swapping

### Financial & Maintenance
- **Ledger System**: Track Rent, EB Bills, Maintenance
- **Issue Reporting**: Report maintenance issues with receipts
- **Auto-Deduction**: Approved issue costs auto-deduct from unit's ledger
- **File Upload**: Support for bill/receipt photos and PDFs

### Admin Dashboard
- Unit Manager
- Group Builder
- Task Logic Designer (with JSON view)
- Cycle Preview (next 10 rotations)
- Debt Tracking
- Data Export/Import

## PWA Features
- Works fully offline
- Installable on mobile/desktop
- IndexedDB for local storage
- Export/Import data as JSON

## Deployment to GitHub Pages

### Method 1: Using GitHub Web Interface

1. **Create a new repository on GitHub**
   - Go to https://github.com/new
   - Name your repository (e.g., `omnitask`)
   - Make it Public
   - Click "Create repository"

2. **Upload files**
   - Click "uploading an existing file"
   - Drag and drop these files:
     - `index.html`
     - `manifest.json`
     - `sw.js`
   - Click "Commit changes"

3. **Enable GitHub Pages**
   - Go to repository Settings > Pages
   - Under "Source", select "Deploy from a branch"
   - Select "main" branch and "/ (root)" folder
   - Click "Save"

4. **Access your app**
   - Your app will be live at: `https://yourusername.github.io/omnitask/`

### Method 2: Using Git Commands

```bash
# Navigate to project folder
cd OmniTask

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - OmniTask"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/yourusername/omnitask.git

# Push to GitHub
git push -u origin main

# Then enable GitHub Pages in repo Settings
```

## How to Use

### 1. Add Units
- Go to **Units** tab
- Tap **+** to add a unit
- Enter unit name and occupant details

### 2. Create Groups (Optional)
- Go to **Groups** tab
- Tap **+** to create a group
- Select units to add to the group

### 3. Create Tasks
- Go to **Tasks** tab (or Admin > Tasks)
- Tap **+** to create a task
- Configure:
  - **Frequency**: Daily, Weekly, or Custom days
  - **Assignment**: All Units, Specific Group, or Independent
  - **Exclusions**: Optionally exclude units
  - **Rotation Order**: How units are ordered in rotation

### 4. View Schedule
- Go to **Schedule** tab
- See all upcoming task assignments
- Filter by task or month

### 5. Smart Swap
- When a task is assigned:
  - Tap **Done** to mark complete
  - Tap **Swap** to request a substitute
- The system will:
  - Record the swap as a debt
  - Schedule automatic payback

### 6. Financial Ledger
- Track rent payments, EB bills
- Report maintenance issues
- Auto-deductions when issues are approved

## Data Storage

All data is stored locally in your browser's IndexedDB:
- Works offline
- No server required
- Export/Import JSON for backup

## Browser Support

- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers (iOS Safari, Chrome Mobile)

## File Structure

```
omnitask/
├── index.html      # Main application (all-in-one)
├── manifest.json   # PWA manifest
├── sw.js          # Service worker for offline
└── README.md      # This file
```

## License

MIT License - Free to use and modify

---

Built with ❤️ for community management
