import './App.css';
import NavBar from './components/NavBar';
import Hero from './pages/Hero';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="home">
        <Hero />
        <About />
      
        <Projects />
      
        <Contact />
        <Footer></Footer>
        
      </div>
    </div>
  );
}

export default App;
