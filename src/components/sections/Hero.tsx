'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-20 md:py-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-1/2 space-y-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold">
          <span className="text-primary">Hello, I'm</span>
          <br />
          <TypeAnimation
            sequence={[
              'Nattachai Pilabut',
              1000,
              'Full Stack Developer',
              1000,
              'Software Engineer',
              1000,
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
            className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          />
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground">
          Building elegant software solutions with modern technologies.
        </p>
        <div className="flex gap-4">
          <a 
            href="https://github.com/Thevi99" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all"
          >
            <FaGithub size={20} />
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/nattachai-pilabut-16654735a/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#0077B5] hover:bg-[#0077B5]/80 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all"
          >
            <FaLinkedin size={20} />
            LinkedIn
          </a>
          <a 
            href="#contact" 
            className="border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg transition-all"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0"
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary blur-2xl opacity-20 animate-pulse"></div>
          <div className="relative bg-background dark:bg-background border-4 border-primary rounded-full overflow-hidden w-full h-full">
            <Image 
              src="/images/profile.jpg" 
              alt="Nattachai Pilabut" 
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}