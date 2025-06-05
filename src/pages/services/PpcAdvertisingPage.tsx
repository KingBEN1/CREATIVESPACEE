import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { DollarSign, Target, BarChart2, Search, ArrowRight } from 'lucide-react';
import PageHeader from '../../components/shared/PageHeader';
import AnimatedSection from '../../components/shared/AnimatedSection';

const PpcAdvertisingPage = () => {
  const projects = [
    {
      title: "E-commerce PPC Campaign",
      description: "Multi-channel PPC campaign achieving 300% ROAS for an e-commerce brand.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Google Ads", "Shopping Ads", "Remarketing", "Analytics"]
    },
    {
      title: "B2B Lead Generation",
      description: "LinkedIn and Google Ads campaign generating qualified B2B leads at optimal CPA.",
      image: "https://images.pexels.com/photos/7821602/pexels-photo-7821602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["LinkedIn Ads", "Google Ads", "Landing Pages", "CRM Integration"]
    },
    {
      title: "App Install Campaign",
      description: "Mobile app advertising campaign driving installs and user acquisition.",
      image: "https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["App Campaigns", "Social Ads", "ASO", "Analytics"]
    }
  ];

  const services = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "Search Advertising",
      description: "Strategic search campaigns targeting users actively looking for your products or services."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Display & Social",
      description: "Targeted display and social media advertising to reach your ideal audience."
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Shopping Campaigns",
      description: "Optimized shopping campaigns to showcase your products to potential customers."
    },
    {
      icon: <BarChart2 className="h-6 w-6" />,
      title: "Performance Analytics",
      description: "Detailed tracking and optimization of campaign performance and ROI."
    }
  ];

  const technologies = [
    "Google Ads", "Facebook Ads", "LinkedIn Ads", "Instagram Ads",
    "Twitter Ads", "Microsoft Ads", "Shopping Ads", "Display Network",
    "Remarketing", "Analytics", "Tag Manager", "Conversion Tracking",
    "A/B Testing", "Landing Pages", "Ad Creative", "Budget Optimization"
  ];

  return (
    <>
      <Helmet>
        <title>PPC Advertising Services | Creative Space</title>
        <meta name="description" content="Professional PPC advertising services including search, display, social media advertising, and performance analytics." />
      </Helmet>
      
      <PageHeader
        title="PPC Advertising"
        description="We create and manage high-performing paid advertising campaigns that drive results and maximize ROI."
      />
      
      {/* Intro Section */}
      <section className="py-16 bg-white dark:bg-dark-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Results-Driven PPC Solutions
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Our PPC team creates and manages data-driven advertising campaigns that deliver measurable results. We focus on maximizing your return on ad spend through strategic targeting, compelling ad creative, and continuous optimization.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                From search and display to social media advertising, we provide comprehensive PPC solutions across all major platforms and networks.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-medium px-6 py-3 rounded-full transition-colors duration-300"
              >
                Start Your PPC Campaign
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="PPC Team" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <span className="text-white text-sm font-medium px-3 py-1 bg-primary-600 rounded-full">
                      Expert Team
                    </span>
                    <h3 className="text-white text-xl font-bold mt-2">
                      PPC Specialists
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
              Our PPC Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Comprehensive paid advertising solutions to reach your target audience and drive conversions.
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
              Advertising Platforms & Tools
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              We leverage all major advertising platforms and tools to maximize your campaign performance.
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
              Featured PPC Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Explore some of our recent PPC advertising success stories.
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

export default PpcAdvertisingPage;