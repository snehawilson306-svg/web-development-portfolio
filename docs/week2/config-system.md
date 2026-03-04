# Configuration-Driven Website System

## 📌 Project Overview

This project implements a configuration-driven website system using HTML, CSS, and JavaScript.

The website dynamically reads settings from external JSON configuration files and applies:

- Layout structure
- Navigation menu
- Color themes
- Footer content

This allows the same HTML template to generate multiple different website styles without modifying the core structure.

---

## 🚀 Features

- Dynamic configuration loading using `fetch()`
- Multiple layout support (single-column and two-column)
- Sidebar position control (left or right)
- Dynamic navigation generation
- Theme color customization
- Footer content controlled by configuration file
- URL-based configuration switching

---

## 📂 Project Structure

project/
├── config/
│ ├── site-config.json
│ ├── site-config-blog.json
│ ├── site-config-portfolio.json
│ └── site-config-business.json
│
├── frontend/
│ ├── index.html
│ ├── styles/main.css
│ └── scripts/config-loader.js
│
└── docs/
└── week2/
└── config-system.md


---

## ⚙ How It Works

1. `config-loader.js` loads a JSON configuration file.
2. The JSON file defines:
   - Site name
   - Layout type
   - Sidebar position
   - Navigation items
   - Color theme
   - Footer content
3. JavaScript dynamically updates the DOM based on these settings.

---

## 🔄 Switching Configurations

You can load different configurations using URL parameters:

Default:
