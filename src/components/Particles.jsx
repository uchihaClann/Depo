import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleDesign = () => {
  const [init, setInit] = useState(false);
  const [particlesLoadedStatus, setParticlesLoadedStatus] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = () => {
    setParticlesLoadedStatus(true); // Update state when particles are loaded
  };

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
          options={{
            background: {
              // color: {
              //   value: "#f8fafc", // Optional background color
              // },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
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
                value: [
                  "#ff0000",
                  "#00ff00",
                  "#0000ff",
                  "#ff00ff",
                  "#00ffff",
                  "#ffff00",
                ], // Random colors
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 5,
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
                type: ["circle", "triangle", "square", "polygon", "star"], // Random shapes
              },
              size: {
                value: { min: 1, max: 7 },
              },
            },
            detectRetina: true,
          }}
        />
      )}
      {particlesLoadedStatus && <p>Particles Loaded!</p>}{" "}
      {/* Display when particles are loaded */}
    </>
  );
};

export default ParticleDesign;
