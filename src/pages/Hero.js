import React from "react";
import "./Hero.css";
import { Link } from "react-scroll";
import image from "../assets/rizon.jpg";


const Hero = () => (
  <div className="hero my-12" id="home">
    <div className="hero-overlay">
      <div className="description">
        <h2 className="title">Hlw I am Rahatutzaman</h2>

        <h3 className="tagline my-2">
          I do  Fullstack Dev, Ui/Ux, Photography and learning new technology.
        </h3>
        
       
          
        
        <p className="paragraph">
         

        Rahatutzaman Rizon, a skilled web developer with expertise in MERN Stack projects and a strong problem-solving acumen.
        . Get in touch, and let's embark on this
          exciting journey together!
        </p>
        <div className="">
        <button class="bg-teal-300 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded">
        <a
              href="https://drive.google.com/file/d/1iFguqENp8LL63XYco26W61HeR-5bWemZ/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Get CV
            </a>
  </button>
          
          
        </div>
      </div>
      <img src={image} alt="rizon" className="hero-image rounded" />
    </div>
    <div>
      <p align="left">
        {" "}
        <img
        className="rounded"
          src="https://komarev.com/ghpvc/?username=itsfiz&label=Profile%20views&color=ce3636&style=flat"
          alt="rizon"
        />{" "}
      </p>
    </div>
  
  </div>
);

export default Hero;
