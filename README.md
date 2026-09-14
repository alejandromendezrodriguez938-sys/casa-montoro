# 🛍️ E-commerce Shop

A responsive front-end **e-commerce website for a clothing store**, built from scratch with **HTML5, CSS3, and vanilla JavaScript**. It features a product catalog, a hero section, promotional banners, and a newsletter — all wrapped in a clean, modern, mobile-friendly layout.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/status-in%20development-yellow)

---

## ✨ Features

- **Responsive layout** — adapts across desktop, tablet, and mobile
- **Sticky navigation header** with logo and menu
- **Hero section** with a promotional offer and call-to-action
- **Feature highlights** — free shipping, easy returns, call center, gift bag, secure payment
- **Two product sections** — *Featured Products* and *New Arrivals*
- **Product cards** with brand, title, star rating, price, and an add-to-cart button
- **Promotional banners** for seasonal deals and collections
- **Newsletter signup** section
- **Footer** with contact info, quick links, and app-store badges

---

## 🧱 Tech stack

| Layer          | Technology                                   |
| -------------- | -------------------------------------------- |
| Markup         | HTML5                                        |
| Styling        | CSS3 (Flexbox & Grid, transitions)           |
| Interactivity  | Vanilla JavaScript (ES6)                     |
| Icons          | Font Awesome 6.5                             |
| Fonts          | Google Fonts — *League Spartan*              |
| Dev environment| VS Code + Live Server                        |

---

## 📁 Project structure

```
ecommerce-shop/
├── html/
│   └── index.html          # Main page markup
├── css/
│   └── style.css           # All styles
├── js/
│   └── index.js            # Interactivity (in progress)
└── assets/
    ├── clothes/            # Product images
    ├── logo/               # Logo & store badges
    ├── icons/              # Feature icons
    ├── banner/             # Banner backgrounds
    └── images/             # Hero image
```

> ℹ️ Adjust the tree above if your folders are named or nested differently.

---

## 🚀 Getting started

You only need a browser to view it, but the smoothest way is with **VS Code + Live Server**.

**Prerequisites**
- [Visual Studio Code](https://code.visualstudio.com/)
- The **Live Server** extension (by Ritwick Dey)

**Run locally**

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/ecommerce-shop.git
   ```
2. Open the folder in VS Code.
3. Right-click `index.html` → **Open with Live Server**.
4. The site opens at `http://127.0.0.1:5500/`.

---

## 🌐 Deployment (GitHub Pages)

The site can be hosted for free on **GitHub Pages** (Settings → Pages → deploy from your `main` branch).

> ⚠️ **Heads up — paths:** the project currently uses absolute paths (e.g. `/css/style.css`, `/assets/clothes/...`). On GitHub Pages a project site is served from a subfolder (`username.github.io/repo-name/`), so a leading `/` will point to the wrong place and break images and styles. Before deploying, switch to **relative paths** (e.g. `css/style.css`, `assets/clothes/...`, without the leading slash).

---

## 🧭 Roadmap

- [ ] Mobile menu toggle (open/close the navbar on small screens)
- [ ] Working **add-to-cart** functionality
- [ ] Shop / Blog / About / Contact pages
- [ ] Convert absolute paths → relative paths for GitHub Pages
- [ ] Newsletter form validation

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
