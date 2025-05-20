import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scroll";

export default function CtaSection() {
  return (
    <section className="py-20 md:py-28 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl md:text-4xl font-bold mb-6 max-w-2xl mx-auto"
        >
          Ready to transform your digital experience?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-white/80 text-lg mb-10 max-w-2xl mx-auto"
        >
          Let's work together to create intuitive, beautiful, and functional digital products that your users will love and that drive your business forward.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Button 
            onClick={() => scrollToSection("contact")}
            variant="outline" 
            className="px-8 py-4 bg-white text-primary hover:bg-light-dark hover:text-primary font-medium border-white text-lg"
          >
            Start your project
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
