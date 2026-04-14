import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaRobot, 
  FaMicrochip, 
  FaSolarPanel, 
  FaIndustry, 
  FaGraduationCap, 
  FaTools,
  FaTrophy,
  FaStar,
  FaSmile,
  FaHeadset,
  FaBolt,
  FaChartLine,
  FaShieldAlt,
  FaSyncAlt,
  FaLock,
  FaArrowRight
} from 'react-icons/fa';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.98]);
  
  const services = [
    {
      id: "robotics",
      title: "Robotics Systems",
      icon: <FaRobot className="text-5xl text-[#00AEEF]" />,
      shortDesc: "Industrial & Educational Robotics",
      price: "From PKR 35,000",
      features: ["Custom Robots", "Automation", "Sensors", "Control Systems"],
    },
    {
      id: "iot",
      title: "IoT Solutions",
      icon: <FaMicrochip className="text-5xl text-[#00AEEF]" />,
      shortDesc: "Smart IoT & EMS Systems",
      price: "From PKR 30,000",
      features: ["Real-time Monitoring", "Cloud Integration", "Mobile Apps", "Analytics"],
    },
    {
      id: "solar",
      title: "Solar Systems",
      icon: <FaSolarPanel className="text-5xl text-[#00AEEF]" />,
      shortDesc: "Solar Energy Solutions",
      price: "From PKR 50,000",
      features: ["System Design", "Installation", "Monitoring", "Maintenance"],
    },
    {
      id: "automation",
      title: "Industrial Automation",
      icon: <FaIndustry className="text-5xl text-[#00AEEF]" />,
      shortDesc: "PLC & SCADA Systems",
      price: "From PKR 40,000",
      features: ["PLC Programming", "SCADA Systems", "HMI Design", "Process Control"],
    },
    {
      id: "fyp",
      title: "FYP & Academic",
      icon: <FaGraduationCap className="text-5xl text-[#00AEEF]" />,
      shortDesc: "Final Year Projects",
      price: "From PKR 25,000",
      features: ["Custom Development", "Documentation", "Presentation Ready", "Source Code"],
    },
    {
      id: "custom",
      title: "Custom Projects",
      icon: <FaTools className="text-5xl text-[#00AEEF]" />,
      shortDesc: "Tailored Engineering Solutions",
      price: "Custom Quote",
      features: ["Requirement Analysis", "Design", "Development", "Support"],
    }
  ];
  
  const stats = [
    { value: "150+", label: "Projects Completed", icon: <FaTrophy className="text-4xl text-[#00AEEF]" /> },
    { value: "98%", label: "Client Satisfaction", icon: <FaStar className="text-4xl text-[#00AEEF]" /> },
    { value: "50+", label: "Happy Clients", icon: <FaSmile className="text-4xl text-[#00AEEF]" /> },
    { value: "24/7", label: "Support Available", icon: <FaHeadset className="text-4xl text-[#00AEEF]" /> }
  ];
  
  const whyChoose = [
    { icon: <FaBolt className="text-4xl" />, title: "Fast Delivery", desc: "Timely delivery guaranteed" },
    { icon: <FaChartLine className="text-4xl" />, title: "Quality Assurance", desc: "Industry standard solutions" },
    { icon: <FaHeadset className="text-4xl" />, title: "24/7 Support", desc: "Always here to help" },
    { icon: <FaShieldAlt className="text-4xl" />, title: "Best Price", desc: "Competitive pricing" },
    { icon: <FaSyncAlt className="text-4xl" />, title: "Free Revisions", desc: "Until you're satisfied" },
    { icon: <FaLock className="text-4xl" />, title: "100% Secure", desc: "Safe & confidential" }
  ];
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 }
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
  
  return (
    <div className="bg-black min-h-screen">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-[#0A0A0A]" />
          <div className="absolute inset-0" style={electricGrid} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00AEEF]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-xs tracking-[0.3em] text-[#00AEEF] mb-6 flex items-center justify-center gap-2"
            >
              <FaBolt className="text-sm" /> ENGINEERING SOLUTIONS <FaBolt className="text-sm" />
            </motion.p>
            
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
              >
                <span className="text-white">Engineering</span>
                <br />
                <span className="text-[#00AEEF]">
                  Solutions for Real World
                </span>
              </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-400 text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
            >
              Professional engineering solutions for robotics, IoT, solar systems, 
              and industrial automation. From FYP to industry projects.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-4 justify-center flex-wrap"
            >
              <Link to="/contact">
                <button className="px-8 py-3 bg-[#00AEEF] text-black rounded-lg font-semibold hover:shadow-[0_0_20px_#00AEEF] transition-all duration-300 flex items-center gap-2">
                  Get Quote <FaArrowRight />
                </button>
              </Link>
              <Link to="/services">
                <button className="px-8 py-3 border border-[#00AEEF] text-[#00AEEF] rounded-lg font-semibold hover:bg-[#00AEEF]/10 transition-all duration-300">
                  Our Services
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-[#0F0F0F]" />
          <div className="absolute inset-0" style={electricDots} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
        
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-4 gap-8"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="flex justify-center mb-3">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold text-[#00AEEF] mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-black" />
          <div className="absolute inset-0" style={electricDiagonal} />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="mb-16 text-center"
          >
            <p className="text-xs tracking-[0.3em] text-[#00AEEF] mb-4">OUR SERVICES</p>
            <h2 className="text-4xl md:text-6xl font-light tracking-tighter">
              What We <span className="font-bold text-[#00AEEF]">Offer</span>
            </h2>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, idx) => (
              <Link to={`/service/${service.id}`} key={idx}>
                <motion.div
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  className="group cursor-pointer h-full"
                >
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-[#00AEEF]/50 transition-all duration-500 h-full">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-[#00AEEF] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">{service.shortDesc}</p>
                    <p className="text-[#00AEEF] font-semibold text-sm mb-4">{service.price}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.slice(0, 2).map((feature, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-gray-800 rounded-full text-gray-300">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="text-[#00AEEF] text-sm font-medium group-hover:gap-2 transition-all flex items-center gap-1">
                      Learn More <FaArrowRight className="text-xs" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-[#0A0A0A]" />
          <div className="absolute inset-0" style={electricHexagon} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-[0.3em] text-[#00AEEF] mb-4">WHY CHOOSE US</p>
            <h2 className="text-4xl md:text-6xl font-light tracking-tighter">
              Why <span className="font-bold text-[#00AEEF]">Robotify.pk?</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {whyChoose.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-2xl text-center border border-gray-800 hover:border-[#00AEEF]/30 transition-all"
              >
                <div className="text-[#00AEEF] flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00AEEF]/5 via-black to-blue-600/5" />
          <div className="absolute inset-0" style={electricGrid} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto relative z-10"
        >
          <p className="text-xs tracking-[0.3em] text-[#00AEEF] mb-6">START YOUR PROJECT</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6">
            Ready to Build Your
            <br />
            <span className="font-bold text-[#00AEEF]">Engineering Project?</span>
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            Let's discuss your requirements and bring your ideas to life.
          </p>
          <Link to="/contact">
            <button className="px-10 py-4 bg-[#00AEEF] text-black rounded-lg text-lg font-semibold hover:shadow-[0_0_30px_#00AEEF] transition-all duration-300 flex items-center gap-2 mx-auto">
              Get Free Consultation <FaArrowRight />
            </button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}