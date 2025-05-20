import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Award } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-light-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="text-primary font-medium">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">We're passionate about creating exceptional digital experiences</h2>
            <p className="text-dark-light text-lg mb-6">
              Founded in 2015, Fux is a UI/UX design company dedicated to creating intuitive, beautiful, and functional digital products. We believe that great design is not just about aesthetics, but about solving real problems for real people.
            </p>
            <p className="text-dark-light text-lg mb-8">
              Our team of designers, researchers, and strategists work together to deliver holistic solutions that drive business growth while delighting users. We're committed to excellence, innovation, and continuous improvement in everything we do.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <p className="text-dark-light">Successful projects</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <p className="text-dark-light">Team members</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">30+</div>
                <p className="text-dark-light">Global clients</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">8+</div>
                <p className="text-dark-light">Years of experience</p>
              </div>
            </div>
            
            <Button 
              onClick={() => scrollToSection("contact")}
              className="px-6 py-3 bg-primary hover:bg-primary-dark text-white"
            >
              Get to know us
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
              alt="Fux design team at work" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs hidden md:block">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-primary mr-4" />
                <h4 className="font-bold text-lg">Award-winning team</h4>
              </div>
              <p className="text-dark-light">Recognized with multiple design awards for our innovative approach to digital product design.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
