import React from 'react'
import { motion } from 'framer-motion';
import {  Linkedin, Instagram, Mail, Phone } from 'lucide-react';
const ContactUs = () => {
  return (
    <section className="py-20 bg-zinc-900/50">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Interested but don't <br />
              <span className="text-green-400">know where to start?</span>
            </h2>
            <p className="text-gray-400">
              Reach out to us and we'll help you get started on your FinTech journey.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <input
                  type="text"
                  placeholder="Name*"
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-green-400/20 text-white placeholder-gray-500 focus:outline-none focus:border-green-400 transition-colors"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <input
                  type="email"
                  placeholder="Email*"
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-green-400/20 text-white placeholder-gray-500 focus:outline-none focus:border-green-400 transition-colors"
                />
              </motion.div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-green-400/20 text-white placeholder-gray-500 focus:outline-none focus:border-green-400 transition-colors"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <input
                  type="text"
                  placeholder="Subject*"
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-green-400/20 text-white placeholder-gray-500 focus:outline-none focus:border-green-400 transition-colors"
                />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <textarea
                placeholder="Your message*"
                rows={6}
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-green-400/20 text-white placeholder-gray-500 focus:outline-none focus:border-green-400 transition-colors resize-none"
              ></textarea>
            </motion.div>
            <motion.button
              
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-green-400 text-black font-semibold rounded-xl hover:bg-green-500 transition-colors"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:pl-12 space-y-12 flex flex-col justify-center"
        >
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Connect with us</h3>
              <div className="space-y-6">
                <motion.a 
                  whileHover={{ x: 5 }}
                  href="mailto:contact@fintechclub.com" 
                  className="flex items-center gap-4 text-gray-400 hover:text-green-400 transition-colors"
                >
                  <div className="w-12 h-12 bg-black/40 rounded-xl flex items-center justify-center border border-green-400/20">
                    <Mail className="w-6 h-6" />
                  </div>
                  <span>contact@fintechclub.com</span>
                </motion.a>
                <motion.a 
                  whileHover={{ x: 5 }}
                  href="tel:+919219106047" 
                  className="flex items-center gap-4 text-gray-400 hover:text-green-400 transition-colors"
                >
                  <div className="w-12 h-12 bg-black/40 rounded-xl flex items-center justify-center border border-green-400/20">
                    <Phone className="w-6 h-6" />
                  </div>
                  <span>+91 921 910 6047</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold">Follow us</h3>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ y: -5 }}
                href="https://www.linkedin.com/company/fintech-iitism"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-black/40 rounded-xl border border-green-400/20 text-gray-400 hover:text-green-400 hover:border-green-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ y: -5 }}
                href="https://www.instagram.com/fintech_iitism/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-black/40 rounded-xl border border-green-400/20 text-gray-400 hover:text-green-400 hover:border-green-400 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
  )
}

export default ContactUs