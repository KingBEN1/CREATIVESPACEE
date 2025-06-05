import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, Server, Database, Zap, ArrowRight } from 'lucide-react';
import PageHeader from '../../components/shared/PageHeader';
import AnimatedSection from '../../components/shared/AnimatedSection';

const WebDevelopmentPage = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A custom e-commerce solution with advanced filtering, payment processing, and inventory management.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
      title: "Financial Dashboard",
      description: "Real-time financial analytics dashboard with data visualization and reporting features.",
      image: "https://images.pexels.com/photos/7821602/pexels-photo-7821602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Vue.js", "Express", "PostgreSQL", "D3.js"]
    },
    {
      title: "Educational Platform",
      description: "Interactive learning platform with course management, video streaming, and progress tracking.",
      image: "https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Next.js", "Firebase", "Tailwind CSS", "FFmpeg"]
    }
  ];

  const services = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Frontend Development",
      description: "Modern, responsive interfaces built with the latest frameworks and best practices."
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Backend Development",
      description: "Robust server-side applications with secure APIs and efficient data processing."
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Database Design",
      description: "Optimized database architecture for scalability, performance, and data integrity."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Performance Optimization",
      description: "Improving load times, rendering performance, and overall application speed."
    }
  ];

  const technologies = [
    "React", "Vue.js", "Angular", "Next.js", "Node.js", 
    "Express", "Django", "Laravel", "MongoDB", "PostgreSQL", 
    "MySQL", "GraphQL", "REST API", "WebSockets", "Redux", 
    "Tailwind CSS", "SASS", "Webpack", "Vite", "Docker"
  ];

  return (
    <>
      <Helmet>
        <title>Web Development Services | Creative Space</title>
        <meta name="description" content="Custom web development services including frontend, backend, and full-stack solutions for businesses of all sizes." />
      </Helmet>
      
      <PageHeader
        title="Web Development"
        description="We build modern, performant, and scalable web applications using the latest technologies and best practices."
      />
      
      {/* Intro Section */}
      <section className="py-16 bg-white dark:bg-dark-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Custom Web Solutions for Modern Businesses
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Our web development team creates tailored solutions that align with your business goals and provide exceptional user experiences. We focus on building scalable, secure, and maintainable web applications that help your business grow.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Whether you need a simple marketing website, a complex web application, or an e-commerce platform, we have the expertise to deliver high-quality solutions that meet your needs.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-medium px-6 py-3 rounded-full transition-colors duration-300"
              >
                Start Your Web Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Web Development Team" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <span className="text-white text-sm font-medium px-3 py-1 bg-primary-600 rounded-full">
                      Expert Team
                    </span>
                    <h3 className="text-white text-xl font-bold mt-2">
                      Experienced Developers
                    </h3>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Services */}
      <section className="py-16 bg-gray-50 dark:bg-dark-900">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Our Web Development Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              We offer comprehensive web development services to build your digital presence from the ground up.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <div className="bg-white dark:bg-dark-800 p-8 rounded-xl shadow-soft-xl dark:shadow-none dark:border dark:border-dark-700">
                  <div className="p-4 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 inline-block mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Technologies */}
      <section className="py-16 bg-white dark:bg-dark-800">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Technologies We Use
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              We leverage the latest technologies and frameworks to build modern web applications.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {technologies.map((tech, index) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-gray-100 dark:bg-dark-700 text-gray-800 dark:text-gray-300 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Projects */}
      <section className="py-16 bg-gray-50 dark:bg-dark-900">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Featured Web Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Explore some of our recent web development projects.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection key={project.title} delay={index * 0.1} className="h-full">
                <div className="bg-white dark:bg-dark-800 rounded-xl overflow-hidden shadow-soft-xl hover:shadow-lg dark:shadow-none dark:border dark:border-dark-700 transition-all duration-300 h-full flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-medium px-6 py-3 rounded-full transition-colors duration-300"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebDevelopmentPage;