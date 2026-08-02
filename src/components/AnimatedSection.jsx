import {
  motion,
  useReducedMotion,
} from 'framer-motion';

const directionOffsets = {
  up: {
    x: 0,
    y: 40,
  },
  left: {
    x: -40,
    y: 0,
  },
  right: {
    x: 40,
    y: 0,
  },
};

function AnimatedSection({
  children,
  direction = 'up',
  delay = 0,
}) {
  const shouldReduceMotion = useReducedMotion();

  const offset =
    directionOffsets[direction] || directionOffsets.up;

  if (shouldReduceMotion) {
    return children;
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: offset.x,
        y: offset.y,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.08,
      }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        width: '100%',
      }}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedSection;