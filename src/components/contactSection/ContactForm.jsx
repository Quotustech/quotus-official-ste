import React from 'react';
import { motion } from "framer-motion";
import {  FiMail} from "react-icons/fi";
import RippleButton from '../layout/RippleButton';

function ContactForm() {

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
      
  

  return (
    <div className='h-full'>
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
                className="flex-1 py-4 font-medium flex items-center  p-5 space-x-2 transition-colors "
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiMail className="w-5 h-5" />
                <span>Send Email</span>
              </motion.div>
            </div>

            {/* Tab Content  */}
            <div className="relative h-[500px]">              

              {/* Email Form */}
              <motion.div
                className="absolute inset-0 p-8 md:p-10"
                
              >
                <form
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.target;
                    window.location.href = `mailto:info@quotus.co.in?subject=${encodeURIComponent(form["email-subject"].value
                    )}&body=${encodeURIComponent(
                      `Name: ${form["email-name"].value}\nEmail: ${form["email-address"].value}\n\n${form["email-message"].value}`
                    )}`;
                  }}
                >
                  <div className="space-y-1">
                    <label
                      htmlFor="email-name"
                      className="block text-sm font-medium text-[#513897]"
                    >
                      Your Name
                    </label>
                    <motion.input
                      type="text"
                      id="email-name"
                      name="email-name"
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
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium text-[#513897]"
                    >
                      Email Address
                    </label>
                    <motion.input
                      type="email"
                      id="email-address"
                      name="email-address"
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
                    <label
                      htmlFor="email-subject"
                      className="block text-sm font-medium text-[#513897]"
                    >
                      Subject
                    </label>
                    <motion.input
                      type="text"
                      id="email-subject"
                      name="email-subject"
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
                    <label
                      htmlFor="email-message"
                      className="block text-sm font-medium text-[#513897]"
                    >
                      Message
                    </label>
                    <motion.textarea
                      id="email-message"
                      name="email-message"
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

              <RippleButton >
                <button className='flex gap-5 justify-center text-center' type="submit" >
                  <span>Open Email</span>
                  <FiMail className="w-5 h-5" />
                </button>
              </RippleButton>
            </form>
              </motion.div>
            </div>
          </motion.div>
    </div>
  )
}

export default ContactForm