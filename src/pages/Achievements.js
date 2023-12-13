import React from 'react'
import './Achievement.css'
import ProjectCard from '../components/ProjectCard'

const Achievements = () => {
 
  return (
    <div className=" text-white py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8">About Me</h2>

        {/* Education Section */}
        <div className="bg-sky-200 p-6 rounded-lg shadow-md text-gray-800 mb-8">
          <h3 className="text-2xl font-bold mb-4">Education</h3>
          <div className="mb-4">
            <p className="text-lg font-semibold text-blue-500">Mawlana Bhasani Science and Technology University</p>
            <p className="text-sm">Subject: Information and Communication Technology (ICT)</p>
            <p className="text-sm">CGPA: 3.44</p>
            <p className="text-sm">Study Duration: 2019 - 2023</p>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="bg-sky-200 p-6 rounded-lg shadow-md text-gray-800 mb-8">
          <h3 className="text-2xl font-bold mb-4">Contact Information : </h3>
          <div className="mb-4">
            <p className="text-lg font-semibold text-blue-500">Address:</p>
            <p className="text-sm">Panchagarh</p>
          </div>
          <div className="mb-4">
            <p className="text-lg font-semibold text-blue-500">Phone:</p>
            <p className="text-sm">01771276400</p>
          </div>
          <div className="mb-4">
            <p className="text-lg font-semibold text-blue-500">Email:</p>
            <p className="text-sm">rizonrahat199@gmail.com</p>
          </div>
        </div>

        {/* Job Experience Section */}
        <div className="bg-sky-200 p-6 rounded-lg shadow-md text-gray-800">
          <h3 className="text-2xl font-bold mb-4">Job Experience</h3>
          <div className="mb-4">
            <p className="text-lg font-semibold text-blue-500">Company : jualo</p>
            <p className="text-sm">Position: Software Developer</p>
            <p className="text-sm">Duration: January 2023 - Present</p>
          </div>
          {/* Add more job experience entries as needed */}
        </div>
      </div>
    </div>
  )
}

export default Achievements
