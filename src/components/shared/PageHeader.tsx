import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  description: string;
  children?: ReactNode;
}

const PageHeader = ({ title, description, children }: PageHeaderProps) => {
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1],
      }
    },
  };

  return (
    <div className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white dark:from-dark-800 dark:to-dark-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20 bg-grid-pattern"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={titleVariants}
            className="text-4xl md:text-5xl font-display font-bold mb-6 text-gray-900 dark:text-white"
          >
            {title}
          </motion.h1>
          
          <motion.p 
            initial="hidden"
            animate="visible"
            variants={descriptionVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8"
          >
            {description}
          </motion.p>
          
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;