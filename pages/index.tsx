// // pages/index.tsx
// import Link from "next/link";
// import BackgroundParticles from "../components/BackgroundParticles";

// const socials = {
//   linkedin: "https://www.linkedin.com/in/sarapasquino/",
//   github: "https://github.com/spasquino",
//   email: "mailto:pasquinosara01@gmail.com?subject=Hello%20Sara",
// };

// export default function Home() {
//   return (
//     // min-h-screen + flex centers the content vertically and horizontally
//     <section className="min-h-[80vh] flex items-center justify-center text-center">
//        <BackgroundParticles /> 
//       <div>
//         <p className="text-sm md:text-lg uppercase tracking-widest text-indigo-600">Hi there, I am</p>
//         <h1 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight">Sara Pasquino</h1>
//         <p className="mt-4 text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto">
//           A creative data scientist, passionate about innovation and social impact
//         </p>

//         {/* Primary actions */}
//         <div className="mt-8 flex items-center justify-center gap-3">
//           <Link href="/projects" className="px-5 py-2.5 rounded-md bg-black text-white">
//             View Projects
//           </Link>
//           <Link href="/about" className="px-5 py-2.5 rounded-md border bg-white/80 backdrop-blur">
//             About Me
//           </Link>
//           <Link href="/cv" className="px-5 py-2.5 rounded-md border bg-white/80 backdrop-blur">
//             CV
//           </Link>
//         </div>

//         {/* Social icons */}
//         <div className="mt-8 flex items-center justify-center gap-5">
//           {/* LinkedIn */}
//           <a
//             href={socials.linkedin}
//             target="_blank"
//             rel="noreferrer"
//             aria-label="LinkedIn"
//             className="inline-flex items-center justify-center rounded-md border bg-white/80 backdrop-blur px-3 py-2 hover:bg-white"
//           >
//             <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-gray-700">
//               <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5.001zM3 9h4v12H3zM14.5 9c-2.21 0-3.5 1.204-4 2.049V9H7v12h3.5v-6.5c0-1.724 1.14-2.75 2.5-2.75s2.5 1.026 2.5 2.75V21H19v-6.965C19 10.993 17.21 9 14.5 9z"/>
//             </svg>
//           </a>
//           {/* GitHub */}
//           <a
//             href={socials.github}
//             target="_blank"
//             rel="noreferrer"
//             aria-label="GitHub"
//             className="inline-flex items-center justify-center rounded-md border bg-white/80 backdrop-blur px-3 py-2 hover:bg-white"
//           >
//             <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-gray-700">
//               <path fillRule="evenodd" d="M12 2C6.477 2 2 6.59 2 12.253c0 4.53 2.865 8.369 6.84 9.725.5.096.682-.223.682-.496 0-.245-.01-1.037-.015-1.88-2.782.616-3.37-1.213-3.37-1.213-.455-1.176-1.11-1.49-1.11-1.49-.907-.635.07-.623.07-.623 1.003.073 1.53 1.05 1.53 1.05.892 1.571 2.342 1.118 2.913.854.092-.666.35-1.118.636-1.375-2.221-.26-4.555-1.143-4.555-5.087 0-1.124.39-2.043 1.03-2.763-.104-.262-.447-1.313.098-2.736 0 0 .84-.275 2.75 1.055A9.39 9.39 0 0 1 12 7.8a9.39 9.39 0 0 1 2.5.342c1.91-1.33 2.75-1.055 2.75-1.055.545 1.423.202 2.474.099 2.736.64.72 1.03 1.639 1.03 2.763 0 3.954-2.336 4.824-4.562 5.078.359.32.678.948.678 1.912 0 1.38-.013 2.494-.013 2.834 0 .276.18.598.688.496C19.14 20.62 22 16.78 22 12.253 22 6.59 17.523 2 12 2Z" clipRule="evenodd"/>
//             </svg>
//           </a>
//           {/* Email */}
//           <a
//             href={socials.email}
//             aria-label="Email"
//             className="inline-flex items-center justify-center rounded-md border bg-white/80 backdrop-blur px-3 py-2 hover:bg-white"
//           >
//             <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-gray-700">
//               <path d="M20 4H4c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"/>
//             </svg>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }


