import React from 'react';

const TailwindCSSTricks = () => (
  <div className="max-w-3xl mx-auto py-12 px-4 text-white pt-28">
    <h1 className="text-4xl font-bold mb-6">5 Tailwind CSS Tricks That Make My UI Cleaner</h1>

    <p className="mb-6 text-secondary">
      Tailwind CSS has changed the way I build UIs — it's fast, utility-first, and makes my codebase more maintainable. But over time, I discovered a few simple tricks that helped me write cleaner and more consistent interfaces. Here's a breakdown of 5 Tailwind CSS tricks that improved my workflow, with code examples you can start using today.
    </p>

    <ol className="list-decimal ml-6 space-y-6">

      <li>
        <b className="text-lg">Custom Utility Plugins</b>
        <p className="mt-2 text-secondary">
          Tailwind allows you to extend its utility set with custom plugins. If you find yourself repeating the same style logic (like text shadows or new color utilities), it's worth creating a plugin in your `tailwind.config.js`.
        </p>
        <pre className="bg-gray-900 text-green-300 text-sm rounded p-4 mt-3 overflow-auto">
{`// tailwind.config.js
module.exports = {
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.25)',
        },
      })
    }
  ]
}`}</pre>
        <p className="mt-2 text-secondary">
          Now just use <code className="bg-gray-800 px-1 py-0.5 rounded">text-shadow</code> in your JSX!
        </p>
      </li>

      <li>
        <b className="text-lg">Responsive Design Patterns</b>
        <p className="mt-2 text-secondary">
          Tailwind makes mobile-first development easy. You can apply different styles at different breakpoints using responsive prefixes like <code className="bg-gray-800 px-1 py-0.5 rounded">sm:</code>, <code className="bg-gray-800 px-1 py-0.5 rounded">md:</code>, and so on.
        </p>
        <pre className="bg-gray-900 text-green-300 text-sm rounded p-4 mt-3 overflow-auto">
{`<div className="p-2 sm:p-4 md:p-8">
  <p>This box has padding based on screen size</p>
</div>`}
        </pre>
        <p className="mt-2 text-secondary">
          This ensures your design adapts fluidly across all devices.
        </p>
      </li>

      <li>
        <b className="text-lg">Dark Mode Support</b>
        <p className="mt-2 text-secondary">
          Tailwind has built-in support for dark mode. Enable it in your config, and then conditionally style components using the <code className="bg-gray-800 px-1 py-0.5 rounded">dark:</code> prefix.
        </p>
        <pre className="bg-gray-900 text-green-300 text-sm rounded p-4 mt-3 overflow-auto">
{`// tailwind.config.js
module.exports = {
  darkMode: 'class', // or 'media'
}`}</pre>
        <pre className="bg-gray-900 text-green-300 text-sm rounded p-4 mt-3 overflow-auto mt-2">
{`<div className="bg-white text-black dark:bg-gray-900 dark:text-white">
  <p>Supports both light and dark themes</p>
</div>`}
        </pre>
        <p className="mt-2 text-secondary">
          You can toggle the dark class manually or based on user preference.
        </p>
      </li>

      <li>
        <b className="text-lg">Component Extraction with @apply</b>
        <p className="mt-2 text-secondary">
          Tailwind encourages utility-first design, but for repeated patterns, you can keep your JSX clean using the <code className="bg-gray-800 px-1 py-0.5 rounded">@apply</code> directive in CSS files.
        </p>
        <pre className="bg-gray-900 text-green-300 text-sm rounded p-4 mt-3 overflow-auto">
{`/* styles.css */
.btn-primary {
  @apply bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700;
}`}</pre>
        <pre className="bg-gray-900 text-green-300 text-sm rounded p-4 mt-3 overflow-auto">
{`<button className="btn-primary">Click Me</button>`}
        </pre>
        <p className="mt-2 text-secondary">
          This improves readability and avoids long class chains.
        </p>
      </li>

      <li>
        <b className="text-lg">Consistent Spacing with Tailwind's Scale</b>
        <p className="mt-2 text-secondary">
          Tailwind's spacing scale (like `mt-2`, `p-4`, `gap-6`) is designed to keep UIs consistent. Instead of guessing margin/padding values, stick to the defined scale.
        </p>
        <pre className="bg-gray-900 text-green-300 text-sm rounded p-4 mt-3 overflow-auto">
{`<div className="space-y-4">
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
  <p>Paragraph 3</p>
</div>`}
        </pre>
        <p className="mt-2 text-secondary">
          Using <code className="bg-gray-800 px-1 py-0.5 rounded">space-y-4</code> instead of manually spacing each element keeps things DRY and tidy.
        </p>
      </li>

    </ol>

    <p className="mt-10 text-secondary">
      These tricks have helped me build more scalable and beautiful interfaces with less effort. Whether you're just getting started with Tailwind CSS or already building UI components daily — give these tips a try and see how much cleaner your code becomes!
    </p>
  </div>
);

export default TailwindCSSTricks;
