# Personal Portfolio Website

This is a modern, fully-responsive personal portfolio website built with Next.js, React, Tailwind CSS, and Shadcn UI. It features a sleek, single-page design with smooth scrolling, animated sections, and a functional contact form. It's designed to be easily customizable to showcase your skills, projects, and experience as a software engineer or developer.

![Portfolio Screenshot](./public/jinxuanprofile.jpg)  


## Features

-   **Modern Tech Stack**: Built with Next.js 14 (App Router), React, and TypeScript.
-   **Responsive Design**: Looks great on all devices, from mobile phones to desktops.
-   **Styled with Tailwind CSS**: A utility-first CSS framework for rapid UI development.
-   **Interactive UI**: Animations powered by Framer Motion and a 3D skills chart using Three.js.
-   **Reusable Components**: A clean component structure using Shadcn UI.
-   **Dark/Light Mode**: Theme switching support with `next-themes`.
-   **Functional Contact Form**: Includes a working contact form with toast notifications.
-   **Easy to Customize**: The entire portfolio is configured in a single page component (`app/page.tsx`), making content updates straightforward.

## Tech Stack

-   **Framework**: [Next.js](https://nextjs.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **3D Graphics**: [Three.js](https://threejs.org/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Deployment**: Ready for Vercel, Netlify, or any Node.js hosting.

---

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   [Node.js](https://nodejs.org/en/) (v18.x or later)
-   [npm](https://www.npmjs.com/) (or Yarn/pnpm)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-portfolio.git
    cd your-portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```
    This will install all the required packages listed in `package.json`.

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open your browser:**
    Navigate to [http://localhost:3000](http://localhost:3000). You should now see the portfolio website running live!

## How to Customize

This portfolio is designed to be easily personalized. All the content you need to change is located in the **`app/page.tsx`** file.

### 1. Update Personal Information

Open `app/page.tsx` and find the following sections to update the text and links with your own details:

-   **Hero Section**: Change your name, title, and bio.
    -   Update the `Image` component's `src` to point to your profile picture (place your image in the `/public` directory).
    -   Modify the "Get In Touch" and "Download Resume" buttons.
    -   Update social links (GitHub, LinkedIn, Email).
-   **Skills Section**:
    -   Update the list of skills and their corresponding percentages.
-   **Projects Section**:
    -   Modify the `projects` data to showcase your own work. Update titles, descriptions, technologies, and links.
-   **Experience Section**:
    -   Update the `ExperienceTimeline` data in `components/experience-timeline.tsx` to reflect your work history.
-   **Contact Section**:
    -   Change the phone number and email address.
-   **Footer**:
    -   Update the footer text and social media links.

### 2. Update Metadata and Favicon

-   **Title and Description**: Open `app/layout.tsx` and modify the `metadata` object to change the website's title and description for SEO.
    ```typescript
    export const metadata: Metadata = {
      title: "Your Name | Your Title",
      description: "A brief description of your portfolio.",
    };
    ```
-   **Favicon**: Replace the default favicon files in the `public` folder with your own.

### 3. Customize Theme and Styling

-   **Colors and Fonts**: Global styles, CSS variables for theming (light/dark mode), and fonts are defined in `app/globals.css`.
-   **Tailwind Configuration**: You can extend the theme (colors, spacing, etc.) in `tailwind.config.ts`.

---

## Available Scripts

-   **`npm run dev`**: Starts the development server on `localhost:3000`.
-   **`npm run build`**: Builds the application for production.
-   **`npm run start`**: Starts a production server (requires a build first).
-   **`npm run lint`**: Runs the linter to check for code quality issues.

## Deployment

The easiest way to deploy this Next.js application is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Simply push your code to a GitHub repository and link it to Vercel. It will handle the build and deployment process automatically.