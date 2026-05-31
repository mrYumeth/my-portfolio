# Yumeth's Personal Portfolio

A modern, responsive personal portfolio website built to showcase projects, skills, and professional experience. 

##  Live Demo

**Check out the live site here:** (https://www.yumeth.me)

This project is hosted using GitHub Pages and uses a custom domain.

## Tech Stack

*   **Frontend Framework:** [React](https://reactjs.org/)
*   **Build Tool:** [Vite](https://vitejs.dev/) - For lightning-fast HMR and optimized builds.
*   **Language:** JavaScript (ES6+) / JSX

## Features

*   **Fast Performance:** Bundled with Vite for a highly optimized and fast-loading web experience.
*   **Component-Driven:** Built utilizing modular React components, including a dedicated `ProjectCard` component for showcasing individual portfolio pieces.
*   **Custom Domain Integration:** Configured seamlessly with a `CNAME` file for personalized routing.

## Project Structure

```text
my-portfolio-main/
├── public/
│   ├── CNAME              # Custom domain configuration (www.yumeth.me)
│   ├── favicon.png        # Site favicon
│   └── vite.svg           # Vite logo
├── src/
│   ├── assets/            # Static assets (profile.png, react.svg)
│   ├── components/        # Reusable React components (ProjectCard.jsx)
│   ├── App.jsx            # Main application component
│   └── main.jsx           # React DOM entry point
├── index.html             # Main HTML template
├── package.json           # Project dependencies and scripts
├── eslint.config.js       # ESLint configuration for code quality
└── vite.config.js         # Vite configuration file
```

## Local Development

To run this project locally on your machine, follow these steps:

### Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/my-portfolio.git
    cd my-portfolio-main
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

## ⚙️ Building for Production

To create a production-ready build, run:

```bash
npm run build
```

This will generate a `dist` directory containing the minified and optimized production files.

## Deployment

This project is configured for deployment on GitHub Pages. The custom domain is managed via the `public/CNAME` file, ensuring the generated site correctly resolves to `www.yumeth.me`.
