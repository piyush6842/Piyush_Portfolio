import React from 'react';

const CleanArchitectureDotnet = () => (
  <div className="max-w-3xl mx-auto py-12 px-4 text-white pt-28">
    <h1 className="text-4xl font-bold mb-6">
      Getting Started with Clean Architecture in .NET Core
    </h1>

    <p className="mb-6 text-secondary">
      Clean Architecture is a powerful design pattern that helps you build scalable, maintainable, and testable .NET Core applications. In this guide, I'll walk you through the core concepts, folder structure, and how I use it in real-world projects.
    </p>

    <h2 className="text-2xl font-semibold mt-8 mb-4">📌 What is Clean Architecture?</h2>
    <p className="text-secondary mb-4">
      Clean Architecture, popularized by Uncle Bob, focuses on **separation of concerns** and **independence of frameworks**. Your business logic is at the core, and everything else (like databases, UI, etc.) depends on it — not the other way around.
    </p>

    <h2 className="text-2xl font-semibold mt-8 mb-4">🏗️ Core Layers</h2>
    <ul className="list-disc ml-6 space-y-3 text-secondary">
      <li>
        <b>Domain:</b> Contains core entities, interfaces, and business rules.
      </li>
      <li>
        <b>Application:</b> Contains use cases, DTOs, and service interfaces.
      </li>
      <li>
        <b>Infrastructure:</b> Implements interfaces from Application layer (e.g., EF Core, Dapper).
      </li>
      <li>
        <b>Presentation (API):</b> The entry point (controllers, Swagger, middleware, etc.)
      </li>
    </ul>

    <h2 className="text-2xl font-semibold mt-8 mb-4">🧱 Example Project Structure</h2>
    <pre className="bg-gray-900 text-green-300 text-sm rounded p-4 overflow-auto">
{`📁 src/
├── 📁 Domain
│   └── Entities, Interfaces
├── 📁 Application
│   └── UseCases, DTOs, Interfaces
├── 📁 Infrastructure
│   └── EF Core Repositories, Logging, Services
├── 📁 API
│   └── Controllers, Startup.cs, Swagger
`}
    </pre>

    <h2 className="text-2xl font-semibold mt-8 mb-4">🔄 Dependency Flow</h2>
    <p className="text-secondary mb-4">
      <b>Rule:</b> Inner layers (Domain, Application) should never depend on outer layers (Infrastructure, Presentation).
    </p>
    <pre className="bg-gray-900 text-green-300 text-sm rounded p-4 overflow-auto">
{`Domain → Application → Infrastructure → API`}
    </pre>

    <h2 className="text-2xl font-semibold mt-8 mb-4">🧪 Benefits I Experienced</h2>
    <ul className="list-disc ml-6 space-y-2 text-secondary">
      <li>💼 Easier to maintain code across features</li>
      <li>🧪 Unit testing is simple due to clear boundaries</li>
      <li>🚀 Switching databases (EF → Dapper) is possible without touching business logic</li>
      <li>🧱 Easier onboarding for new team members</li>
    </ul>

    <h2 className="text-2xl font-semibold mt-8 mb-4">⚙️ Key Practices I Follow</h2>
    <ul className="list-disc ml-6 space-y-2 text-secondary">
      <li>Use <code>IRepository</code> in Application and implement it in Infrastructure</li>
      <li>Never let Application reference Infrastructure</li>
      <li>Register dependencies via DI in API project</li>
    </ul>

    <h2 className="text-2xl font-semibold mt-10 mb-4">🚀 Final Thoughts</h2>
    <p className="text-secondary">
      Clean Architecture has helped me build .NET Core applications that are easy to scale, test, and maintain. If you're starting a serious project, I strongly recommend structuring your app this way — especially if you're working in a team.
    </p>
    <p className="mt-2 text-secondary">
      Start small: break your code into **Domain**, **Application**, and **Infrastructure**, and your project will already be cleaner than most monoliths.
    </p>
  </div>
);

export default CleanArchitectureDotnet;
