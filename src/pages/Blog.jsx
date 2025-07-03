import { motion } from 'framer-motion';
import { useState } from 'react';
import { styles } from '../styles';
import { Link } from 'react-router-dom';

const BlogCard = ({ title, excerpt, date, category, readTime, slug }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-full p-1 rounded-2xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#915EFF] to-[#7000FF] rounded-2xl opacity-50 blur-xl transition-opacity duration-300"
        style={{ opacity: isHovered ? 0.8 : 0 }}
      />
      <motion.div
        className="relative bg-tertiary rounded-2xl p-8 h-full cursor-pointer"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-between items-start mb-4">
          <span className="px-3 py-1 bg-[#915EFF]/20 text-[#915EFF] rounded-full text-sm">
            {category}
          </span>
        </div>
        <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-secondary mb-4 line-clamp-3">{excerpt}</p>
        <div className="flex justify-between items-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to={`/blog/${slug}`}
              className="px-4 py-2 bg-gradient-to-r from-[#915EFF] to-[#7000FF] rounded-full text-white text-sm font-medium"
            >
              Read More
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Blog = () => {
  const blogPosts = [
    {
      title: "5 Tailwind CSS Tricks That Make My UI Cleaner",
      excerpt: "Discover five powerful Tailwind CSS techniques that I use daily to write cleaner, more maintainable UI code. From custom plugins to responsive design patterns.",
      category: "CSS",
      slug: "tailwind-css-tricks"
    },
    {
      title: "Getting Started with Clean Architecture in .NET Core",
      excerpt: "A comprehensive guide to implementing Clean Architecture in .NET Core applications. Learn about layers, dependencies, and best practices for scalable applications.",
      category: ".NET",
      slug: "clean-architecture-dotnet"
    },
    {
      title: "Entity Framework vs Dapper: When and Why I Use Both",
      excerpt: "An in-depth comparison of Entity Framework and Dapper, exploring their strengths, weaknesses, and ideal use cases based on real-world experience.",
      category: "Database",
      slug: "ef-vs-dapper"
    },
    {
      title: "How I Built My Portfolio Website Using React & Tailwind CSS",
      excerpt: "A detailed walkthrough of building this portfolio website, covering React components, Tailwind CSS styling, animations, and performance optimization.",
      category: "React",
      slug: "portfolio-creation"
    }
  ];

  return (
    <div className="relative z-0 min-h-screen pt-28 overflow-x-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none select-none">
        <div className="absolute top-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-[#915EFF] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-[#7000FF] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-[#915EFF] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="px-4 sm:px-8 md:px-16 py-10 max-w-4xl mx-auto w-full">
        <div className="mb-10">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Blog
          </motion.h1>
          <motion.p 
            className="text-secondary text-base sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Sharing my thoughts, experiences, and learnings in web development
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BlogCard {...post} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog; 
