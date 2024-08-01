import React, { useState, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';
import { MdWork, MdSchool } from 'react-icons/md';
import { SiCodechef, SiLeetcode } from 'react-icons/si';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const profileData = {
    personalInfo: {
      name: "Rahatutzaman Rizon",
      title: "Full Stack Developer || Software Developer",
      email: "rizonrahat199@gmail.com",
      phone: "+880 1771276400 (WhatsApp)",
      location: { city: "Badda, Dhaka", country: "Bangladesh" },
      summary: "As a software developer seeking an entry-level role, with a focus on applying problem-solving skills to create efficient and innovative solutions. Dedicated to contributing technical expertise in a collaborative environment.",
      links: {
        linkedin: "https://www.linkedin.com/in/rahatutzamanrizon",
        github: "https://github.com/rahatutzaman-rizon",
        website: "https://rahatutzaman-rizon-portfolio.vercel.app/"
      }
    },
    workExperience: [
      {
        title: "Project Associate",
        company: "Farhana's BrainStation",
        location: "Bangladesh",
        startDate: "2024-05",
        endDate: null,
        current: true,
        responsibilities: [
          "Handle projects from start to finish, delivering quality results on time.",
          "Work with cross-functional teams, organize tasks, and enable communication.",
          "Use project management tools, track progress, and follow best practices.",
          "Study project needs, make plans, and give updates to stakeholders."
        ]
      },
      {
        title: "Intern Software Developer",
        company: "Business Automation Ltd",
        location: "Bangladesh",
        startDate: "2024-02",
        endDate: "2024-04",
        current: false,
        responsibilities: [
          "Complete a 3-month internship focused on streamlining operations.",
          "Develop skills in SQL, frameworks, testing, and SDLC methodologies.",
          "Contribute to team projects, aligning with company goals.",
          "Apply knowledge to real-world projects."
        ]
      }
    ],
    education: [
      {
        degree: "B.Sc. in Information and Communication Technology",
        institution: "Mawlana Bhashani Science and Technology University",
        period: "2019-2023",
        gpa: 3.46,
        achievements: [
          "Graduated with honors",
          "Completed thesis on AI-driven software optimization"
        ]
      },
      {
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Dinajpur Govt College",
        period: "2016-2018",
        result: "GPA 4.75 (out of 5.00)",
        achievements: [
          "Achieved perfect GPA",
          "Science Club Member"
        ]
      },
      {
        degree: "Secondary School Certificate (SSC)",
        institution: "BPMSC ",
        period: "2014-2016",
        result: "GPA 5.00 (out of 5.00)",
        achievements: [
          "Board Merit Scholarship recipient",
          "Best performer in Mathematics Olympiad",
                    "Achieved perfect GPA"
        ]
      }
    ],
    problemSolving: {
      platforms: [
        "https://www.codechef.com/users/redwantamim525",
        "https://leetcode.com/u/rizon525/"
      ]
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

  const slideUp = useSpring({
    transform: isLoading ? 'translateY(50px)' : 'translateY(0)',
    opacity: isLoading ? 0 : 1,
    from: { transform: 'translateY(50px)', opacity: 0 },
    config: config.gentle
  });

  const contactItems = [
    { icon: <FaEnvelope className="mr-3 text-blue-400 text-xl" />, text: profileData.personalInfo.email },
    { icon: <FaPhoneAlt className="mr-3 text-blue-400 text-xl" />, text: profileData.personalInfo.phone },
    { icon: <FaMapMarkerAlt className="mr-3 text-blue-400 text-xl" />, text: `${profileData.personalInfo.location.city}, ${profileData.personalInfo.location.country}` },
    {
      icon: <FaGlobe className="mr-3 text-blue-400 text-xl" />,
      text: (
        <a href={profileData.personalInfo.links.website} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
          My Website
        </a>
      )
    }
  ];

  const platformIcons = {
    codechef: <SiCodechef className="mr-3 text-blue-400 text-xl" />,
    leetcode: <SiLeetcode className="mr-3 text-blue-400 text-xl" />
  };

  const getPlatformIcon = (url) => {
    if (url.includes('codechef')) return platformIcons.codechef;
    if (url.includes('leetcode')) return platformIcons.leetcode;
    return <FaGlobe className="mr-3 text-blue-400 text-xl" />;
  };

  const getPlatformName = (url) => {
    if (url.includes('codechef')) return 'CodeChef';
    if (url.includes('leetcode')) return 'LeetCode';
    return 'Platform';
  };

  const platformLinks = profileData.problemSolving.platforms.map((platform, index) => (
    <animated.div key={index} style={useSpring({ from: { opacity: 0, transform: 'translateY(20px)' }, to: { opacity: 1, transform: 'translateY(0)' }, delay: index * 200 })} className="flex items-center bg-navy-700 rounded-lg p-3 shadow-md hover:bg-navy-600 transition-colors">
      {getPlatformIcon(platform)}
      <a href={platform} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
        {getPlatformName(platform)}
      </a>
    </animated.div>
  ));

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black">
        <animated.div style={fadeIn} className="text-3xl font-bold text-blue-400">
          Loading...
        </animated.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-gray-100">
      <header className="bg-gradient-to-r from-black to-gray-900 shadow-2xl py-8">
        <animated.div style={slideUp} className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-blue-400 mb-2">{profileData.personalInfo.name}</h1>
          <p className="text-2xl text-gray-300">{profileData.personalInfo.title}</p>
        </animated.div>
      </header>
  
      <main className="container mx-auto px-4 py-12">
        <animated.section style={fadeIn} className="bg-gradient-to-br from-black to-gray-900 rounded-xl shadow-2xl p-8 mb-12 hover:shadow-blue-900/50 transition-shadow duration-300">
          <h2 className="text-3xl font-bold mb-6 text-blue-400 border-b border-blue-400 pb-2">About Me</h2>
          <p className="text-gray-300 leading-relaxed">{profileData.personalInfo.summary}</p>
        </animated.section>
  
        <animated.section style={fadeIn} className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-blue-400 border-b border-blue-400 pb-2">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-300">
            {contactItems.map((item, index) => (
              <div key={index} className="flex items-center bg-black rounded-lg p-3 shadow-md hover:bg-gray-800 transition-colors">
                {item.icon}
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </animated.section>
  
        <animated.section style={fadeIn} className="mb-12">
          <h2 className="text-3xl font-bold mb-6 bg-sky-800 text-blue-400 border-b border-blue-400 pb-2">Work Experience</h2>
          <VerticalTimeline>
            {profileData.workExperience.map((experience, index) => (
              <VerticalTimelineElement
                key={index}
                date={`${experience.startDate} - ${experience.current ? 'Present' : experience.endDate}`}
                iconStyle={{ background: 'rgb(21, 101, 192)', color: '#fff' }}
                icon={<MdWork />}
              >
                <h3 className="vertical-timeline-element-title text-xl font-bold text-blue-500">{experience.title}</h3>
                <h4 className="vertical-timeline-element-subtitle text-lg text-blue-500">{experience.company} - {experience.location}</h4>
                <ul className="text-sky-300 mt-4 space-y-2 list-disc list-inside">
                  {experience.responsibilities.map((responsibility, i) => (
                    <li key={i}>{responsibility}</li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </animated.section>
  
        <animated.section style={fadeIn} className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-blue-400 border-b border-blue-400 pb-2">Education</h2>
          <VerticalTimeline>
            {profileData.education.map((edu, index) => (
              <VerticalTimelineElement
                key={index}
                date={edu.period}
                iconStyle={{ background: 'rgb(21, 101, 192)', color: '#fff' }}
                icon={<MdSchool />}
              >
                <h3 className="vertical-timeline-element-title text-xl font-bold text-blue-400  bg-sky-800">{edu.degree}</h3>
                <h4 className="vertical-timeline-element-subtitle text-lg  ">{edu.institution}</h4>
                <p className="text-sky-300 mt-2">GPA: {edu.gpa || edu.result}</p>
                <ul className="text-sky-300 mt-4 space-y-2 list-disc list-inside">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </animated.section>
  
        <animated.section style={fadeIn}>
          <h2 className="text-3xl font-bold mb-6 text-blue-400 border-b border-blue-400 pb-2">Problem Solving Profiles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-gray-300">
            {platformLinks}
          </div>
        </animated.section>
      </main>
      
      <footer className="bg-black py-8">
        <div className="container mx-auto px-4 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Rahatutzaman Rizon. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
  
};

export default ProfilePage;
