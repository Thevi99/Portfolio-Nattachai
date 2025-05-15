'use client';

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiDotnet, SiTailwindcss, SiMongodb, SiFireship, SiArduino } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

const skills = [
  { name: 'React', icon: <FaReact className="text-[#61DAFB]" size={36} />, level: 70 },
  { name: 'Next.js', icon: <TbBrandNextjs size={36} />, level: 90 },
  { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" size={30} />, level: 85 },
  { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" size={30} />, level: 85 },
  { name: 'Arduino', icon: <SiArduino className="text-[#00979D]" size={30} />, level: 70 },
  { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" size={36} />, level: 75 },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" size={30} />, level: 90 },
  { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" size={30} />, level: 70 },
  { name: 'Firebase', icon: <SiFireship className="text-[#FFCA28]" size={36} />, level: 75 },
  { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" size={36} />, level: 85 },
//   { name: 'Docker', icon: <FaDocker className="text-[#2496ED]" size={36} />, level: 70 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Skills & Technologies</h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">
          My technical skills and technologies I've been working with throughout my career.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              <div className="flex-shrink-0">
                {skill.icon}
              </div>
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="h-2.5 rounded-full bg-gradient-to-r from-primary to-secondary"
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
