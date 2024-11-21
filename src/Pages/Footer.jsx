import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-10 px-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <img className="mb-4 w-[150px] h-[50px]" src="https://expertbuddy.com/assets/images/footerLogo.png" alt="" />
            <ul className="space-y-2">
              <li><a href="#about" className="hover:underline">About Us</a></li>
              <li><a href="#team" className="hover:underline">Our Team</a></li>
              <li><a href="#careers" className="hover:underline">Careers</a></li>
              <li><a href="#blog" className="hover:underline">Blog</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-lg font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#help" className="hover:underline">Help Center</a></li>
              <li><a href="#faq" className="hover:underline">FAQs</a></li>
              <li><a href="#contact" className="hover:underline">Contact Us</a></li>
              <li><a href="#terms" className="hover:underline">Terms of Service</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <ul className="space-y-2">
              <li><a href="#facebook" className="hover:underline">Facebook</a></li>
              <li><a href="#twitter" className="hover:underline">Twitter</a></li>
              <li><a href="#instagram" className="hover:underline">Instagram</a></li>
              <li><a href="#linkedin" className="hover:underline">LinkedIn</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-lg font-bold mb-4">Subscribe</h4>
            <p className="text-sm mb-4">
              Subscribe to our newsletter to stay updated.
            </p>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10"></div>

        {/* Bottom Footer */}
        <div className="flex justify-between items-center mt-5">
          <p className="text-sm">
            © {new Date().getFullYear()} Smart Buddy. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#privacy" className="text-sm hover:underline">
              Privacy Policy
            </a>
            <a href="#terms" className="text-sm hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
