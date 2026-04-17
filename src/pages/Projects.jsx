import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { 
  FaMicrochip, 
  FaBolt, 
  FaPlug, 
  FaGamepad, 
  FaMicrophone,
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
  FaLayerGroup,
  FaCode,
  FaCogs,
  FaRobot
} from 'react-icons/fa';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", "Digital Logic", "Electronics", "Embedded", "Arduino", "Raspberry Pi"];

  const projects = [
    {
      id: 1,
      title: "4-Bit ALU Design",
      category: "Digital Logic",
      subCategory: "Digital Logic Design",
      client: "University Project",
      year: "2024",
      description: "Designed and implemented a 4-bit Arithmetic Logic Unit (ALU) using logic gates. Performs arithmetic and logical operations.",
      features: [
        "Arithmetic Operations (ADD, SUB)",
        "Logical Operations (AND, OR, XOR)",
        "Status Flags (Zero, Carry)",
        "Truth Table Implementation",
        "Circuit Simulation",
        "Verilog Implementation"
      ],
      tech: ["Logic Gates", "Verilog", "ModelSim", "FPGA"],
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600",
      icon: <FaMicrochip className="text-3xl text-[#00AEEF]" />,
      duration: "2 weeks",
      difficulty: "Intermediate"
    },
    {
      id: 2,
      title: "Power Supply Circuit",
      category: "Electronics",
      subCategory: "Basic Electronics",
      client: "Electronics Lab",
      year: "2024",
      description: "Designed a variable DC power supply circuit with voltage regulation and overcurrent protection.",
      features: [
        "Input: 220V AC",
        "Output: 0-30V DC Variable",
        "Current Limiting",
        "Short Circuit Protection",
        "LED Indicators",
        "Heat Sink Design"
      ],
      tech: ["Transformer", "Bridge Rectifier", "LM317", "Capacitors"],
      image: "https://images.unsplash.com/photo-1581092335871-5f9e5f5b8f5a?w=600",
      icon: <FaBolt className="text-3xl text-[#00AEEF]" />,
      duration: "1 week",
      difficulty: "Beginner"
    },
    {
      id: 3,
      title: "Traffic Light Controller",
      category: "Embedded",
      subCategory: "Embedded System",
      client: "Smart City Project",
      year: "2024",
      description: "Embedded system for automatic traffic light control using microcontroller and sensors.",
      features: [
        "4-Way Traffic Control",
        "Pedestrian Crossing",
        "Emergency Vehicle Priority",
        "LCD Display",
        "Manual Override",
        "Timer Configuration"
      ],
      tech: ["ATmega328", "C Programming", "LEDs", "Sensors"],
      image: "https://images.unsplash.com/photo-1581092335871-5f9e5f5b8f5a?w=600",
      icon: <FaPlug className="text-3xl text-[#00AEEF]" />,
      duration: "3 weeks",
      difficulty: "Intermediate"
    },
    {
      id: 4,
      title: "Smart Home Automation",
      category: "Arduino",
      subCategory: "Arduino Based",
      client: "Residential Project",
      year: "2024",
      description: "IoT-based home automation system using Arduino UNO. Control appliances via Bluetooth/Web.",
      features: [
        "Appliance Control (4 Channels)",
        "Bluetooth Control",
        "Manual Switches",
        "Status Display",
        "Voice Control Compatible",
        "Power Monitoring"
      ],
      tech: ["Arduino UNO", "HC-05", "Relay Module", "Android App"],
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600",
      icon: <FaGamepad className="text-3xl text-[#00AEEF]" />,
      duration: "2 weeks",
      difficulty: "Beginner"
    },
    {
      id: 5,
      title: "Weather Monitoring Station",
      category: "Arduino",
      subCategory: "Arduino Based",
      client: "Environmental Project",
      year: "2024",
      description: "Real-time weather monitoring system using Arduino and various sensors.",
      features: [
        "Temperature Monitoring",
        "Humidity Sensing",
        "Air Pressure",
        "LCD Display",
        "Data Logging",
        "Cloud Upload"
      ],
      tech: ["Arduino", "DHT11", "BMP180", "LCD", "SD Card"],
      image: "https://images.unsplash.com/photo-1581092335871-5f9e5f5b8f5a?w=600",
      icon: <FaMicrochip className="text-3xl text-[#00AEEF]" />,
      duration: "2 weeks",
      difficulty: "Beginner"
    },
    {
      id: 6,
      title: "Face Recognition System",
      category: "Raspberry Pi",
      subCategory: "RaspberryPi Based",
      client: "Security Project",
      year: "2024",
      description: "AI-based face recognition system using Raspberry Pi and OpenCV.",
      features: [
        "Real-time Face Detection",
        "Face Recognition",
        "Database Storage",
        "Access Control",
        "Email Alerts",
        "Web Dashboard"
      ],
      tech: ["Raspberry Pi", "Python", "OpenCV", "Camera Module"],
      image: "https://images.unsplash.com/photo-1581092335871-5f9e5f5b8f5a?w=600",
      icon: <FaMicrophone className="text-3xl text-[#00AEEF]" />,
      duration: "4 weeks",
      difficulty: "Advanced"
    },
    {
      id: 7,
      title: "Digital Clock with Alarm",
      category: "Digital Logic",
      subCategory: "Digital Logic Design",
      client: "Personal Project",
      year: "2023",
      description: "Digital clock using 7-segment displays with alarm functionality.",
      features: [
        "24-Hour Format",
        "Adjustable Alarm",
        "Snooze Function",
        "Temperature Display",
        "Backup Battery",
        "LED Indicators"
      ],
      tech: ["555 Timer", "Counters", "7-Segment", "Buzzer"],
      image: "https://images.unsplash.com/photo-1581092335871-5f9e5f5b8f5a?w=600",
      icon: <FaMicrochip className="text-3xl text-[#00AEEF]" />,
      duration: "1 week",
      difficulty: "Intermediate"
    },
    {
      id: 8,
      title: "Line Following Robot",
      category: "Arduino",
      subCategory: "Arduino Based",
      client: "Robotics Competition",
      year: "2024",
      description: "Autonomous line following robot using IR sensors and Arduino.",
      features: [
        "2-Wheel Drive",
        "IR Sensor Array",
        "PID Control",
        "Speed Control",
        "Obstacle Detection",
        "Battery Management"
      ],
      tech: ["Arduino", "IR Sensors", "DC Motors", "L298N"],
      image: "https://images.unsplash.com/photo-1581092335871-5f9e5f5b8f5a?w=600",
      icon: <FaRobot className="text-3xl text-[#00AEEF]" />,
      duration: "2 weeks",
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
              <FaBolt className="text-sm text-[#00AEEF]" /> OUR PROJECTS <FaBolt className="text-sm text-[#00AEEF]" />
            </p>
            <h1 className="text-4xl md:text-6xl font-light tracking-tighter mb-4">
              Featured <span className="font-bold text-[#00AEEF]">Projects</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore our collection of engineering projects. From digital logic to embedded systems,
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