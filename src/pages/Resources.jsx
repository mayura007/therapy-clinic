import { motion } from 'framer-motion';

const resources = [
  {
    title: 'Patient Forms',
    items: [
      { name: 'Initial Consultation Form', link: '#' },
      { name: 'Client Information Sheet', link: '#' },
      { name: 'Consent for Treatment', link: '#' },
    ],
  },
  {
    title: 'Helpful Articles',
    items: [
      { name: 'Understanding Anxiety', link: '#' },
      { name: 'Stress Management Tips', link: '#' },
      { name: 'Building Resilience', link: '#' },
    ],
  },
  {
    title: 'External Resources',
    items: [
      { name: 'Mental Health Association', link: '#' },
      { name: 'Anxiety and Depression Association', link: '#' },
      { name: 'National Institute of Mental Health', link: '#' },
    ],
  },
];

export default function Resources() {
  return (
    <div className="bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-12 text-center">Resources</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <h2 className="text-2xl font-semibold mb-6">{section.title}</h2>
                <ul className="space-y-4">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.link}
                        className="text-primary-600 hover:text-primary-700 font-medium"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
