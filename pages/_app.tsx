// // pages/_app.tsx
// import type { AppProps } from "next/app";
// import "../styles/globals.css";
// import { Inter } from "next/font/google";
// import Image from "next/image";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const inter = Inter({ subsets: ["latin"] });

// export default function MyApp({ Component, pageProps }: AppProps) {
//   // pages/_app.tsx (inside the default export)
// return (
//   <div className={`${inter.className} min-h-screen text-gray-900`}>
//     {/* Site-wide full-bleed background */}
//     {/* {<div className="fixed inset-0 z-0"> */}
//       {/* <Image src="/bg/hero.png" alt="" fill priority className="object-cover" /> */}
//       {/* tweak overlay strength if needed */}
//       {/* <div className="absolute inset-0 bg-white/60" /> */}
//     {/* </div>} */}

//     {/* Everything else sits above the background */}
//     <div className="relative z-10">
//       <Navbar />
//       <main className="py-12">
//         <div className="mx-auto max-w-5xl px-6">
//           <Component {...pageProps} />
//         </div>
//       </main>
//       <Footer />
//     </div>
//   </div>
// );

// }

// pages/_app.tsx
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();                         // ✅ hooks go inside component
  const isProjects = router.pathname.startsWith("/projects");

  return (
    <div className={`${inter.className} min-h-screen text-gray-900`}>
      <div className="relative z-10">
        <Navbar />
        <main className="py-12">
          <div className={`mx-auto px-6 ${isProjects ? "max-w-7xl md:px-10" : "max-w-5xl"}`}>
            <Component {...pageProps} />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
