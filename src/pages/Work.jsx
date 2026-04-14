import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaIndustry, 
  FaHome, 
  FaSolarPanel, 
  FaRobot, 
  FaMicrochip, 
  FaUniversity,
  FaBolt,
  FaChartLine,
  FaHeadset,
  FaShieldAlt,
  FaArrowRight,
  FaCheckCircle,
  FaCalendarAlt,
  FaUser,
  FaTag,
  FaTools,
  FaTrophy,
  FaStar,
  FaSmile,
  FaClock
} from 'react-icons/fa';

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", "Industrial Automation", "IoT Solutions", "Energy Solutions", "Robotics", "FYP Projects"];

  const projects = [
    {
      id: 1,
      title: "Smart Factory Automation",
      category: "Industrial Automation",
      client: "ABC Industries",
      year: "2024",
      description: "Complete PLC-based automation system for a manufacturing facility. Implemented SCADA monitoring and control systems.",
      features: ["PLC Programming (Siemens S7-1200)", "SCADA System (WinCC)", "HMI Design", "Real-time Monitoring", "Data Logging", "Remote Access"],
      tech: ["Siemens PLC", "WinCC", "SCADA", "HMI"],
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600",
      icon: <FaIndustry className="text-2xl" />
    },
    {
      id: 2,
      title: "Smart Home IoT System",
      category: "IoT Solutions",
      client: "Residential Project",
      year: "2024",
      description: "Complete smart home automation system with mobile app control. Includes lighting, HVAC, security, and energy monitoring.",
      features: ["ESP32 Controllers", "Mobile App (Flutter)", "Cloud Integration (Firebase)", "Voice Control", "Energy Monitoring", "Security System"],
      tech: ["ESP32", "Flutter", "Firebase", "MQTT"],
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600",
      icon: <FaHome className="text-2xl" />
    },
    {
      id: 3,
      title: "Solar Power System",
      category: "Energy Solutions",
      client: "Residential Complex",
      year: "2024",
      description: "10kW solar power system installation with battery backup and monitoring dashboard.",
      features: ["10kW Solar Panels", "Hybrid Inverter", "Battery Bank", "Monitoring Dashboard", "Grid Integration", "Mobile Monitoring"],
      tech: ["Solar Panels", "Inverter", "BMS", "IoT Monitoring"],
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600",
      icon: <FaSolarPanel className="text-2xl" />
    },
    {
      id: 4,
      title: "Robotic Arm for Education",
      category: "Robotics",
      client: "University Project",
      year: "2023",
      description: "6-DOF robotic arm for educational purposes. Includes inverse kinematics and computer vision integration.",
      features: ["6-DOF Movement", "Servo Control", "Inverse Kinematics", "Computer Vision", "Python API", "Simulation"],
      tech: ["Arduino", "Python", "OpenCV", "Servo Motors"],
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600",
      icon: <FaRobot className="text-2xl" />
    },
    {
      id: 5,
      title: "Energy Management System",
      category: "IoT Solutions",
      client: "Commercial Building",
      year: "2024",
      description: "Real-time energy monitoring and management system for commercial buildings.",
      features: ["Energy Monitoring", "Load Management", "Automated Control", "Dashboard Analytics", "Alert System", "Report Generation"],
      tech: ["ESP8266", "Node.js", "MongoDB", "React"],
      image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600",
      icon: <FaMicrochip className="text-2xl" />
    },
    {
      id: 6,
      title: "Autonomous Robot (FYP)",
      category: "FYP Projects",
      client: "Student Project",
      year: "2024",
      description: "Autonomous navigation robot for final year project. Includes obstacle avoidance and path planning.",
      features: ["Autonomous Navigation", "Obstacle Avoidance", "Path Planning", "ROS Integration", "Sensor Fusion", "Complete Documentation"],
      tech: ["ROS", "Raspberry Pi", "LiDAR", "Python"],
      image: "https://images.unsplash.com/photo-1581092335871-5f9e5f5b8f5a?w=600",
      icon: <FaRobot className="text-2xl" />
    },
    {
      id: 7,
      title: "Industrial IoT Gateway",
      category: "Industrial Automation",
      client: "Manufacturing Plant",
      year: "2024",
      description: "IoT gateway for industrial machine monitoring and predictive maintenance.",
      features: ["Machine Monitoring", "Predictive Maintenance", "Cloud Integration", "Alert System", "Analytics Dashboard", "Modbus Protocol"],
      tech: ["NodeMCU", "Modbus", "AWS", "Grafana"],
      image: "https://images.unsplash.com/photo-1581092335871-5f9e5f5b8f5a?w=600",
      icon: <FaIndustry className="text-2xl" />
    },
    {
      id: 8,
      title: "Smart Agriculture System",
      category: "IoT Solutions",
      client: "Agricultural Project",
      year: "2023",
      description: "IoT-based smart farming system with soil moisture monitoring and automated irrigation.",
      features: ["Soil Monitoring", "Automated Irrigation", "Weather Station", "Mobile Control", "Data Analytics", "Crop Recommendations"],
      tech: ["ESP32", "Sensors", "LoRa", "React Native"],
      image: "https://images.unsplash.com/photo-1581092335871-5f9e5f5b8f5a?w=600",
      icon: <FaMicrochip className="text-2xl" />
    },
    {
      id: 9,
      title: "Home Security System",
      category: "FYP Projects",
      client: "Student Project",
      year: "2024",
      description: "AI-based home security system with facial recognition and motion detection.",
      features: ["Facial Recognition", "Motion Detection", "Mobile Alerts", "Live Streaming", "Cloud Storage", "Two-way Audio"],
      tech: ["Raspberry Pi", "Python", "OpenCV", "Twilio"],
      image: "https://images.unsplash.com/photo-1581092335871-5f9e5f5b8f5a?w=600",
      icon: <FaHome className="text-2xl" />
    }
  ];

  const stats = [
    { value: "50+", label: "Projects Completed", icon: <FaTrophy className="text-3xl text-[#00AEEF]" /> },
    { value: "98%", label: "Client Satisfaction", icon: <FaStar className="text-3xl text-[#00AEEF]" /> },
    { value: "30+", label: "Happy Clients", icon: <FaSmile className="text-3xl text-[#00AEEF]" /> },
    { value: "4+", label: "Years Experience", icon: <FaClock className="text-3xl text-[#00AEEF]" /> }
  ];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

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
              <FaBolt className="text-sm" /> OUR PORTFOLIO <FaBolt className="text-sm" />
            </p>
            <h1 className="text-4xl md:text-6xl font-light tracking-tighter mb-4">
              Our <span className="font-bold text-[#00AEEF]">Work</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore our successful projects and see how we've helped clients 
              achieve their engineering goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter with Electric Dots */}
      <section className="relative py-8 px-6 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-[#0A0A0A]" />
          <div className="absolute inset-0" style={electricDots} />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 text-sm rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-[#00AEEF] text-black font-semibold"
                    : "border border-gray-700 text-gray-400 hover:border-[#00AEEF] hover:text-[#00AEEF]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid with Electric Diagonal */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-black" />
          <div className="absolute inset-0" style={electricDiagonal} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            key={selectedCategory}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer"
              >
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-[#00AEEF]/50 transition-all duration-500">
                  
                  {/* Project Image */}
                  <div className="h-56 relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Icon Badge */}
                    <div className="absolute top-4 left-4 w-10 h-10 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-[#00AEEF]">
                      {project.icon}
                    </div>
                    
                    {/* Year Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 bg-[#00AEEF]/20 backdrop-blur-sm rounded-full text-xs text-[#00AEEF] flex items-center gap-1">
                      <FaCalendarAlt className="text-[10px]" /> {project.year}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1 group-hover:text-[#00AEEF] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-2 flex items-center gap-1">
                      <FaUser className="text-[10px]" /> {project.client}
                    </p>
                    <p className="text-gray-500 text-sm line-clamp-2 mb-4">{project.description}</p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="text-xs px-2 py-1 bg-gray-800 rounded-full text-gray-300">
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="text-xs px-2 py-1 bg-gray-800 rounded-full text-gray-400">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section with Electric Hexagon */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-[#0A0A0A]" />
          <div className="absolute inset-0" style={electricHexagon} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-3">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-[#00AEEF] mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
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
              Have a Project in Mind?
            </h2>
            <p className="text-gray-400 mb-6">
              Let's discuss your requirements and create something amazing together.
            </p>
            <Link to="/contact">
              <button className="px-8 py-3 bg-[#00AEEF] text-black rounded-lg font-semibold hover:shadow-[0_0_20px_#00AEEF] transition-all duration-300 flex items-center gap-2 mx-auto">
                Start Your Project <FaArrowRight />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-[#00AEEF]/30"
            >
              <div className="relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/60 rounded-full flex items-center justify-center text-white hover:bg-black/80 transition text-xl"
                >
                  ✕
                </button>
                <div className="absolute bottom-4 left-4 px-3 py-1 bg-[#00AEEF]/20 backdrop-blur-sm rounded-full text-sm text-[#00AEEF] flex items-center gap-1">
                  <FaTag className="text-xs" /> {selectedProject.category}
                </div>
              </div>
              
              <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-320px)]">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold">{selectedProject.title}</h2>
                    <p className="text-gray-400 text-sm mt-1 flex items-center gap-2">
                      <FaUser className="text-xs" /> Client: {selectedProject.client}
                      <FaCalendarAlt className="text-xs ml-2" /> Year: {selectedProject.year}
                    </p>
                  </div>
                  <div className="text-4xl text-[#00AEEF]">{selectedProject.icon}</div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6">{selectedProject.description}</p>
                
                <h3 className="text-lg font-semibold mb-3 text-[#00AEEF] flex items-center gap-2">
                  <FaTools className="text-sm" /> Key Features
                </h3>
                <div className="grid md:grid-cols-2 gap-2 mb-6">
                  {selectedProject.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-400 text-sm">
                      <FaCheckCircle className="text-[#00AEEF] text-xs" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <h3 className="text-lg font-semibold mb-3 text-[#00AEEF] flex items-center gap-2">
                  <FaMicrochip className="text-sm" /> Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-4 border-t border-gray-800">
                  <Link to="/contact">
                    <button className="px-6 py-2 bg-[#00AEEF] text-black rounded-lg font-semibold hover:shadow-[0_0_20px_#00AEEF] transition-all flex items-center gap-2">
                      Request Similar Project <FaArrowRight />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}