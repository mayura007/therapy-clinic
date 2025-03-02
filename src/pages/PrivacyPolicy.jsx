import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function PrivacyPolicy() {
  return (
    <div className="bg-gradient-to-b from-primary-50 to-white min-h-screen pt-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-center">Privacy & Policy</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p className="text-gray-600">
                At Kuhu Kulkarni Psychology, we take your privacy seriously. This
                privacy policy explains how we collect, use, and protect your
                personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Name and contact information</li>
                <li>Health and medical history</li>
                <li>Session notes and treatment plans</li>
                <li>Payment information</li>
                <li>Emergency contact details</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <p className="text-gray-600">We use your information to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mt-2">
                <li>Provide therapy and counseling services</li>
                <li>Maintain accurate records of your care</li>
                <li>Contact you about appointments</li>
                <li>Process payments</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Confidentiality</h2>
              <p className="text-gray-600">
                All information shared during therapy sessions is confidential.
                However, there are some exceptions required by law, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mt-2">
                <li>Risk of harm to self or others</li>
                <li>Suspected abuse of children or vulnerable adults</li>
                <li>Court orders</li>
                <li>Insurance requirements (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
              <p className="text-gray-600">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mt-2">
                <li>Access your personal information</li>
                <li>Request corrections to your information</li>
                <li>Request deletion of your information</li>
                <li>Withdraw consent for information sharing</li>
                <li>File a complaint about privacy practices</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-6">
                If you have any questions about this privacy policy or our
                practices, please contact us at:
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-gray-600">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <FaPhoneAlt className="text-primary-600 text-lg" />
                  </div>
                  <a href="tel:+919822479011" className="hover:text-primary-600 text-lg">
                    +91 98224 79011
                  </a>
                </div>
                <div className="flex items-center space-x-4 text-gray-600">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <FaEnvelope className="text-primary-600 text-lg" />
                  </div>
                  <a href="mailto:kuhukulkarni.k@gmail.com" className="hover:text-primary-600 text-lg">
                    kuhukulkarni.k@gmail.com
                  </a>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}