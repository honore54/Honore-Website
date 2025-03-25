
import { useRef, useEffect, useState } from "react";
import { Check } from "lucide-react";

interface Skill {
  category: string;
  items: {
    name: string;
    level: number;
  }[];
}

const Skills = () => {
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

  const skills: Skill[] = [
    {
      category: "Frontend Development",
      items: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "HTML & CSS", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Next.js", level: 85 },
      ],
    },
    {
      category: "Backend Development",
      items: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "RESTful APIs", level: 90 },
        { name: "MongoDB", level: 75 },
        { name: "PostgreSQL", level: 80 },
        { name: "GraphQL", level: 70 },
      ],
    },
    {
      category: "Tools & Practices",
      items: [
        { name: "Git & GitHub", level: 90 },
        { name: "Testing (Jest)", level: 75 },
        { name: "CI/CD", level: 70 },
        { name: "Agile/Scrum", level: 85 },
        { name: "Docker", level: 65 },
        { name: "AWS", level: 60 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-1/2 h-1/2 bg-natural-50 rounded-tr-[100px] -z-10 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-tl-full bg-natural-100/30 -z-10"></div>
      
      <div className="section-container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span 
            className={`inline-block mb-3 px-4 py-1.5 rounded-full bg-natural-100 text-natural-700 text-sm font-medium
              opacity-0 ${isVisible ? 'animate-fade-in' : ''}
            `}
          >
            My Expertise
          </span>
          
          <h2 
            className={`section-heading
              opacity-0 ${isVisible ? 'animate-fade-in' : ''}
            `}
            style={{ animationDelay: '0.2s' }}
          >
            Skills & Technologies
          </h2>
          
          <p 
            className={`text-lg text-natural-700 max-w-2xl mx-auto
              opacity-0 ${isVisible ? 'animate-fade-in' : ''}
            `}
            style={{ animationDelay: '0.3s' }}
          >
            I continuously expand my toolkit to deliver cutting-edge solutions
            for modern web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <div 
              key={skillGroup.category}
              className={`card-glass p-8
                opacity-0 ${isVisible ? 'animate-slide-up' : ''}
              `}
              style={{ animationDelay: `${0.3 + groupIndex * 0.2}s` }}
            >
              <h3 className="text-xl font-semibold text-natural-800 mb-6 border-b border-natural-100 pb-3">
                {skillGroup.category}
              </h3>
              <div className="space-y-6">
                {skillGroup.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-natural-700">
                        {skill.name}
                      </span>
                      <span className="text-sm text-natural-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-natural-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-natural-500 rounded-full transition-all duration-1000 ease-in-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transition: "width 1.5s ease-in-out",
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div 
          className={`mt-20 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto
            opacity-0 ${isVisible ? 'animate-fade-in' : ''}
          `}
          style={{ animationDelay: '0.6s' }}
        >
          <div className="bg-natural-50 border border-natural-100 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-natural-800 mb-4">
              Problem Solving
            </h3>
            <p className="text-natural-700 mb-4">
              I approach complex challenges with analytical thinking and creative solutions.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check size={16} className="text-natural-500 mr-2" />
                <span className="text-sm text-natural-700">Analytical approach</span>
              </li>
              <li className="flex items-center">
                <Check size={16} className="text-natural-500 mr-2" />
                <span className="text-sm text-natural-700">Creative thinking</span>
              </li>
              <li className="flex items-center">
                <Check size={16} className="text-natural-500 mr-2" />
                <span className="text-sm text-natural-700">Efficient solutions</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-natural-50 border border-natural-100 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-natural-800 mb-4">
              Collaboration
            </h3>
            <p className="text-natural-700 mb-4">
              I thrive in team environments and communicate effectively with stakeholders.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check size={16} className="text-natural-500 mr-2" />
                <span className="text-sm text-natural-700">Team player</span>
              </li>
              <li className="flex items-center">
                <Check size={16} className="text-natural-500 mr-2" />
                <span className="text-sm text-natural-700">Clear communication</span>
              </li>
              <li className="flex items-center">
                <Check size={16} className="text-natural-500 mr-2" />
                <span className="text-sm text-natural-700">Knowledge sharing</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-natural-50 border border-natural-100 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-natural-800 mb-4">
              Learning
            </h3>
            <p className="text-natural-700 mb-4">
              I continuously expand my knowledge to stay ahead in a rapidly evolving field.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Check size={16} className="text-natural-500 mr-2" />
                <span className="text-sm text-natural-700">Self-motivated</span>
              </li>
              <li className="flex items-center">
                <Check size={16} className="text-natural-500 mr-2" />
                <span className="text-sm text-natural-700">Adaptable</span>
              </li>
              <li className="flex items-center">
                <Check size={16} className="text-natural-500 mr-2" />
                <span className="text-sm text-natural-700">Research-oriented</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
