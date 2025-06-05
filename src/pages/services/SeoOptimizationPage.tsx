import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Search, BarChart, Globe, Target, ArrowRight } from 'lucide-react';
import PageHeader from '../../components/shared/PageHeader';
import AnimatedSection from '../../components/shared/AnimatedSection';

const SeoOptimizationPage = () => {
  const projects = [
    {
      title: "E-commerce SEO Strategy",
      description: "Comprehensive SEO optimization for a major e-commerce platform, resulting in 150% organic traffic increase.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Technical SEO", "Content Strategy", "Link Building", "Analytics"]
    },
    {
      title: "Local Business SEO",
      description: "Local SEO campaign for a restaurant chain, improving local search visibility and foot traffic.",
      image: "https://images.pexels.com/photos/7821602/pexels-photo-7821602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Local SEO", "Google My Business", "Citation Building", "Reviews"]
    },
    {
      title: "Content Marketing SEO",
      description: "Content-driven SEO strategy for a SaaS company, establishing thought leadership in their industry.",
      image: "https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Content Strategy", "Keyword Research", "Topic Clusters", "Performance Tracking"]
    }
  ];

  const services = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "Technical SEO",
      description: "Optimizing your website's technical foundation for better search engine visibility."
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Content Optimization",
      description: "Creating and optimizing content that ranks well and engages your audience."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Link Building",
      description: "Building high-quality backlinks to improve your site's authority and rankings."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Local SEO",
      description: "Improving your visibility in local search results and Google Maps."
    }
  ];

  const technologies = [
    "Google Analytics", "Google Search Console", "SEMrush", "Ahrefs",
    "Moz", "Screaming Frog", "Yoast SEO", "Schema Markup",
    "XML Sitemaps", "Keyword Research", "Content Strategy", "Link Building",
    "Technical SEO", "Local SEO", "Mobile Optimization", "Page Speed"
  ];

  return (
    <>
      <Helmet>
        <title>SEO Optimization Services | Creative Space</title>
        <meta name="description" content="Professional SEO services including technical optimization, content strategy, link building, and local SEO to improve your search engine rankings." />
      </Helmet>
      
      <PageHeader
        title="SEO Optimization"
        description="We help businesses improve their online visibility and drive organic traffic through data-driven SEO strategies."
      />
      
      {/* Intro Section */}
      <section className="py-16 bg-white dark:bg-dark-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Data-Driven SEO Solutions
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Our SEO team uses advanced analytics and industry best practices to improve your website's search engine rankings and drive qualified organic traffic. We focus on sustainable, white-hat SEO techniques that deliver long-term results.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                From technical optimization and content strategy to link building and local SEO, we provide comprehensive solutions tailored to your business goals.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-medium px-6 py-3 rounded-full transition-colors duration-300"
              >
                Start Your SEO Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </AnimatedSection>
            
            
            
            <AnimatedSection delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="SEO Team" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <span className="text-white text-sm font-medium px-3 py-1 bg-primary-600 rounded-full">
                      Expert Team
                    </span>
                    <h3 className="text-white text-xl font-bold mt-2">
                      SEO Specialists
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
              Our SEO Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Comprehensive SEO solutions to improve your search engine rankings and visibility.
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
              SEO Tools & Techniques
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              We use industry-leading tools and proven techniques to optimize your online presence.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {technologies.map((tech) => (
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
              Featured SEO Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Explore some of our recent SEO success stories.
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

export default SeoOptimizationPage;