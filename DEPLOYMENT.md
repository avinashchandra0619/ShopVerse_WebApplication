# 🚀 ShopVerse Deployment Guide

This guide covers 3 easy, free ways to deploy your **ShopVerse** web application live on the web:

1. **[Vercel](#-method-1-deploying-on-vercel-recommended)** *(Easiest & Fastest)*
2. **[Netlify](#-method-2-deploying-on-netlify)** *(Drag & Drop or GitHub Continuous Deployment)*
3. **[GitHub Pages](#-method-3-deploying-on-github-pages)** *(Free GitHub hosting)*

---

## ⚡ Method 1: Deploying on Vercel *(Recommended)*

Vercel provides automatic HTTPS, free hosting, and continuous deployment whenever you push code to GitHub.

### Steps:
1. Make sure your latest code is pushed to your GitHub repository:
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push origin master
   ```
2. Go to **[vercel.com](https://vercel.com)** and sign in with your **GitHub account**.
3. On the Vercel Dashboard, click **Add New** → **Project**.
4. Import your GitHub repository (`Shopping-Website` or `Ecommerce-Site-master`).
5. Vercel automatically detects **Create React App**. Leave default settings:
   - **Framework Preset**: Create React App
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
6. Click **Deploy**.
7. In ~60 seconds, your site will be live with a URL like `https://shopverse-xyz.vercel.app`! 🎉

---

## 🌐 Method 2: Deploying on Netlify

Netlify allows you to deploy either by connecting your GitHub repo or by dropping the `build` folder.

### Option A: Connect GitHub (Automatic Updates)
1. Go to **[netlify.com](https://netlify.com)** and sign in with **GitHub**.
2. Click **Add new site** → **Import an existing project**.
3. Choose **GitHub** and select your repository.
4. Set the build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
5. Click **Deploy site**.

### Option B: Drag & Drop Build Folder (Instant)
1. In your local terminal, build your project:
   ```bash
   npm run build
   ```
2. Go to **[app.netlify.com/drop](https://app.netlify.com/drop)**.
3. Drag and drop the `build` folder from `d:\PROJECT\Ecommerce-Site-master\build` directly onto the webpage.
4. Netlify will deploy your site instantly!

---

## 🐙 Method 3: Deploying on GitHub Pages

You can host your React app for free directly on your GitHub repository.

### Steps:

1. **Install `gh-pages` package**:
   ```bash
   npm install gh-pages --save-dev
   ```

2. **Update `package.json`**:
   Open `package.json` and add a `"homepage"` property near the top (replace `<username>` with your GitHub username):
   ```json
   "homepage": "https://<username>.github.io/Shopping-Website",
   ```

3. **Add Deploy Scripts in `package.json`**:
   Inside the `"scripts"` object in `package.json`, add:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build",
     ...
   }
   ```

4. **Deploy to GitHub Pages**:
   Run this command in your terminal:
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages in Repo Settings**:
   - Go to your GitHub Repository → **Settings** → **Pages**.
   - Under **Source**, select the `gh-pages` branch and click **Save**.
   - Your site will be live at `https://<username>.github.io/Shopping-Website` in a few minutes!

---

## 🛠️ Troubleshooting Common Deployment Issues

| Issue | Cause | Solution |
| :--- | :--- | :--- |
| **`ERR_OSSL_EVP_UNSUPPORTED` during build** | Node 17+ OpenSSL compatibility | The `package.json` start/build script already includes `NODE_OPTIONS=--openssl-legacy-provider`. On deployment platforms (Vercel/Netlify), set environment variable `NODE_OPTIONS = --openssl-legacy-provider` in Project Settings if prompted. |
| **404 Page on Refresh** | Client-side routing in React Router | On Netlify, create a file named `public/_redirects` with `/* /index.html 200`. On Vercel, single-page routing is handled automatically. |

---

Happy Deploying! 🚀
