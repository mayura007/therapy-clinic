import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

export default function About() {
  return (
    <div className="bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="aspect-square rounded-lg bg-gray-200 mb-6">
                  {/* Placeholder for therapist photo */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    Therapist Photo
                  </div>
                </div>
                <div className="flex justify-center space-x-6 mb-6">
                  <a
                    href="https://www.instagram.com/xyz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl text-pink-600 hover:text-pink-700"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://www.youtube.com/xyz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl text-red-600 hover:text-red-700"
                  >
                    <FaYoutube />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/xyz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl text-blue-600 hover:text-blue-700"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
              
              <div>
                <h1 className="text-4xl font-bold mb-6">About Me</h1>
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">
                      Professional Background
                    </h2>
                    <p className="text-gray-600 mb-4">
                      With an M.A. in Psychology (Clinical Specialization) from
                      Savitribai Phule Pune University, I bring over a year of
                      experience in clinical psychology and neuropsychology, having
                      worked under a neuropsychologist at Poona Hospital.
                    </p>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">My Approach</h2>
                    <p className="text-gray-600 mb-4">
                      I believe in creating a supportive and understanding environment
                      where you can explore your thoughts and feelings freely. My
                      approach combines evidence-based techniques with compassionate
                      care to help you achieve your personal growth goals.
                    </p>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Connect With Me</h2>
                    <p className="text-gray-600 mb-4">
                      Follow me on social media for daily wellness tips, mental health
                      awareness content, and updates about my practice. Join our growing
                      community of mindful individuals working towards better mental health.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}