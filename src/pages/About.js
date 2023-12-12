import React from 'react'
import './About.css'
import HTML from '../assets/html.png'
import jQuery from '../assets/jquery.png'

import VSCode from '../assets/vscode.png'
import Figma from '../assets/figma.png'
import ReactIcon from '../assets/react.png'

import NPMlogo from '../assets/npm.png'
import GitLogo from '../assets/git.png'
import GitHublogo from '../assets/github.png'
import GMeet from '../assets/meet.png'
import Zoomlogo from '../assets/zoom.webp'
import SkypeLogo from '../assets/skype.png'
import Canva from '../assets/canva.png'

import CSS from '../assets/css.png'
import BootStrap from '../assets/bootstrap.png'
import JavaScript from '../assets/javascript.png'

import PostMan from '../assets/postman.png'
import MySql from '../assets/mysqll.png'
import Firebase from '../assets/firebase.png'

import xD from '../assets/xdd.png'

import Teams from '../assets/TEAMS.png'
import XMind from '../assets/XMins.ico'

import Android from '../assets/androidstudio.png'

import Gitlab from '../assets/gitlab.svg'

import Drawio from '../assets/drawio.png'

import matlab from '../assets/matlab.png'

import Mui from '../assets/mui.png'
import Discord from '../assets/discord.png'
import Netlify from '../assets/netlify.svg'
import Heroku from '../assets/heroku_icon_130912.png'








const About = () => (
  <section className="about" id="about">
    <div className="about-me">
      <h2 className="title about-title">About Me</h2>
      <p className="paragraph about-para">
      
Hello, I am Rahatutzaman Rizon, currently pursuing my undergraduate degree in ICT at Mawlana Bhasani Science and Technology University. I am actively engaged in working on MERN Stack projects, showcasing my proficiency in full-stack development. With a strong foundation in ICT and a passion for problem-solving, I bring a dynamic skill set to the table. I am dedicated to leveraging technology to create innovative solutions and contribute positively to the field of information and communication technology.
        
      </p>
      <button class="bg-teal-300 hover:bg-sky-400 text-white font-bold py-2 px-4 rounded">
        <a
              href="https://drive.google.com/file/d/1c9K5_n0a-c0vL6y6ZamK5PMmdWXoq5ih/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Get CV
            </a>
  </button>
          
    </div>
    <div className="about-skills">
      <h2 className="skill-title">Clients & Collaborators</h2>
      <div className="skills">
        
      </div>
      <h2 className="skill-title">Front-End</h2>
      <div className="skills">
        <div className="skill">
          <img src={ReactIcon} alt="" />
          <p>React</p>
        </div>
        <div className="skill">
          <img src={JavaScript} alt="" />
          <p>JavaScript</p>
        </div>
        
        <div className="skill">
          <img src={HTML} alt="" />
          <p>HTML5</p>
        </div>
        <div className="skill">
          <img src={CSS} alt="" />
          <p>CSS3</p>
        </div>
        <div className="skill">
          <img src={jQuery} alt="" />
          <p>jQuery</p>
        </div>
        
        <div className="skill">
          <img src={BootStrap} alt="" />
          <p>Bootstrap</p>
        </div>
        <div className="skill">
          <img src={Mui} alt="" />
          <p>MUI</p>
        </div>
      </div>
      <h2 className="skill-title">Back-End</h2>
      <div className="skills">
       
        
       
        <div className="skill">
          <img src={MySql} alt="" />
          <p>MySQL</p>
        </div>
      
       

        <div className="skill">
          <img src={Firebase} alt="" />
          <p>Firebase</p>
        </div>
      </div>
      

      
      <h2 className="skill-title">Version Control & Deployment</h2>
      <div className="skills">
        <div className="skill">
          <img src={GitLogo} alt="" />
          <p>Git</p>
        </div>
        <div className="skill">
          <img src={GitHublogo} alt="" />
          <p>GitHub</p>
        </div>
        <div className="skill">
          <img src={Gitlab} alt="" />
          <p>GitLab</p>
        </div>
       
        <div className="skill">
          <img src={Netlify} alt="" />
          <p>Netlify</p>
        </div>
        <div className="skill">
          <img src={Heroku} alt="" />
          <p>Heroku</p>
        </div>
      </div>
      <h2 className="skill-title">Tools</h2>
      <div className="skills">
        <div className="skill">
          <img src={VSCode} alt="" />
          <p>VS Code</p>
        </div>
        
        <div className="skill">
          <img src={matlab} alt="" />
          <p>Matlab</p>
        </div>

        <div className="skill">
          <img src={PostMan} alt="" />
          <p>Postman</p>
        </div>
        <div className="skill">
          <img src={Android} alt="" />
          <p>Android Studio</p>
        </div>
        <div className="skill">
          <img src={NPMlogo} alt="" />
          <p>npm</p>
        </div>
        
      </div>
      <h2 className="skill-title">Design</h2>
      <div className="skills">
        <div className="skill">
          <img src={Canva} alt="" />
          <p>Canva</p>
        </div>
        <div className="skill">
          <img src={Figma} alt="" />
          <p>Figma</p>
        </div>
        <div className="skill">
          <img src={xD} alt="" />
          <p>Adobe XD</p>
        </div>
        <div className="skill">
          <img src={XMind} alt="" />
          <p>XMind </p>
        </div>
        <div className="skill">
          <img src={Drawio} alt="" />
          <p>draw.io</p>
        </div>
      </div>
      <h2 className="skill-title">Communication</h2>
      <div className="skills">
      <div className="skill">
          <img src={Discord} alt="" />
          <p>Discord</p>
        </div>
        <div className="skill">
          <img src={Teams} alt="" />
          <p>Teams</p>
        </div>

        <div className="skill">
          <img src={SkypeLogo} alt="" />
          <p>Skype</p>
        </div>
        <div className="skill">
          <img src={GMeet} alt="" />
          <p>Google Meet</p>
        </div>
        <div className="skill">
          <img src={Zoomlogo} alt="" />
          <p>Zoom</p>
        </div>
      </div>
      <h2 className="skill-title">Soft Skills</h2>
      <div className="skills">
        <p className="soft-skill">Critical Thinking</p>
        <p className="soft-skill">Communication</p>
        <p className="soft-skill">Teamwork</p>
        <p className="soft-skill">Collaboration</p>
        <p className="soft-skill">Creativity</p>

        <p className="soft-skill">Leadership</p>
        <p className="soft-skill">Problem Solving</p>
        <p className="soft-skill">Time Management</p>
        <p className="soft-skill">Emotional Intelligence</p>
        <p className="soft-skill">Adaptability</p>
      </div>
    
    </div>
    
  </section>
)

export default About
