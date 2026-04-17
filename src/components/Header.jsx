import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBolt, 
  FaArrowRight,
  FaRobot,
  FaMicrochip,
  FaSolarPanel,
  FaIndustry,
  FaGraduationCap,
  FaTools,
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaBriefcase,
  FaCogs,
  FaLaptopCode,
  FaMicrophone,
  FaGamepad,
  FaPlug,
  FaTimes
} from 'react-icons/fa';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isWorkOpen, setIsWorkOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsWorkOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services', hasDropdown: true, dropdownType: 'services' },
    { name: 'Work', path: '/work', hasDropdown: true, dropdownType: 'work' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const dropdownItems = {
    services: [
      { name: 'Solar Inverter Repairing', icon: <FaSolarPanel className="text-[#00AEEF]" />, path: '/services/solar-inverter-repair', filter: null },
      { name: 'Solar Cleaning Robot', icon: <FaRobot className="text-[#00AEEF]" />, path: '/services/solar-cleaning-robot', filter: null },
      { name: 'Robotics Systems / Robotic Projects', icon: <FaIndustry className="text-[#00AEEF]" />, path: '/services/robotics-projects', filter: null },
      { name: 'AI Models / AI Projects', icon: <FaMicrochip className="text-[#00AEEF]" />, path: '/services/ai-models', filter: null }
    ],
    work: [
      { name: 'Digital Logic Design', icon: <FaLaptopCode className="text-[#00AEEF]" />, path: '/work', filter: 'Digital Logic' },
      { name: 'Basic Electronics', icon: <FaBolt className="text-[#00AEEF]" />, path: '/work', filter: 'Electronics' },
      { name: 'Embedded Systems', icon: <FaPlug className="text-[#00AEEF]" />, path: '/work', filter: 'Embedded Systems' },
      { name: 'Arduino Projects', icon: <FaGamepad className="text-[#00AEEF]" />, path: '/work', filter: 'Arduino Projects' },
      { name: 'Raspberry Pi Projects', icon: <FaMicrophone className="text-[#00AEEF]" />, path: '/work', filter: 'Raspberry Pi Projects' }
    ]
  };

  // Function to handle work dropdown click with filter
  const handleWorkClick = (e, filter) => {
    e.preventDefault();
    // Store filter in localStorage
    localStorage.setItem('workFilter', filter);
    window.location.href = '/work';
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-black/80 backdrop-blur-xl border-b border-[#2A2A2A] py-4' 
            : 'bg-black/50 backdrop-blur-md border-b border-[#2A2A2A]/50 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <Link to="/" className="group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-2"
              >                                
                <img alt="Robotify Logo" className="w-35 h-20 object-cover rounded-lg" src="/Robotify.png"/>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => {
                    if (link.dropdownType === 'services') setIsServicesOpen(true);
                    if (link.dropdownType === 'work') setIsWorkOpen(true);
                  }}
                  onMouseLeave={() => {
                    setIsServicesOpen(false);
                    setIsWorkOpen(false);
                  }}
                >
                  <Link to={link.path}>
                    <motion.span
                      whileHover={{ y: -1 }}
                      className={`text-sm tracking-wide transition-all duration-300 cursor-pointer flex items-center gap-1 ${
                        location.pathname === link.path
                          ? 'text-[#00AEEF] border-b-2 border-[#00AEEF] pb-1'
                          : 'text-[#BFC3C7] hover:text-[#00AEEF]'
                      }`}
                    >
                      {link.name}
                      {link.hasDropdown && (
                        <span className="text-[10px]">▼</span>
                      )}
                    </motion.span>
                  </Link>

                  {/* Services Dropdown */}
                  {link.dropdownType === 'services' && (
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl border border-[#2A2A2A] rounded-xl overflow-hidden z-50"
                        >
                          <div className="p-2">
                            <h4 className="text-[#00AEEF] text-xs font-semibold tracking-wider px-3 py-2 border-b border-[#2A2A2A] mb-1 flex items-center gap-2">
                              <FaCogs className="text-xs" /> SERVICES
                            </h4>
                            {dropdownItems.services.map((item) => (
                              <Link key={item.name} to={item.path}>
                                <motion.div
                                  whileHover={{ x: 5 }}
                                  className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-[#00AEEF]/10 transition-all duration-300"
                                >
                                  <span className="text-[#00AEEF] text-xl">{item.icon}</span>
                                  <span className="text-[#BFC3C7] text-sm hover:text-[#00AEEF] transition">
                                    {item.name}
                                  </span>
                                </motion.div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}

                  {/* Work Dropdown - With Filter Links */}
                  {link.dropdownType === 'work' && (
                    <AnimatePresence>
                      {isWorkOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl border border-[#2A2A2A] rounded-xl overflow-hidden z-50"
                        >
                          <div className="p-2">
                            <h4 className="text-[#00AEEF] text-xs font-semibold tracking-wider px-3 py-2 border-b border-[#2A2A2A] mb-1 flex items-center gap-2">
                              <FaBriefcase className="text-xs" /> WORK / PROJECTS
                            </h4>
                            {dropdownItems.work.map((item) => (
                              <a
                                key={item.name}
                                href={item.path}
                                onClick={(e) => handleWorkClick(e, item.filter)}
                                className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-[#00AEEF]/10 transition-all duration-300 cursor-pointer"
                              >
                                <span className="text-[#00AEEF] text-xl">{item.icon}</span>
                                <span className="text-[#BFC3C7] text-sm hover:text-[#00AEEF] transition">
                                  {item.name}
                                </span>
                              </a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px #00AEEF" }}
                whileTap={{ scale: 0.98 }}
                className="hidden md:flex items-center gap-2 px-5 py-2 bg-[#00AEEF] text-black rounded-lg text-sm font-semibold tracking-wide hover:bg-[#00AEEF]/90 transition-all duration-300"
              >
                Get Quote <FaArrowRight />
              </motion.button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 z-50"
            >
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-white transition-all duration-300"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-0.5 bg-white transition-all duration-300"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-white transition-all duration-300"
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden overflow-y-auto"
          >
            <div className="flex flex-col p-6 pt-24 gap-4">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="border-b border-gray-800 pb-3"
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-lg font-light tracking-tighter transition-colors flex items-center gap-2 ${
                      location.pathname === link.path
                        ? 'text-[#00AEEF]'
                        : 'text-gray-400'
                    }`}
                  >
                    {link.name}
                  </Link>
                  
                  {/* Mobile Submenu for Services */}
                  {link.dropdownType === 'services' && (
                    <div className="mt-2 ml-6 space-y-2">
                      {dropdownItems.services.map((item) => (
                        <Link key={item.name} to={item.path} onClick={() => setIsMobileMenuOpen(false)}>
                          <div className="flex items-center gap-2 py-1 text-sm text-gray-500 hover:text-[#00AEEF] transition">
                            <span className="text-[#00AEEF]">{item.icon}</span>
                            <span>{item.name}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                  
                  {/* Mobile Submenu for Work - With Filter */}
                  {link.dropdownType === 'work' && (
                    <div className="mt-2 ml-6 space-y-2">
                      {dropdownItems.work.map((item) => (
                        <a
                          key={item.name}
                          href={item.path}
                          onClick={(e) => {
                            e.preventDefault();
                            localStorage.setItem('workFilter', item.filter);
                            window.location.href = '/work';
                            setIsMobileMenuOpen(false);
                          }}
                          className="flex items-center gap-2 py-1 text-sm text-gray-500 hover:text-[#00AEEF] transition cursor-pointer"
                        >
                          <span className="text-[#00AEEF]">{item.icon}</span>
                          <span>{item.name}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-4"
              >
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="w-full py-3 bg-[#00AEEF] text-black rounded-lg font-semibold flex items-center justify-center gap-2">
                    Get Quote <FaArrowRight />
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}