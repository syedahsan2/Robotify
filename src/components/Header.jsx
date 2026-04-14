import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location]);

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services', hasDropdown: true },
  { name: 'Work', path: '/work' },  // Changed from Portfolio to Work
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
];

  const dropdownItems = {
    fyp: [
      { name: 'Final Year Projects', icon: '🎓', path: '/services/fyp' },
      { name: 'Semester Projects', icon: '📚', path: '/services/semester' }
    ],
    engineering: [
      { name: 'Robotics Systems', icon: '🤖', path: '/services/robotics' },
      { name: 'IoT Solutions (EMS)', icon: '🌐', path: '/services/iot' }
    ],
    energy: [
      { name: 'Solar Systems', icon: '☀️', path: '/services/solar' },
      { name: 'Smart Energy Monitoring', icon: '⚡', path: '/services/energy' }
    ],
    custom: [
      { name: 'Automation', icon: '⚙️', path: '/services/automation' },
      { name: 'Custom Projects', icon: '🔧', path: '/services/custom' }
    ]
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
                <img src="/Robotify.png" alt="Robotify Logo" className="w-35 h-20 object-cover rounded-lg" />
                
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setIsDropdownOpen(true)}
                  onMouseLeave={() => link.hasDropdown && setIsDropdownOpen(false)}
                >
                  <Link to={link.path}>
                    <motion.span
                      whileHover={{ y: -1 }}
                      className={`text-sm tracking-wide transition-all duration-300 cursor-pointer ${
                        location.pathname === link.path
                          ? 'text-[#00AEEF] border-b-2 border-[#00AEEF] pb-1'
                          : 'text-[#BFC3C7] hover:text-[#00AEEF]'
                      }`}
                    >
                      {link.name}
                      {link.hasDropdown && (
                        <span className="ml-1 text-xs">▼</span>
                      )}
                    </motion.span>
                  </Link>

                  {/* Dropdown Menu */}
                  {link.hasDropdown && (
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-[600px] bg-black/90 backdrop-blur-xl border border-[#2A2A2A] rounded-xl overflow-hidden z-50"
                        >
                          <div className="grid grid-cols-2 gap-0">
                            {/* FYP & Academic */}
                            <div className="p-4 border-r border-[#2A2A2A]">
                              <h4 className="text-[#00AEEF] text-xs font-semibold tracking-wider mb-3">FYP & ACADEMIC</h4>
                              {dropdownItems.fyp.map((item) => (
                                <Link key={item.name} to={item.path}>
                                  <motion.div
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-3 py-2 px-2 rounded-lg hover:bg-[#00AEEF]/10 transition-all duration-300"
                                  >
                                    <span className="text-[#00AEEF] text-lg">{item.icon}</span>
                                    <span className="text-[#BFC3C7] text-sm hover:text-[#00AEEF] transition">
                                      {item.name}
                                    </span>
                                  </motion.div>
                                </Link>
                              ))}
                            </div>

                            {/* Engineering */}
                            <div className="p-4 border-b border-[#2A2A2A]">
                              <h4 className="text-[#00AEEF] text-xs font-semibold tracking-wider mb-3">ENGINEERING</h4>
                              {dropdownItems.engineering.map((item) => (
                                <Link key={item.name} to={item.path}>
                                  <motion.div
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-3 py-2 px-2 rounded-lg hover:bg-[#00AEEF]/10 transition-all duration-300"
                                  >
                                    <span className="text-[#00AEEF] text-lg">{item.icon}</span>
                                    <span className="text-[#BFC3C7] text-sm hover:text-[#00AEEF] transition">
                                      {item.name}
                                    </span>
                                  </motion.div>
                                </Link>
                              ))}
                            </div>

                            {/* Energy */}
                            <div className="p-4 border-r border-[#2A2A2A]">
                              <h4 className="text-[#00AEEF] text-xs font-semibold tracking-wider mb-3">ENERGY</h4>
                              {dropdownItems.energy.map((item) => (
                                <Link key={item.name} to={item.path}>
                                  <motion.div
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-3 py-2 px-2 rounded-lg hover:bg-[#00AEEF]/10 transition-all duration-300"
                                  >
                                    <span className="text-[#00AEEF] text-lg">{item.icon}</span>
                                    <span className="text-[#BFC3C7] text-sm hover:text-[#00AEEF] transition">
                                      {item.name}
                                    </span>
                                  </motion.div>
                                </Link>
                              ))}
                            </div>

                            {/* Custom */}
                            <div className="p-4">
                              <h4 className="text-[#00AEEF] text-xs font-semibold tracking-wider mb-3">CUSTOM</h4>
                              {dropdownItems.custom.map((item) => (
                                <Link key={item.name} to={item.path}>
                                  <motion.div
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-3 py-2 px-2 rounded-lg hover:bg-[#00AEEF]/10 transition-all duration-300"
                                  >
                                    <span className="text-[#00AEEF] text-lg">{item.icon}</span>
                                    <span className="text-[#BFC3C7] text-sm hover:text-[#00AEEF] transition">
                                      {item.name}
                                    </span>
                                  </motion.div>
                                </Link>
                              ))}
                            </div>
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
                className="hidden md:block px-6 py-2 bg-[#00AEEF] text-black rounded-lg text-sm font-semibold tracking-wide hover:bg-[#00AEEF]/90 transition-all duration-300"
              >
                Get Quote →
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
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-xl font-light tracking-tighter transition-colors ${
                      location.pathname === link.path
                        ? 'text-[#00AEEF]'
                        : 'text-gray-400'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="px-8 py-3 bg-[#00AEEF] text-black rounded-full text-sm font-semibold">
                    Get Quote →
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