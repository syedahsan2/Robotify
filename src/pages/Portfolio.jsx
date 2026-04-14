import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Box, Torus, Float, Icosahedron, Cylinder, Cone } from '@react-three/drei';
import * as THREE from 'three';

// ========== 3D MODEL COMPONENTS FOR PORTFOLIO ==========

// Model 1: Fantasy Sword
function FantasySword({ isHovered = false }) {
  const groupRef = useRef();
  
  useFrame((state) => {
    if (isHovered) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime()) * 0.2;
    } else {
      groupRef.current.rotation.y += 0.003;
    }
  });
  
  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Blade */}
      <mesh>
        <boxGeometry args={[0.15, 2.2, 0.08]} />
        <meshStandardMaterial color="#a855f7" metalness={0.9} roughness={0.1} emissive="#4c1d95" emissiveIntensity={0.3} />
      </mesh>
      {/* Blade Edge */}
      <mesh position={[0.08, 0, 0]}>
        <boxGeometry args={[0.05, 2.2, 0.08]} />
        <meshStandardMaterial color="#c084fc" metalness={0.95} />
      </mesh>
      {/* Handle */}
      <mesh position={[0, -0.8, 0]}>
        <cylinderGeometry args={[0.2, 0.22, 0.8, 8]} />
        <meshStandardMaterial color="#78350f" metalness={0.6} roughness={0.4} />
      </mesh>
      {/* Guard */}
      <mesh position={[0, -0.3, 0]}>
        <boxGeometry args={[1.1, 0.08, 0.25]} />
        <meshStandardMaterial color="#d4af37" metalness={0.9} roughness={0.2} />
      </mesh>
      {/* Gem */}
      <mesh position={[0, -1.1, 0.15]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <MeshDistortMaterial color="#ec4899" distort={0.2} speed={2} emissive="#831843" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}

