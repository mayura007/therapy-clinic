import { Link } from 'react-router-dom';
import { FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-semibold text-white mb-4">
              Kuhu Kulkarni
            </h3>
            <p className="text-gray-400 mb-4">Your journey. Our Compassion.</p>
            <div className="space-y-2">
              <p className="text-gray-400">Phone: +919822479011</p>
              <p className="text-gray-400">Email: kuhukulkarni.k@gmail.com</p>
              <p className="text-gray-400">Hours: Monday-Friday, 11am-5pm</p>
            </div>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://www.instagram.com/kuhuverse/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-2xl"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/@kuhuverse"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-2xl"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.linkedin.com/in/kuhu-kulkarni"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-2xl"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-400 hover:text-white">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/appointments" className="text-gray-400 hover:text-white">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/forms" className="text-gray-400 hover:text-white">
                  Forms
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Kuhu Kulkarni. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}