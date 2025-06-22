// src/components/layout/Footer.jsx
import { useSelector } from 'react-redux';
import { socialLinks } from '../utils/constants';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <footer className={`py-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-6 text-center">
        <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
          © {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          {socialLinks.map((social) => (
            <a 
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
            >
              {social.icon === 'FaGithub' && <FaGithub size={20} />}
              {social.icon === 'FaLinkedin' && <FaLinkedin size={20} />}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;