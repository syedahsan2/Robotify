import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaLinkedin, 
  FaFacebook, 
  FaInstagram, 
  FaWhatsapp,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
  FaBolt,
  FaArrowRight,
  FaCheckCircle,
  FaHeadset
} from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interestType: '', // 'project' or 'service'
    projectType: '',
    serviceType: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      // Reset dependent fields when interest type changes
      ...(name === 'interestType' && {
        projectType: '',
        serviceType: ''
      })
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        interestType: '',
        projectType: '',
        serviceType: '',
        message: ''
      });
      
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  // Electric Patterns
  const electricGrid = {
    backgroundImage: `linear-gradient(rgba(0, 174, 239, 0.08) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(0, 174, 239, 0.08) 1px, transparent 1px)`,
    backgroundSize: '50px 50px'
  };

  const electricDots = {
    backgroundImage: `radial-gradient(rgba(0, 174, 239, 0.12) 1.5px, transparent 1.5px)`,
    backgroundSize: '25px 25px'
  };

  const electricDiagonal = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Cpath fill='none' stroke='%2300AEEF' stroke-width='0.5' stroke-opacity='0.08' d='M0 40L40 0M0 0L40 40'/%3E%3C/svg%3E")`,
    backgroundSize: '40px 40px'
  };

  const electricHexagon = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Cpath fill='none' stroke='%2300AEEF' stroke-width='0.5' stroke-opacity='0.06' d='M20 0L40 11.5v23L20 46 0 34.5v-23zM0 11.5L20 23l20-11.5M20 46V23'/%3E%3C/svg%3E")`,
    backgroundSize: '40px 40px'
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-3xl text-[#00AEEF]" />,
      title: "Visit Us",
      details: ["Office #123, Tech Plaza", "Lahore, Pakistan"]
    },
    {
      icon: <FaPhone className="text-3xl text-[#00AEEF]" />,
      title: "Call Us",
      details: ["+92 333 7085256"]
    },
    {
      icon: <FaEnvelope className="text-3xl text-[#00AEEF]" />,
      title: "Email Us",
      details: ["info@robotify.pk", "fahadkhaniot@gmail.com"]
    },
    {
      icon: <FaClock className="text-3xl text-[#00AEEF]" />,
      title: "Working Hours",
      details: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 2PM"]
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: <FaLinkedin className="text-xl" />, url: "https://linkedin.com", color: "hover:bg-[#0077B5]" },
    { name: "Facebook", icon: <FaFacebook className="text-xl" />, url: "https://facebook.com", color: "hover:bg-[#1877F2]" },
    { name: "Instagram", icon: <FaInstagram className="text-xl" />, url: "https://instagram.com", color: "hover:bg-gradient-to-tr from-[#833AB4] to-[#E4405F]" },
    { name: "WhatsApp", icon: <FaWhatsapp className="text-xl" />, url: "https://wa.me/923337085256", color: "hover:bg-[#25D366]" },
    { name: "YouTube", icon: <FaYoutube className="text-xl" />, url: "https://youtube.com", color: "hover:bg-[#FF0000]" },
  ];

  // Project Options
  const projectOptions = [
    "Digital Logic Design",
    "Basic Electronics",
    "Embedded System",
    "Arduino Based",
    "RaspberryPi Based"
  ];

  // Service Options
  const serviceOptions = [
    "Solar Inverter Repairing",
    "Solar Cleaning Robot",
    "Robotics Systems / Robotic Projects",
    "AI Models / AI Projects"
  ];

  const faqs = [
    {
      q: "How quickly can you respond to my inquiry?",
      a: "We typically respond within 24 hours during business days."
    },
    {
      q: "Do you provide support after project completion?",
      a: "Yes, we provide 30 days of free support and maintenance."
    },
    {
      q: "Can you help with my final year project?",
      a: "Absolutely! We specialize in FYP projects with complete guidance."
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept bank transfers, Easypaisa, and JazzCash."
    }
  ];

  return (
    <div className="bg-black min-h-screen pt-24 pb-16">
      
      {/* Hero Section with Electric Grid */}
      <section className="relative py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-black" />
          <div className="absolute inset-0" style={electricGrid} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />
        </div>
        
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-[#00AEEF]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center"
          >
            <p className="text-xs tracking-[0.3em] text-[#00AEEF] mb-4 flex items-center justify-center gap-2">
              <FaBolt className="text-sm" /> GET IN TOUCH <FaBolt className="text-sm" />
            </p>
            <h1 className="text-4xl md:text-6xl font-light tracking-tighter mb-4">
              Let's <span className="font-bold text-[#00AEEF]">Connect</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? We'd love to hear from you. 
              Fill out the form and we'll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content with Electric Dots */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-[#0A0A0A]" />
          <div className="absolute inset-0" style={electricDots} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Left Side - Contact Info */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-8"
            >
              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    whileHover={{ y: -5 }}
                    className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-[#00AEEF]/50 transition-all duration-300"
                  >
                    <div className="mb-4">{info.icon}</div>
                    <h3 className="text-lg font-semibold mb-2 text-white">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-400 text-sm">{detail}</p>
                    ))}
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div variants={fadeInUp} className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
                <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 ${social.color} hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_10px_#00AEEF]`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* WhatsApp Business Card */}
              <motion.div variants={fadeInUp}>
                <a href="https://wa.me/923337085256" target="_blank" rel="noopener noreferrer">
                  <div className="bg-gradient-to-r from-[#25D366]/20 to-[#25D366]/5 rounded-2xl p-5 border border-[#25D366]/30 hover:border-[#25D366] transition-all duration-300 flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center">
                      <FaWhatsapp className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Chat on WhatsApp</h3>
                      <p className="text-gray-400 text-sm">Click here to start chatting</p>
                    </div>
                  </div>
                </a>
              </motion.div>

              {/* Map Location */}
              <motion.div variants={fadeInUp} className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
                <h3 className="text-lg font-semibold mb-4 text-white">Find Us</h3>
                <div className="bg-gray-800 rounded-xl h-48 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center z-10">
                    <FaMapMarkerAlt className="text-5xl text-[#00AEEF] mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">Lahore, Pakistan</p>
                    <p className="text-[#00AEEF] text-xs mt-2">View on Google Maps →</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00AEEF]/5 to-transparent" />
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Contact Form with Electric Diagonal */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="relative"
            >
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                <div className="absolute inset-0" style={electricDiagonal} />
              </div>
              
              <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 relative z-10">
                <h2 className="text-2xl font-bold mb-2">Send us a Message</h2>
                <p className="text-gray-400 text-sm mb-6">
                  Fill out the form and we'll get back to you as soon as possible.
                </p>

                {/* Success Message */}
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-sm flex items-center gap-2"
                  >
                    <FaCheckCircle /> Thank you! Your message has been sent. We'll contact you soon.
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] transition-all"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        required
                        onChange={handleChange}
                        placeholder="+92 333 7085256"
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] transition-all"
                      />
                    </div>
                  </div>

                  {/* Interest Type Dropdown */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      I'm Interested In *
                    </label>
                    <select
                      name="interestType"
                      required
                      value={formData.interestType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] transition-all"
                    >
                      <option value="">Select an option</option>
                      <option value="project">Project</option>
                      <option value="service">Service</option>
                    </select>
                  </div>

                  {/* Dynamic Dropdown based on Interest Type */}
                  {formData.interestType === 'project' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Select Project Type *
                      </label>
                      <select
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] transition-all"
                      >
                        <option value="">Select a project</option>
                        {projectOptions.map((project, idx) => (
                          <option key={idx} value={project}>
                            {project}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {formData.interestType === 'service' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Select Service *
                      </label>
                      <select
                        name="serviceType"
                        required
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] transition-all"
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((service, idx) => (
                          <option key={idx} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 bg-[#00AEEF] text-black rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                      isSubmitting 
                        ? 'opacity-70 cursor-not-allowed' 
                        : 'hover:shadow-[0_0_20px_#00AEEF] hover:scale-[1.02]'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    By submitting this form, you agree to our privacy policy.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section with Electric Hexagon */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-black" />
          <div className="absolute inset-0" style={electricHexagon} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <p className="text-xs tracking-[0.3em] text-[#00AEEF] mb-4">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked <span className="text-[#00AEEF]">Questions</span></h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-[#00AEEF]/30 transition-all"
              >
                <h3 className="text-lg font-semibold mb-2 text-[#00AEEF] flex items-center gap-2">
                  <FaHeadset className="text-sm" /> {faq.q}
                </h3>
                <p className="text-gray-400 text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Electric Grid */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00AEEF]/5 via-black to-blue-600/5" />
          <div className="absolute inset-0" style={electricGrid} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-10 text-center border border-[#00AEEF]/20"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Need Urgent Help?
            </h2>
            <p className="text-gray-400 mb-6">
              Call us directly for immediate assistance
            </p>
            <a href="tel:+92 333 7085256">
              <button className="px-8 py-3 bg-[#00AEEF] text-black rounded-lg font-semibold hover:shadow-[0_0_20px_#00AEEF] transition-all flex items-center gap-2 mx-auto">
                <FaPhone className="text-xl" />
                +92 333 7085256
              </button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}