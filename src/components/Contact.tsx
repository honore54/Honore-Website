
import { useRef, useEffect, useState } from "react";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
        duration: 5000,
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-natural-50/50 -z-10"></div>
      <div className="absolute top-0 right-0 w-80 h-80 bg-natural-100/40 rounded-bl-full -z-10 blur-2xl opacity-60"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-natural-200/20 rounded-full -z-10 blur-3xl opacity-40"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span 
            className={`inline-block mb-3 px-4 py-1.5 rounded-full bg-natural-100 text-natural-700 text-sm font-medium
              opacity-0 ${isVisible ? 'animate-fade-in' : ''}
            `}
          >
            Get In Touch
          </span>
          
          <h2 
            className={`section-heading
              opacity-0 ${isVisible ? 'animate-fade-in' : ''}
            `}
            style={{ animationDelay: '0.2s' }}
          >
            Let's Work Together
          </h2>
          
          <p 
            className={`text-lg text-natural-700 max-w-2xl mx-auto
              opacity-0 ${isVisible ? 'animate-fade-in' : ''}
            `}
            style={{ animationDelay: '0.3s' }}
          >
            Have a project in mind or want to learn more about my services?
            I'd love to hear from you. Reach out and let's create something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div 
            className={`
              opacity-0 ${isVisible ? 'animate-slide-up' : ''}
            `}
            style={{ animationDelay: '0.4s' }}
          >
            <div className="bg-white shadow-lg rounded-2xl p-8 border border-natural-100 h-full">
              <h3 className="text-2xl font-semibold text-natural-800 mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-natural-500 mt-1 mr-4" />
                  <div>
                    <h4 className="font-medium text-natural-800">Email</h4>
                    <a 
                      href="mailto:honoremugisha54@gmail.com" 
                      className="text-natural-600 hover:text-natural-800 transition-colors"
                    >
                      honoremugisha54@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-natural-500 mt-1 mr-4" />
                  <div>
                    <h4 className="font-medium text-natural-800">Phone</h4>
                    <a 
                      href="tel:+250791645848" 
                      className="text-natural-600 hover:text-natural-800 transition-colors"
                    >
                      +250 791645848
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-natural-500 mt-1 mr-4" />
                  <div>
                    <h4 className="font-medium text-natural-800">Location</h4>
                    <p className="text-natural-600">
                      Kigali, Rwanda
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="font-medium text-natural-800 mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/honore54"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-natural-100 p-3 rounded-full text-natural-700 hover:bg-natural-200 hover:text-natural-900 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://linkedin.com/in/mugishahonore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-natural-100 p-3 rounded-full text-natural-700 hover:bg-natural-200 hover:text-natural-900 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://twitter.com/mugishahonore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-natural-100 p-3 rounded-full text-natural-700 hover:bg-natural-200 hover:text-natural-900 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
              
              <div className="mt-10 pt-8 border-t border-natural-100">
                <h4 className="font-medium text-natural-800 mb-4">Availability</h4>
                <p className="text-natural-600">
                  I'm currently open to freelance projects, full-time opportunities, and collaborations.
                </p>
                
                <div className="mt-6 bg-natural-50 rounded-lg p-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-natural-700 font-medium">Available for new projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div 
            className={`
              opacity-0 ${isVisible ? 'animate-slide-up' : ''}
            `}
            style={{ animationDelay: '0.6s' }}
          >
            <div className="bg-white shadow-lg rounded-2xl p-8 border border-natural-100">
              <h3 className="text-2xl font-semibold text-natural-800 mb-6">
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-natural-700 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-natural-200 focus:ring-2 focus:ring-natural-500 focus:border-transparent transition-all outline-none"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-natural-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-natural-200 focus:ring-2 focus:ring-natural-500 focus:border-transparent transition-all outline-none"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-natural-700 font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-natural-200 focus:ring-2 focus:ring-natural-500 focus:border-transparent transition-all outline-none"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-natural-700 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-natural-200 focus:ring-2 focus:ring-natural-500 focus:border-transparent transition-all outline-none resize-none"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center px-6 py-3 rounded-lg bg-natural-600 text-white hover:bg-natural-700 transition-colors ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send size={18} className="mr-2" />
                      Send Message
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
