// src/components/layout/Navbar.jsx
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { toggleTheme } from '../features/theme/themeSlice';

const Navbar = () => {
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-10 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} shadow-md`}
    >
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <motion.a 
          href="#home" 
          className="text-xl font-bold"
          whileHover={{ scale: 1.1 }}
        >
          <span className={theme === 'dark' ? 'text-white' : 'text-gray-800'}>Dipesh M.</span>
        </motion.a>
        
        <div className="flex items-center space-x-6">
          {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item}`}
              className={`capitalize hidden md:block ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
              whileHover={{ scale: 1.1 }}
            >
              {item}
            </motion.a>
          ))}
          
          <button 
            onClick={() => dispatch(toggleTheme())}
            className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
          
          <motion.a href="https://github.com/dipesh-ops" target="_blank" whileHover={{ scale: 1.2 }}>
            <FaGithub className={theme === 'dark' ? 'text-white' : 'text-gray-800'} size={20} />
          </motion.a>
          
          <motion.a href="https://www.linkedin.com/in/dipesh-meshram" target="_blank" whileHover={{ scale: 1.2 }}>
            <FaLinkedin className={theme === 'dark' ? 'text-white' : 'text-blue-600'} size={20} />
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;