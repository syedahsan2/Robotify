import React, { useEffect, useRef, useState } from 'react';

export default function ElectricCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  
  // INSTANT mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Direct state update
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Instant hover check
      const target = e.target;
      const isClickable = target.tagName === 'BUTTON' || 
                         target.tagName === 'A' || 
                         target.closest('button') ||
                         target.closest('a') ||
                         target.classList?.contains('cursor-pointer');
      setIsPointer(!!isClickable);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Main Cursor - NO TRAIL DOTS */}
      <div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          position: 'fixed',
        }}
      >
        <div className={`relative w-5 h-5 rounded-full ${
          isPointer ? 'scale-150' : 'scale-100'
        } transition-transform duration-75`}>
          {/* Outer Glow */}
          <div className="absolute inset-0 rounded-full bg-[#00AEEF] opacity-50 animate-ping" />
          <div className="absolute inset-0 rounded-full border-2 border-[#00AEEF]" style={{ boxShadow: '0 0 12px #00AEEF' }} />
          <div className="absolute inset-1 rounded-full bg-[#00AEEF] opacity-100" />
          <div className="absolute inset-[3px] rounded-full bg-white" />
        </div>
      </div>

      {/* Only Spark on Click - NO TRAILS */}
      <LightningSpark />
    </>
  );
}

// Spark Component Only (No trails)
function LightningSpark() {
  const [sparks, setSparks] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const newSparks = [];
      const now = Date.now();
      
      // Sparks on click only
      for (let i = 0; i < 20; i++) {
        const angle = Math.random() * Math.PI * 2;
        const distance = 25 + Math.random() * 50;
        newSparks.push({
          id: now + i,
          x: e.clientX + Math.cos(angle) * distance,
          y: e.clientY + Math.sin(angle) * distance,
        });
      }
      
      setSparks(newSparks);
      
      // Fast cleanup
      setTimeout(() => {
        setSparks(prev => prev.filter(s => !newSparks.includes(s)));
      }, 150);
    };
    
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <>
      {sparks.map((spark) => (
        <div
          key={spark.id}
          className="fixed pointer-events-none z-[9997]"
          style={{
            left: spark.x - 4,
            top: spark.y - 4,
            width: '8px',
            height: '8px',
            animation: 'sparkBurst 0.15s ease-out forwards',
          }}
        >
          <div className="w-full h-full rounded-full bg-[#00AEEF]" style={{ boxShadow: '0 0 15px #00AEEF' }} />
        </div>
      ))}
    </>
  );
}