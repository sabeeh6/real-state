import React from 'react';
import { motion as  Motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const navigation = {
    company: ['Home', 'About Us', 'Our Projects', 'Testimonials', 'Contact Us'],
    services: ['Buy Property', 'Sell Property', 'Rent Property', 'Property Management', 'Consultation'],
    resources: ['Blog', 'Market Insights', 'Investment Guide', 'FAQs', 'Privacy Policy'],
  };

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Youtube, href: '#' },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Main Footer Content */}
      <Motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 lg:px-8 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <Motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="text-3xl font-bold mb-4">
              <span className="text-white">REAL</span>
              <span className="text-blue-500">ESTATE</span>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Your trusted partner in finding the perfect property. We provide exceptional real estate services with integrity and professionalism.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <span className="text-slate-300 text-sm">5718 Westheimer, Ste 1000, Houston, TX 77057</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-slate-300 text-sm">(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-slate-300 text-sm">info@realestate.com</span>
              </div>
            </div>
          </Motion.div>

          {/* Company Links */}
          <Motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-slate-300 hover:text-blue-500 transition-colors duration-300 text-sm inline-block hover:translate-x-1 transform"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </Motion.div>

          {/* Services */}
          <Motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              {navigation.services.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-slate-300 hover:text-blue-500 transition-colors duration-300 text-sm inline-block hover:translate-x-1 transform"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </Motion.div>

          {/* Resources */}
          <Motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              {navigation.resources.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-slate-300 hover:text-blue-500 transition-colors duration-300 text-sm inline-block hover:translate-x-1 transform"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </Motion.div>
        </div>

        {/* Newsletter Section */}
        <Motion.div
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-slate-700"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-slate-300 text-sm">Get the latest property updates and market insights.</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 md:w-64"
              />
              <Motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors duration-300"
              >
                Sub
              </Motion.button>
            </div>
          </div>
        </Motion.div>
      </Motion.div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © 2002 – 2026 Real Estate Team. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <Motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-slate-800 hover:bg-blue-600 rounded-full transition-colors duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </Motion.a>
              ))}
            </div>

            <div className="flex items-center gap-4 text-slate-400 text-sm">
              <a href="#" className="hover:text-blue-500 transition-colors">Terms of Use</a>
              <span>|</span>
              <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
