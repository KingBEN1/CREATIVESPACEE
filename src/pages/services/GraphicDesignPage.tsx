import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { PenTool, Image, Palette, Layers, ArrowRight } from 'lucide-react';
import PageHeader from '../../components/shared/PageHeader';
import AnimatedSection from '../../components/shared/AnimatedSection';

const GraphicDesignPage = () => {
  const projects = [
    {
      title: "Brand Identity System",
      description: "Complete brand identity design including logo, typography, and brand guidelines.",
      image: "https://images.pexels.com/photos/5408818/pexels-photo-5408818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Adobe Illustrator", "Brand Guidelines", "Typography", "Color Theory"]
    },
    {
      title: "Marketing Collateral",
      description: "Print and digital marketing materials for multi-channel campaigns.",
      image: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Adobe InDesign", "Print Design", "Digital Assets", "Layout"]
    },
    {
      title: "Product Packaging",
      description: "Innovative packaging design for consumer products with shelf impact.",
      image: "https://images.pexels.com/photos/5816296/pexels-photo-5816296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Adobe Photoshop", "3D Mockups", "Package Design", "Production"]
    }
  ];

  const services = [
    {
      icon: <PenTool className="h-6 w-6" />,
      title: "Brand Identity",
      description: "Creating distinctive brand identities that resonate with your target audience."
    },
    {
      icon: <Image className="h-6 w-6" />,
      title: "Print Design",
      description: "Professional print materials from business cards to large format displays."
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Digital Graphics",
      description: "Eye-catching graphics for web, social media, and digital advertising."
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Packaging Design",
      description: "Innovative packaging solutions that stand out on physical and digital shelves."
    }
  ];

  const technologies = [
    "Adobe Creative Suite", "Illustrator", "Photoshop", "InDesign",
    "After Effects", "Sketch", "Typography", "Color Theory",
    "Brand Guidelines", "Print Production", "Digital Design", "Layout Design",
    "Package Design", "Motion Graphics", "3D Modeling", "Vector Art"
  ];

  return (
    <>
      <Helmet>
        <title>Graphic Design Services | Creative Space</title>
        <meta name="description" content="Professional graphic design services including brand identity, print design, digital graphics, and packaging design solutions." />
      </Helmet>
      
      <PageHeader
        title="Graphic Design"
        description="We create compelling visual designs that communicate your brand's message and capture your audience's attention."
      />
      
      {/* Intro Section */}
      <section className="py-16 bg-white dark:bg-dark-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Visual Excellence in Every Design
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Our graphic design team combines creativity with strategic thinking to create visuals that not only look stunning but also effectively communicate your brand's message. We specialize in creating cohesive design solutions across all touchpoints of your brand.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                From logo design and brand identity to marketing materials and packaging, we ensure your brand stands out in today's competitive market.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-medium px-6 py-3 rounded-full transition-colors duration-300"
              >
                Start Your Design Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Graphic Design Team" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <span className="text-white text-sm font-medium px-3 py-1 bg-primary-600 rounded-full">
                      Expert Team
                    </span>
                    <h3 className="text-white text-xl font-bold mt-2">
                      Creative Designers
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
              Our Design Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Comprehensive graphic design services to elevate your brand's visual presence.
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
              Design Tools & Expertise
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              We use industry-standard tools and techniques to deliver exceptional design solutions.
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
              Featured Design Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Explore some of our recent graphic design projects.
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

export default GraphicDesignPage;