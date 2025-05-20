import { Twitter, Instagram, Linkedin, Dribbble, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { scrollToSection } from "@/lib/scroll";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleFooterNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
  };

  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="#" className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-bold text-white">fux</span>
              <span className="text-sm font-medium text-white/60">UI/UX COMPANY</span>
            </a>
            <p className="text-white/70 mb-6">
              We create exceptional user experiences for digital products. Our design-driven approach helps businesses innovate and grow.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Dribbble className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">UX Research & Strategy</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">UI Design & Branding</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Design Systems</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Mobile App Design</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Web Design & Development</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  onClick={() => handleFooterNavClick("about")} 
                  className="text-white/70 hover:text-white transition-colors cursor-pointer"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  onClick={() => handleFooterNavClick("work")} 
                  className="text-white/70 hover:text-white transition-colors cursor-pointer"
                >
                  Work
                </a>
              </li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Blog</a></li>
              <li>
                <a 
                  onClick={() => handleFooterNavClick("contact")} 
                  className="text-white/70 hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-white/70 mb-4">
              Subscribe to our newsletter for design insights and updates.
            </p>
            <form className="mb-4">
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  className="rounded-r-none bg-dark-light/60 border border-dark-light/60 focus:outline-none text-white"
                />
                <Button type="submit" className="rounded-l-none bg-primary hover:bg-primary-dark">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
            <p className="text-white/50 text-sm">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
        
        <div className="border-t border-dark-light/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm mb-4 md:mb-0">
              © {currentYear} Fux. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
