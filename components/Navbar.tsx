// import Link from "next/link";
// import { useRouter } from "next/router";

// const links = [
//   { href: "/", label: "Home" },
//   { href: "/about", label: "About" },
//   { href: "/projects", label: "Projects" },
//   { href: "/cv", label: "CV" },
//   { href: "/contact", label: "Contact" },
// ];

// export default function Navbar() {
//   const { pathname } = useRouter();
//   return (
//     <header className="sticky top-0 z-20 border-b bg-white/70 backdrop-blur">
//       <nav className="mx-auto max-w-6xl px-8 py-4 flex items-center justify-between">
//         <Link href="/" className="font-semibold text-xl tracking-tight">
//           Sara Pasquino
//         </Link>
//         <ul className="flex items-center gap-6 text-base text-gray-700">
//           {links.map((l) => {
//             const active = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
//             return (
//               <li key={l.href}>
//                 <Link
//                   href={l.href}
//                   className={`relative px-1 py-1 hover:text-black transition ${
//                     active ? "text-black" : ""
//                   }`}
//                 >
//                   {l.label}
//                   <span
//                     className={`absolute left-0 -bottom-1 h-[2px] w-full rounded bg-indigo-500 transition ${
//                       active ? "opacity-100" : "opacity-0"
//                     }`}
//                   />
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>
//       </nav>
//     </header>
//   );
// }

import Link from "next/link";
import { useRouter } from "next/router";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { pathname } = useRouter();
  return (
    <header className="sticky top-0 z-20 border-b bg-white/70 backdrop-blur">
      <nav className="mx-auto max-w-6xl px-8 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-bold text-xl tracking-wider uppercase text-gray-900 hover:scale-105 transition-transform"
        >
          Sara Pasquino
        </Link>
        <ul className="flex items-center gap-6 text-sm tracking-widest uppercase text-gray-700">
          {links.map((l) => {
            const active =
              pathname === l.href ||
              (l.href !== "/" && pathname.startsWith(l.href));
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`relative px-1 py-1 transition-colors duration-200 hover:text-[#1e3a8a] ${
                    active ? "text-[#1e3a8a] font-semibold" : ""
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] w-full rounded bg-[#1e3a8a] transition-opacity duration-200 ${
                      active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
