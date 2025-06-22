// src/components/sections/Skills.jsx
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { skills } from '../utils/constants';

const Skills = () => {
  const theme = useSelector((state) => state.theme.mode);
  
  return (
    <section 
      id="skills" 
      className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-4xl font-bold text-center mb-16 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}
        >
          My Skills
        </motion.h2>
        
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`px-6 py-3 rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'}`}
              whileHover={{ scale: 1.05 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;