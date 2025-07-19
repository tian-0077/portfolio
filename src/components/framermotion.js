export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        delay: delay,
        type: "tween",
        ease: [0.25, 0.25, 0.25, 0.75],
        duration: 1.5,
      },
    },
  };
};


