import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Appointments() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    type: 'initial',
    notes: '',
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

  // Generate time slots between 11 AM and 5 PM
  const timeSlots = [];
  for (let hour = 11; hour < 17; hour++) {
    timeSlots.push(`${hour}:00`);
    timeSlots.push(`${hour}:30`);
  }

  return (
    <div className="bg-gradient-to-b from-primary-50 to-white min-h-screen pt-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h1 className="text-3xl font-bold mb-8 text-center">
                Book an Appointment
              </h1>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
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
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="type"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Appointment Type
                  </label>
                  <select
                    name="type"
                    id="type"
                    required
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="initial">Initial Consultation (45 mins)</option>
                    <option value="counseling">Counseling Session (50 mins)</option>
                    <option value="coaching">Coaching Session (50 mins)</option>
                    <option value="cst">Cognitive Stimulation Therapy (60 mins)</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="time"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Preferred Time
                    </label>
                    <select
                      name="time"
                      id="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="notes"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Additional Notes
                  </label>
                  <textarea
                    name="notes"
                    id="notes"
                    rows={4}
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Please do not include confidential health information"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full btn-primary py-3 text-lg font-medium"
                  >
                    Request Appointment
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