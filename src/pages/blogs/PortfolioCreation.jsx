import React from 'react';

const PortfolioCreation = () => (
  <div className="max-w-3xl mx-auto py-12 px-4 text-white pt-28">
    <h1 className="text-4xl font-bold mb-6">
      How I Built My Portfolio Website Using React & Tailwind CSS
    </h1>

    <p className="mb-4 text-secondary">
      Here's a complete walkthrough of how I built my personal portfolio using <b>React.js</b> and <b>Tailwind CSS</b>. I focused on clean UI, performance, and simple animations to make the user experience smooth and modern.
    </p>

    <h2 className="text-2xl font-semibold mt-8 mb-4">🔧 Tools & Technologies Used</h2>
    <ul className="list-disc ml-6 space-y-1 text-secondary">
      <li>React.js (with Vite for blazing-fast development)</li>
      <li>Tailwind CSS for styling</li>
      <li>Framer Motion for animations</li>
      <li>React Router for page navigation</li>
      <li>Vercel (or Netlify) for deployment</li>
    </ul>

    <h2 className="text-2xl font-semibold mt-8 mb-4">📌 Key Steps in Building the Portfolio</h2>
    <ul className="list-disc ml-6 space-y-4 text-secondary">
      <li>
        <b>1. Created a Modular Component Structure</b>
        <p className="mt-1">
          I broke the site into reusable components like <code>Header</code>, <code>Hero</code>, <code>Projects</code>, and <code>Footer</code> using JSX. This made it easier to maintain and scale.
        </p>
        <pre className="bg-gray-900 text-green-300 text-sm rounded p-4 mt-2 overflow-auto">
{`// Example: Header.jsx
const Header = () => (
  <header className="flex justify-between items-center p-4 bg-gray-900">
    <h1 className="text-xl font-bold text-white">Piyush Mittal</h1>
    <nav className="space-x-4">
      <a href="#about" className="text-gray-400 hover:text-white">About</a>
      <a href="#projects" className="text-gray-400 hover:text-white">Projects</a>
    </nav>
  </header>
);`}
        </pre>
      </li>

      <li>
        <b>2. Styled the UI Using Tailwind CSS</b>
        <p className="mt-1">
          Tailwind made styling fast and consistent without writing custom CSS. I used utility classes like <code>px-4</code>, <code>bg-gray-800</code>, and <code>text-white</code> for rapid UI building.
        </p>
        <pre className="bg-gray-900 text-green-300 text-sm rounded p-4 mt-2 overflow-auto">
{`<section className="bg-gray-800 text-white p-6 rounded-lg shadow-md">
  <h2 className="text-2xl font-bold">About Me</h2>
  <p className="text-gray-400 mt-2">I'm a full stack developer passionate about building great web experiences.</p>
</section>`}
        </pre>
      </li>

      <li>
        <b>3. Added Smooth Animations with Framer Motion</b>
        <p className="mt-1">
          I used <code>framer-motion</code> to animate components on scroll and hover. It added a polished, modern feel to the site without much complexity.
        </p>
        <pre className="bg-gray-900 text-green-300 text-sm rounded p-4 mt-2 overflow-auto">
{`import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
</motion.div>`}
        </pre>
      </li>

      <li>
        <b>4. Optimized Performance and Responsiveness</b>
        <p className="mt-1">
          I made sure all images were compressed and used Tailwind's <code>sm:</code>, <code>md:</code>, and <code>lg:</code> prefixes to ensure the site looked great on mobile and desktop.
        </p>
        <pre className="bg-gray-900 text-green-300 text-sm rounded p-4 mt-2 overflow-auto">
{`<div className="text-center p-6 sm:text-left sm:p-12">
  <h2 className="text-xl sm:text-2xl">Responsive and Fast</h2>
</div>`}
        </pre>
      </li>
    </ul>

    <h2 className="text-2xl font-semibold mt-10 mb-4">🚀 Final Thoughts</h2>
    <p className="text-secondary">
      Building this portfolio taught me how to plan components, style consistently with Tailwind, and bring life to UI with animations. It's a great beginner project to learn real-world development skills.
    </p>
    <p className="mt-2 text-secondary">
      If you're a beginner looking to showcase your skills, start your own portfolio today — it's one of the best ways to learn and grow as a developer.
    </p>
  </div>
);

export default PortfolioCreation;
