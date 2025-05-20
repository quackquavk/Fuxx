import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    scrollToSection(sectionId);
  };

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  return (
    <header id="navbar" className="fixed top-0 w-full z-50 transition-all duration-300 py-4">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl font-bold gradient-text">fux</span>
            <span className="text-sm font-medium text-dark-light/80">UI/UX COMPANY</span>
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              onClick={() => handleNavClick("services")} 
              className="text-dark-light hover:text-primary font-medium transition-colors cursor-pointer"
            >
              Services
            </a>
            <a 
              onClick={() => handleNavClick("work")} 
              className="text-dark-light hover:text-primary font-medium transition-colors cursor-pointer"
            >
              Work
            </a>
            <a 
              onClick={() => handleNavClick("about")} 
              className="text-dark-light hover:text-primary font-medium transition-colors cursor-pointer"
            >
              About
            </a>
            <a 
              onClick={() => handleNavClick("contact")} 
              className="text-dark-light hover:text-primary font-medium transition-colors cursor-pointer"
            >
              Contact
            </a>
          </nav>
          
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMobileMenu} 
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
          
          <Button 
            onClick={() => handleNavClick("contact")} 
            className="hidden md:block bg-primary hover:bg-primary-dark text-white"
          >
            Get in touch
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg border-t border-light-darker">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <a 
                onClick={() => handleNavClick("services")} 
                className="py-2 text-dark-light hover:text-primary font-medium transition-colors cursor-pointer"
              >
                Services
              </a>
              <a 
                onClick={() => handleNavClick("work")} 
                className="py-2 text-dark-light hover:text-primary font-medium transition-colors cursor-pointer"
              >
                Work
              </a>
              <a 
                onClick={() => handleNavClick("about")} 
                className="py-2 text-dark-light hover:text-primary font-medium transition-colors cursor-pointer"
              >
                About
              </a>
              <a 
                onClick={() => handleNavClick("contact")} 
                className="py-2 text-dark-light hover:text-primary font-medium transition-colors cursor-pointer"
              >
                Contact
              </a>
              <Button 
                onClick={() => handleNavClick("contact")} 
                className="mt-2 bg-primary hover:bg-primary-dark text-white w-full"
              >
                Get in touch
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
