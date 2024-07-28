import './App.css';

import Hero from './pages/Hero';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


import AboutSection from './pages/Achievements';
import ContactForm from './pages/Email';
import ProfilePage from './pages/ProfilePage';


function App() {
  return (
    <div className="App">
      
      <div className="home">
        <Hero />
        <About />
      
        <Projects />
        <ProfilePage></ProfilePage>
     <AboutSection></AboutSection>
        <Contact />
        <ContactForm></ContactForm>
       
      </div>
    </div>
  );
}

export default App;
