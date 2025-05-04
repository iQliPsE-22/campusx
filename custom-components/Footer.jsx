import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 md:px-8 border-t border-white/10 bg-black">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">CampusX Space</h3>
          <p className="text-gray-400">
            Your all-in-one platform for campus life.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4">Services</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Assignments</li>
            <li>Buy & Sell</li>
            <li>Skill Development</li>
            <li>Campus Events</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Company</h4>
          <ul className="space-y-2 text-gray-400">
            <li>About Us</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Connect</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Contact Us</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Discord</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} CampusX Space. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
