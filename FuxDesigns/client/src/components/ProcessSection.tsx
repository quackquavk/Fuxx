import { motion } from "framer-motion";

type ProcessStepProps = {
  number: string;
  title: string;
  description: string;
  isLast?: boolean;
  delay: number;
};

const ProcessStep = ({ number, title, description, isLast = false, delay }: ProcessStepProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative"
    >
      <div className="bg-dark-light rounded-xl p-8 h-full">
        <div className="text-4xl font-bold text-secondary/30 mb-4">{number}</div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-light/70">{description}</p>
      </div>
      {!isLast && (
        <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-2 bg-dark-light/50 z-10"></div>
      )}
    </motion.div>
  );
};

export default function ProcessSection() {
  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "We start by understanding your business, users, and goals to establish a solid foundation for the project."
    },
    {
      number: "02",
      title: "Research & Strategy",
      description: "We conduct user research and develop a strategy that addresses user needs and achieves business objectives."
    },
    {
      number: "03",
      title: "Design & Prototype",
      description: "We create wireframes, visual designs, and interactive prototypes that bring your vision to life."
    },
    {
      number: "04",
      title: "Testing & Delivery",
      description: "We validate designs through user testing and deliver final assets ready for development and implementation."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-dark text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-secondary font-medium">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">How we work</h2>
          <p className="text-light/80 text-lg">Our proven design process ensures we deliver exceptional results every time. Here's how we bring your vision to life:</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              isLast={index === processSteps.length - 1}
              delay={0.1 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
