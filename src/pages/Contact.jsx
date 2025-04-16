import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaEnvelope, FaInstagram, FaLinkedin, FaPhoneAlt, FaYoutube } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-gradient-to-b from-primary-50 to-white min-h-screen pt-16">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-center">Get in Touch</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="contact-info-item">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <FaPhoneAlt className="text-primary-600 text-lg" />
                  </div>
                  <a href="tel:+917387311923" className="hover:text-primary-600">
                    +91 7387311923
                  </a>
                </div>
                <div className="contact-info-item">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <FaEnvelope className="text-primary-600 text-lg" />
                  </div>
                  <a
                    href="mailto:xyz@gmail.com"
                    className="hover:text-primary-600"
                  >
                   xyz@gmail.com
                  </a>
                </div>

                <div className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
                  <div className="flex space-x-6">
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon bg-pink-100 text-pink-600 hover:bg-pink-200"
                    >
                      <FaInstagram className="text-xl" />
                    </a>
                    <a
                      href="https://www.youtube.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon bg-red-100 text-red-600 hover:bg-red-200"
                    >
                      <FaYoutube className="text-xl" />
                    </a>
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon bg-blue-100 text-blue-600 hover:bg-blue-200"
                    >
                      <FaLinkedin className="text-xl" />
                    </a>
                  </div>
                </div>

                <div className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>Monday - Friday: 11:00 AM - 5:00 PM</p>
                    <p>Saturday: By Appointment</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input"
                  />
                  <p className="phi-warning">
                    Please do not submit any Protected Health Information (PHI).
                  </p>
                </div>

                <div>
                  <button
                    type="submit"
                    className="btn-primary w-full py-3 text-lg font-medium"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}