import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { MdWork, MdSchool } from 'react-icons/md';
import { SiCodechef, SiLeetcode, SiGithub } from 'react-icons/si';

const ProfilePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const profileData = {
    "personalInfo": {
      "name": "Rahatutzaman Rizon",
      "title": "Full Stack Developer || Software Developer",
      "email": "rizonrahat199@gmail.com",
      "phone": "+880 1771276400 (WhatsApp)",
      "location": { "city": "Tangail, Dhaka", "country": "Bangladesh" },
      "summary": "As a software developer seeking an entry-level role, with a focus on applying problem-solving skills to create efficient and innovative solutions. Dedicated to contributing technical expertise in a collaborative environment.",
      "links": {
        "linkedin": "https://www.linkedin.com/in/rahatutzamanrizon",
        "github": "https://github.com/rahatutzaman-rizon",
      }
    },
    "workExperience": [
      {
        "title": "Project Associate",
        "company": "Farhana's BrainStation",
        "location": "Bangladesh",
        "startDate": "2024-05",
        "endDate": null,
        "current": true,
        "responsibilities": [
          "Handle projects from start to finish, delivering quality results on time.",
          "Work with cross-functional teams, organize tasks, and enable communication.",
          "Use project management tools, track progress, and follow best practices.",
          "Study project needs, make plans, and give updates to stakeholders."
        ]
      },
      {
        "title": "Intern Software Developer",
        "company": "Business Automation Ltd",
        "location": "Bangladesh",
        "startDate": "2024-02",
        "endDate": "2024-04",
        "current": false,
        "responsibilities": [
          "Complete a 3-month internship focused on streamlining operations.",
          "Develop skills in SQL, frameworks, testing, and SDLC methodologies.",
          "Contribute to team projects, aligning with company goals.",
          "Apply knowledge to real-world projects."
        ]
      }
    ],
    "education": {
      "degree": "B.Sc. in Information and Communication Technology",
      "institution": "Mawlana Bhashani Science and Technology University",
      "period": "2019-2023",
      "gpa": 3.46
    },
    "problemSolving": {
      "platforms": ["CodeChef", "Beecrowd", "LeetCode", "GitHub"]
    }
  };

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const fadeIn = useSpring({
    opacity: isLoading ? 0 : 1,
    from: { opacity: 0 },
    config: { duration: 1000 }
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <animated.div style={fadeIn} className="text-3xl font-bold text-blue-400">
          Loading...
        </animated.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
     

      <main className="container mx-auto px-4 py-12">
        <animated.section style={fadeIn} className="bg-gray-800 rounded-lg shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold mb-4 text-blue-400">About Me</h2>
          <p className="text-gray-300 mb-6 text-lg">{profileData.personalInfo.summary}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-300">
            <div className="flex items-center">
              <FaEnvelope className="mr-2 text-blue-400" /> {profileData.personalInfo.email}
            </div>
            <div className="flex items-center">
              <FaPhoneAlt className="mr-2 text-blue-400" /> {profileData.personalInfo.phone}
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-blue-400" /> {profileData.personalInfo.location.city}, {profileData.personalInfo.location.country}
            </div>
          </div>
        </animated.section>

        <animated.section style={fadeIn} className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-blue-400 flex items-center">
            <MdWork className="mr-2" /> Career Highlights
          </h2>
          <VerticalTimeline lineColor={'#60A5FA'}>
            {profileData.workExperience.map((job, index) => (
              <VerticalTimelineElement
                key={job.company}
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(31, 41, 55)', color: '#fff', boxShadow: '0 3px 0 #60A5FA' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(31, 41, 55)' }}
                date={`${job.startDate} - ${job.current ? 'Present' : job.endDate}`}
                iconStyle={{ background: 'rgb(96, 165, 250)', color: '#fff' }}
                icon={<MdWork />}
              >
                <h3 className="vertical-timeline-element-title text-xl font-semibold text-blue-400">{job.title}</h3>
                <h4 className="vertical-timeline-element-subtitle text-gray-300">{job.company} | {job.location}</h4>
                <ul className="list-disc list-inside text-gray-300 mt-2">
                  {job.responsibilities.map((resp, i) => <li key={i}>{resp}</li>)}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </animated.section>

        <animated.section style={fadeIn} className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-blue-400 flex items-center">
            <MdSchool className="mr-2" /> Education
          </h2>
          <div className="bg-gray-800 rounded-lg shadow-xl p-6">
            <h3 className="text-2xl font-semibold text-blue-400">{profileData.education.degree}</h3>
            <p className="text-gray-300 mb-2 text-lg">{profileData.education.institution}</p>
            <p className="text-gray-400">{profileData.education.period}</p>
            <p className="text-gray-300 mt-2 font-semibold">GPA: {profileData.education.gpa}</p>
          </div>
        </animated.section>

        <animated.section style={fadeIn}>
    <h2 className="text-3xl font-bold mb-6 text-blue-400">Problem Solving Platforms</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {profileData.problemSolving.platforms.map((platform) => (
        <a
          key={platform}
          href={`https://www.${platform.toLowerCase()}.com/username`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 rounded-lg shadow-xl p-4 flex flex-col items-center justify-center hover:bg-gray-700 transition-colors transform hover:scale-105 transition-transform duration-200"
        >
          {platform === 'CodeChef' && <SiCodechef className="text-5xl mb-2 text-blue-400" />}
          {platform === 'LeetCode' && <SiLeetcode className="text-5xl mb-2 text-blue-400" />}
          {platform === 'GitHub' && <SiGithub className="text-5xl mb-2 text-blue-400" />}
          {platform === 'Beecrowd' && <span className="text-5xl mb-2 text-blue-400">🐝</span>}
          <span className="text-gray-300 font-semibold">{platform}</span>
        </a>
      ))}
    </div>
  </animated.section>

       
      </main>

      <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 {profileData.personalInfo.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProfilePage;