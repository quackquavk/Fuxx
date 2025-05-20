import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  PaintBucket, 
  CodeSquare, 
  Smartphone, 
  MonitorSmartphone, 
  TestTube,
  ArrowRight
} from "lucide-react";

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
};

const ServiceCard = ({ icon, title, description, delay }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, amount: 0.3 }}
      className="service-card bg-white p-8 rounded-xl shadow-sm"
    >
      <div className="service-icon w-14 h-14 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-dark-light mb-6">{description}</p>
      <a href="#" className="inline-flex items-center text-primary font-medium hover:underline">
        Learn more
        <ArrowRight className="ml-1 h-4 w-4" />
      </a>
    </motion.div>
  );
};

export default function ServicesSection() {
  const services = [
    {
      icon: <LayoutDashboard className="h-6 w-6" />,
      title: "UX Research & Strategy",
      description: "We uncover user needs through comprehensive research to inform design strategy and create user-centered solutions.",
    },
    {
      icon: <PaintBucket className="h-6 w-6" />,
      title: "UI Design & Branding",
      description: "We create stunning visuals and interfaces that align with your brand identity and deliver exceptional user experiences.",
    },
    {
      icon: <CodeSquare className="h-6 w-6" />,
      title: "Design Systems",
      description: "We build scalable design systems that ensure consistency and efficiency across all your digital products.",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile App Design",
      description: "We design intuitive mobile experiences that engage users and deliver seamless interactions across platforms.",
    },
    {
      icon: <MonitorSmartphone className="h-6 w-6" />,
      title: "Web Design & Development",
      description: "We create responsive, accessible websites that deliver exceptional user experiences and drive business results.",
    },
    {
      icon: <TestTube className="h-6 w-6" />,
      title: "Prototyping & Testing",
      description: "We validate designs through interactive prototypes and user testing to ensure they meet user needs and business goals.",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-light-dark">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Comprehensive design solutions for digital products</h2>
          <p className="text-dark-light text-lg">We provide end-to-end design services to help businesses create impactful digital experiences that users love.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={0.1 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
