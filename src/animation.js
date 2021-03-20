export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    tranition: {
      duration: 0.75,
    },
  },
  exit: {
    opacity: 0.1,
    transition: {
      duration: 0.1,
    },
  },
};

export const Popup = {
  hidden: {
    scale: 0.5,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    tranition: {
      duration: 0.75,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.75,
    },
  },
};
