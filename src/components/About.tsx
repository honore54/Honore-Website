
import { useRef, useEffect, useState } from "react";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-natural-50/50 to-white/90 z-0"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-natural-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-natural-200/30 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto">
          <span 
            className={`inline-block mb-3 px-4 py-1.5 rounded-full bg-natural-100 text-natural-700 text-sm font-medium
              opacity-0 ${isVisible ? 'animate-fade-in' : ''}
            `}
          >
            About Me
          </span>
          
          <h2 
            className={`section-heading mb-8 max-w-xl
              opacity-0 ${isVisible ? 'animate-fade-in' : ''}
            `}
            style={{ animationDelay: '0.2s' }}
          >
            Transforming ideas into elegant digital solutions
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div 
              className={`
                opacity-0 ${isVisible ? 'animate-slide-up' : ''}
              `}
              style={{ animationDelay: '0.3s' }}
            >
              <p className="text-natural-800 mb-4">
                Hello! I'm Mugisha Honore, a passionate software developer with a keen eye for design and a dedication to writing clean, efficient code. With expertise in modern development technologies, I create seamless digital experiences that solve real-world problems.
              </p>
              <p className="text-natural-800 mb-4">
                My journey in software development began with a curiosity about how things work and a desire to build solutions that make a difference. Today, I approach each project with the same enthusiasm, always looking to innovate and improve.
              </p>
              <p className="text-natural-800">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying the outdoors to recharge and find inspiration.
              </p>
            </div>
            
            <div 
              className={`
                opacity-0 ${isVisible ? 'animate-slide-up' : ''}
              `}
              style={{ animationDelay: '0.5s' }}
            >
              <h3 className="text-xl font-semibold text-natural-800 mb-4">My Approach</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 rounded-full bg-natural-200 mr-3 mt-1 flex-shrink-0"></span>
                  <span className="text-natural-700">I believe in <strong className="text-natural-800">user-centered design</strong> that prioritizes intuitive experiences</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 rounded-full bg-natural-300 mr-3 mt-1 flex-shrink-0"></span>
                  <span className="text-natural-700">Writing <strong className="text-natural-800">clean, maintainable code</strong> that stands the test of time</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 rounded-full bg-natural-400 mr-3 mt-1 flex-shrink-0"></span>
                  <span className="text-natural-700">Embracing <strong className="text-natural-800">continuous learning</strong> to stay at the forefront of technology</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 rounded-full bg-natural-500 mr-3 mt-1 flex-shrink-0"></span>
                  <span className="text-natural-700">Focusing on <strong className="text-natural-800">collaboration</strong> to create better solutions together</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-natural-800 mb-4">Career Highlights</h3>
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-natural-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-natural-700 font-medium">5+</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-natural-800">Years of Experience</h4>
                    <p className="text-sm text-natural-600">Professional development</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-natural-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-natural-700 font-medium">30+</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-natural-800">Projects Completed</h4>
                    <p className="text-sm text-natural-600">For various clients & industries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
