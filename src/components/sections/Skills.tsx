'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiTailwindcss, SiMongodb, SiFireship, SiArduino } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

const skills = [
  { 
    name: 'React', 
    icon: <FaReact size={60} className="text-[#61DAFB]" />,
    color: '#61DAFB',
    description: 'Frontend Library'
  },
  { 
    name: 'Next.js', 
    icon: <TbBrandNextjs size={60} />,
    color: '#ffffff',
    description: 'React Framework'
  },
  { 
    name: 'TypeScript', 
    icon: <SiTypescript size={52} className="text-[#3178C6]" />,
    color: '#3178C6',
    description: 'Typed JavaScript'
  },
  { 
    name: 'JavaScript', 
    icon: <SiJavascript size={52} className="text-[#F7DF1E]" />,
    color: '#F7DF1E',
    description: 'Web Programming'
  },
  { 
    name: 'Arduino', 
    icon: <SiArduino size={52} className="text-[#00979D]" />,
    color: '#00979D',
    description: 'IoT Development'
  },
  { 
    name: 'Node.js', 
    icon: <FaNodeJs size={60} className="text-[#339933]" />,
    color: '#339933',
    description: 'Backend Runtime'
  },
  { 
    name: 'Tailwind', 
    icon: <SiTailwindcss size={52} className="text-[#06B6D4]" />,
    color: '#06B6D4',
    description: 'CSS Framework'
  },
  { 
    name: 'MongoDB', 
    icon: <SiMongodb size={52} className="text-[#47A248]" />,
    color: '#47A248',
    description: 'NoSQL Database'
  },
  { 
    name: 'Firebase', 
    icon: <SiFireship size={60} className="text-[#FFCA28]" />,
    color: '#FFCA28',
    description: 'Backend Platform'
  },
  { 
    name: 'Git', 
    icon: <FaGitAlt size={60} className="text-[#F05032]" />,
    color: '#F05032',
    description: 'Version Control'
  },
];

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 z-0"></div> */}
      
      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative z-10 container mx-auto px-4"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Skills & Technologies
        </h2>
        <p className="text-gray-300 text-lg text-center max-w-2xl mx-auto mb-16">
          My technical skills and technologies I've been working with throughout my career.
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
              onMouseEnter={() => setActiveSkill(index)}
              onMouseLeave={() => setActiveSkill(null)}
            >
              <div className="relative z-10 flex flex-col items-center">
                {/* Icon effect */}
                <motion.div 
                  whileHover={{ 
                    scale: 1.15,
                    rotate: [0, 5, -5, 0],
                    transition: { duration: 0.5 }
                  }}
                  className="p-6 rounded-full mb-3 bg-gray-800 bg-opacity-70 backdrop-blur-sm shadow-lg border border-gray-700"
                  style={{ 
                    boxShadow: activeSkill === index ? `0 0 30px ${skill.color}40` : 'none',
                    transition: 'box-shadow 0.3s ease'
                  }}
                >
                  {skill.icon}
                </motion.div>
                
                {/* fancy animation */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: activeSkill === index ? 1 : 0.7,
                    y: activeSkill === index ? 0 : 5
                  }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <h3 className="font-semibold text-lg text-white group-hover:text-[${skill.color}]"
                    style={{ color: activeSkill === index ? skill.color : 'white' }}
                  >
                    {skill.name}
                  </h3>
                  <p className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {skill.description}
                  </p>
                </motion.div>
              </div>
              
              {/* Animated background glow */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: activeSkill === index ? 0.15 : 0,
                  scale: activeSkill === index ? 1 : 0.8
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 -z-10 rounded-full blur-2xl"
                style={{ backgroundColor: skill.color }}
              ></motion.div>
            </motion.div>
          ))}
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-40 right-1/4 w-24 h-24 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '3s' }}></div>
      </motion.div>
    </section>
  );
}





// 'use client';

// import { motion } from 'framer-motion';
// import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
// import { SiTypescript, SiJavascript, SiDotnet, SiTailwindcss, SiMongodb, SiFireship, SiArduino } from 'react-icons/si';
// import { TbBrandNextjs } from 'react-icons/tb';

// const skills = [
//   { name: 'React', icon: <FaReact className="text-[#61DAFB]" size={36} />, level: 70 },
//   { name: 'Next.js', icon: <TbBrandNextjs size={36} />, level: 90 },
//   { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" size={30} />, level: 85 },
//   { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" size={30} />, level: 85 },
//   { name: 'Arduino', icon: <SiArduino className="text-[#00979D]" size={30} />, level: 70 },
//   { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" size={36} />, level: 75 },
//   { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" size={30} />, level: 90 },
//   { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" size={30} />, level: 70 },
//   { name: 'Firebase', icon: <SiFireship className="text-[#FFCA28]" size={36} />, level: 75 },
//   { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" size={36} />, level: 85 },
// //   { name: 'Docker', icon: <FaDocker className="text-[#2496ED]" size={36} />, level: 70 },
// ];

// export default function Skills() {
//   return (
//     <section id="skills" className="py-20">
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         viewport={{ once: true }}
//       >
//         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Skills & Technologies</h2>
//         <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">
//           My technical skills and technologies I've been working with throughout my career.
//         </p>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
//           {skills.map((skill, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="flex items-center space-x-4"
//             >
//               <div className="flex-shrink-0">
//                 {skill.icon}
//               </div>
//               <div className="flex-1">
//                 <div className="flex justify-between mb-1">
//                   <span className="font-medium">{skill.name}</span>
//                   <span className="text-muted-foreground">{skill.level}%</span>
//                 </div>
//                 <div className="w-full bg-muted rounded-full h-2.5">
//                   <motion.div
//                     initial={{ width: 0 }}
//                     whileInView={{ width: `${skill.level}%` }}
//                     transition={{ duration: 0.8, delay: 0.2 }}
//                     viewport={{ once: true }}
//                     className="h-2.5 rounded-full bg-gradient-to-r from-primary to-secondary"
//                   ></motion.div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   );
// }
