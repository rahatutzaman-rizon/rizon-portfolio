import './App.css';
import NavBar from './components/NavBar';
import Hero from './pages/Hero';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';

import Blog from './pages/Blog';
import AboutSection from './pages/Achievements';
import ContactForm from './pages/Email';


function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="home">
        <Hero />
        <About />
      
        <Projects />
        <Blog></Blog>
     <AboutSection></AboutSection>
        <Contact />
        <ContactForm></ContactForm>
        <Footer></Footer>
        
      </div>
    </div>
  );
}

export default App;
