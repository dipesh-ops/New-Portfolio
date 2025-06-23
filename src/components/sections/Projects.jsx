import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import image1 from '../../assets/images/projectImages/cinevortex.jpg'
import image2 from '../../assets/images/projectImages/ecommers.jpg'
import image3 from '../../assets/images/projectImages/uxdesign.jpg'

const projects = [
  {
    id: 1,
    title: "Movie App",
    description: "This is a fully responsive Movie Application which contains a list of movies, tv shows from the cloud sorted based on the most popular filter. User can change filter (trending, popular, rated, and preferred language) & users can see the movie details, trailers, reviews, by clicking on the movie, tv shows they like on the home screen.",
    technologies: ["React", "Redux", "Tailwind CSS", "TMDB API"],
    githubLink: "https://github.com/dipesh-ops/Cinevortex",
    liveLink: "https://cinevortex.vercel.app/",
    image: image1
  },
  {
    id: 2,
    title: "E-Commers App",
    description: "Developed full-stack e-commerce platform using React.js, Redux Toolkit, and Firebase, featuring a responsive UI, secure authentication, and real-time cart management. ",
    technologies: ["React", "Tailwind CSS", "Context API", "Firebase"],
    githubLink: "https://github.com/dipesh-ops/ecommers",
    liveLink: "https://ecommers-app-iota.vercel.app/",
    image: image2
  },
  {
    id: 3,
    title: "UI Design To React App",
    description: "Developed a UI Design to react app which is compatible for all screens",
    technologies: ["React", "Taiwind", "Motion"],
    githubLink: "https://github.com/dipesh-ops/Startup_project",
    liveLink: "https://startup-project-dipesh-ops-projects.vercel.app/",
    image: image3 
  }
];

const Projects = () => {
  const theme = useSelector((state) => state.theme.mode);
  
  return (
    <section 
      id="projects" 
      className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
    >
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-4xl font-bold text-center mb-16 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}
        >
          My Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-lg overflow-hidden shadow-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}
              whileHover={{ y: -10 }}
            >
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                <img src={project.image} alt="no image" />
              </div>
              
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                  {project.title}
                </h3>
                <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className={`px-3 py-1 rounded-full text-sm ${theme === 'dark' ? 'bg-gray-600 text-blue-400' : 'bg-blue-100 text-blue-800'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`flex items-center ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                  >
                    <FaGithub className="mr-2" /> Code
                  </a>
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`flex items-center ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                  >
                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;