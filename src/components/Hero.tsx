
import { useState, useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import PlantAnimation from "./PlantAnimation";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-animated"
    >
      {/* Plant animations in background */}
      <PlantAnimation />
      
      <div className="section-container relative z-10 flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl mx-auto card-glass p-8 md:p-12 rounded-3xl shadow-xl border-2 border-natural-300">
          <span 
            className={`inline-block mb-3 px-4 py-1.5 rounded-full bg-natural-500/20 text-natural-800 text-sm font-bold
              opacity-0 ${isVisible ? 'animate-fade-in' : ''}
            `} 
            style={{ animationDelay: '0.2s' }}
          >
            Software Developer
          </span>
          
          <div 
            className={`opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}
            style={{ animationDelay: '0.4s' }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-display font-bold tracking-tight mb-1 text-shadow">
              <span className="text-natural-900">Mugisha</span>
            </h1>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-display font-bold tracking-tight mb-6 text-shadow">
              <span className="text-natural-700">Honore</span>
            </h1>
          </div>
          
          <p 
            className={`text-lg md:text-xl text-natural-900 font-bold max-w-2xl mx-auto mb-8 md:mb-10
              opacity-0 ${isVisible ? 'animate-fade-in' : ''}
            `}
            style={{ animationDelay: '0.6s' }}
          >
            Crafting beautiful, functional digital experiences with clean code and creativity.
            I build modern web applications that solve real-world problems.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6
              opacity-0 ${isVisible ? 'animate-fade-in' : ''}
            `}
            style={{ animationDelay: '0.8s' }}
          >
            <a 
              href="#projects" 
              className="hero-button btn-primary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="hero-button btn-secondary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get In Touch
            </a>
          </div>
        </div>
        
        <button
          onClick={scrollToAbout}
          className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:bg-white
            opacity-0 ${isVisible ? 'animate-fade-in animate-bounce' : ''}
          `}
          style={{ animationDelay: '1.2s' }}
          aria-label="Scroll to About section"
        >
          <ArrowDown size={20} className="text-natural-700" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
