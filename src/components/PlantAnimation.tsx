
import { useEffect, useState } from "react";

interface Leaf {
  id: number;
  left: string;
  delay: string;
  duration: string;
  size: string;
  rotation: string;
}

const PlantAnimation = () => {
  const [leaves, setLeaves] = useState<Leaf[]>([]);

  useEffect(() => {
    // Generate random leaves
    const newLeaves = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${10 + Math.random() * 20}s`,
      size: `${16 + Math.random() * 24}px`,
      rotation: `${Math.random() * 360}deg`,
    }));
    
    setLeaves(newLeaves);
    
    // Regenerate leaves every 30 seconds
    const interval = setInterval(() => {
      const newLeaves = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 5}s`,
        duration: `${10 + Math.random() * 20}s`,
        size: `${16 + Math.random() * 24}px`,
        rotation: `${Math.random() * 360}deg`,
      }));
      
      setLeaves(newLeaves);
    }, 30000);
    
    return () => clearInterval(interval);
  }, []);

  const LeafSVG = ({ size, rotation }: { size: string, rotation: string }) => (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none"
      style={{ transform: `rotate(${rotation})` }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M12 2C7.53 2 4 5.53 4 10c0 2.97 1.61 5.57 4 6.97V22h4v-5.03c2.39-1.4 4-4 4-6.97 0-4.47-3.53-8-8-8z" 
        fill="#4ED27F" 
        fillOpacity="0.6"
      />
    </svg>
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Translucent gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-natural-50/50 via-transparent to-transparent"></div>
      
      {/* Animated leaves */}
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="leaf animate-leaf-fall"
          style={{
            left: leaf.left,
            animationDelay: leaf.delay,
            animationDuration: leaf.duration,
            top: "-50px",
          }}
        >
          <LeafSVG size={leaf.size} rotation={leaf.rotation} />
        </div>
      ))}
      
      {/* Decorative plant elements */}
      <div className="absolute bottom-0 left-0 w-60 h-60 overflow-hidden opacity-70">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-sway">
          <path d="M10,100 Q60,50 100,100 T190,100" stroke="#4ED27F" strokeWidth="4" fill="none" />
          <path d="M50,180 Q100,130 150,180" stroke="#4ED27F" strokeWidth="4" fill="none" />
          <path d="M30,150 Q80,100 130,150" stroke="#32A25A" strokeWidth="3" fill="none" />
        </svg>
      </div>
      
      <div className="absolute bottom-0 right-0 w-80 h-80 overflow-hidden opacity-70">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-sway" style={{ animationDelay: "0.5s" }}>
          <path d="M190,100 Q140,50 100,100 T10,100" stroke="#38B364" strokeWidth="4" fill="none" />
          <path d="M150,180 Q100,130 50,180" stroke="#38B364" strokeWidth="4" fill="none" />
          <path d="M170,150 Q120,100 70,150" stroke="#21693B" strokeWidth="3" fill="none" />
        </svg>
      </div>
      
      {/* Circular gradients */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-natural-100/40 to-natural-200/30 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-l from-natural-100/30 to-natural-200/20 blur-3xl"></div>
    </div>
  );
};

export default PlantAnimation;
