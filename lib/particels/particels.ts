const particels = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 1500,
      },
    },
    color: {
      value: "#83C9E1",
    },
    line_linked: {
      enable: true,
      opacity: 0.1,
      color: "#A6DBF7",
    },
    move: {
      direction: "none",
      speed: 0.2,
    },
    size: {
      value: 3,
    },
    opacity: {
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 1,
      },
    },
  },
  interactivity: {
    events: {
      onclick: {
        enable: true,
        mode: "push",
      },
      onhover: {
        enable: true,
        mode: "grab",
      },
    },
    modes: {
      push: {
        particles_nb: 1,
      },
    },
  },
  retina_detect: true,
};

export default particels;
