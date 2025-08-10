// // pages/contact.tsx
// const socials = {
//   linkedin: "https://www.linkedin.com/in/sarapasquino/",
//   github: "https://github.com/spasquino",
//   email: "mailto:pasquinosara01@gmail.com?subject=Hello%20Sara",
// };

// export default function Contact() {
//     return (
//       <section className="space-y-4">
//         <h1 className="text-2xl font-bold">Contact</h1>
//         <p className="text-gray-700">
//           The best way to reach me is by email or LinkedIn.
//         </p>
//         <ul className="space-y-2">
//           <li>
//             Email: <a className="underline" href="mailto:pasquinosara01@gmail.com">pasquinosara01@example.com</a>
//           </li>
//           <li>
//             LinkedIn: <a className="underline" href = {socials.linkedin} target="_blank" rel="noopener noreferrer" > {socials.linkedin.replace(/^https?:\/\//, "")} </a>
//           </li>
//           <li>
//             GitHub: <a className="underline" href="https://github.com/spasquino" target="_blank" rel="noreferrer">github.com/spasquino</a>
//           </li>
//         </ul>
//       </section>
//     );
//   }
  

// pages/contact.tsx
const socials = {
  linkedin: "https://www.linkedin.com/in/sarapasquino/",
  github: "https://github.com/spasquino",
  email: "mailto:pasquinosara01@gmail.com?subject=Hello%20Sara",
};

export default function Contact() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold tracking-wider uppercase text-gray-900">
        Contact
      </h1>
      <p className="text-base text-gray-800">
        The best way to reach me is by email or LinkedIn.
      </p>
      <ul className="space-y-3">
        <li className="flex items-center gap-2">
          <span className="font-medium text-gray-900">Email:</span>
          <a
            className="px-3 py-1 rounded bg-[#e6f0fa] text-gray-800 hover:bg-[#d9e8f5] transition-colors"
            href={socials.email}
          >
            pasquinosara01@gmail.com
          </a>
        </li>
        <li className="flex items-center gap-2">
          <span className="font-medium text-gray-900">LinkedIn:</span>
          <a
            className="px-3 py-1 rounded bg-[#e6f0fa] text-gray-800 hover:bg-[#d9e8f5] transition-colors"
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            {socials.linkedin.replace(/^https?:\/\//, "").replace(/\/$/, "")}
          </a>
        </li>
        <li className="flex items-center gap-2">
          <span className="font-medium text-gray-900">GitHub:</span>
          <a
            className="px-3 py-1 rounded bg-[#e6f0fa] text-gray-800 hover:bg-[#d9e8f5] transition-colors"
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/spasquino
          </a>
        </li>
      </ul>
    </section>
  );
}
