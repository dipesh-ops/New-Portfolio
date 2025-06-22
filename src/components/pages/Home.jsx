import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";


const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;