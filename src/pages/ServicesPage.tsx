import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
import PageHeader from '../components/shared/PageHeader';
import AnimatedSection from '../components/shared/AnimatedSection';

interface ServiceCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
  features: string[];
  link: string;
  index: number;
}

const ServiceCard = ({ icon, title, description, features, link, index }: ServiceCardProps) => {
  return (
    <AnimatedSection delay={index * 0.1} className="h-full">
      <div className="h-full p-8 bg-white dark:bg-dark-800 rounded-2xl shadow-soft-xl hover:shadow-lg dark:shadow-none dark:border dark:border-dark-700 transition-all duration-300 flex flex-col">
        <div className="mb-6 p-4 rounded-xl bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 inline-block">
          {icon}
        </div>
        
        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          {title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {description}
        </p>
        
        <div className="mb-8 flex-grow">
          <h4 className="text-sm uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400 mb-3">
            Key Features
          </h4>
          <ul className="space-y-2">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <Link
          to={link}
          className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-medium px-6 py-3 rounded-full transition-colors duration-300 w-full mt-auto"
        >
          Learn More
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </AnimatedSection>
  );
};

const ServicesPage = () => {
  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Development",
      description: "Custom websites and web applications that are responsive, fast, and built with modern technologies.",
      features: [
        "Responsive design for all devices",
        "Performance optimization",
        "Custom CMS integration",
        "E-commerce solutions"
      ],
      link: "/services/web-development"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
      features: [
        "iOS and Android development",
        "Cross-platform solutions",
        "App store optimization",
        "Backend API integration"
      ],
      link: "/services/app-development"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "User-centered design that focuses on creating intuitive, engaging, and accessible digital experiences.",
      features: [
        "User research and personas",
        "Wireframing and prototyping",
        "Interactive design systems",
        "Usability testing"
      ],
      link: "/services/ui-ux-design"
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: "Graphic Design",
      description: "Visual communication solutions including brand identity, illustrations, and marketing materials.",
      features: [
        "Brand identity development",
        "Logo design",
        "Marketing materials",
        "Packaging design"
      ],
      link: "/services/graphic-design"
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "SEO Optimization",
      description: "Data-driven strategies to improve your website's visibility and drive organic traffic to your business.",
      features: [
        "Technical SEO audits",
        "Keyword research",
        "Content optimization",
        "Link building strategies"
      ],
      link: "/services/seo-optimization"
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Social Media Marketing",
      description: "Strategic social media management to build your brand, engage your audience, and drive growth.",
      features: [
        "Platform strategy",
        "Content creation",
        "Community management",
        "Performance analytics"
      ],
      link: "/services/social-media-marketing"
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email Marketing",
      description: "Targeted email campaigns that nurture leads, boost customer retention, and maximize ROI.",
      features: [
        "Campaign strategy",
        "Email design and copywriting",
        "Automation workflows",
        "List segmentation"
      ],
      link: "/services/email-marketing"
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "PPC Advertising",
      description: "Results-driven paid advertising campaigns across search, social, and display networks.",
      features: [
        "Campaign strategy",
        "Ad creative development",
        "Budget optimization",
        "Conversion tracking"
      ],
      link: "/services/ppc-advertising"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services | Creative Space</title>
        <meta name="description" content="Discover our full range of digital services including web and app development, design, SEO, and digital marketing solutions." />
      </Helmet>
      
      <PageHeader
        title="Our Services"
        description="We offer a comprehensive range of digital services to help your business thrive in the digital landscape. Explore our offerings below."
      />
      
      <section className="py-20 bg-gray-50 dark:bg-dark-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                link={service.link}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;