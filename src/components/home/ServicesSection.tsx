import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Globe, 
  Smartphone, 
  Palette, 
  PenTool, 
  Search, 
  MessageSquare, 
  Mail, 
  DollarSign, 
  ArrowRight 
} from 'lucide-react';
import AnimatedSection from '../shared/AnimatedSection';

interface ServiceCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
  link: string;
  index: number;
}

const ServiceCard = ({ icon, title, description, link, index }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <AnimatedSection delay={index * 0.1}>
      <Link 
        to={link}
        className="group block h-full p-6 bg-white dark:bg-dark-800 rounded-2xl shadow-soft-xl hover:shadow-lg dark:shadow-none dark:border dark:border-dark-700 transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="mb-4 p-3 rounded-xl bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 inline-block">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {description}
        </p>
        <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium">
          <span>Learn more</span>
          <motion.div
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.div>
        </div>
      </Link>
    </AnimatedSection>
  );
};

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const services = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Web Development",
      description: "Custom websites and web applications that are responsive, fast, and built with modern technologies.",
      link: "/services/web-development"
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
      link: "/services/app-development"
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "UI/UX Design",
      description: "User-centered design that focuses on creating intuitive, engaging, and accessible digital experiences.",
      link: "/services/ui-ux-design"
    },
    {
      icon: <PenTool className="h-6 w-6" />,
      title: "Graphic Design",
      description: "Visual communication solutions including brand identity, illustrations, and marketing materials.",
      link: "/services/graphic-design"
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "SEO Optimization",
      description: "Data-driven strategies to improve your website's visibility and drive organic traffic to your business.",
      link: "/services/seo-optimization"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Social Media",
      description: "Strategic social media management to build your brand, engage your audience, and drive growth.",
      link: "/services/social-media-marketing"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Marketing",
      description: "Targeted email campaigns that nurture leads, boost customer retention, and maximize ROI.",
      link: "/services/email-marketing"
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "PPC Advertising",
      description: "Results-driven paid advertising campaigns across search, social, and display networks.",
      link: "/services/ppc-advertising"
    }
  ];

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }
    },
  };
  
  return (
    <section className="py-20 bg-gray-50 dark:bg-dark-900">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={ref} className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            variants={titleVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900 dark:text-white"
          >
            Our Services
          </motion.h2>
          <motion.p 
            variants={titleVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            We offer comprehensive digital solutions to help your business thrive in the digital landscape.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;