// Model 2: Dragon
function DragonModel({ isHovered = false }) {
  const groupRef = useRef();
  
  useFrame((state) => {
    if (isHovered) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    } else {
      groupRef.current.rotation.y += 0.002;
    }
    groupRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.05;
  });
  
  return (
    <group ref={groupRef}>
      {/* Body */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <MeshDistortMaterial color="#dc2626" distort={0.15} speed={1} metalness={0.4} roughness={0.3} emissive="#7f1d1d" emissiveIntensity={0.2} />
      </mesh>
      {/* Head */}
      <mesh position={[0, 0.6, 0.5]}>
        <sphereGeometry args={[0.45, 32, 32]} />
        <meshStandardMaterial color="#ef4444" metalness={0.3} roughness={0.4} />
      </mesh>
      {/* Horns */}
      <mesh position={[-0.3, 0.9, 0.4]} rotation={[0, 0, -0.3]}>
        <coneGeometry args={[0.12, 0.4, 8]} />
        <meshStandardMaterial color="#f97316" metalness={0.5} />
      </mesh>
      <mesh position={[0.3, 0.9, 0.4]} rotation={[0, 0, 0.3]}>
        <coneGeometry args={[0.12, 0.4, 8]} />
        <meshStandardMaterial color="#f97316" metalness={0.5} />
      </mesh>
      {/* Wings */}
      <mesh position={[-0.7, 0.2, 0]} rotation={[0.2, -0.5, 0.5]}>
        <coneGeometry args={[0.5, 0.8, 8]} />
        <meshStandardMaterial color="#b91c1c" metalness={0.2} />
      </mesh>
      <mesh position={[0.7, 0.2, 0]} rotation={[0.2, 0.5, -0.5]}>
        <coneGeometry args={[0.5, 0.8, 8]} />
        <meshStandardMaterial color="#b91c1c" metalness={0.2} />
      </mesh>
      {/* Eyes */}
      <mesh position={[-0.15, 0.75, 0.85]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#fbbf24" emissive="#b45309" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0.15, 0.75, 0.85]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#fbbf24" emissive="#b45309" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}

// Model 3: Cyberpunk Helmet
function CyberpunkHelmet({ isHovered = false }) {
  const groupRef = useRef();
  
  useFrame((state) => {
    if (isHovered) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.4;
    } else {
      groupRef.current.rotation.y += 0.004;
    }
  });
  
  return (
    <group ref={groupRef}>
      {/* Helmet Base */}
      <mesh>
        <sphereGeometry args={[0.65, 32, 32]} />
        <meshStandardMaterial color="#1e293b" metalness={0.85} roughness={0.15} emissive="#0f172a" emissiveIntensity={0.2} />
      </mesh>
      {/* Visor */}
      <mesh position={[0, 0.1, 0.65]}>
        <boxGeometry args={[0.8, 0.35, 0.05]} />
        <meshStandardMaterial color="#06b6d4" metalness={0.9} roughness={0.05} emissive="#0891b2" emissiveIntensity={0.4} />
      </mesh>
      {/* Visor Glow */}
      <mesh position={[0, 0.1, 0.68]}>
        <boxGeometry args={[0.75, 0.3, 0.02]} />
        <meshStandardMaterial color="#22d3ee" emissive="#06b6d4" emissiveIntensity={0.6} transparent opacity={0.5} />
      </mesh>
      {/* Details */}
      <mesh position={[0.5, 0.2, 0.3]}>
        <boxGeometry args={[0.15, 0.15, 0.1]} />
        <meshStandardMaterial color="#38bdf8" metalness={0.8} />
      </mesh>
      <mesh position={[-0.5, 0.2, 0.3]}>
        <boxGeometry args={[0.15, 0.15, 0.1]} />
        <meshStandardMaterial color="#38bdf8" metalness={0.8} />
      </mesh>
    </group>
  );
}

// Model 4: Magic Crystal
function MagicCrystal({ isHovered = false }) {
  const groupRef = useRef();
  
  useFrame((state) => {
    if (isHovered) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.6;
    } else {
      groupRef.current.rotation.y += 0.005;
    }
    groupRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.08;
  });
  
  return (
    <group ref={groupRef}>
      {/* Main Crystal */}
      <mesh>
        <cylinderGeometry args={[0.6, 0.2, 1.2, 8]} />
        <MeshDistortMaterial color="#8b5cf6" distort={0.2} speed={1.5} metalness={0.7} roughness={0.1} emissive="#4c1d95" emissiveIntensity={0.4} />
      </mesh>
      {/* Crystal Tip */}
      <mesh position={[0, 0.7, 0]}>
        <coneGeometry args={[0.35, 0.6, 8]} />
        <meshStandardMaterial color="#a855f7" emissive="#4c1d95" emissiveIntensity={0.3} />
      </mesh>
      {/* Floating Shards */}
      {[-1, 1].map((x, i) => (
        <Float key={i} speed={2} floatIntensity={0.5}>
          <mesh position={[x * 0.7, 0.2, x * 0.5]}>
            <boxGeometry args={[0.12, 0.3, 0.12]} />
            <meshStandardMaterial color="#c084fc" emissive="#6b21a5" emissiveIntensity={0.3} />
          </mesh>
        </Float>
      ))}
      {/* Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <mesh key={i} position={[Math.sin(i) * 0.9, Math.cos(i * 2) * 0.5, Math.cos(i) * 0.9]}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshStandardMaterial color="#d8b4fe" emissive="#a855f7" emissiveIntensity={0.4} />
        </mesh>
      ))}
    </group>
  );
}

// Model 5: Sci-Fi Gun
function SciFiGun({ isHovered = false }) {
  const groupRef = useRef();
  
  useFrame((state) => {
    if (isHovered) {
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime()) * 0.1;
    } else {
      groupRef.current.rotation.y += 0.003;
    }
  });
  
  return (
    <group ref={groupRef}>
      {/* Barrel */}
      <mesh position={[0, 0, 0.8]}>
        <cylinderGeometry args={[0.15, 0.18, 1.2, 12]} />
        <meshStandardMaterial color="#475569" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.6, 0.4, 1]} />
        <meshStandardMaterial color="#334155" metalness={0.85} roughness={0.15} />
      </mesh>
      {/* Grip */}
      <mesh position={[-0.3, -0.3, -0.3]} rotation={[0.2, 0, 0]}>
        <boxGeometry args={[0.35, 0.5, 0.4]} />
        <meshStandardMaterial color="#1e293b" metalness={0.6} roughness={0.3} />
      </mesh>
      {/* Energy Core */}
      <mesh position={[0, 0.1, 0.2]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <MeshDistortMaterial color="#06b6d4" distort={0.3} speed={2} emissive="#0891b2" emissiveIntensity={0.6} />
      </mesh>
      {/* Details */}
      <mesh position={[0.3, 0.15, 0.4]}>
        <boxGeometry args={[0.12, 0.08, 0.08]} />
        <meshStandardMaterial color="#fbbf24" metalness={0.8} />
      </mesh>
    </group>
  );
}

