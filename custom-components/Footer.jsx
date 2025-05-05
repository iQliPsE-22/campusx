import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 pb-20 lg:pb-12 px-4 md:px-8 border-t border-white/10 bg-black">
    <div className="py-16 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-blue-500">S</span>TAY UPDATED
          </h2>
          <p className="text-gray-300 mb-6">Subscribe to our newsletter for exclusive deals and campus style tips</p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow bg-gray-900 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
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
