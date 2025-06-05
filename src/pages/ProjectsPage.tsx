import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, ExternalLink } from 'lucide-react';
import PageHeader from '../components/shared/PageHeader';
import AnimatedSection from '../components/shared/AnimatedSection';

// Project data
const projects = [
  {
    id: 1,
    title: "Eco Marketplace App",
    category: "App Development",
    technologies: ["React Native", "Firebase", "Node.js"],
    image: "https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "#"
  },
  {
    id: 2,
    title: "Financial Dashboard",
    category: "Web Development",
    technologies: ["React", "D3.js", "Express"],
    image: "https://images.pexels.com/photos/7821602/pexels-photo-7821602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "#"
  },
  {
    id: 3,
    title: "Wellness Brand Identity",
    category: "Graphic Design",
    technologies: ["Illustrator", "Photoshop", "InDesign"],
    image: "https://images.pexels.com/photos/5408818/pexels-photo-5408818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "#"
  },
  {
    id: 4,
    title: "Travel Experience Platform",
    category: "UI/UX Design",
    technologies: ["Figma", "Prototyping", "User Research"],
    image: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "#"
  },
  {
    id: 5,
    title: "E-commerce Growth Strategy",
    category: "SEO Optimization",
    technologies: ["Keyword Research", "Technical SEO", "Analytics"],
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "#"
  },
  {
    id: 6,
    title: "Social Campaign for Fitness Brand",
    category: "Social Media",
    technologies: ["Content Strategy", "Analytics", "Paid Ads"],
    image: "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "#"
  },
  {
    id: 7,
    title: "Email Marketing for SaaS",
    category: "Email Marketing",
    technologies: ["Marketing Automation", "A/B Testing", "Analytics"],
    image: "https://images.pexels.com/photos/7310200/pexels-photo-7310200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "#"
  },
  {
    id: 8,
    title: "PPC Campaign for Real Estate",
    category: "PPC Advertising",
    technologies: ["Google Ads", "Landing Pages", "Conversion Tracking"],
    image: "https://images.pexels.com/photos/5816296/pexels-photo-5816296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "#"
  },
  {
    id: 9,
    title: "Healthcare Provider App",
    category: "App Development",
    technologies: ["Flutter", "Firebase", "HIPAA Compliance"],
    image: "https://images.pexels.com/photos/6476254/pexels-photo-6476254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "#"
  }
];

// Categories for filtering
const categories = [
  "All",
  "Web Development",
  "App Development",
  "UI/UX Design",
  "Graphic Design",
  "SEO Optimization",
  "Social Media",
  "Email Marketing",
  "PPC Advertising"
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <AnimatedSection className="h-full">
      <div 
        className="group h-full overflow-hidden rounded-xl bg-white dark:bg-dark-800 shadow-md hover:shadow-xl dark:shadow-none dark:border dark:border-dark-700 transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-64 overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center"
            animate={{ opacity: isHovered ? 1 : 0 }}
          >
            <Link 
              to={project.link} 
              className="bg-white/90 text-primary-600 hover:bg-white hover:text-primary-700 p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              <ExternalLink className="h-6 w-6" />
            </Link>
          </motion.div>
          <motion.img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="p-6">
          <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
            {project.category}
          </span>
          <h3 className="text-xl font-bold mt-2 mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className="text-xs px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  
  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);
  
  return (
    <>
      <Helmet>
        <title>Our Projects | Creative Space</title>
        <meta name="description" content="Explore our portfolio of digital projects including web and mobile applications, design work, and marketing campaigns." />
      </Helmet>
      
      <PageHeader
        title="Our Projects"
        description="Explore our latest work and see how we've helped clients across various industries achieve their digital goals."
      />
      
      <section className="py-16 bg-gray-50 dark:bg-dark-900">
        <div className="container mx-auto px-4 md:px-6">
          {/* Category Filters */}
          <AnimatedSection className="mb-12">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-primary-600 text-white dark:bg-primary-500'
                      : 'bg-white dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </AnimatedSection>
          
          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </AnimatePresence>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                No projects found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                No projects match the selected category. Please try another category.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;