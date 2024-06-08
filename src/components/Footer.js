import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="text-white">
            <h3 className="text-xl font-bold mb-2">My Portfolio</h3>
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <i className="fab fa-github fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;