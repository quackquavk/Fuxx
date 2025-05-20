import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { scrollToSection } from "@/lib/scroll";

export default function HeroSection() {
  return (
    <section className="hero-gradient pt-32 pb-20 md:pt-40 md:pb-28 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6"
          >
            Elevating Digital Experiences
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6 leading-tight"
          >
            We craft <span className="gradient-text">exceptional</span> user experiences for the digital world
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-dark-light max-w-2xl mx-auto mb-10"
          >
            We're a UI/UX design company dedicated to creating intuitive, beautiful, and functional digital products that delight users and drive business growth.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              onClick={() => scrollToSection("work")}
              className="px-6 py-3 bg-primary hover:bg-primary-dark text-white"
            >
              Explore our work
            </Button>
            <Button 
              onClick={() => scrollToSection("contact")}
              variant="outline" 
              className="px-6 py-3 border border-dark/20 hover:border-primary hover:text-primary text-dark-light"
            >
              Start a project
            </Button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
          >
            {/* Client logos - Using SVG for vector graphics */}
            <div className="flex justify-center items-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
              <svg width="120" height="32" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
                <rect width="120" height="32" rx="4" fill="#000" fillOpacity="0.1"/>
                <path d="M40 16C40 17.5913 39.5308 19.1174 38.6518 20.3835C37.7727 21.6496 36.5233 22.5914 35.0615 23.0843C33.5997 23.5772 32.0133 23.5886 30.5438 23.1168C29.0743 22.645 27.8093 21.7223 26.9099 20.4693C26.0106 19.2163 25.5176 17.6981 25.4924 16.1068C25.4672 14.5155 25.9111 12.9839 26.7695 11.7057C27.628 10.4275 28.8612 9.47134 30.3118 8.96281C31.7624 8.45428 33.3441 8.42608 34.8113 8.88255L30 16H40Z" fill="#000" fillOpacity="0.7"/>
                <path d="M80 16C80 20.4183 76.4183 24 72 24C67.5817 24 64 20.4183 64 16C64 11.5817 67.5817 8 72 8C76.4183 8 80 11.5817 80 16Z" fill="#000" fillOpacity="0.7"/>
                <path d="M88 8H104V12H88V8Z" fill="#000" fillOpacity="0.7"/>
                <path d="M88 14H104V18H88V14Z" fill="#000" fillOpacity="0.7"/>
                <path d="M88 20H104V24H88V20Z" fill="#000" fillOpacity="0.7"/>
                <path d="M48 8L56 24H40L48 8Z" fill="#000" fillOpacity="0.7"/>
              </svg>
            </div>
            <div className="flex justify-center items-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
              <svg width="120" height="32" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
                <rect width="120" height="32" rx="4" fill="#000" fillOpacity="0.1"/>
                <circle cx="60" cy="16" r="8" fill="#000" fillOpacity="0.7"/>
                <rect x="36" y="12" width="16" height="8" fill="#000" fillOpacity="0.7"/>
                <path d="M84 12H96L92 20H80L84 12Z" fill="#000" fillOpacity="0.7"/>
              </svg>
            </div>
            <div className="flex justify-center items-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
              <svg width="120" height="32" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
                <rect width="120" height="32" rx="4" fill="#000" fillOpacity="0.1"/>
                <path d="M60 8L68 16L60 24L52 16L60 8Z" fill="#000" fillOpacity="0.7"/>
                <rect x="36" y="8" width="8" height="16" rx="4" fill="#000" fillOpacity="0.7"/>
                <rect x="76" y="8" width="8" height="16" rx="4" fill="#000" fillOpacity="0.7"/>
              </svg>
            </div>
            <div className="flex justify-center items-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
              <svg width="120" height="32" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
                <rect width="120" height="32" rx="4" fill="#000" fillOpacity="0.1"/>
                <path d="M48 8H52V24H48V8Z" fill="#000" fillOpacity="0.7"/>
                <path d="M56 8H72V12H56V8Z" fill="#000" fillOpacity="0.7"/>
                <path d="M56 14H68V18H56V14Z" fill="#000" fillOpacity="0.7"/>
                <path d="M56 20H64V24H56V20Z" fill="#000" fillOpacity="0.7"/>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
