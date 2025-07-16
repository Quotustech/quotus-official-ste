import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiCheck } from "react-icons/fi";
import RippleButton from '../layout/RippleButton';

function ContactForm() {
  const [isSending, setIsSending] = useState(false);
  // const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     setIsSending(true);
    setTimeout(() => {
      const { name, email, subject, message } = formData;
      window.location.href = `mailto:sibasisroutray21@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\n${message}`
      )}`;

      // setShowSuccess(true);
      setTimeout(()=>{setIsSending(false); setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });},6000);
      
      // setIsSending(false);

    }, 1000);
  };

  return (
    <div className='h-full relative'>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={container}
        viewport={{ once: true, margin: "-100px" }}
        className="bg-white rounded-xl shadow-2xl overflow-hidden h-full"
      >
        {/* Toggle Buttons */}
        <div className="flex border-b border-[#e0d6ff] text-[#513897]">
          <motion.div
            type="button"
            className="flex-1 py-4 font-medium flex items-center p-5 space-x-2 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FiMail className="w-5 h-5" />
            <span>Send Email</span>
          </motion.div>
        </div>

        {/* Tab Content */}
        <div className="relative h-[500px]">
          {/* Email Form */}
          <motion.div className="absolute inset-0 p-8 md:p-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-1">
                <label htmlFor="name" className="block text-sm font-medium text-[#513897]">
                  Your Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-[#e0d6ff] focus:border-[#513897] focus:ring-2 focus:ring-[#b8b2ff] transition-all"
                  placeholder="John Doe"
                  required
                  whileFocus={{
                    scale: 1.01,
                    boxShadow: "0 0 0 2px rgba(81, 56, 151, 0.3)",
                  }}
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className="block text-sm font-medium text-[#513897]">
                  Email Address
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-[#e0d6ff] focus:border-[#513897] focus:ring-2 focus:ring-[#b8b2ff] transition-all"
                  placeholder="john@example.com"
                  required
                  whileFocus={{
                    scale: 1.01,
                    boxShadow: "0 0 0 2px rgba(81, 56, 151, 0.3)",
                  }}
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="subject" className="block text-sm font-medium text-[#513897]">
                  Subject
                </label>
                <motion.input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-[#e0d6ff] focus:border-[#513897] focus:ring-2 focus:ring-[#b8b2ff] transition-all"
                  placeholder="Regarding..."
                  required
                  whileFocus={{
                    scale: 1.01,
                    boxShadow: "0 0 0 2px rgba(81, 56, 151, 0.3)",
                  }}
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="block text-sm font-medium text-[#513897]">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-[#e0d6ff] focus:border-[#513897] focus:ring-2 focus:ring-[#b8b2ff] transition-all"
                  placeholder="Your message..."
                  required
                  whileFocus={{
                    scale: 1.01,
                    boxShadow: "0 0 0 2px rgba(81, 56, 151, 0.3)",
                  }}
                />
              </div>

              <RippleButton>
                <button 
                  className='flex gap-5 justify-center text-center items-center w-full' 
                  type="submit"
                  disabled={isSending}
                >
                  {isSending ? (
                    <>
                      <span>Sending...</span>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    </>
                  ) : (
                    <>
                      <span>Send Email</span>
                      <FiMail className="w-5 h-5" />
                    </>
                  )}
                </button>
              </RippleButton>
            </form>
          </motion.div>
        </div>
      </motion.div>

      {/* Success Popup */}
      {/* <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2"
          >
            <FiCheck className="w-5 h-5" />
            <span>Email sent successfully!</span>
          </motion.div>
        )}
      </AnimatePresence> */}
    </div>
  );
}

export default ContactForm;