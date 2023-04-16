import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center sm:justify-between">
          <div className="flex items-center mb-4 sm:mb-0">
            <img
              src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
              alt="Netflix Logo"
              className="h-12 mr-4"
            />
          </div>
          <ul className="flex items-center flex-wrap sm:flex-nowrap justify-center sm:justify-start">
            <li className="mr-4">
              <a href="#about" className="text-gray-400 hover:text-white">
                About Us
              </a>
            </li>
            <li className="mr-4">
              <a href="#contact" className="text-gray-400 hover:text-white">
                Contact Us
              </a>
            </li>
            <li className="mr-4">
              <a href="#terms" className="text-gray-400 hover:text-white">
                Terms of Use
              </a>
            </li>
            <li className="mr-4">
              <a href="#privacy" className="text-gray-400 hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li className="mr-4">
              <a href="#cookie" className="text-gray-400 hover:text-white">
                Cookie Preferences
              </a>
            </li>
            <li className="mr-4">
              <a href="#corporate" className="text-gray-400 hover:text-white">
                Corporate Information
              </a>
            </li>
            <li className="mr-4">
              <a href="#speed" className="text-gray-400 hover:text-white">
                Speed Test
              </a>
            </li>
            <li>
              <a href="#legal" className="text-gray-400 hover:text-white">
                Legal Notices
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-4 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Netflix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
