import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => (
  <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#1a1333] to-[#2d225a] px-4">
    <div className="text-8xl mb-4">🚫</div>
    <h1 className="text-white text-5xl font-bold mb-4">404 - Page Not Found</h1>
    <p className="text-secondary text-lg mb-8 text-center max-w-md">
      Oops! The page you are looking for doesn't exist or has been moved.<br />
      Let's get you back to something awesome!
    </p>
    <Link
      to="/"
      className="bg-gradient-to-r from-[#915EFF] to-[#7000FF] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform text-lg"
    >
      Go to Home
    </Link>
  </div>
);

export default Error404; 