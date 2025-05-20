import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type ProjectCardProps = {
  image: string;
  category: string;
  title: string;
  description: string;
  delay: number;
};

const ProjectCard = ({ image, category, title, description, delay }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, amount: 0.3 }}
      className="card-hover bg-white rounded-xl overflow-hidden shadow-sm"
    >
      <div className="relative overflow-hidden">
        <img src={image} alt={title} className="w-full h-[300px] object-cover object-center" />
        <div className="absolute inset-0 bg-primary/20 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity">
          <a href="#" className="bg-white text-primary font-medium px-5 py-2.5 rounded-md hover:bg-primary hover:text-white transition-colors">View Project</a>
        </div>
      </div>
      <div className="p-6">
        <span className="text-sm text-primary font-medium">{category}</span>
        <h3 className="text-xl font-bold mt-1 mb-2">{title}</h3>
        <p className="text-dark-light">{description}</p>
      </div>
    </motion.div>
  );
};

export default function WorkSection() {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
      category: "Mobile App",
      title: "FinTrack Banking App",
      description: "A comprehensive financial tracking application with intuitive data visualization and customizable dashboards."
    },
    {
      image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
      category: "E-commerce Website",
      title: "ModernMart Redesign",
      description: "A complete overhaul of an e-commerce platform focusing on conversion optimization and superior user experience."
    },
    {
      image: "https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
      category: "SaaS Platform",
      title: "AnalyticsPro Dashboard",
      description: "A comprehensive analytics platform with intuitive data visualization tools and customizable reporting features."
    },
    {
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
      category: "Healthcare App",
      title: "MediTrack Patient Portal",
      description: "A mobile application for patients to track health metrics, schedule appointments, and communicate with healthcare providers."
    }
  ];

  return (
    <section id="work" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium">Our Work</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Featured projects</h2>
          <p className="text-dark-light text-lg">We've helped businesses of all sizes create exceptional digital experiences. Here's a selection of our recent work.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              category={project.category}
              title={project.title}
              description={project.description}
              delay={0.1 * index}
            />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <a href="#" className="inline-flex items-center text-primary font-medium hover:underline">
            View all projects
            <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
