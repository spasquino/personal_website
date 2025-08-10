import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export default function BackgroundParticles() {
  const [ready, setReady] = useState(false);

  // 1) Initialize the engine once (loads the slim preset)
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

    const useGradient = true; // toggle: true = multicolor, false = single color
    const baseColor = "#1E3A8A"; // dark brown
    const lightColor = "#8BC7E3"; // light brown

  // 2) Your “network + hover repulse” design
  const options = useMemo<ISourceOptions>(() => ({
    fpsLimit: 60,
    detectRetina: true,
    background: { color: "transparent" },
    particles: {
      number: { value: 200, density: { enable: true, area: 900 } }, zIndex: { value: { min: 0, max: 1 } },
    //   color: { value: "#111827" },             // node color (near Tailwind gray-900)
    color: useGradient
      ? { value: [baseColor, lightColor] } // array = random pick per node
      : { value: "#111827" },  
      // opacity: { value: 0.7 },
      // size: { value: { min: 1, max: 6 } },
      opacity: {
        value: { min: 0.3, max: 0.7 },
        animation: { enable: true, speed: 0.4, minimumValue: 0.3, sync: false }
      },
      size: {
        value: { min: 1, max: 4 },
        animation: { enable: true, speed: 2, minimumValue: 1, sync: false }
      },
      shape: { type: "circle" },
      // links: {
      //   enable: true,
      //   color: "#1E3A8A",
      //   // color: useGradient
      //   // ? { value: [baseColor, lightColor] }
      //   // : "#111827",
      //   opacity: 0.5,
      //   distance: 200,
      //   width: 1
      // },
      links: {
        enable: true,
        color: { value: [baseColor, lightColor] },
        opacity: 0.4,
        distance: 200,
        width: 1
      },
      
      // move: {
      //   enable: true,
      //   speed: 0.6,
      //   direction: "none",
      //   outModes: { default: "out" },
      //   random: false,
      //   straight: false
      // }
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
        onHover: { enable: true, mode: "repulse" }, // “bubble away” effect
        onClick: { enable: true, mode: "push" }
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 120, duration: 0.4 }
      }
    },
    // fewer particles on small screens
    responsive: [
      { maxWidth: 768, options: { particles: { number: { value: 100 } } } }
    ]
  }), []);

  if (!ready) return null;

  // Full‑viewport canvas sitting behind your content
  return (
    <Particles
      id="tsparticles"
      className="absolute top-0 left-0 -z-10"
      options={options}
    />
  );
}

