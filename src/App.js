import './App.css';

import Hero from './pages/Hero';
import About from './pages/About';

import Contact from './pages/Contact';


import AboutSection from './pages/Achievements';
import ContactForm from './pages/Email';
import ProfilePage from './pages/ProfilePage';
import AllProjects from './pages/AllProjects';


function App() {
  return (
    <div className="App">
      
      <div className="home">
        <Hero />
        <About />
      
       <AllProjects></AllProjects>
        <ProfilePage></ProfilePage>
     <AboutSection></AboutSection>
        <Contact />
        <ContactForm></ContactForm>a
       
      </div>
    </div>
  );
}

export default App;
