import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: 'What types of therapy do you offer?',
    answer: 'We offer individual counseling, coaching, and Cognitive Stimulation Therapy. Our services are tailored to meet your specific needs and goals.',
  },
  {
    question: 'How long are the sessions?',
    answer: 'Regular counseling and coaching sessions are 50 minutes long. Cognitive Stimulation Therapy sessions are 45-60 minutes.',
  },
  {
    question: 'What are your fees and payment methods?',
    answer: 'Session fees vary depending on the type of service. We accept various payment methods including bank transfer and UPI. Please contact us for detailed pricing information.',
  },
  {
    question: 'Do you offer online sessions?',
    answer: 'Yes, we offer secure online therapy sessions through video conferencing platforms. This allows you to receive support from the comfort of your home.',
  },
  {
    question: 'How do I prepare for my first session?',
    answer: 'Before your first session, please complete the initial consultation form. Come prepared to discuss your concerns and goals. The first session is primarily about getting to know each other and establishing your needs.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'We require 24 hours notice for cancellations. Late cancellations or missed sessions may be subject to a fee.',
  },
  {
    question: 'Is everything I share confidential?',
    answer: 'Yes, all sessions are strictly confidential. However, there are legal limits to confidentiality if there is risk of harm to yourself or others, or in cases of court orders.',
  },
  {
    question: 'How long will I need therapy?',
    answer: "The duration of therapy varies for each individual. We will regularly review your progress and adjust the treatment plan accordingly. Some clients benefit from short-term therapy (8-12 sessions), while others prefer longer-term support.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-gradient-to-b from-primary-50 to-white min-h-screen pt-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 text-center mb-12">
            Find answers to common questions about our services and therapy process.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <button
                  className="w-full text-left px-6 py-4 focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <svg
                      className={`w-6 h-6 transform transition-transform ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                <div
                  className={`px-6 pb-4 transition-all duration-200 ease-in-out ${
                    openIndex === index ? 'block opacity-100' : 'hidden opacity-0'
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Still Have Questions?</h2>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Please feel free to contact us.
            </p>
            <div className="flex space-x-4">
              <Link to="/contact" className="btn-primary">
                Contact Us
              </Link>
              <Link to="/appointments" className="btn-secondary">
                Book a Consultation
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}