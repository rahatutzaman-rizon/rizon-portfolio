import React from 'react'
import './Projects.css'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  // Manually define the project data
  const projectData = [
    {
      image_url:
        'https://i.ibb.co/s1GGsqZ/Screenshot-46.png',
      project_name: "Pet Adoption Corner",
      description:
        'A user-friendly pet adoption platform allows anyone to easily adopt pets, promoting inclusivity in providing homes for animals in need. The system also facilitates pet donations, enabling individuals to contribute to the welfare of animals by giving away their pets for adoption. Incorporated within is a robust Donation Campaign System, encouraging financial support for the care and well-being of the animals. Admin-based user security measures ensure the system s integrity, providing a secure environment for both users and the animals involved in the adoption process.',
      
        tech_stack: ['React', 'Tanstack', 'Express', 'NodeJs','Firebase','Mongodb'],
      source_link:
        'https://pet-adoption-30ae0.web.app/',
    },
    {
      image_url: 'https://i.ibb.co/5vz3p7T/Screenshot-48.png',
      project_name: 'Boi Bazar',
      description:
        "A modern book library system incorporates features such as categorized organization for efficient browsing, a robust book selection interface allowing users to search and explore titles, and a submission date tracking system for monitoring the library growth  Additionally an authentication system ensures secure access, with varying roles for administrators, librarians, and users. User profiles, checkout and return functionality, reservations, and notification systems enhance the overall user experience, creating a comprehensive and user-friendly platform for book enthusiasts. ",
      tech_stack: ['React', 'Mongodb', 'NodeJs', 'Express'],
      source_link:
        'https://dainty-choux-b6b746.netlify.app/',
    },

    {
      image_url: 'https://i.ibb.co/Qk9Gnjg/Screenshot-49.png',
      project_name: 'Gadget Finder',
      description:
       `"Gadget Finder" is your go-to website for exploring a curated selection of electronics from top-notch brands. Easily discover detailed information about various products, empowering users to make informed decisions. The platform seamlessly allows users to add desired items to their cart, streamlining the shopping experience. With a focus on electronics, "Gadget Finder" provides a convenient and comprehensive destination for tech enthusiasts to explore, compare, and purchase cutting-edge products.`,
      tech_stack: ['React', 'Tanstack', 'Express', 'NodeJs','Firebase','Mongodb'],
      source_link:
        `https://technovative-store-c3ad5.web.app/`,
    },
    
   
     

  
    


    // Add more projects as needed
  ]

  return (
    <div className="projects" id="projects">
      <h1 className="title projects-title">Featured Projects</h1>
      <p className="projects-para">
        Deployed  prototypes, websites.
        Collaborated in projects with 10+ clients.  Feel free to contact me for any inquiries.
      </p>
      <div className="projects-container">
        {projectData.map((project, id) => (
          <ProjectCard
            key={id}
            image={project.image_url}
            title={project.project_name}
            description={project.description}
            stacks={project.tech_stack}
            source_link={project.source_link}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
