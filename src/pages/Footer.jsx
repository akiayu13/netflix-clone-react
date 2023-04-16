import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
              alt="Netflix Logo"
              className="h-12 mr-4"
            />
          </div>
          <ul className="flex items-center">
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
            <li>
              <a href="#privacy" className="text-gray-400 hover:text-white">
                Privacy Policy
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
