
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-natural-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <a href="#" className="text-2xl font-display font-bold mb-4 block">
              MH<span className="text-natural-400">.</span>
            </a>
            <p className="text-natural-200 mb-6 max-w-md">
              I'm a passionate software developer dedicated to creating beautiful, functional digital experiences that solve real-world problems.
            </p>
            <p className="text-natural-300">
              &copy; {new Date().getFullYear()} Mugisha Honore. All rights reserved.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-natural-100">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-natural-300 hover:text-white transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#about" className="text-natural-300 hover:text-white transition-colors duration-300">About</a>
              </li>
              <li>
                <a href="#skills" className="text-natural-300 hover:text-white transition-colors duration-300">Skills</a>
              </li>
              <li>
                <a href="#projects" className="text-natural-300 hover:text-white transition-colors duration-300">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-natural-300 hover:text-white transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-natural-100">Contact</h3>
            <ul className="space-y-2">
              <li className="text-natural-300">
                Kigali, Rwanda
              </li>
              <li>
                <a href="mailto:contact@mugishahonore.com" className="text-natural-300 hover:text-white transition-colors duration-300">
                  honoremugisha54@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+250780000000" className="text-natural-300 hover:text-white transition-colors duration-300">
                  +250 791645848
                </a>
              </li>
            </ul>
            
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4 text-natural-100">Follow</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/honore54"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-natural-300 hover:text-white transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/mugisha-honore-44b7a5251/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-natural-300 hover:text-white transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a
                  href="https://x.com/HonoreWes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-natural-300 hover:text-white transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToTop}
        className="absolute right-8 bottom-8 bg-natural-700 hover:bg-natural-600 p-3 rounded-full text-white transition-colors duration-300"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
      
      <div className="bg-natural-950 py-4 text-center text-natural-400 text-sm">
        <p>
          Designed and developed by Mugisha Honore with ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
