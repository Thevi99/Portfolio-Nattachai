'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const categories = ['All', 'Web', 'Mobile', 'Backend', 'Other'];

const projects = [
  {
    title: "E-Commerce Web Application (Fullstack)",
    description: "A fullstack e-commerce app offering smooth product browsing, secure login, easy cart management, and fast order processing—built with modern web technologies for an excellent shopping experience.",
    image: "/images/projects/ecommerce.jpg",
    tags: ["Next.js", "Node.js", "Express", "MongoDB", "JavaScript", "TypeScript", "TailwindCSS", "REST API"],
    category: ["Web", "Backend"],
    github: "https://github.com/Thevi99/Full-Web-Shop",
    demo: "https://ecommerce-dashboard-demo.com",
  },
  {
    title: "LicenseAuthBot",
    description: "Discord bot for managing Roblox script licenses, enabling users to buy, redeem, and run scripts via commands like /script, /buy, and /redeem.",
    image: "/images/projects/AuthBot.jpg",
    tags: ["Node.js", "Express", "discord.js", "MongoDB", "JavaScript"],
    category: "Backend",
    github: "https://github.com/Thevi99/LicenseAuthBot",
    demo: "https://discord.gg/XhGh4TGuas",
  },
  {
    title: "IoT SmartFarm Management System",
    description: "A web-based smart farm monitoring application built with Next.js and Firebase. It tracks environmental parameters like pH and dissolved oxygen (DO), providing real-time data visualization using interactive charts.",
    image: "/images/projects/iot-dashboard.jpg",
    tags: ["Next.js", "Firebase", "JavaScript", "TypeScript", "Chart.js", "TailwindCSS", "Recharts", "Vite"],
    category: "Web",
    github: "https://github.com/Thevi99/Web_SmartFarm",
    demo: "https://nattachai-ami.netlify.app/",
  },
  {
    title: "Dormitory Management System",
    description: "A dormitory management system built with Next.js and TypeScript. Supports room booking and status reporting, featuring a responsive design with Tailwind CSS and MongoDB for data storage.",
    image: "/images/projects/RentRoom.jpg",
    tags: ["Next.js", "React", "TypeScript", "TailwindCSS", "MongoDB", "Mongoose"],
    category: ["Web", "Backend"],
    github: "https://github.com/Thevi99/dormitory-management-app",
    demo: "https://rentroom-demo.netlify.app/",
  },
  {
    title: "Application SmartFarm",
    description: "Smart farm full-stack application using IoT to monitor and analyze real-time environmental data, featuring mobile app, backend, and sensor integration.",
    image: "/images/projects/application-smartfarm.jpg",
    tags: ["React Native", "Node.js", "Express", "Firesbase", "MQTT Protocol", "MQTT Protocol"],
    category: "Mobile",
    github: "https://github.com/Thevi99/Application-smartfarm",
    demo: null,
  }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All' 
  ? projects 
  : projects.filter(project => {
      if (Array.isArray(project.category)) {
        return project.category.includes(activeCategory);
      }
      return project.category === activeCategory;
    });

  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">My Projects</h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">
          A showcase of my work, personal projects and contributions.
        </p>
        
        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-secondary/10 hover:bg-secondary/20 text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all h-full flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || '/images/projects/placeholder.jpg'}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-medium px-3 py-1 rounded-full bg-purple-700 bg-opacity-60 text-purple-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between mt-auto">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-1 text-sm hover:text-primary transition-colors"
                  >
                    <FaGithub size={16} />
                    <span>Source Code</span>
                  </a>
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-1 text-sm hover:text-primary transition-colors"
                    >
                      <span>Live Demo</span>
                      <FaExternalLinkAlt size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}