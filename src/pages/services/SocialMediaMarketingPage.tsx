import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { MessageSquare, Users, BarChart2, Camera, ArrowRight } from 'lucide-react';
import PageHeader from '../../components/shared/PageHeader';
import AnimatedSection from '../../components/shared/AnimatedSection';

const SocialMediaMarketingPage = () => {
  const projects = [
    {
      title: "Fashion Brand Campaign",
      description: "Integrated social media campaign increasing brand engagement by 200% across platforms.",
      image: "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Content Strategy", "Influencer Marketing", "Paid Ads", "Analytics"]
    },
    {
      title: "Restaurant Chain Growth",
      description: "Local social media marketing driving foot traffic and online orders through engaging content.",
      image: "https://images.pexels.com/photos/5816296/pexels-photo-5816296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Local Marketing", "Content Creation", "Community Management", "Ads"]
    },
    {
      title: "Tech Startup Launch",
      description: "Product launch campaign achieving viral growth through strategic social media presence.",
      image: "https://images.pexels.com/photos/7310200/pexels-photo-7310200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Launch Strategy", "Growth Hacking", "Video Content", "Analytics"]
    }
  ];

  const services = [
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Social Strategy",
      description: "Developing comprehensive social media strategies aligned with your business goals."
    },
    {
      icon: <Camera className="h-6 w-6" />,
      title: "Content Creation",
      description: "Creating engaging content that resonates with your target audience."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community Management",
      description: "Building and engaging with your social media community to foster brand loyalty."
    },
    {
      icon: <BarChart2 className="h-6 w-6" />,
      title: "Social Analytics",
      description: "Tracking and analyzing social media performance to optimize results."
    }
  ];

  const technologies = [
    "Facebook", "Instagram", "Twitter", "LinkedIn",
    "TikTok", "YouTube", "Pinterest", "Social Analytics",
    "Content Calendar", "Influencer Marketing", "Paid Social", "Community Management",
    "Social Listening", "Crisis Management", "Brand Voice", "Visual Strategy"
  ];

  return (
    <>
      <Helmet>
        <title>Social Media Marketing Services | Creative Space</title>
        <meta name="description" content="Professional social media marketing services including strategy development, content creation, community management, and performance analytics." />
      </Helmet>
      
      <PageHeader
        title="Social Media Marketing"
        description="We help brands build meaningful connections and drive engagement through strategic social media marketing."
      />
      
      {/* Intro Section */}
      <section className="py-16 bg-white dark:bg-dark-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Strategic Social Media Solutions
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Our social media team creates and executes data-driven strategies that help brands connect with their audience, build community, and drive business results. We focus on creating authentic engagement and meaningful conversations across all social platforms.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                From content creation and community management to paid advertising and analytics, we provide comprehensive social media solutions tailored to your brand's voice and goals.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-medium px-6 py-3 rounded-full transition-colors duration-300"
              >
                Start Your Social Media Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Social Media Team" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <span className="text-white text-sm font-medium px-3 py-1 bg-primary-600 rounded-full">
                      Expert Team
                    </span>
                    <h3 className="text-white text-xl font-bold mt-2">
                      Social Media Specialists
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
              Our Social Media Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Comprehensive social media marketing solutions to build your brand's online presence.
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
              Platforms & Expertise
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              We leverage all major social platforms and marketing tools to maximize your reach.
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
              Featured Social Media Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Explore some of our recent social media marketing success stories.
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

export default SocialMediaMarketingPage;