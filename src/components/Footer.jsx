import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaLinkedin, 
  FaFacebook, 
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    brand: {
      title: "ROBOTIFY.pk",
      desc: "Engineering Solutions for Real-World Problems"
    },
    services: {
      title: "Services",
      links: [
        { name: "Robotics Systems", path: "/services/robotics" },
        { name: "IoT Solutions", path: "/services/iot" },
        { name: "Solar Systems", path: "/services/solar" },
        { name: "Industrial Automation", path: "/services/automation" },
        { name: "FYP & Academic", path: "/services/fyp" },
        { name: "Custom Projects", path: "/services/custom" }
      ]
    },
    quickLinks: {
      title: "Quick Links",
      links: [
        { name: "Home", path: "/" },
        { name: "Work", path: "/work" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Contact", path: "/contact" }
      ]
    },
    contact: {
      title: "Contact Info",
      info: [
        { icon: <MdPhone className="text-[#00AEEF]" />, text: "+92 333 7085256", href: "tel:+923337085256" },
        { icon: <MdEmail className="text-[#00AEEF]" />, text: "info@robotify.pk", href: "mailto:info@robotify.pk" },
        { icon: <MdLocationOn className="text-[#00AEEF]" />, text: "Karachi, Pakistan", href: "#" }
      ]
    }
  };

  const socialLinks = [
    { name: "LinkedIn", icon: <FaLinkedin />, url: "https://linkedin.com", color: "hover:bg-[#0077B5]" },
    { name: "Facebook", icon: <FaFacebook />, url: "https://facebook.com", color: "hover:bg-[#1877F2]" },
    { name: "WhatsApp", icon: <FaWhatsapp />, url: "https://wa.me/923337085256", color: "hover:bg-[#25D366]" },
    { name: "YouTube", icon: <FaYoutube />, url: "https://youtube.com", color: "hover:bg-[#FF0000]" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-[#0A0A0A] border-t border-[#2A2A2A] relative"
    >
      {/* Glowing Top Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00AEEF] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/Robotify.png" alt="Robotify Logo" className="w-45 h-25 object-cover rounded-lg" />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              {footerSections.brand.desc}
            </p>
            
            {/* Social Media Icons in Footer */}
            <div className="pt-4">
              <h4 className="text-xs font-semibold text-[#00AEEF] tracking-wider mb-3">FOLLOW US</h4>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 ${social.color} hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_10px_#00AEEF]`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-[#00AEEF] text-xs font-semibold tracking-wider mb-4">
              {footerSections.services.title}
            </h4>
            <ul className="space-y-3">
              {footerSections.services.links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-[#00AEEF] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#00AEEF] text-xs font-semibold tracking-wider mb-4">
              {footerSections.quickLinks.title}
            </h4>
            <ul className="space-y-3">
              {footerSections.quickLinks.links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-[#00AEEF] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#00AEEF] text-xs font-semibold tracking-wider mb-4">
              {footerSections.contact.title}
            </h4>
            <ul className="space-y-3">
              {footerSections.contact.info.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="flex items-center gap-3 text-sm text-gray-400 hover:text-[#00AEEF] transition-colors duration-300"
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
            
            {/* WhatsApp Button in Footer */}
            <div className="mt-6">
              <a
                href="https://wa.me/923337085256"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2 bg-[#25D366]/20 border border-[#25D366]/30 rounded-lg text-sm text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300"
              >
                <FaWhatsapp />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#2A2A2A] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {currentYear} Robotify.pk — All Rights Reserved
          </p>
        </div>
      </div>
    </motion.footer>
  );
}