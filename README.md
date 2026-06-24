# 📱 Periyar Mobiles — React Website

A full React.js website for Periyar Mobiles service center.

## 📁 Project Structure

```
periyar-mobiles/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js / Navbar.css
│   │   └── Footer.js / Footer.css
│   ├── pages/
│   │   ├── Home.js / Home.css
│   │   ├── Services.js / Services.css
│   │   ├── Booking.js / Booking.css
│   │   └── Contact.js / Contact.css
│   ├── App.js / App.css
│   ├── index.js
│   └── index.css
└── package.json
```

## 🚀 How to Run

### Step 1: Install Node.js
Download from https://nodejs.org (LTS version)

### Step 2: Install dependencies
```bash
cd periyar-mobiles
npm install
```

### Step 3: Start the development server
```bash
npm start
```

Opens at http://localhost:3000

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, stats, services overview, brands, testimonials |
| Services | `/services` | All services with pricing and filter tabs |
| Booking | `/booking` | Appointment form with validation |
| Contact | `/contact` | Map, hours, contact form, FAQ |

## ✏️ What You Need to Update

Search for these placeholders and replace with real values:

1. **Phone number** → Replace `XXXXXXXXXX` / `XXXXX XXXXX` with real number
2. **Address** → Update `Main Road, Erode` with exact address
3. **Email** → Replace `info@periyarmobiles.com`
4. **WhatsApp link** → Update `wa.me/91XXXXXXXXXX`
5. **Google Maps link** → Replace with actual Google Maps embed link
6. **Year started** → Update "Trusted Since 2015" in Home.js

## 🌐 Deploy for Free (GitHub Pages)

```bash
npm install --save-dev gh-pages
```

Add to package.json:
```json
"homepage": "https://yourusername.github.io/periyar-mobiles",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Then run:
```bash
npm run deploy
```

## 🛠️ Built With

- React 18
- React Router DOM v6
- Pure CSS (no external UI library)
- Inter font (Google Fonts)
