import { motion } from 'framer-motion';

const forms = [
  {
    title: 'Initial Consultation Form',
    description:
      'Please complete this form before your first appointment. It helps us understand your background and current concerns.',
    googleFormsUrl: '#', // Replace with actual Google Forms link
  }
];

export default function Forms() {
  return (
    <div className="bg-gradient-to-b from-primary-50 to-white min-h-screen pt-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-center">Client Forms</h1>
          <p className="text-gray-600 text-center mb-12">
            Please complete the initial consultation form before your first appointment.
            This helps us better understand your needs and provide the best possible care.
          </p>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">{forms[0].title}</h2>
            <p className="text-gray-600 mb-6">{forms[0].description}</p>
            
            <div className="space-y-6">
              <a
                href={forms[0].googleFormsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center"
              >
                Fill Out Form Online
              </a>
              
              <p className="phi-warning text-center">
                Please do not submit any Protected Health Information (PHI) through this form.
                Sensitive information will be collected during your session.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Important Notes</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Please fill out the form completely and accurately</li>
              <li>
                If you have any questions about the form, feel free to contact us
              </li>
              <li>
                All information provided will be kept confidential in accordance
                with our privacy policy
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}