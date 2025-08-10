// // pages/cv.tsx
// export default function CV() {
//   // Put your CV PDF at /public/cv.pdf  => URL: /cv.pdf
//   return (
//     <section className="space-y-4">
//       <h1 className="text-2xl font-bold">Curriculum Vitae</h1>
//       <p className="text-gray-700">
//         You can view it below or <a className="underline" href="/cv.pdf" target="_blank" rel="noreferrer">download the PDF</a>.
//       </p>
//       <div className="border rounded-lg overflow-hidden h-[85vh]">
//         <iframe src="/cv.pdf" className="w-full h-full" title="CV PDF" />
//       </div>
//     </section>
//   );
// }

// pages/cv.tsx
export default function CV() {
  return (
    <section className="space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold tracking-wider uppercase text-gray-900">
        Curriculum Vitae
      </h1>

      {/* Description */}
      <p className="text-gray-800">
        You can view it below or{" "}
        <a
          className="text-[#1e3a8a] underline decoration-[#1e3a8a] underline-offset-4 hover:opacity-80"
          href="/cv.pdf"
          target="_blank"
          rel="noreferrer"
        >
          download the PDF
        </a>.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-3">
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-md bg-[#1e3a8a] text-white text-sm font-medium tracking-wide hover:scale-105 transition-transform"
        >
          View in New Tab
        </a>
        <a
          href="/cv.pdf"
          download
          className="px-4 py-2 rounded-md bg-[#1e3a8a] text-white text-sm font-medium tracking-wide hover:scale-105 transition-transform"
        >
          Download
        </a>
      </div>

      {/* Embedded PDF */}
      <div className="border border-gray-200 rounded-lg overflow-hidden h-[85vh]">
        <iframe src="/cv.pdf" className="w-full h-full" title="CV PDF" />
      </div>
    </section>
  );
}
