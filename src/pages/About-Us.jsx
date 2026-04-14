import React from 'react';
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
  FaCheckCircle,
  FaTrophy,
  FaStar,
  FaSmile,
  FaClock,
  FaBullseye,
  FaEye,
  FaLightbulb,
  FaHandshake,
  FaUsers,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';

export default function About() {
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

  const teamMembers = [
    {
      name: "Ahsan Raza",
      role: "Founder & Lead Engineer",
      icon: <FaRobot className="text-5xl text-[#00AEEF]" />,
      bio: "10+ years of experience in robotics and embedded systems. Leading the technical vision.",
      expertise: ["Robotics", "IoT", "AI/ML"]
    },
    {
      name: "Sarah Ahmed",
      role: "Senior Robotics Engineer",
      icon: <FaMicrochip className="text-5xl text-[#00AEEF]" />,
      bio: "Specializes in industrial automation and robotic arm programming.",
      expertise: ["PLC", "SCADA", "ROS"]
    },
    {
      name: "Usman Khan",
      role: "IoT Specialist",
      icon: <FaIndustry className="text-5xl text-[#00AEEF]" />,
      bio: "Expert in cloud integration and smart device development.",
      expertise: ["NodeMCU", "AWS", "MQTT"]
    },
    {
      name: "Fatima Ali",
      role: "Project Manager",
      icon: <FaUsers className="text-5xl text-[#00AEEF]" />,
      bio: "Ensures timely delivery and client satisfaction.",
      expertise: ["Agile", "Scrum", "Client Relations"]
    }
  ];

const milestones = [
  { 
    year: "2022", 
    title: "Company Founded", 
    desc: "Started Robotify.pk with a vision to provide quality engineering solutions", 
    icon: <FaCalendarAlt className="text-[#00AEEF]" /> 
  },
  { 
    year: "2023", 
    title: "First 50 Projects", 
    desc: "Successfully completed 50+ projects for students and industries", 
    icon: <FaTrophy className="text-[#00AEEF]" /> 
  },
  { 
    year: "2024", 
    title: "Solar Energy Division", 
    desc: "Launched specialized solar system design and installation services", 
    icon: <FaSolarPanel className="text-[#00AEEF]" /> 
  },
  { 
    year: "2025", 
    title: "Industry Recognition", 
    desc: "Recognized as a trusted engineering solutions provider in Pakistan", 
    icon: <FaStar className="text-[#00AEEF]" /> 
  },
  { 
    year: "2026", 
    title: "AI & Robotics Expansion", 
    desc: "Expanded into AI models, robotics systems, and advanced automation", 
    icon: <FaRobot className="text-[#00AEEF]" /> 
  }
];
  const stats = [
    { value: "100+", label: "Projects Completed", icon: <FaTrophy className="text-3xl text-[#00AEEF]" /> },
    { value: "98%", label: "Client Satisfaction", icon: <FaStar className="text-3xl text-[#00AEEF]" /> },
    { value: "10+", label: "Team Members", icon: <FaUsers className="text-3xl text-[#00AEEF]" /> },
    { value: "24/7", label: "Support Available", icon: <FaHeadset className="text-3xl text-[#00AEEF]" /> }
  ];

  const values = [
    { icon: <FaLightbulb className="text-4xl" />, title: "Innovation", desc: "We stay ahead with cutting-edge technology" },
    { icon: <FaChartLine className="text-4xl" />, title: "Quality", desc: "Industry-standard solutions, every time" },
    { icon: <FaHeadset className="text-4xl" />, title: "Support", desc: "24/7 client support for all projects" },
    { icon: <FaHandshake className="text-4xl" />, title: "Integrity", desc: "Honest and transparent dealings" }
  ];

  return (
    <div className="bg-black min-h-screen pt-24 pb-16">
      
      {/* Hero Section with Electric Grid */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-black" />
          <div className="absolute inset-0" style={electricGrid} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />
        </div>
        
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-[#00AEEF]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <p className="text-xs tracking-[0.3em] text-[#00AEEF] mb-4 flex items-center gap-2">
                <FaBolt className="text-sm" /> ABOUT US <FaBolt className="text-sm" />
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Engineering Solutions for
                <br />
                <span className="text-[#00AEEF]"> Real-World Problems</span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Robotify.pk is a leading provider of engineering solutions, 
                specializing in robotics, IoT, solar systems, and industrial automation. 
                We help students, professionals, and industries bring their ideas to life.
              </p>
              <div className="flex gap-4">
                <Link to="/contact">
                  <button className="px-6 py-2 bg-[#00AEEF] text-black rounded-lg font-semibold hover:shadow-[0_0_20px_#00AEEF] transition-all flex items-center gap-2">
                    Work With Us <FaArrowRight />
                  </button>
                </Link>
                <Link to="/work">
                  <button className="px-6 py-2 border border-[#00AEEF] text-[#00AEEF] rounded-lg font-semibold hover:bg-[#00AEEF]/10 transition-all">
                    Our Work
                  </button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 text-center border border-[#00AEEF]/20"
            >
              <FaBolt className="text-8xl text-[#00AEEF] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Innovation in Every Project</h3>
              <p className="text-gray-400">Pushing boundaries with cutting-edge technology</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section with Electric Dots */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-[#0A0A0A]" />
          <div className="absolute inset-0" style={electricDots} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-[#00AEEF]/30 transition-all"
            >
              <FaBullseye className="text-6xl text-[#00AEEF] mb-4" />
              <h2 className="text-2xl font-bold mb-3 text-[#00AEEF]">Our Mission</h2>
              <p className="text-gray-400 leading-relaxed">
                To provide accessible, high-quality engineering solutions that empower 
                students, professionals, and industries to innovate and succeed in their 
                respective fields.
              </p>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-[#00AEEF]/30 transition-all"
            >
              <FaEye className="text-6xl text-[#00AEEF] mb-4" />
              <h2 className="text-2xl font-bold mb-3 text-[#00AEEF]">Our Vision</h2>
              <p className="text-gray-400 leading-relaxed">
                To become Pakistan's leading engineering solutions provider, recognized 
                for innovation, quality, and commitment to client success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section with Electric Diagonal */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-black" />
          <div className="absolute inset-0" style={electricDiagonal} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
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

      {/* Values Section with Electric Hexagon */}
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
            <p className="text-xs tracking-[0.3em] text-[#00AEEF] mb-4">CORE VALUES</p>
            <h2 className="text-3xl md:text-4xl font-bold">What We <span className="text-[#00AEEF]">Believe In</span></h2>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-2xl text-center border border-gray-800 hover:border-[#00AEEF]/30 transition-all"
              >
                <div className="text-[#00AEEF] flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section with Electric Grid */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-black" />
          <div className="absolute inset-0" style={electricGrid} />
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
            <p className="text-xs tracking-[0.3em] text-[#00AEEF] mb-4">OUR JOURNEY</p>
            <h2 className="text-3xl md:text-4xl font-bold">Key <span className="text-[#00AEEF]">Milestones</span></h2>
          </motion.div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-[#00AEEF] to-transparent hidden md:block" />
            
            <div className="space-y-8">
              {milestones.map((milestone, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={fadeInUp}
                  transition={{ delay: idx * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-6 ${
                    idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1 text-center md:text-right">
                    <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-[#00AEEF]/30 transition-all">
                      <div className="flex items-center justify-center md:justify-end gap-2 mb-2">
                        {milestone.icon}
                        <h3 className="text-2xl font-bold text-[#00AEEF]">{milestone.year}</h3>
                      </div>
                      <h4 className="text-lg font-semibold mt-2">{milestone.title}</h4>
                      <p className="text-gray-400 text-sm mt-2">{milestone.desc}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-[#00AEEF] rounded-full flex items-center justify-center text-black font-bold shadow-[0_0_15px_#00AEEF]">
                      {idx + 1}
                    </div>
                  </div>
                  
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section with Electric Dots */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-[#0A0A0A]" />
          <div className="absolute inset-0" style={electricDots} />
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
            <p className="text-xs tracking-[0.3em] text-[#00AEEF] mb-4">OUR TEAM</p>
            <h2 className="text-3xl md:text-4xl font-bold">Meet The <span className="text-[#00AEEF]">Experts</span></h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Passionate engineers dedicated to delivering excellence
            </p>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-800 hover:border-[#00AEEF]/30 transition-all"
              >
                <div className="flex justify-center mb-4">{member.icon}</div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-[#00AEEF] text-sm mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.expertise.map((exp, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-gray-800 rounded-full text-gray-300">
                      {exp}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section with Electric Hexagon */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00AEEF]/5 via-black to-blue-600/5" />
          <div className="absolute inset-0" style={electricHexagon} />
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
              Want to Work With Us?
            </h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Let's collaborate on your next engineering project. We're here to help you succeed.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact">
                <button className="px-8 py-3 bg-[#00AEEF] text-black rounded-lg font-semibold hover:shadow-[0_0_20px_#00AEEF] transition-all flex items-center gap-2">
                  Start a Project <FaArrowRight />
                </button>
              </Link>
              <Link to="/services">
                <button className="px-8 py-3 border border-[#00AEEF] text-[#00AEEF] rounded-lg font-semibold hover:bg-[#00AEEF]/10 transition-all">
                  Explore Services
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}