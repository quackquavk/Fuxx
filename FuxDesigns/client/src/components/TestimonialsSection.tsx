import { motion } from "framer-motion";
import { Star } from "lucide-react";

type TestimonialCardProps = {
  quote: string;
  name: string;
  position: string;
  company: string;
  delay: number;
};

const TestimonialCard = ({ quote, name, position, company, delay }: TestimonialCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-white p-8 rounded-xl shadow-sm"
    >
      <div className="flex mb-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="fill-warning text-warning h-5 w-5" />
        ))}
      </div>
      <p className="text-dark-light mb-6">{quote}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-light-dark mr-4"></div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-dark-light">{position}, {company}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "\"Fux transformed our outdated app into a modern, user-friendly experience. Their attention to detail and understanding of our business needs was impressive. Highly recommended!\"",
      name: "Sarah Johnson",
      position: "Product Manager",
      company: "TechCorp"
    },
    {
      quote: "\"Working with the Fux team was a game-changer for our e-commerce site. Our conversion rates increased by 35% after implementing their design recommendations. They truly understand user behavior.\"",
      name: "Michael Chen",
      position: "E-commerce Director",
      company: "ShopBase"
    },
    {
      quote: "\"The design system Fux created for us has streamlined our product development process. Their work was thorough, well-documented, and exactly what we needed to scale our design operations.\"",
      name: "Alex Rodriguez",
      position: "CTO",
      company: "SaaS Solutions"
    }
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">What our clients say</h2>
          <p className="text-dark-light text-lg">Don't just take our word for it. Here's what our clients have to say about working with us.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              position={testimonial.position}
              company={testimonial.company}
              delay={0.1 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
