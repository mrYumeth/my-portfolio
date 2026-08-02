import {
  motion,
  useReducedMotion,
} from 'framer-motion';

const getDirectionOffset = (direction, distance) => {
  const directions = {
    up: {
      x: 0,
      y: distance,
    },
    down: {
      x: 0,
      y: -distance,
    },
    left: {
      x: -distance,
      y: 0,
    },
    right: {
      x: distance,
      y: 0,
    },
  };

  return directions[direction] || directions.up;
};

function AnimatedSection({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  distance = 45,
  scale = 0.98,
}) {
  const shouldReduceMotion = useReducedMotion();

  const offset = getDirectionOffset(
    direction,
    distance,
  );

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: offset.x,
        y: offset.y,
        scale,
        filter: 'blur(8px)',
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
      }}
      viewport={{
        once: true,
        amount: 0.1,
        margin: '-50px 0px',
      }}
      transition={{
        duration,
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