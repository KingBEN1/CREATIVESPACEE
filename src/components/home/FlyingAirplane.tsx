import { motion, useScroll, useTransform } from 'framer-motion';
import { Plane } from 'lucide-react';

const FlyingAirplane = () => {
  const { scrollYProgress } = useScroll();
  
  // Transform scroll progress into x position and rotation
  const xPosition = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const yPosition = useTransform(scrollYProgress, [0, 0.5, 1], ['50vh', '30vh', '50vh']);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-10, 0, 10]);

  return (
    <motion.div
      className="fixed pointer-events-none z-50 text-primary-600 dark:text-primary-400"
      style={{
        x: xPosition,
        y: yPosition,
        rotate: rotate,
      }}
    >
      <Plane className="h-12 w-12 md:h-16 md:w-16" />
    </motion.div>
  );
};

export default FlyingAirplane;