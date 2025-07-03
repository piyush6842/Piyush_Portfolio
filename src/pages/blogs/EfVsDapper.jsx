import React from 'react';

const EfVsDapper = () => (
  <div className="max-w-3xl mx-auto py-12 px-4 text-white pt-28">
    <h1 className="text-4xl font-bold mb-6">
      Entity Framework vs Dapper: When and Why I Use Both
    </h1>

    <p className="mb-4 text-secondary">
      Choosing the right ORM can make a big difference in your project's performance and maintainability. In this post, I'll share my experience using both <b>Entity Framework (EF)</b> and <b>Dapper</b>, with clear examples and when to use which.
    </p>

    {/* ENTITY FRAMEWORK */}
    <h2 className="text-2xl font-semibold mt-8 mb-4">💡 What is Entity Framework?</h2>
    <ul className="list-disc ml-6 space-y-2 text-secondary">
      <li>High-level ORM from Microsoft with LINQ support</li>
      <li>Supports automatic change tracking</li>
      <li>Handles complex relationships and navigation properties</li>
      <li>Great for CRUD-heavy applications with rich domain models</li>
    </ul>

    <h3 className="text-xl font-semibold mt-6 mb-2">📦 Example (Entity Framework):</h3>
    <pre className="bg-gray-900 text-green-300 text-sm rounded p-4 overflow-auto">
{`// Get all users with EF
var users = await _dbContext.Users.ToListAsync();`}
    </pre>

    <p className="text-secondary mt-4">
      ✅ EF is best when you want to work with **domain models**, **migrations**, and complex relationships with **less boilerplate code**.
    </p>

    {/* DAPPER */}
    <h2 className="text-2xl font-semibold mt-10 mb-4">⚡ What is Dapper?</h2>
    <ul className="list-disc ml-6 space-y-2 text-secondary">
      <li>Micro-ORM developed by StackOverflow team</li>
      <li>Extremely fast, lightweight, and close to raw SQL</li>
      <li>No change tracking or migrations</li>
      <li>Perfect for performance-critical read operations</li>
    </ul>

    <h3 className="text-xl font-semibold mt-6 mb-2">⚙️ Example (Dapper):</h3>
    <pre className="bg-gray-900 text-green-300 text-sm rounded p-4 overflow-auto">
{`// Get all users with Dapper
var users = connection.Query<User>("SELECT * FROM Users").ToList();`}
    </pre>

    <p className="text-secondary mt-4">
      ✅ Dapper is ideal when you want **maximum performance**, need full **SQL control**, or are just **reading data**.
    </p>

    {/* WHEN TO USE */}
    <h2 className="text-2xl font-semibold mt-10 mb-4">🧠 When I Use Which (My Real Use Cases)</h2>
    <ul className="list-disc ml-6 space-y-3 text-secondary">
      <li>
        <b>CRUD-heavy pages → Entity Framework</b><br />
        Example: Admin dashboards, forms, user profile management
      </li>
      <li>
        <b>Report generation or leaderboard pages → Dapper</b><br />
        Example: Large SELECT queries with joins where speed is critical
      </li>
      <li>
        <b>Hybrid Use (Best of Both)</b><br />
        I use EF for insert/update/delete, and Dapper for fast SELECT queries.
      </li>
    </ul>

    <h2 className="text-2xl font-semibold mt-10 mb-4">🚀 Final Thoughts</h2>
    <p className="text-secondary">
      There's no single winner — both EF and Dapper shine in different situations. Knowing how and when to use them together is a real productivity and performance boost.
    </p>
    <p className="text-secondary mt-2">
      🔧 Use EF for convenience and full-model workflows.<br />
      ⚡ Use Dapper when you need blazing speed and SQL control.
    </p>
  </div>
);

export default EfVsDapper;
