/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Amation = () => {
  const [init, setInit] = useState<boolean>(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Типти өзгөртүү, функцияны асинхрондуу кылып кайтаруу
  const particlesLoaded = async (container: any): Promise<void> => {
    console.log(container);
  };

  return (
    <>
      {init && (
        <div>
          <Particles
            particlesLoaded={particlesLoaded} // Функцияны асинхрондуу түрдө бердик
            options={{
              fpsLimit: 60,
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
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 100,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#ffffff",
                },
                links: {
                  color: "#ffffff",
                  distance: 110,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                  // Сызыктардын санын көбөйтүү
                  quantity: 15, // Мисалы, сызыктардын санын көбөйттү
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 1.5,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                  },
                  // Аз бөлүкчөлөрдү көбөйтүү
                  value: 200, // Мисалы, бөлүкчөлөрдүн санын көбөйттү
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 1, max: 3 },
                },
              },
              detectRetina: true,
            }}
          />
        </div>
      )}
    </>
  );
};

export default Amation;
