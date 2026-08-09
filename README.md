# Ceylon Estate Max — Real Estate Management Dashboard

A modern, responsive Real Estate Management Dashboard built with React.js. Inspired by the [MockFlow Real Estate Management Dashboard](https://mockflow.com/templates/wireframe/real-estate-management-dashboard) wireframe and designed for property operations workflows from 2026 onward.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Modules](#modules)
- [License](#license)

---

## Features

- **Dashboard overview** — KPIs, featured property, weekly sales chart, market mix, and agent activity
- **Property portfolio** — Browse and filter listings by sale, rent, or pending status
- **Deal pipeline** — Track stages from touring through closing with probability indicators
- **Reports & marketing** — Revenue trends, conversion funnel, and campaign performance
- **Operations tools** — Calendar, messages inbox, and document management views
- **Responsive layout** — Sidebar navigation with mobile-friendly menu and search header

---

## Tech Stack

| Category     | Technology                          |
| ------------ | ----------------------------------- |
| Framework    | [React](https://react.dev/) 19      |
| Build tool   | [Vite](https://vite.dev/) 8         |
| Charts       | [Recharts](https://recharts.org/)   |
| Styling      | Custom CSS (design tokens)          |
| Icons        | Custom SVG icon set                 |
| Linting      | [Oxlint](https://oxc.rs/docs/guide/usage/linter) |

---

## Prerequisites

- [Node.js](https://nodejs.org/) **v18** or later
- npm **v9** or later (bundled with Node.js)

---

## Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd "Real Estate Management Dashboard"
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open the app**

   Visit the URL shown in the terminal (typically [http://localhost:5173](http://localhost:5173)).

---

## Available Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start the Vite development server        |
| `npm run build`   | Create an optimized production build     |
| `npm run preview` | Preview the production build locally     |
| `npm run lint`    | Run Oxlint across the project            |

---

## Project Structure

```text
.
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   ├── dashboard/      # Dashboard widgets (KPIs, charts, tables)
│   │   ├── layout/         # Sidebar and header shell
│   │   └── Icons.jsx       # Shared SVG icons
│   ├── data/
│   │   └── mockData.js     # Sample portfolio and activity data
│   ├── pages/              # Route-level views
│   ├── App.jsx             # App shell and page navigation
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles and design tokens
├── index.html
├── package.json
└── README.md
```

---

## Modules

| Module       | Description                                              |
| ------------ | -------------------------------------------------------- |
| Dashboard    | Performance overview with KPIs, charts, and activity     |
| Properties   | Filterable property cards across markets                 |
| Listings     | Listing health, views, inquiries, and publish status     |
| Deals        | Pipeline stages and close probability                    |
| Reports      | Revenue trend and conversion analytics                   |
| Marketing    | Campaign spend, leads, and channel status                |
| Calendar     | Tours, open houses, and closing milestones               |
| Messages     | Client and agent conversation inbox                      |
| Documents    | Agreements, inspections, and marketing assets            |

Sample data is defined in `src/data/mockData.js` and can be replaced with a real API when you connect a backend.

---

## License

This project is provided for demonstration and development use. Add a license file (for example MIT) if you plan to distribute or open-source it.