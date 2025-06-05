import { motion, useScroll, useTransform } from 'framer-motion';
import { Bird, Rocket, Orbit } from 'lucide-react';

const FlyingElements = () => {
  const { scrollYProgress } = useScroll();
  
  // Bird animation
  const birdX = useTransform(scrollYProgress, [0, 0.5], ['100%', '0%']);
  const birdY = useTransform(scrollYProgress, [0, 0.25, 0.5], ['20vh', '30vh', '20vh']);
  const birdRotate = useTransform(scrollYProgress, [0, 0.25, 0.5], [0, -10, 0]);

  // Comet/Rocket animation
  const cometX = useTransform(scrollYProgress, [0.3, 0.8], ['0%', '100%']);
  const cometY = useTransform(scrollYProgress, [0.3, 0.55, 0.8], ['50vh', '40vh', '50vh']);
  const cometRotate = useTransform(scrollYProgress, [0.3, 0.8], [-45, -45]);

  // UFO animation
  const ufoX = useTransform(scrollYProgress, [0.5, 1], ['100%', '0%']);
  const ufoY = useTransform(scrollYProgress, [0.5, 0.75, 1], ['70vh', '60vh', '70vh']);
  const ufoRotate = useTransform(scrollYProgress, [0.5, 0.75, 1], [0, 10, 0]);

  return (
    <>
      {/* Bird */}
      <motion.div
        className="fixed pointer-events-none z-50 text-primary-600 dark:text-primary-400"
        style={{
          x: birdX,
          y: birdY,
          rotate: birdRotate,
        }}
      >
        <Bird className="h-8 w-8 md:h-12 md:w-12" />
      </motion.div>

      {/* Comet/Rocket */}
      <motion.div
        className="fixed pointer-events-none z-50"
        style={{
          x: cometX,
          y: cometY,
          rotate: cometRotate,
        }}
      >
        <div className="relative">
          <Rocket className="h-10 w-10 md:h-14 md:w-14 text-accent-500 dark:text-accent-400" />
          <motion.div
            className="absolute top-1/2 right-full h-1 w-20 bg-gradient-to-r from-transparent to-accent-500/50 dark:to-accent-400/50 rounded-full"
            animate={{
              opacity: [0.3, 0.7, 0.3],
              width: ['80px', '120px', '80px'],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>

      {/* UFO */}
      <motion.div
        className="fixed pointer-events-none z-50"
        style={{
          x: ufoX,
          y: ufoY,
          rotate: ufoRotate,
        }}
      >
        <div className="relative">
          <Orbit className="h-12 w-12 md:h-16 md:w-16 text-secondary-500 dark:text-secondary-400" />
          <motion.div
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-b from-secondary-500/50 dark:from-secondary-400/50 to-transparent rounded-full blur-sm"
            animate={{
              opacity: [0.3, 0.7, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </>
  );
};

export default FlyingElements;