// Model 6: Fantasy Shield
function FantasyShield({ isHovered = false }) {
  const groupRef = useRef();
  
  useFrame((state) => {
    if (isHovered) {
      groupRef.current.rotation.z = Math.sin(state.clock.getElapsedTime()) * 0.1;
    } else {
      groupRef.current.rotation.y += 0.002;
    }
  });
  
  return (
    <group ref={groupRef}>
      {/* Shield Base */}
      <mesh>
        <cylinderGeometry args={[0.9, 0.7, 0.15, 32]} />
        <meshStandardMaterial color="#3b82f6" metalness={0.7} roughness={0.2} emissive="#1e3a8a" emissiveIntensity={0.15} />
      </mesh>
      {/* Shield Emblem */}
      <mesh position={[0, 0, 0.1]}>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial color="#d4af37" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Border Details */}
      <mesh position={[0, 0, 0.08]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.8, 0.04, 32, 100]} />
        <meshStandardMaterial color="#fbbf24" metalness={0.85} />
      </mesh>
      {/* Center Gem */}
      <mesh position={[0, 0, 0.2]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <MeshDistortMaterial color="#ec4899" distort={0.15} speed={1.5} emissive="#831843" emissiveIntensity={0.4} />
      </mesh>
    </group>
  );
}

// ========== PORTFOLIO DATA ==========
const portfolioItems = [
  {
    id: 1,
    title: "Fantasy Sword",
    category: "Weapon",
    description: "A legendary sword forged in ancient flames. Features intricate details, glowing gems, and realistic metal shaders.",
    price: "$299",
    tech: ["Blender", "Substance Painter", "Unity"],
    polygonCount: "12.5k",
    textureQuality: "4K PBR",
    model: FantasySword,
    color: "from-purple-600 to-pink-600"
  },
  {
    id: 2,
    title: "Ancient Dragon",
    category: "Character",
    description: "A fearsome dragon with detailed scales, dynamic wings, and realistic animations. Perfect for fantasy RPGs.",
    price: "$599",
    tech: ["ZBrush", "Maya", "Unreal Engine"],
    polygonCount: "45k",
    textureQuality: "4K PBR",
    model: DragonModel,
    color: "from-red-600 to-orange-600"
  },
  {
    id: 3,
    title: "Cyberpunk Helmet",
    category: "Character Asset",
    description: "Futuristic helmet with glowing visor and cybernetic details. Ideal for sci-fi games.",
    price: "$199",
    tech: ["Blender", "Substance Painter", "Unity"],
    polygonCount: "8.2k",
    textureQuality: "2K PBR",
    model: CyberpunkHelmet,
    color: "from-cyan-600 to-blue-600"
  },
  {
    id: 4,
    title: "Magic Crystal",
    category: "Prop",
    description: "Mystical crystal with floating shards and particle effects. Adds magical atmosphere to any scene.",
    price: "$149",
    tech: ["Blender", "Photoshop", "Unity"],
    polygonCount: "5.1k",
    textureQuality: "2K PBR",
    model: MagicCrystal,
    color: "from-purple-600 to-violet-600"
  },
  {
    id: 5,
    title: "Plasma Rifle",
    category: "Weapon",
    description: "High-tech energy weapon with glowing core and futuristic design. Perfect for sci-fi shooters.",
    price: "$249",
    tech: ["Maya", "Substance Painter", "Unreal"],
    polygonCount: "9.8k",
    textureQuality: "4K PBR",
    model: SciFiGun,
    color: "from-slate-600 to-gray-600"
  },
  {
    id: 6,
    title: "Royal Shield",
    category: "Armor",
    description: "Regal shield with golden emblems and protective enchantments. Ideal for knight characters.",
    price: "$179",
    tech: ["Blender", "Substance Painter", "Unity"],
    polygonCount: "6.3k",
    textureQuality: "2K PBR",
    model: FantasyShield,
    color: "from-blue-600 to-indigo-600"
  }
];

