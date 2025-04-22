import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/background.jpeg';
import ContactForm from '../components/contactForm';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  // Check if the device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: {
      y: -15,
      scale: 1.03,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div>
      {/* Hero Section - Enhanced with more transparency */}
      <section className="hero-section-enhanced">
        {/* Background Image - Adjusted brightness and position */}
        <div 
          className="hero-background-enhanced"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: 'center 30%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Gradient Overlay - Adjusted for better visibility */}
          <div className="hero-overlay" />
        </div>

        <div className="section-container relative z-8">
          <div className="max-w-3xl mx-auto md:ml-0">
            <motion.div
              initial="hidden"
              animate="visible"
               whileHover={{ scale: 1.05, translateY: -5 }}
  transition={{ duration: 0.3, ease: "easeOut" }}
              variants={fadeIn}
              className={isMobile 
                ? "bg-white/30 backdrop-blur-sm rounded-3xl p-8 shadow-2xl" 
                : "md:bg-white/30 md:backdrop-blur-sm  lg:bg-white/25 lg:backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-2xl transition-all duration-500 max-w-3xl transform hover:scale-[1.02] hover:-translate-y-1"
              }
            >
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Your journey. <span className="gradient-text">Our Compassion.</span>
              </motion.h1>
              <motion.p
                className="text-xl mb-8 text-gray-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Take charge of your mental well-being with online therapy and coaching. Begin your path to healing and personal growth today.
              </motion.p>
              <motion.div
                className="mobile-button-container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Link to="/appointments" className="btn-primary">
                  Book Appointment
                </Link>
                <Link to="/services" className="btn-secondary bg-white/80 text-primary-600">
                  Learn More
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        {/* <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <p className="text-primary-700 mb-2 text-sm font-medium">Scroll Down</p>
          <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div> */}
      </section>

      {/* Breathing Exercise Section - New */}
      <section className="bg-primary-50 py-5">
        <div className="section-container">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-primary-800 mb-2">Take a Moment to Breathe</h2>
              <div className="section-divider"></div>
              <p className="text-gray-600">Try this simple breathing exercise to center yourself</p>
            </div>
            
            <motion.div 
              className="w-32 h-32 md:w-40 md:h-40 bg-primary-100 rounded-full mx-auto flex items-center justify-center relative"
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut" 
              }}
            >
              <div className="text-center">
                <p className="text-primary-700 font-medium">Breathe</p>
                <p className="text-xs text-primary-600">4-7-8</p>
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-primary-200 animate-ping" style={{ animationDuration: '8s' }}></div>
            </motion.div>
            
            <div className="text-center mt-6 text-gray-600 max-w-md mx-auto">
              <p className="mb-2">Inhale for 4 seconds, hold for 7 seconds, exhale for 8 seconds</p>
              <p className="text-sm italic">Practice this exercise whenever you feel overwhelmed or anxious</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Calming Quote Section */}
      <section className="bg-white py-5">
        <div className="section-container">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <blockquote className="text-2xl md:text-3xl font-light italic text-primary-800 leading-relaxed">
              "The journey of healing begins with a single step of courage and continues with compassion."
            </blockquote>
            <p className="mt-4 text-primary-600 font-medium">-xyz</p>
          </motion.div>
        </div>
      </section>

      {/* Welcome Message - Enhanced with calming visuals */}
      <section className="bg-white py-8">
        <div className="section-container">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              className="welcome-section-enhanced"
            >
              <div className="welcome-section-pattern" />
              <div className="flex flex-col md:flex-row items-center gap-8">
                <motion.div 
                  className="md:w-1/3"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="welcome-image-container">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" 
                      alt="xyz"
                      className="welcome-image"
                    />
                  </div>
                </motion.div>
                <div className="welcome-content">
                  <h2 className="welcome-title">Welcome to Your Healing Journey</h2>
                  <div className="section-divider ml-0 md:mx-0"></div>
                  <p className="welcome-description">
                    I'm xyz, a dedicated mental health professional committed to helping
                    you navigate life's challenges and discover your path to wellness. Whether you're
                    dealing with anxiety, seeking personal growth, or looking for support during
                    difficult times, I'm here to guide you with compassion and expertise.
                  </p>
                  <div className="welcome-badges">
                    <motion.span 
                      className="welcome-badge"
                      whileHover={{ y: -5, backgroundColor: "#bae6fd" }}
                    >
                      M.A. Psychology
                    </motion.span>
                    <motion.span 
                      className="welcome-badge"
                      whileHover={{ y: -5, backgroundColor: "#bae6fd" }}
                    >
                      Clinical Specialization
                    </motion.span>
                    <motion.span 
                      className="welcome-badge"
                      whileHover={{ y: -5, backgroundColor: "#bae6fd" }}
                    >
                      Neuropsychology
                    </motion.span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
     
      {/* Approach Section */}
      <section className="bg-gradient-to-r from-primary-50 to-white py-10">
        <div className="section-container">
          <motion.h2 
            className="text-3xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My Therapeutic Approach
          </motion.h2>
          <div className="section-divider"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {approaches.map((approach, index) => (
              <motion.div
                key={approach.title}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-float"
                style={{ animationDelay: `${index * 0.2}s` }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-3xl" role="img" aria-label={approach.title}>
                    {approach.icon}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">{approach.title}</h3>
                <p className="text-gray-600 text-center">{approach.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview - Enhanced with animations */}
      <section className="bg-gray-50 py-8">
        <div className="section-container">
          <motion.h2 
            className="text-3xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            How I Can Help You
          </motion.h2>
          <div className="section-divider"></div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02]"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="service-card-image-container">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="service-card-image-enhanced group-hover:scale-110"
                  />
                  <div className="service-card-overlay" />
                  <div className="service-card-title group-hover:translate-y-[-5px]">
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group"
                  >
                    Learn more
                    <svg 
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
       <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50 py-8">
        <div className="section-container">
          <motion.h2 
            className="text-3xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Daily Mindfulness Tips
          </motion.h2>
          <div className="section-divider"></div>
          <motion.p 
            className="text-gray-600 text-center mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Simple practices to incorporate into your daily routine
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mindfulnessTips.map((tip, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl" role="img" aria-label={tip.title}>
                    {tip.icon}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-center mb-2">{tip.title}</h3>
                <p className="text-gray-600 text-center text-sm">{tip.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="bg-white py-10">
        <div className="section-container">
          <motion.h2 
            className="text-3xl font-bold text-center mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Client Experiences
          </motion.h2>
          <div className="section-divider"></div>
          <motion.p 
            className="text-gray-600 text-center mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hear from individuals who have embarked on their healing journey with me
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-primary-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary-200 rounded-full flex items-center justify-center text-primary-700 font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.type}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Information - Enhanced */}
      <section className="clinic-section">
        <div className="section-container">
          <div className="clinic-container">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="clinic-content"
            >
              <h2 className="clinic-title">Your Safe Space for Healing</h2>
              <div className="section-divider ml-0"></div>
              <div className="space-y-6">
                <p className="clinic-description">
                  Step into a warm, welcoming environment where healing begins. Our modern
                  clinic is thoughtfully designed to provide you with a comfortable and
                  confidential space for your therapeutic journey. Whether you prefer
                  in-person sessions in our serene office or the convenience of online
                  therapy, we're here to accommodate your needs.
                </p>
                <motion.div 
                  className="clinic-hours"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="clinic-hours-title">Clinic Hours</h3>
                  <div className="space-y-2 text-primary-700">
                    <p className="clinic-hours-item">
                      <span>Monday - Friday</span>
                      <span>11:00 AM - 5:00 PM</span>
                    </p>
                    <p className="clinic-hours-item">
                      <span>Saturday</span>
                      <span>By Appointment</span>
                    </p>
                    <p className="clinic-hours-item">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </p>
                  </div>
                </motion.div>
                
                {/* Features section */}
                <div className="clinic-features">
                  <motion.div 
                    className="clinic-feature group"
                    whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                  >
                    <div className="clinic-feature-icon group-hover:bg-primary-200">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h4 className="font-medium text-gray-900">Confidential Space</h4>
                  </motion.div>
                  <motion.div 
                    className="clinic-feature group"
                    whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                  >
                    <div className="clinic-feature-icon group-hover:bg-primary-200">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <h4 className="font-medium text-gray-900">Comfortable Setting</h4>
                  </motion.div>
                  <motion.div 
                    className="clinic-feature group"
                    whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                  >
                    <div className="clinic-feature-icon group-hover:bg-primary-200">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="font-medium text-gray-900">Online Sessions</h4>
                  </motion.div>
                  <motion.div 
                    className="clinic-feature group"
                    whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                  >
                    <div className="clinic-feature-icon group-hover:bg-primary-200">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h4 className="font-medium text-gray-900">Safe Environment</h4>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="clinic-image-container group"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                alt="Therapy clinic"
                className="clinic-image group-hover:scale-110"
              />
            </motion.div>
          </div>
        </div>
      </section>

       {/* Healing Journey */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Your Path to Healing</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Begin your transformative journey with us through our proven three-step approach to mental wellness
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-primary-100 via-primary-300 to-primary-100" />

            {healingSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                      <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-3xl font-bold text-white">{index + 1}</span>
                      </div>
                    </div>
                    <div className="pt-16">
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">{step.title}</h3>
                      <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Self-Care Calendar Section - New */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-8">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-4">Weekly Self-Care Calendar</h2>
            <div className="section-divider"></div>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">Simple activities to nurture your mental well-being throughout the week</p>
            
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
                {selfCareCalendar.map((day, index) => (
                  <motion.div
                    key={day.name}
                    className="bg-primary-50 rounded-lg p-4 text-center hover:bg-primary-100 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -5 }}
                  >
                    <h3 className="font-semibold text-primary-700 mb-2">{day.name}</h3>
                     <p className="text-sm text-gray-600">{day.activity}</p>
                  </motion.div>
                ))}
              </div>
              <p className="text-center text-sm text-gray-500 mt-6 italic">
                Remember, self-care isn't selfish—it's essential for your mental health
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section - Enhanced */}
       <>
       <ContactForm></ContactForm>
       <Toaster/>

       </>
      
      {/* Call to Action - Enhanced */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-10">
        <div className="section-container text-center">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Start Your Journey?
          </motion.h2>
          <motion.p 
            className="text-xl mb-6 text-primary-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Take the first step towards better mental well-being today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="/appointments"
              className="bg-white text-primary-600 px-8 py-3 rounded-xl font-medium shadow-lg shadow-primary-900/20 hover:shadow-xl hover:shadow-primary-900/30 hover:bg-gray-50 transform hover:-translate-y-1 transition-all duration-300 inline-block"
            >
              Schedule a Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const services = [
  {
    title: 'Counseling',
    description:
      'Address personal issues, mental health concerns, and emotional well-being. Get support in managing stress, anxiety, and life challenges.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1200',
  },
  {
    title: 'Coaching',
    description:
      'Set and achieve personal and professional goals, improve self-confidence, and develop healthy habits for lasting success.',
    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=1200',
  },
  {
    title: 'Cognitive Stimulation Therapy',
    description:
      'Specialized therapy for individuals with mild to moderate dementia, helping keep the mind active and engaged.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200',
  },
];

const approaches = [
  {
    title: 'Person-Centered',
    description: 'I believe in creating a supportive environment where you feel heard, respected, and understood. Your unique experiences and perspectives guide our work together.',
    icon: '🤝'
  },
  {
    title: 'Evidence-Based',
    description: 'My therapeutic approaches are grounded in research and proven techniques, ensuring you receive effective care tailored to your specific needs.',
    icon: '📊'
  },
  {
    title: 'Holistic Wellness',
    description: 'I consider all aspects of your well-being—mental, emotional, physical, and social—to help you achieve balance and lasting positive change.',
    icon: '🌱'
  }
];

const testimonials = [
  {
    name: "Mayur B.",
    type: "Anxiety Management",
    text: "Working with xyz has transformed my relationship with anxiety. Her calm presence and practical techniques have given me tools I use daily."
  },
  {
    name: "Rahul S.",
    type: "Personal Growth",
    text: "I came seeking direction and found not just guidance but also the confidence to make meaningful changes. xyz's approach is both gentle and effective."
  },
  {
    name: "Anjali K.",
    type: "Family Support",
    text: "The strategies xyz provided helped our family navigate a difficult transition. Her compassionate approach made all the difference."
  }
];

const mindfulnessTips = [
  {
    title: "Morning Reflection",
    description: "Start your day with 5 minutes of quiet reflection. Set positive intentions for the day ahead.",
    icon: "☀️"
  },
  {
    title: "Mindful Breathing",
    description: "Take three deep breaths whenever you feel stressed or overwhelmed during the day.",
    icon: "🌬️"
  },
  {
    title: "Gratitude Practice",
    description: "Each evening, write down three things you're grateful for from your day.",
    icon: "🙏"
  },
  {
    title: "Nature Connection",
    description: "Spend at least 10 minutes outdoors daily, fully present with the natural world around you.",
    icon: "🌳"
  }
];

const selfCareCalendar = [
  {
    name: "Monday",
    activity: "Morning meditation (10 min)"
  },
  {
    name: "Tuesday",
    activity: "Journal your thoughts"
  },
  {
    name: "Wednesday",
    activity: "Connect with a friend"
  },
  {
    name: "Thursday",
    activity: "Digital detox (1 hour)"
  },
  {
    name: "Friday",
    activity: "Mindful walking"
  },
  {
    name: "Saturday",
    activity: "Creative expression"
  },
  {
    name: "Sunday",
    activity: "Self-reflection & rest"
  }
];


const healingSteps = [
  {
    title: 'Initial Consultation',
    description: 'We begin with a thorough assessment of your needs and goals, creating a safe space for open dialogue.',
  },
  {
    title: 'Personalized Plan',
    description: 'Together, we develop a tailored treatment plan that addresses your specific challenges and aspirations.',
  },
  {
    title: 'Growth & Healing',
    description: 'Through regular sessions and practical tools, we work together towards lasting positive change.',
  },
];
