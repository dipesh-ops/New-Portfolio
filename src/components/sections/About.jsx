// src/components/sections/About.jsx
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { aboutInfo } from '../utils/constants';
import myImage from '../../assets/images/projectImages/dipesh.jpg'

const About = () => {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <section 
      id="about" 
      className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}
    >
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-4xl font-bold text-center mb-16 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}
        >
          About Me
        </motion.h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/3 flex justify-center"
          >
            <div className={`w-64 h-64 rounded-full overflow-hidden ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}>
             
              <div className="w-full h-full flex items-center justify-center">
                <img src={myImage} alt="" />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-2/3"
          >
            <h3 className={`text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
              {aboutInfo.name}
            </h3>
            <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              {aboutInfo.bio}
            </p>
            <div className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              <h4 className="font-medium mb-2">Education:</h4>
              <p>{aboutInfo.education}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;