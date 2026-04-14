import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaRobot, 
  FaMicrochip, 
  FaSolarPanel, 
  FaIndustry, 
  FaGraduationCap, 
  FaTools,
  FaBolt,
  FaChartLine,
  FaHeadset,
  FaShieldAlt,
  FaArrowRight,
  FaCheckCircle
} from 'react-icons/fa';

export default function Services() {
  const [hoveredId, setHoveredId] = useState(null);

  const services = [
    {
      id: "robotics",
      title: "Robotics Systems",
      icon: <FaRobot className="text-5xl text-[#00AEEF]" />,
      shortDesc: "Industrial & Educational Robotics",
      fullDesc: "Complete robotics solutions from design to implementation. We specialize in Arduino, Raspberry Pi, ESP32, and industrial robotics.",
      price: "From PKR 35,000",
      features: ["Custom Robot Design", "Industrial Automation", "Sensor Integration", "Control Systems", "Embedded Programming", "ROS Development"],
      delivery: "2-4 weeks",
      tech: ["Arduino", "Raspberry Pi", "ESP32", "ROS", "Sensors"],
    },
    {
      id: "iot",
      title: "IoT Solutions",
      icon: <FaMicrochip className="text-5xl text-[#00AEEF]" />,
      shortDesc: "Smart IoT & EMS Systems",
      fullDesc: "Internet of Things solutions for smart homes, industries, and energy management systems with real-time monitoring.",
      price: "From PKR 30,000",
      features: ["Real-time Monitoring", "Cloud Integration", "Mobile App Development", "Data Analytics", "Dashboard Design", "Alert Systems"],
      delivery: "3-5 weeks",
      tech: ["NodeMCU", "ESP8266", "MQTT", "Firebase", "Flutter"],
    },
    {
      id: "solar",
      title: "Solar Systems",
      icon: <FaSolarPanel className="text-5xl text-[#00AEEF]" />,
      shortDesc: "Solar Energy Solutions",
      fullDesc: "Complete solar system design, installation, and monitoring solutions for homes, businesses, and industries.",
      price: "From PKR 50,000",
      features: ["System Design", "Installation", "Performance Monitoring", "Maintenance", "Battery Backup", "Grid-Tie Systems"],
      delivery: "1-3 weeks",
      tech: ["Solar Panels", "Inverters", "Batteries", "Monitoring"],
    },
    {
      id: "automation",
      title: "Industrial Automation",
      icon: <FaIndustry className="text-5xl text-[#00AEEF]" />,
      shortDesc: "PLC & SCADA Systems",
      fullDesc: "Professional industrial automation solutions including PLC programming, SCADA systems, HMI design, and process control.",
      price: "From PKR 40,000",
      features: ["PLC Programming", "SCADA Systems", "HMI Design", "Process Control", "Factory Automation", "Predictive Maintenance"],
      delivery: "2-6 weeks",
      tech: ["Siemens PLC", "Allen Bradley", "WinCC", "Factory IO"],
    },
    {
      id: "fyp",
      title: "FYP & Academic",
      icon: <FaGraduationCap className="text-5xl text-[#00AEEF]" />,
      shortDesc: "Final Year Projects",
      fullDesc: "Professional guidance and development for your final year projects. Complete support from concept to presentation.",
      price: "From PKR 25,000",
      features: ["Project Guidance", "Custom Development", "Documentation", "Presentation Ready", "Source Code", "Research Paper Help"],
      delivery: "4-8 weeks",
      tech: ["Arduino", "Python", "React", "Node.js", "MySQL"],
    },
    {
      id: "custom",
      title: "Custom Projects",
      icon: <FaTools className="text-5xl text-[#00AEEF]" />,
      shortDesc: "Tailored Engineering Solutions",
      fullDesc: "Custom engineering projects tailored to your specific requirements. We build exactly what you need.",
      price: "Custom Quote",
      features: ["Requirement Analysis", "Design & Development", "Testing & QA", "Deployment", "Training", "Ongoing Support"],
      delivery: "Varies",
      tech: ["Any Tech Stack", "Custom Solutions"],
    }
  ];

  const whyChoose = [
    { icon: <FaBolt className="text-3xl" />, title: "Fast Delivery", desc: "Timely delivery guaranteed" },
    { icon: <FaChartLine className="text-3xl" />, title: "Quality Assurance", desc: "Industry standard solutions" },
    { icon: <FaHeadset className="text-3xl" />, title: "24/7 Support", desc: "Always here to help" },
    { icon: <FaShieldAlt className="text-3xl" />, title: "Best Price", desc: "Competitive pricing" }
  ];

  const process = [
    { step: "01", title: "Consultation", desc: "Discuss requirements and scope" },
    { step: "02", title: "Planning", desc: "Create detailed project plan" },
    { step: "03", title: "Development", desc: "Build and test solution" },
    { step: "04", title: "Delivery", desc: "Deploy and provide support" }
  ];

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
              <FaBolt className="text-sm" /> WHAT WE OFFER <FaBolt className="text-sm" />
            </p>
            <h1 className="text-4xl md:text-6xl font-light tracking-tighter mb-4">
              Our <span className="font-bold text-[#00AEEF]">Services</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive engineering solutions tailored to your needs. 
              From robotics to solar systems, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section with Electric Dots */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-[#0A0A0A]" />
          <div className="absolute inset-0" style={electricDots} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, idx) => (
              <Link to={`/service/${service.id}`} key={service.id}>
                <motion.div
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  onMouseEnter={() => setHoveredId(service.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="group cursor-pointer h-full"
                >
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-[#00AEEF]/50 transition-all duration-500 h-full">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-[#00AEEF] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">{service.shortDesc}</p>
                    <p className="text-[#00AEEF] font-semibold text-sm mb-4">{service.price}</p>
                    
                    {/* Features Preview */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.slice(0, 3).map((feature, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-gray-800 rounded-full text-gray-300 flex items-center gap-1">
                          <FaCheckCircle className="text-[8px] text-[#00AEEF]" /> {feature}
                        </span>
                      ))}
                      {service.features.length > 3 && (
                        <span className="text-xs px-2 py-1 bg-gray-800 rounded-full text-gray-400">
                          +{service.features.length - 3}
                        </span>
                      )}
                    </div>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tech.slice(0, 3).map((tech, i) => (
                        <span key={i} className="text-xs text-gray-500">
                          #{tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="text-[#00AEEF] text-sm font-medium group-hover:gap-2 transition-all flex items-center gap-1">
                      View Details <FaArrowRight className="text-xs" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section with Electric Diagonal */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-black" />
          <div className="absolute inset-0" style={electricDiagonal} />
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
            <p className="text-xs tracking-[0.3em] text-[#00AEEF] mb-4">WHY CHOOSE US</p>
            <h2 className="text-3xl md:text-4xl font-bold">Why <span className="text-[#00AEEF]">Robotify.pk?</span></h2>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {whyChoose.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-2xl text-center border border-gray-800 hover:border-[#00AEEF]/30 transition-all"
              >
                <div className="text-[#00AEEF] flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section with Electric Hexagon */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-[#0A0A0A]" />
          <div className="absolute inset-0" style={electricHexagon} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <p className="text-xs tracking-[0.3em] text-[#00AEEF] mb-4">OUR PROCESS</p>
            <h2 className="text-3xl md:text-4xl font-bold">How We <span className="text-[#00AEEF]">Work</span></h2>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {process.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                <div className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-2xl text-center border border-gray-800 hover:border-[#00AEEF]/30 transition-all">
                  <div className="text-4xl font-bold text-[#00AEEF] mb-3">{item.step}</div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 text-[#00AEEF] text-2xl">
                    <FaArrowRight />
                  </div>
                )}
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
              Need a Custom Solution?
            </h2>
            <p className="text-gray-400 mb-6">
              Don't see what you're looking for? We offer custom engineering solutions tailored to your specific requirements.
            </p>
            <Link to="/contact">
              <button className="px-8 py-3 bg-[#00AEEF] text-black rounded-lg font-semibold hover:shadow-[0_0_20px_#00AEEF] transition-all duration-300 flex items-center gap-2 mx-auto">
                Get Custom Quote <FaArrowRight />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}