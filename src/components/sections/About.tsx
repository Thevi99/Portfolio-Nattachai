'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { BsArrowRight, BsCloudDownload } from 'react-icons/bs';

export default function About() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">About Me</h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-16">
          Get to know more about me, my background, and what I do.
        </p>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden border-4 border-primary/20 shadow-xl">
              <div className="aspect-[4/3]">
                <Image 
                  src="/images/about-me.jpg" 
                  alt="Nattachai working" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-6">
                <div className="font-bold text-xl">Passionate Developer</div>
                <div className="text-sm opacity-80">Building the future with code</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h3 className="text-2xl font-bold mb-4">
              I'm <span className="text-primary">Nattachai Pilabut</span>, a Full Stack Developer
            </h3>
            
            <p className="text-muted-foreground mb-6">
                I am an aspiring full stack developer with hands-on experience from academic projects.  
                Though my degree isn’t directly in software development, I have a strong passion for programming and AI training.  
                Skilled in modern web technologies, I’m committed to delivering practical, user-focused solutions.  
                I’m eager to learn, grow professionally, and contribute to innovative software development.
            </p>


            
            <p className="text-muted-foreground mb-6">
                My journey in technology began when I started my studies in Engineering with a focus on Manufacturing System Engineering.  
                During my academic years, I worked on various projects across domains including e-commerce, dashboard development, and backend development.  
                I am eager to apply my skills and knowledge to real-world challenges as I begin my professional career.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-bold mb-2">Location</h4>
                <p className="text-muted-foreground">Bangkok, Thailand</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Email</h4>
                <p className="text-muted-foreground">nattachai.pil@gmail.com</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Study</h4>
                <p className="text-muted-foreground">BEng in Manufacturing System Engineering</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Employment</h4>
                <p className="text-muted-foreground">Available for hire</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-all"
              >
                Contact Me
                <BsArrowRight />
              </a>
              <a 
                href="/Nattachai_Pilabut_Resume.pdf" 
                download
                className="border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-all"
              >
                Download CV
                <BsCloudDownload />
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}