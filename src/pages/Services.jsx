import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Counseling',
    description:
      'Address personal issues, mental health concerns, and emotional well-being. Get support in managing stress, anxiety, and life challenges through personalized counseling sessions.',
    details: [
      'Individual therapy sessions',
      'Stress management',
      'Anxiety and depression support',
      'Personal growth guidance',
    ],
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1200',
    icon: '🧠',
  },
  {
    title: 'Coaching',
    description:
      'Set and achieve personal and professional goals, improve self-confidence, and develop healthy habits for lasting success.',
    details: [
      'Goal setting and achievement',
      'Confidence building',
      'Career development',
      'Life transitions',
    ],
    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=1200',
    icon: '🎯',
  },
  {
    title: 'Cognitive Stimulation Therapy',
    description:
      'Specialized therapy for individuals with mild to moderate dementia, helping keep the mind active and engaged. Recommended by NICE, UK.',
    details: [
      '15 sessions, 45-60 minutes each',
      'Twice weekly sessions',
      'Memory and language exercises',
      'Creative activities',
      'Developed at University College London',
    ],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200',
    icon: '🌟',
  },
];

export default function Services() {
  return (
    <div className="bg-gradient-to-b from-primary-50 to-white">
      <div className="section-container py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-4 text-center">Our Services</h1>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Discover our range of professional mental health services designed to support your well-being and personal growth journey.
          </p>
          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-[1.01] hover:-translate-y-2 transition-all duration-500 group"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-[300px] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-lg">
                      <span className="text-3xl" role="img" aria-label={service.title}>
                        {service.icon}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold mb-3 text-primary-800">{service.title}</h2>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-center text-gray-700">
                          <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <Link 
                      to="/appointments" 
                      className="btn-primary text-center py-2.5 w-full md:w-auto group-hover:bg-primary-700 group-hover:shadow-lg"
                    >
                      Book a Session
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Added Testimonials Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-xl">
                      {testimonial.name[0]}
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-gray-500 text-sm">{testimonial.type}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const testimonials = [
  {
    name: "Sarah M.",
    type: "Counseling Client",
    text: "Working with Kuhu has been transformative. Her compassionate approach and expert guidance helped me overcome my anxiety."
  },
  {
    name: "James R.",
    type: "Coaching Client",
    text: "The coaching sessions have given me clarity and confidence. I've achieved goals I never thought possible."
  },
  {
    name: "Linda K.",
    type: "CST Participant",
    text: "The cognitive stimulation therapy sessions are engaging and helpful. I've noticed significant improvements in my daily life."
  }
];