// ========== MAIN PORTFOLIO COMPONENT ==========
export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  
  // Animation variants
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
  
  return (
    <div className="bg-white dark:bg-black min-h-screen pt-24 pb-16">
      {/* Background Gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-purple-50/20 via-transparent to-pink-50/20 dark:from-purple-950/10 dark:via-transparent dark:to-pink-950/10 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] text-gray-400 dark:text-gray-500 mb-4">OUR CREATIONS</p>
          <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-6">
            3D <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our collection of high-quality 3D assets crafted for games, films, and interactive experiences.
          </p>
        </motion.div>
        
        {/* Filter/Sort Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {['All', 'Weapon', 'Character', 'Prop', 'Armor', 'Character Asset'].map((filter) => (
            <button
              key={filter}
              className="px-5 py-2 text-sm rounded-full border border-gray-200 dark:border-gray-800 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300"
            >
              {filter}
            </button>
          ))}
        </motion.div>
        
        {/* Portfolio Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {portfolioItems.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer"
            >
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:border-purple-500/50 transition-all duration-500">
                
                {/* 3D Model Preview */}
                <div className="h-64 relative bg-gradient-to-br from-gray-900 to-gray-800">
                  <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[5, 5, 5]} intensity={0.8} />
                    <pointLight position={[-3, -2, 4]} intensity={0.4} color="#8b5cf6" />
                    <directionalLight position={[2, 3, 4]} intensity={0.6} />
                    
                    {React.createElement(item.model, { isHovered: hoveredId === item.id })}
                    
                    <OrbitControls 
                      enableZoom={false} 
                      enablePan={false} 
                      autoRotate={hoveredId !== item.id}
                      autoRotateSpeed={1.5}
                      enableRotate={hoveredId === item.id}
                    />
                  </Canvas>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-xs text-white">
                    {item.category}
                  </div>
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-purple-600/90 backdrop-blur-sm rounded-full text-xs text-white font-semibold">
                    {item.price}
                  </div>
                </div>
                
                {/* Info Section */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tech.map((tech, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Specs */}
                  <div className="flex justify-between text-xs text-gray-400 border-t border-gray-100 dark:border-gray-800 pt-4">
                    <span>📊 {item.polygonCount} tris</span>
                    <span>🎨 {item.textureQuality}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Modal for Detailed View */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-900 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
            >
              <div className="grid md:grid-cols-2 h-full">
                {/* 3D Viewer Side */}
                <div className="h-[400px] md:h-[600px] bg-gradient-to-br from-gray-900 to-gray-800 relative">
                  <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                    <ambientLight intensity={0.6} />
                    <pointLight position={[5, 5, 5]} intensity={1} />
                    <pointLight position={[-4, -3, 5]} intensity={0.5} color="#8b5cf6" />
                    <directionalLight position={[2, 4, 3]} intensity={0.7} />
                    <hemisphereLight intensity={0.3} />
                    
                    {React.createElement(selectedItem.model, { isHovered: true })}
                    
                    <OrbitControls 
                      enableZoom={true}
                      enablePan={true}
                      autoRotate={false}
                      enableRotate={true}
                      zoomSpeed={1}
                      rotateSpeed={1}
                    />
                  </Canvas>
                  
                  {/* Instructions */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full text-xs text-white">
                    🖱️ Drag to rotate | Scroll to zoom
                  </div>
                </div>
                
                {/* Details Side */}
                <div className="p-8 overflow-y-auto">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">{selectedItem.category}</p>
                      <h2 className="text-3xl font-bold">{selectedItem.title}</h2>
                    </div>
                    <button
                      onClick={() => setSelectedItem(null)}
                      className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition text-2xl"
                    >
                      ×
                    </button>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {selectedItem.description}
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-800">
                      <span className="text-gray-500">Price</span>
                      <span className="font-semibold text-xl text-purple-600">{selectedItem.price}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-800">
                      <span className="text-gray-500">Polygon Count</span>
                      <span>{selectedItem.polygonCount}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-800">
                      <span className="text-gray-500">Texture Quality</span>
                      <span>{selectedItem.textureQuality}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-800">
                      <span className="text-gray-500">Technologies</span>
                      <div className="flex gap-2 flex-wrap">
                        {selectedItem.tech.map((tech, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Link to="/contact">
                      <button className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm hover:opacity-85 transition">
                        Request Quote →
                      </button>
                    </Link>
                    <button className="px-6 py-2 border border-gray-300 dark:border-gray-700 rounded-full text-sm hover:border-purple-500 transition">
                      View Demo
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}