// pages/index.tsx
import Link from "next/link";
import BackgroundParticles from "../components/BackgroundParticles";

const socials = {
  linkedin: "https://www.linkedin.com/in/sarapasquino/",
  github: "https://github.com/spasquino",
  email: "mailto:pasquinosara01@gmail.com?subject=Hello%20Sara",
};

export default function Home() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center text-center relative">
      <BackgroundParticles /> 
      <div className="relative z-10">
        <p className="text-sm md:text-lg uppercase tracking-wider font-medium text-[#1e3a8a]">
          Hi there, I am
        </p>
        <h1 className="mt-3 text-4xl md:text-6xl font-bold tracking-wider uppercase text-gray-900">
          Sara Pasquino
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-800 max-w-2xl mx-auto">
          A creative data scientist, passionate about innovation and social impact
        </p>

        {/* Primary actions */}
<div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
  <Link
    href="/projects"
    className="px-5 py-2.5 rounded bg-[#1e3a8a] text-white hover:bg-[#162a65] 
               transition-all duration-200 transform hover:scale-105"
  >
    View Projects
  </Link>
  <Link
    href="/about"
    className="px-5 py-2.5 rounded bg-[#e6f0fa] text-gray-800 hover:bg-[#d9e8f5] 
               transition-all duration-200 transform hover:scale-105"
  >
    About Me
  </Link>
  <Link
    href="/cv"
    className="px-5 py-2.5 rounded bg-[#e6f0fa] text-gray-800 hover:bg-[#d9e8f5] 
               transition-all duration-200 transform hover:scale-105"
  >
    CV
  </Link>
</div>


        {/* Social icons */}
        <div className="mt-8 flex items-center justify-center gap-4">
          {[
            { href: socials.linkedin, label: "LinkedIn", icon: (
              <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5.001zM3 9h4v12H3zM14.5 9c-2.21 0-3.5 1.204-4 2.049V9H7v12h3.5v-6.5c0-1.724 1.14-2.75 2.5-2.75s2.5 1.026 2.5 2.75V21H19v-6.965C19 10.993 17.21 9 14.5 9z"/>
            )},
            { href: socials.github, label: "GitHub", icon: (
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.59 2 12.253c0 4.53 2.865 8.369 6.84 9.725.5.096.682-.223.682-.496 0-.245-.01-1.037-.015-1.88-2.782.616-3.37-1.213-3.37-1.213-.455-1.176-1.11-1.49-1.11-1.49-.907-.635.07-.623.07-.623 1.003.073 1.53 1.05 1.53 1.05.892 1.571 2.342 1.118 2.913.854.092-.666.35-1.118.636-1.375-2.221-.26-4.555-1.143-4.555-5.087 0-1.124.39-2.043 1.03-2.763-.104-.262-.447-1.313.098-2.736 0 0 .84-.275 2.75 1.055A9.39 9.39 0 0 1 12 7.8a9.39 9.39 0 0 1 2.5.342c1.91-1.33 2.75-1.055 2.75-1.055.545 1.423.202 2.474.099 2.736.64.72 1.03 1.639 1.03 2.763 0 3.954-2.336 4.824-4.562 5.078.359.32.678.948.678 1.912 0 1.38-.013 2.494-.013 2.834 0 .276.18.598.688.496C19.14 20.62 22 16.78 22 12.253 22 6.59 17.523 2 12 2Z" clipRule="evenodd"/>
            )},
            { href: socials.email, label: "Email", icon: (
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"/>
            )},
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="inline-flex items-center justify-center rounded px-3 py-2 bg-[#e6f0fa] text-gray-800 hover:bg-[#d9e8f5] transition-colors"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                {s.icon}
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
