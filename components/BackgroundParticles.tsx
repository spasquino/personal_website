import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export default function BackgroundParticles() {
  const [ready, setReady] = useState(false);
  const [options, setOptions] = useState<ISourceOptions>();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  useEffect(() => {
    if (!ready) return;

    const useGradient = true;
    const baseColor = "#1E3A8A";
    const lightColor = "#8DC7E3";

    // Get screen width at runtime (so it doesn't glitch on reload)
    const isMobile = window.innerWidth <= 768;

    setOptions({
      fpsLimit: 60,
      detectRetina: true,
      background: { color: "transparent" },
      particles: {
        number: { value: isMobile ? 100 : 200},
        zIndex: { value: { min: 0, max: 1 } },
        color: useGradient
          ? { value: [baseColor, lightColor] }
          : { value: "#111827" },
        opacity: {
          value: { min: 0.4, max: 0.7 },
          animation: { enable: true, speed: 0.4, sync: false }
        },
        size: {
          value: { min: 1, max: 4 },
          animation: { enable: true, speed: 2, sync: false }
        },
        shape: { type: "circle" },
        links: {
          enable: true,
          color: { value: [baseColor, lightColor] },
          opacity: 0.5,
          distance: 200,
          width: 1
        },
        move: {
          enable: true,
          speed: 0.3,
          direction: "none",
          outModes: { default: "out" },
          random: true,
          straight: false
        }
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
          onClick: { enable: true, mode: "push" }
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 70, duration: 0.4 }
        }
      }
    });
  }, [ready]);

  if (!ready || !options) return null;

  return (
    <Particles
    key={ready ? "ready" : "loading"}
      id="tsparticles"
      className="absolute top-0 left-0 -z-10"
      options={options}
    />
  );
}
