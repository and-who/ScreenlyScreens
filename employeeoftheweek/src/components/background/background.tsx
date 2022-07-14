import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./background.scss";

export const Background = () => {
  const [backgroundContainer, setBackgroundContainer] = React.useState();
  const particlesInit = async (main) => {

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };
  const particlesLoaded = (container) => {
    if(!backgroundContainer) {
      setBackgroundContainer(container);
      setTimeout(() => {
        container.stop();
      }, 4000)
    }
  };

  return (
    <div className="background">
    <Particles
      id="background-particles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        duration: 5000,
        fpsLimit: 60,
        interactivity: {
          events: {
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "down",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 4,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
    </div>
  );
}
