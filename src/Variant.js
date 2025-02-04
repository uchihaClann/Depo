// Variants.js - Reusable Framer Motion Variants

export const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };
  
  export const slideInFromLeft = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50, damping: 20 },
    },
  };
  
  export const slideInFromRight = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50, damping: 20 },
    },
  };
  
  export const scaleUp = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  
  export const bounce = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: [0, -10, 0], // Bounce effect
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut", repeat: Infinity },
    },
  };
  
  export const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // Stagger children animations
      },
    },
  };
  