import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      const moveX = x * 20;
      const moveY = y * 20;
      
      containerRef.current.style.setProperty('--move-x', `${moveX}px`);
      containerRef.current.style.setProperty('--move-y', `${moveY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const headlineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-dark-800 dark:to-dark-900"
    >
      {/* Animated background */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20 bg-grid-pattern"></div>
      
      {/* Animated gradient blob */}
      <div 
        className="absolute opacity-50 dark:opacity-30 blur-3xl bg-gradient-to-r from-primary-400/40 via-accent-400/40 to-secondary-400/40 w-[60%] h-[40%] rounded-full top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-gradient-xy"
        style={{
          transform: 'translate(calc(-50% + var(--move-x, 0px)), calc(-50% + var(--move-y, 0px)))',
        }}
      ></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            variants={headlineVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight md:leading-tight lg:leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-500 dark:from-primary-400 dark:via-accent-400 dark:to-secondary-400"
          >
            We Design & Build Digital Products That People Love
          </motion.h1>
          
          <motion.p 
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Creative Space is a full-service digital agency helping brands stand out in the digital landscape with innovative solutions and cutting-edge technology.
          </motion.p>
          
          <motion.div 
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-medium px-8 py-3 rounded-full transition-colors duration-300"
            >
              Start a Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/services" 
              className="inline-flex items-center justify-center bg-white hover:bg-gray-100 dark:bg-dark-700 dark:hover:bg-dark-600 text-primary-600 dark:text-primary-400 font-medium px-8 py-3 rounded-full border border-primary-200 dark:border-dark-600 transition-colors duration-300"
            >
              Our Services
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;