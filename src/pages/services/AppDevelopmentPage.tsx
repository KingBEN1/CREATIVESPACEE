import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Smartphone, Zap, Layers, Shield, ArrowRight } from 'lucide-react';
import PageHeader from '../../components/shared/PageHeader';
import AnimatedSection from '../../components/shared/AnimatedSection';

const AppDevelopmentPage = () => {
  const projects = [
    {
      title: "Health & Fitness Tracker",
      description: "A comprehensive fitness tracking app with workout plans, nutrition tracking, and progress analytics.",
      image: "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["React Native", "Firebase", "Health Kit", "Google Fit"]
    },
    {
      title: "E-commerce Mobile App",
      description: "A feature-rich shopping app with personalized recommendations and seamless checkout experience.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Flutter", "Node.js", "MongoDB", "Stripe"]
    },
    {
      title: "Social Media Platform",
      description: "A community-focused social app with real-time messaging, content sharing, and user engagement features.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Swift", "Kotlin", "Firebase", "WebSockets"]
    }
  ];

  const services = [
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Native App Development",
      description: "Platform-specific apps for iOS and Android with native performance and user experience."
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Cross-Platform Solutions",
      description: "Efficient development across platforms using frameworks like React Native and Flutter."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Performance Optimization",
      description: "Ensuring fast loading times, smooth animations, and efficient resource usage."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security & Compliance",
      description: "Building secure apps with data protection, encryption, and regulatory compliance."
    }
  ];

  const technologies = [
    "iOS (Swift, SwiftUI)", "Android (Kotlin, Java)", "React Native", 
    "Flutter", "Firebase", "AWS Amplify", "GraphQL", "REST APIs",
    "SQLite", "Core Data", "Room Database", "Push Notifications",
    "Authentication", "Analytics", "AR/VR Integration", "Payment Gateways"
  ];

  return (
    <>
      <Helmet>
        <title>App Development Services | Creative Space</title>
        <meta name="description" content="Custom mobile application development services for iOS and Android including native and cross-platform solutions." />
      </Helmet>
      
      <PageHeader
        title="App Development"
        description="We build innovative mobile applications that engage users and drive business growth across iOS and Android platforms."
      />
      
      {/* Intro Section */}
      <section className="py-16 bg-white dark:bg-dark-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Mobile Solutions for the Modern World
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Our app development team creates custom mobile applications that deliver exceptional user experiences and drive business results. We focus on building apps that are not only visually appealing but also functionally robust and scalable.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Whether you need a consumer-facing app, an enterprise solution, or a mobile companion to your web platform, we have the expertise to bring your vision to life.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-medium px-6 py-3 rounded-full transition-colors duration-300"
              >
                Start Your App Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/3182831/pexels-photo-3182831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="App Development Team" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <span className="text-white text-sm font-medium px-3 py-1 bg-primary-600 rounded-full">
                      Expert Team
                    </span>
                    <h3 className="text-white text-xl font-bold mt-2">
                      Mobile Specialists
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
              Our App Development Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              We offer comprehensive mobile app development services to bring your ideas to market.
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
              Mobile Technologies We Use
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              We leverage the latest mobile technologies and frameworks to build cutting-edge applications.
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
              Featured App Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Explore some of our recent mobile application projects.
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

export default AppDevelopmentPage;