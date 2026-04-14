import React, { useEffect, useState } from 'react';

export default function ElectricLines() {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const elements = document.querySelectorAll('button, a, .cursor-pointer, .glass-card, .group');
      const newLines = [];
      const now = Date.now();
      
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0 && Math.random() > 0.7) {
          newLines.push({
            id: now + Math.random(),
            x1: rect.left + Math.random() * rect.width,
            y1: rect.top + Math.random() * rect.height,
            x2: rect.left + Math.random() * rect.width,
            y2: rect.top + Math.random() * rect.height,
          });
        }
      });
      
      setLines(newLines);
      setTimeout(() => setLines([]), 60);
    }, 150);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {lines.map((line) => (
        <svg
          key={line.id}
          className="fixed pointer-events-none z-[9996]"
          style={{
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            position: 'fixed',
            animation: 'lineFlash 0.08s ease-out forwards',
          }}
        >
          <line
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="#00AEEF"
            strokeWidth="2"
            strokeDasharray="2 4"
          />
        </svg>
      ))}
    </>
  );
}