import React from 'react';
import { motion } from 'framer-motion';

export default function ElectricCard({ children, className = "", ...props }) {
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      {...props}
    >
      {/* Electric border effect on hover */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 border-2 border-[#00AEEF] rounded-2xl shadow-[0_0_20px_#00AEEF]" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#00AEEF]/0 via-[#00AEEF]/10 to-[#00AEEF]/0 animate-pulse" />
        </motion.div>
      )}
      {children}
    </motion.div>
  );
}