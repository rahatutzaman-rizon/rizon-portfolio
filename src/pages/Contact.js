import React from 'react'
import './Contact.css'

const Contact = () => (
 

  <div className="contact" id="contact">
    <div className="footer-left">
      <h1>
       Want a  <br />
        Project 
        <br /> 
      </h1>
      
    </div>
    <div className="footer-right">
      <h3>I'M ALWAYS INTERESTED ABOUT</h3>
      <div className="interests">
        <p>Multimedia</p>
        <p>Augmented Reality</p>
        <p>TV Series</p>
        <p>Cricket</p>

        <p>Photography</p>
        <p>React</p>
       
       
      </div>

      <hr />

      <h3>MINDING A PROJECT?</h3>
      <button class="bg-blue-300 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded">
   Contact Me
  </button>
     
      <hr></hr>
      <div className="social-icons">
        <a href="https://github.com/rahatutzaman-rizon" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github" />
        </a>
        <a
          href="https://www.linkedin.com/in/rahatutzaman-rizon-373529172/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin-in" />
        </a>

     
        <a
          href="https://www.youtube.com/@criedfizcken6200"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-youtube" />
        </a>
        <a
          href="https://discord.com/channels/1027879533266878485/1051541409972363364"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-discord" />
        </a>
        
       
       
      </div>

      <hr />
    </div>
  </div>
)

export default Contact
