import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaIndustry, 
  FaHome, 
  FaSolarPanel, 
  FaRobot, 
  FaMicrochip,
  FaArrowRight,
  FaCheckCircle,
  FaClock,
  FaUser,
  FaCalendarAlt,
  FaTrophy,
  FaStar,
  FaSmile,
  FaHeadset,
  FaTimes,
  FaCogs,
  FaBolt
} from 'react-icons/fa';

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  // Read filter from localStorage on page load
  useEffect(() => {
    const savedFilter = localStorage.getItem('workFilter');
    if (savedFilter && savedFilter !== 'All') {
      setSelectedCategory(savedFilter);
      // Clear the filter after using
      localStorage.removeItem('workFilter');
    }
  }, []);

  const categories = ["All", "Digital Logic", "Basic Electronics", "Embedded Systems", "Arduino Projects", "Raspberry Pi Projects"];

  const projects = [
    {
      id: 1,
      title: "Smart Factory Automation",
      category: "Digital Logic",
      client: "ABC Industries",
      year: "2024",
      description: "Complete PLC-based automation system for a manufacturing facility. Implemented SCADA monitoring and control systems.",
      features: ["PLC Programming (Siemens S7-1200)", "SCADA System (WinCC)", "HMI Design", "Real-time Monitoring", "Data Logging", "Remote Access"],
      tech: ["Siemens PLC", "WinCC", "SCADA", "HMI"],
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600",
      icon: <FaIndustry className="text-3xl text-[#00AEEF]" />,
      duration: "4 weeks",
      difficulty: "Advanced"
    },
    {
      id: 2,
      title: "Smart Home IoT System",
      category: "Electronics",
      client: "Residential Project",
      year: "2024",
      description: "Complete smart home automation system with mobile app control. Includes lighting, HVAC, security, and energy monitoring.",
      features: ["ESP32 Controllers", "Mobile App (Flutter)", "Cloud Integration (Firebase)", "Voice Control", "Energy Monitoring", "Security System"],
      tech: ["ESP32", "Flutter", "Firebase", "MQTT"],
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600",
      icon: <FaHome className="text-3xl text-[#00AEEF]" />,
      duration: "3 weeks",
      difficulty: "Intermediate"
    },
    {
      id: 3,
      title: "Solar Power System",
      category: "Embedded Systems",
      client: "Residential Complex",
      year: "2024",
      description: "10kW solar power system installation with battery backup and monitoring dashboard.",
      features: ["10kW Solar Panels", "Hybrid Inverter", "Battery Bank", "Monitoring Dashboard", "Grid Integration", "Mobile Monitoring"],
      tech: ["Solar Panels", "Inverter", "BMS", "IoT Monitoring"],
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600",
      icon: <FaSolarPanel className="text-3xl text-[#00AEEF]" />,
      duration: "2 weeks",
      difficulty: "Beginner"
    },
    {
      id: 4,
      title: "Robotic Arm for Education",
      category: "Arduino Projects",
      client: "University Project",
      year: "2023",
      description: "6-DOF robotic arm for educational purposes. Includes inverse kinematics and computer vision integration.",
      features: ["6-DOF Movement", "Servo Control", "Inverse Kinematics", "Computer Vision", "Python API", "Simulation"],
      tech: ["Arduino", "Python", "OpenCV", "Servo Motors"],
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600",
      icon: <FaRobot className="text-3xl text-[#00AEEF]" />,
      duration: "4 weeks",
      difficulty: "Advanced"
    },
    {
      id: 5,
      title: "Energy Management System",
      category: "Basic Electronics",
      client: "Commercial Building",
      year: "2024",
      description: "Real-time energy monitoring and management system for commercial buildings.",
      features: ["Energy Monitoring", "Load Management", "Automated Control", "Dashboard Analytics", "Alert System", "Report Generation"],
      tech: ["ESP8266", "Node.js", "MongoDB", "React"],
      image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600",
      icon: <FaMicrochip className="text-3xl text-[#00AEEF]" />,
      duration: "3 weeks",
      difficulty: "Intermediate"
    },
    {
      id: 6,
      title: "Autonomous Robot (FYP)",
      category: "Raspberry Pi Projects",
      client: "Student Project",
      year: "2024",
      description: "Autonomous navigation robot for final year project. Includes obstacle avoidance and path planning.",
      features: ["Autonomous Navigation", "Obstacle Avoidance", "Path Planning", "ROS Integration", "Sensor Fusion", "Complete Documentation"],
      tech: ["ROS", "Raspberry Pi", "LiDAR", "Python"],
      image: "https://images.unsplash.com/photo-1581092335871-5f9e5f5b8f5a?w=600",
      icon: <FaRobot className="text-3xl text-[#00AEEF]" />,
      duration: "5 weeks",
      difficulty: "Advanced"
    },
    {
      id: 7,
      title: "Industrial IoT Gateway",
      category: "Digital Logic",
      client: "Manufacturing Plant",
      year: "2024",
      description: "IoT gateway for industrial machine monitoring and predictive maintenance.",
      features: ["Machine Monitoring", "Predictive Maintenance", "Cloud Integration", "Alert System", "Analytics Dashboard", "Modbus Protocol"],
      tech: ["NodeMCU", "Modbus", "AWS", "Grafana"],
      image: "https://images.unsplash.com/photo-1581092335871-5f9e5f5b8f5a?w=600",
      icon: <FaIndustry className="text-3xl text-[#00AEEF]" />,
      duration: "4 weeks",
      difficulty: "Advanced"
    },
    {
      id: 8,
      title: "Smart Agriculture System",
      category: "Electronics",
      client: "Agricultural Project",
      year: "2023",
      description: "IoT-based smart farming system with soil moisture monitoring and automated irrigation.",
      features: ["Soil Monitoring", "Automated Irrigation", "Weather Station", "Mobile Control", "Data Analytics", "Crop Recommendations"],
      tech: ["ESP32", "Sensors", "LoRa", "React Native"],
      image: "https://images.unsplash.com/photo-1581092335871-5f9e5f5b8f5a?w=600",
      icon: <FaMicrochip className="text-3xl text-[#00AEEF]" />,
      duration: "3 weeks",
      difficulty: "Intermediate"
    },
    {
      id: 9,
      title: "Home Security System",
      category: "Raspberry Pi Projects",
      client: "Student Project",
      year: "2024",
      description: "AI-based home security system with facial recognition and motion detection.",
      features: ["Facial Recognition", "Motion Detection", "Mobile Alerts", "Live Streaming", "Cloud Storage", "Two-way Audio"],
      tech: ["Raspberry Pi", "Python", "OpenCV", "Twilio"],
      image: "https://images.unsplash.com/photo-1581092335871-5f9e5f5b8f5a?w=600",
      icon: <FaHome className="text-3xl text-[#00AEEF]" />,
      duration: "4 weeks",
      difficulty: "Intermediate"
    }
  ];

  const stats = [
    { value: "20+", label: "Projects Completed", icon: <FaTrophy className="text-3xl text-[#00AEEF]" /> },
    { value: "100%", label: "Success Rate", icon: <FaStar className="text-3xl text-[#00AEEF]" /> },
    { value: "15+", label: "Happy Students", icon: <FaSmile className="text-3xl text-[#00AEEF]" /> },
    { value: "24/7", label: "Support", icon: <FaHeadset className="text-3xl text-[#00AEEF]" /> }
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

  return (
    <div className="bg-black min-h-screen pt-24 pb-16">
      
      {/* Hero Section */}
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
              <FaBolt className="text-sm text-[#00AEEF]" /> OUR WORK <FaBolt className="text-sm text-[#00AEEF]" />
            </p>
            <h1 className="text-4xl md:text-6xl font-light tracking-tighter mb-4">
              Featured <span className="font-bold text-[#00AEEF]">Projects</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore our collection of engineering projects. From industrial automation to IoT solutions,
              we've got projects for every skill level.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-10 px-6 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-[#0A0A0A]" />
          <div className="absolute inset-0" style={electricDots} />
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

      {/* Category Filter */}
      <section className="relative py-8 px-6 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-black" />
          <div className="absolute inset-0" style={electricDiagonal} />
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

      {/* Projects Grid */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-[#0A0A0A]" />
          <div className="absolute inset-0" style={electricGrid} />
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
                  <div className="h-48 relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    {/* Icon Badge */}
                    <div className="absolute top-4 left-4 w-12 h-12 bg-black/60 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      {project.icon}
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 bg-[#00AEEF]/20 backdrop-blur-sm rounded-full text-xs text-[#00AEEF]">
                      {project.category}
                    </div>
                    
                    {/* Duration Badge */}
                    <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-xs text-gray-300 flex items-center gap-1">
                      <FaClock className="text-[10px] text-[#00AEEF]" /> {project.duration}
                    </div>
                    
                    {/* Difficulty Badge */}
                    <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-xs text-gray-300">
                      {project.difficulty}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold mb-1 group-hover:text-[#00AEEF] transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-xs mb-2 flex items-center gap-2">
                      <span className="flex items-center gap-1"><FaUser className="text-[10px] text-[#00AEEF]" /> {project.client}</span>
                      <span className="flex items-center gap-1"><FaCalendarAlt className="text-[10px] text-[#00AEEF]" /> {project.year}</span>
                    </p>
                    <p className="text-gray-500 text-sm line-clamp-2 mb-3">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="text-[10px] px-2 py-0.5 bg-gray-800 rounded-full text-gray-300">
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="text-[10px] px-2 py-0.5 bg-gray-800 rounded-full text-gray-400">
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

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
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
                className="w-full h-56 md:h-72 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/60 rounded-full flex items-center justify-center text-white hover:bg-black/80 transition text-xl"
              >
                <FaTimes />
              </button>
              <div className="absolute bottom-4 left-4 flex gap-2">
                <span className="px-3 py-1 bg-[#00AEEF]/20 backdrop-blur-sm rounded-full text-sm text-[#00AEEF]">
                  {selectedProject.category}
                </span>
                <span className="px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-sm text-gray-300">
                  {selectedProject.difficulty}
                </span>
              </div>
            </div>
            
            <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-280px)]">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold">{selectedProject.title}</h2>
                  <p className="text-gray-400 text-sm mt-1 flex items-center gap-3">
                    <span className="flex items-center gap-1"><FaUser className="text-xs text-[#00AEEF]" /> {selectedProject.client}</span>
                    <span className="flex items-center gap-1"><FaCalendarAlt className="text-xs text-[#00AEEF]" /> {selectedProject.year}</span>
                    <span className="flex items-center gap-1"><FaClock className="text-xs text-[#00AEEF]" /> {selectedProject.duration}</span>
                  </p>
                </div>
                <div className="text-4xl">{selectedProject.icon}</div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">{selectedProject.description}</p>
              
              <h3 className="text-lg font-semibold mb-3 text-[#00AEEF] flex items-center gap-2">
                <FaCheckCircle className="text-sm" /> Key Features
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
                    Get This Project <FaArrowRight />
                  </button>
                </Link>
                <Link to="/services">
                  <button className="px-6 py-2 border border-gray-700 text-gray-400 rounded-lg hover:border-[#00AEEF] hover:text-[#00AEEF] transition-all">
                    More Projects
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* CTA Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00AEEF]/5 via-black to-blue-600/5" />
          <div className="absolute inset-0" style={electricDots} />
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
              Need a Custom Project?
            </h2>
            <p className="text-gray-400 mb-6">
              Don't see what you're looking for? We offer custom project development tailored to your requirements.
            </p>
            <Link to="/contact">
              <button className="px-8 py-3 bg-[#00AEEF] text-black rounded-lg font-semibold hover:shadow-[0_0_20px_#00AEEF] transition-all flex items-center gap-2 mx-auto">
                Discuss Your Project <FaArrowRight />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}