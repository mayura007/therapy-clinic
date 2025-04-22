import { motion } from 'framer-motion';
import { useState } from 'react';
import { toast } from 'react-hot-toast'; // Importing the toast

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState(''); // sending, success, error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    toast.loading('Sending...', { id: 'sending' }); // Show the sending toast

    const form = {
      ...formData,
      access_key: '1c2cfccd-2377-4c50-98c9-3c2bf97f789a',
    };

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        toast.success('Message sent successfully!', { id: 'sending' }); // Success toast
      } else {
        setStatus('error');
        toast.error('Something went wrong. Please try again.', { id: 'sending' }); // Error toast
      }
    } catch (error) {
      setStatus('error');
      toast.error('Network error. Please try again.', { id: 'sending' }); // Error toast
    }
  };

  return (
    <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50 py-10">
      <div className="section-container">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-center mb-2">Get in Touch</h2>
            <div className="section-divider"></div>
            <p className="text-gray-600 text-center mb-6 max-w-2xl mx-auto">
              We're here to help and answer any questions you might have
            </p>

            <motion.div
              className="bg-white/80 backdrop-blur-sm bg-opacity-90 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-8"
              whileHover={{ boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
              transition={{ duration: 0.3 }}
            >
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-input"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </motion.div>
                  <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-input"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </motion.div>
                </div>

                <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-input"
                    placeholder="+91 XXXXX XXXXX"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </motion.div>

                <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="form-input resize-none"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                  <p className="text-sm text-gray-500 italic mt-2">
                    Please do not submit any Protected Health Information (PHI).
                  </p>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <button type="submit" className="btn-primary w-full">
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}