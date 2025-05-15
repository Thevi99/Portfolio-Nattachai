'use client';

import { motion } from 'framer-motion';
import { BsBriefcase, BsCalendar } from 'react-icons/bs';

const experiences = [
  {
    position: "Front End Developer",
    company: "King Mongkut's Institute of Technology Ladkrabang",
    period: "April - May 2025",
    description: "Designed UX/UI for a web dashboard supporting a battery voltage system with over 96 data points, utilizing cloud services via Firebase. Implemented Firestore collections for data storage and hosting capabilities to visualize installation locations through an interactive map.",
    skills: ["React.js", "TypeScript", "TailwindCSS", "Vite", "Chakra UI", "Recharts" , "Firebase", "Leaflet"]
  },
//   {
//     position: "Full Stack Developer",
//     company: "Digital Solutions Inc.",
//     period: "2020 - 2022",
//     description: "Developed and maintained multiple web applications for clients in finance and healthcare sectors. Implemented responsive UIs with React and backend APIs with .NET.",
//     skills: ["React", "JavaScript", "C#", ".NET", "MySQL", "Docker"]
//   },
  {
    position: "Internship",
    company: "Sixsigma systems Co., Ltd.",
    period: "April - June 2024",
    description: "Designed a robotic arm focusing on joint mechanics, precision, and movement range. Developed stepper motor control systems including driver setup and movement logic. Implemented a CNC-style motion control system using R245 language and VB.NET, enabling real-time manual and programmable operation. Integrated AI-assisted features to improve movement accuracy and support semi-autonomous control.",
    skills: ["VB.net", "Solidwork", "CAD", "Python", "Hardware Skills"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Work Experience</h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-16">
          My professional journey and roles I've taken throughout my career.
        </p>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-border -translate-x-1/2 hidden md:block"></div>
          
          {experiences.map((experience, index) => (
            <div key={index} className="mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
                  <div className="w-6 h-6 rounded-full bg-primary"></div>
                </div>
                
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <div className="bg-card border border-border p-6 rounded-xl shadow-md h-full">
                    <div className="flex items-center gap-2 mb-1 md:hidden">
                      <BsCalendar className="text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{experience.period}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold">{experience.position}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <BsBriefcase className="text-primary" />
                      <span className="font-medium">{experience.company}</span>
                    </div>
                    
                    <div className="hidden md:block text-sm text-muted-foreground mb-3">{experience.period}</div>
                    
                    <p className="text-muted-foreground mb-4">{experience.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, i) => (
                        <span 
                          key={i} 
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}