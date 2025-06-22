// src/components/sections/Hero.jsx
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

const Hero = () => {
  const theme = useSelector((state) => state.theme.mode);
  
  return (
    <section 
      id="home" 
      className={`min-h-screen flex items-center ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}
    >
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className={`text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
            Hi, I'm <span className="text-blue-500">Dipesh Meshram</span>
          </h1>
          <h2 className={`text-3xl mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            React.js Developer
          </h2>
          <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Passionate about creating beautiful, responsive web applications with modern technologies.
            Fresh graduate with hands-on experience in React, Redux, and JavaScript.
          </p>
          
          <div className="flex space-x-4">
            <motion.a
              href="#contact"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
            
            <motion.a
              href="/src/resume/Dipesh Resumedocx.pdf"
              download
              className={`px-6 py-3 border-2 ${theme === 'dark' ? 'border-white text-white' : 'border-gray-800 text-gray-800'} rounded-lg font-medium`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;