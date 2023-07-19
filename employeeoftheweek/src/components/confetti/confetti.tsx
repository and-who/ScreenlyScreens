import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./confetti.scss";

export const Confetti = (props :{confettiCharacters:string[]}) => {

  const {confettiCharacters=["diva-e"]} = props;

  const [confettiContainer, setConfettiContainer] = React.useState();
  const particlesInit = async (main) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };
  const particlesLoaded = (container) => {
    container.stop();
    if(!confettiContainer) {
      setConfettiContainer(container);
      setTimeout(() => {
        container.start();
      }, 10000)
    }
    
  };

  return (
    <div className="confetti">
    <Particles
          id="confetti-particles"
          init={particlesInit}
          loaded={particlesLoaded}
      options={{
        fpsLimit: 40,
        fullScreen: {
          enable: true,
          zIndex: -1
        },
        emitters: {
          position: {
            x: 50,
            y: 50
          },
          rate: {
            quantity: 8,
            delay: 0.25
          }
        },
        particles: {
          color: {
            value: ["#1831FF", "#EDF0FB", "#1831FF", "#EDF0FB", "#A7FF71", "#9C73F3"]
          },
          move: {
            decay: 0.05,
            direction: "top",
            enable: true,
            gravity: {
              enable: true,
              maxSpeed: 150
            },
            outModes: {
              top: "none",
              default: "destroy"
            },
            speed: { min: 25, max: 80 }
          },
          number: {
            value: 0
          },
          opacity: {
            value: 1
          },
          rotate: {
            value: {
              min: 0,
              max: 360
            },
            direction: "random",
            animation: {
              enable: true,
              speed: 30
            }
          },
          tilt: {
            direction: "random",
            enable: true,
            value: {
              min: 0,
              max: 360
            },
            animation: {
              enable: true,
              speed: 30
            }
          },
          size: {
            value: 9
          },
          roll: {
            darken: {
              enable: true,
              value: 25
            },
            enable: true,
            speed: {
              min: 5,
              max: 15
            }
          },
          wobble: {
            distance: 30,
            enable: true,
            speed: {
              min: -7,
              max: 7
            }
          },
          shape: {
            type: [
              "circle",
              "square",
              "character"],
            options: {
              polygon: [
                {
                  sides: 5
                },
                {
                  sides: 6
                }
              ],
              character: [
                {
                  fill: true,
                  font: "Verdana",
                  value: confettiCharacters,
                  weight: 800,
                  style: "",
                }
              ]
            }
          }
        }
      }}
    />
    </div>
  );
}
