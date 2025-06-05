import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import AnimatedSection from '../shared/AnimatedSection';

const projects = [
  {
    id: 1,
    title: "Eco Marketplace App",
    category: "App Development",
    image: "https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/projects"
  },
  {
    id: 2,
    title: "Financial Dashboard",
    category: "Web Development",
    image: "https://images.pexels.com/photos/7821602/pexels-photo-7821602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/projects"
  },
  {
    id: 3,
    title: "Wellness Brand Identity",
    category: "Graphic Design",
    image: "https://images.pexels.com/photos/5408818/pexels-photo-5408818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/projects"
  },
  {
    id: 4,
    title: "Travel Experience Platform",
    category: "UI/UX Design",
    image: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/projects"
  },
  {
    id: 5,
    title: "E-commerce Growth Strategy",
    category: "SEO Optimization",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/projects"
  },
  {
    id: 6,
    title: "Social Campaign for Fitness Brand",
    category: "Social Media",
    image: "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/projects"
  }
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  return (
    <div className="group h-full overflow-hidden rounded-xl bg-white dark:bg-dark-800 shadow-md hover:shadow-xl dark:shadow-none dark:border dark:border-dark-700 transition-all duration-300">
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
          <Link 
            to={project.link} 
            className="bg-white/90 text-primary-600 hover:bg-white hover:text-primary-700 p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <ExternalLink className="h-6 w-6" />
          </Link>
        </div>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="p-6">
        <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
          {project.category}
        </span>
        <h3 className="text-xl font-bold mt-2 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (!carouselRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    
    const scrollAmount = carouselRef.current.clientWidth * 0.7;
    const newScrollLeft = direction === 'left' 
      ? carouselRef.current.scrollLeft - scrollAmount 
      : carouselRef.current.scrollLeft + scrollAmount;
    
    carouselRef.current.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });
  };

  return (
    <section className="py-20 bg-white dark:bg-dark-800">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900 dark:text-white">
              Our Latest Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              Explore our featured projects showcasing our expertise across various digital disciplines.
            </p>
          </div>
          <Link 
            to="/projects" 
            className="mt-6 md:mt-0 inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium"
          >
            View All Projects
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </AnimatedSection>
        
        <div className="relative">
          <div
            ref={carouselRef}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6 pb-4"
            onScroll={checkScrollButtons}
          >
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
          
          {canScrollLeft && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-dark-700 shadow-md dark:shadow-dark-900/30 p-3 rounded-full z-10"
              onClick={() => scrollCarousel('left')}
            >
              <ChevronLeft className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            </motion.button>
          )}
          
          {canScrollRight && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-dark-700 shadow-md dark:shadow-dark-900/30 p-3 rounded-full z-10"
              onClick={() => scrollCarousel('right')}
            >
              <ChevronRight className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            </motion.button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;