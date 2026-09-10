# 🛍️ ShopVerse — Modern E-Commerce Platform

![React](https://img.shields.io/badge/React-16.8+-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-Vanilla-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![FontAwesome](https://img.shields.io/badge/FontAwesome-v6.0-528DD7?style=for-the-badge&logo=fontawesome&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)

**ShopVerse** is a modern, responsive, full-featured e-commerce web application built with React and Vanilla CSS. It offers an end-to-end shopping experience—from interactive user authentication and product browsing to dynamic cart management and a complete multi-step checkout workflow with order confirmation.

---

## ✨ Features

- **🔐 User Authentication System**: Seamless Login & Registration modal dialogs with validation error feedback, user session badge, and header profile controls.
- **📱 Responsive Product Catalog**: Grid display of curated tech products featuring custom icons, detailed descriptions, live pricing, and instant *"Add to Cart"* capabilities.
- **🛒 Dynamic Cart Dropdown**: Header cart icon displaying real-time item count badges, quick-view dropdown menu, live price aggregation, item removal, and one-click checkout trigger.
- **💳 Multi-Step Shipping & Checkout**: Comprehensive shipping details modal (Full Name, Street Address, City, Postal Code, Country) alongside payment method selection (Credit Card, PayPal, Apple Pay, Google Pay).
- **🎉 Order Confirmation Dialog**: Generates an order summary card complete with a unique order tracking number (`#SV-XXXX`), shipping details, and total amount.
- **🔔 Toast Notifications**: Interactive popup toast notifications confirming user actions (e.g., item added, logged in/out, order placed).
- **🎨 Glassmorphic & Modern UI**: Built with custom CSS design tokens, smooth keyframe transitions, backdrop blur filters, and mobile-responsive layouts.
- **⚡ Dual Execution Modes**: Runs both as a full **React Application** and as a zero-dependency **Standalone Single-File Webpage** (`index.html`).

---

## 🛠️ Technology Stack

| Technology | Purpose |
| :--- | :--- |
| **React 16.8+** | Frontend UI Framework & Component Architecture |
| **React Context API** | Centralized Global State Management (Cart, User, Modals, Toasts) |
| **React Router v5** | Client-side Application Routing |
| **Vanilla CSS3** | Custom Design System, Animations, and Layout Utilities |
| **FontAwesome 6** | Modern Iconography |
| **HTML5** | Semantic Document Markup |

---

## 📁 Project Structure

```
Ecommerce-Site-master/
├── index.html               # Standalone single-file ShopVerse web app
├── public/
│   ├── index.html           # React HTML template entry
│   ├── favicon.ico          # Application favicon
│   └── manifest.json        # Web app manifest
├── src/
│   ├── components/
│   │   ├── Navbar.js        # ShopVerse header with auth & cart dropdown
│   │   ├── ProductList.js   # Auth welcome screen & product grid manager
│   │   ├── Product.js       # Individual product card component
│   │   ├── Modal.js         # Login, Register, Checkout & Order Confirm modals
│   │   ├── Toast.js         # Floating alert notification toast
│   │   ├── Title.js         # Section header utility
│   │   ├── Details.js       # Product details view
│   │   └── Cart/            # Legacy cart sub-components
│   ├── App.js               # Main application container & router
│   ├── App.css              # ShopVerse core design system & styles
│   ├── index.css            # Global resets & typography
│   ├── context.js           # ProductProvider context & global state logic
│   ├── data.js              # Product catalog dataset
│   └── index.js             # React DOM root entry point
├── package.json             # NPM dependencies & execution scripts
└── README.md                # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** (v14 or higher) and **npm** installed on your machine.

### 1. Installation

Clone the repository and install the project dependencies:

```bash
git clone https://github.com/avinashchandra0619/Shopping-Website.git
cd Shopping-Website
npm install
```

### 2. Running the Application

#### Option A: React Development Server *(Recommended)*

Run the development server:

```bash
npm start
```
*or in Windows PowerShell:*
```powershell
$env:NODE_OPTIONS="--openssl-legacy-provider"; npm.cmd start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

#### Option B: Standalone Webpage *(Zero Dependencies)*

Simply open `index.html` located at the root of the project directly in any modern browser:

```powershell
# PowerShell (Windows)
Start-Process index.html
```

---

## 📦 Production Build

To compile the production bundle for deployment:

```bash
npm run build
```

This creates an optimized, minified production build in the `build/` directory ready for deployment to Netlify, Vercel, or GitHub Pages.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE)."# ShopVerse_WebApplication" 
