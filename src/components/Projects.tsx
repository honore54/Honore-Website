import { useRef, useEffect, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  sourceLink?: string;
  featured?: boolean;
}

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState<Project[]>([]);
  
  const projects: Project[] = [
    {
      title: "EcoTrack Dashboard",
      description: "A comprehensive analytics dashboard for environmental monitoring with real-time data visualization and reporting capabilities.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      tags: ["React", "D3.js", "Node.js", "MongoDB"],
      demoLink: "https://example.com/ecotrack",
      sourceLink: "https://github.com/mugishahonore/ecotrack",
      featured: true,
    },
    {
      title: "CloudSync",
      description: "A secure file sharing and synchronization platform with end-to-end encryption and collaborative editing features.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      tags: ["Next.js", "Firebase", "Tailwind CSS", "WebRTC"],
      demoLink: "https://example.com/cloudsync",
      sourceLink: "https://github.com/mugishahonore/cloudsync",
    },
    {
      title: "HealthPulse",
      description: "A mobile-responsive health monitoring application that tracks user vitals and provides personalized wellness recommendations.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
      tags: ["React Native", "GraphQL", "Express", "PostgreSQL"],
      demoLink: "https://example.com/healthpulse",
      sourceLink: "https://github.com/mugishahonore/healthpulse",
      featured: true,
    },
    {
      title: "SmartHome Hub",
      description: "An IoT control center for managing smart home devices with voice commands, automation rules, and energy usage analytics.",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop",
      tags: ["Vue.js", "MQTT", "Node.js", "InfluxDB"],
      demoLink: "https://example.com/smarthome",
      sourceLink: "https://github.com/mugishahonore/smarthome",
    },
    {
      title: "AgroTech",
      description: "A precision agriculture platform providing data-driven insights for crop management, weather forecasting, and yield optimization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      tags: ["Angular", "Leaflet", "Python", "TensorFlow"],
      demoLink: "https://example.com/agrotech",
      sourceLink: "https://github.com/mugishahonore/agrotech",
      featured: true,
    },
    {
      title: "LegalDocs Pro",
      description: "An AI-powered document management system for legal professionals with automated document generation and analysis.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop",
      tags: ["React", "NLP", "Django", "ElasticSearch"],
      demoLink: "https://example.com/legaldocs",
      sourceLink: "https://github.com/mugishahonore/legaldocs",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            
            // Load projects with a staggered effect
            projects.forEach((project, index) => {
              setTimeout(() => {
                setVisibleProjects((prev) => [...prev, project]);
              }, 200 * index);
            });
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

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 md:py-32 bg-natural-50/50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-natural-100/30 rounded-tl-full -z-10 blur-2xl opacity-70"></div>
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-natural-200/20 rounded-full -z-10 blur-3xl opacity-50"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span 
            className={`inline-block mb-3 px-4 py-1.5 rounded-full bg-natural-100 text-natural-700 text-sm font-medium
              opacity-0 ${isVisible ? 'animate-fade-in' : ''}
            `}
          >
            My Work
          </span>
          
          <h2 
            className={`section-heading
              opacity-0 ${isVisible ? 'animate-fade-in' : ''}
            `}
            style={{ animationDelay: '0.2s' }}
          >
            Featured Projects
          </h2>
          
          <p 
            className={`text-lg text-natural-700 max-w-2xl mx-auto
              opacity-0 ${isVisible ? 'animate-fade-in' : ''}
            `}
            style={{ animationDelay: '0.3s' }}
          >
            A showcase of my most significant work, demonstrating my skills and 
            expertise in developing innovative solutions.
          </p>
        </div>

        {/* Featured Projects - Larger cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.title}
              className={`card-glass overflow-hidden group
                opacity-0 ${isVisible ? 'animate-slide-up' : ''}
              `}
              style={{ animationDelay: `${0.4 + index * 0.2}s` }}
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover overlay buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 hover:bg-white text-natural-800 p-3 rounded-full transition-all duration-300 hover:shadow-lg"
                      aria-label={`View demo for ${project.title}`}
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  {project.sourceLink && (
                    <a
                      href={project.sourceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 hover:bg-white text-natural-800 p-3 rounded-full transition-all duration-300 hover:shadow-lg"
                      aria-label={`View source code for ${project.title}`}
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-natural-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-natural-700 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-natural-100 text-natural-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects - Smaller cards */}
        <h3 
          className={`text-2xl font-semibold text-natural-800 mb-8 text-center
            opacity-0 ${isVisible ? 'animate-fade-in' : ''}
          `}
          style={{ animationDelay: '0.8s' }}
        >
          Other Projects
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <div 
              key={project.title}
              className={`card-glass overflow-hidden group h-full flex flex-col
                opacity-0 ${isVisible ? 'animate-slide-up' : ''}
              `}
              style={{ animationDelay: `${0.9 + index * 0.2}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover overlay buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 hover:bg-white text-natural-800 p-2 rounded-full transition-all duration-300 hover:shadow-lg"
                      aria-label={`View demo for ${project.title}`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                  {project.sourceLink && (
                    <a
                      href={project.sourceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 hover:bg-white text-natural-800 p-2 rounded-full transition-all duration-300 hover:shadow-lg"
                      aria-label={`View source code for ${project.title}`}
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="p-5 flex-grow flex flex-col">
                <h3 className="text-lg font-semibold text-natural-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-natural-700 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium bg-natural-100 text-natural-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 text-xs font-medium bg-natural-100 text-natural-700 rounded-full">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div 
          className={`mt-16 text-center
            opacity-0 ${isVisible ? 'animate-fade-in' : ''}
          `}
          style={{ animationDelay: '1.2s' }}
        >
          <p className="text-natural-700 mb-6">
            Interested in seeing more of my work?
          </p>
          <a
            href="https://github.com/mugishahonore"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-natural-800 text-white rounded-full hover:bg-natural-900 transition-colors duration-300"
          >
            <Github size={18} className="mr-2" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
