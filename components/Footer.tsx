// components/Footer.tsx
export default function Footer() {
    return (
      <footer className="border-t mt-16">
        <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-gray-500">
          © {new Date().getFullYear()} Sara Pasquino • Built with Next.js & Tailwind
        </div>
      </footer>
    );
  }
  