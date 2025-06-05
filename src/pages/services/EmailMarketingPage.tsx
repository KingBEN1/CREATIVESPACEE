import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Mail, Users, BarChart2, Zap, ArrowRight } from 'lucide-react';
import PageHeader from '../../components/shared/PageHeader';
import AnimatedSection from '../../components/shared/AnimatedSection';

const EmailMarketingPage = () => {
  const projects = [
    {
      title: "E-commerce Email Strategy",
      description: "Automated email marketing campaign increasing customer retention and sales by 45%.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Email Automation", "Segmentation", "A/B Testing", "Analytics"]
    },
    {
      title: "SaaS Onboarding Sequence",
      description: "Customer onboarding email series improving activation rates and reducing churn.",
      image: "https://images.pexels.com/photos/7821602/pexels-photo-7821602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Drip Campaigns", "Personalization", "User Journey", "Metrics"]
    },
    {
      title: "Newsletter Optimization",
      description: "Content newsletter strategy achieving 40% open rates and strong engagement.",
      image: "https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Content Strategy", "List Growth", "Engagement", "Analytics"]
    }
  ];

  const services = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Strategy",
      description: "Developing comprehensive email marketing strategies aligned with your goals."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Automation",
      description: "Creating automated email sequences that nurture leads and drive conversions."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "List Management",
      description: "Building and maintaining healthy email lists with proper segmentation."
    },
    {
      icon: <BarChart2 className="h-6 w-6" />,
      title: "Performance Analytics",
      description: "Tracking and optimizing email campaign performance for better results."
    }
  ];

  const technologies = [
    "Mailchimp", "Klaviyo", "HubSpot", "SendGrid",
    "Campaign Monitor", "Email Design", "A/B Testing", "Automation",
    "Segmentation", "Personalization", "Analytics", "List Management",
    "Deliverability", "GDPR Compliance", "CRM Integration", "ESP Integration"
  ];

  return (
    <>
      <Helmet>
        <title>Email Marketing Services | Creative Space</title>
        <meta name="description" content="Professional email marketing services including strategy development, automation, list management, and performance analytics." />
      </Helmet>
      
      <PageHeader
        title="Email Marketing"
        description="We help businesses build meaningful relationships with their audience through strategic email marketing campaigns."
      />
      
      {/* Intro Section */}
      <section className="py-16 bg-white dark:bg-dark-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Strategic Email Marketing Solutions
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Our email marketing team creates personalized, data-driven campaigns that engage your audience and drive conversions. We focus on building meaningful relationships through targeted content and automated sequences that deliver the right message at the right time.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                From list growth and segmentation to automation and analytics, we provide comprehensive email marketing solutions that help you achieve your business goals.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-medium px-6 py-3 rounded-full transition-colors duration-300"
              >
                Start Your Email Marketing Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Email Marketing Team" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <span className="text-white text-sm font-medium px-3 py-1 bg-primary-600 rounded-full">
                      Expert Team
                    </span>
                    <h3 className="text-white text-xl font-bold mt-2">
                      Email Marketing Specialists
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
              Our Email Marketing Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Comprehensive email marketing solutions to engage your audience and drive results.
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
              Email Marketing Tools & Expertise
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              We use industry-leading tools and best practices to deliver exceptional email marketing campaigns.
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
              Featured Email Marketing Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Explore some of our recent email marketing success stories.
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

export default EmailMarketingPage;