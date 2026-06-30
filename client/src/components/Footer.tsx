/**
 * Footer Component
 * Modernismo Técnico Elegante - Simplified footer
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-cyan-600 py-12 border-t border-gray-100">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-center">
          <p className="text-sm font-medium">
            © {currentYear} min.IA.br |
          </p>
          <span className="hidden md:inline text-gray-300">|</span>
          <p className="text-sm font-medium">
            Powered by{' '}
            <a href="https://minhai.app" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#00D9FF', fontWeight: 600 }}>
              minhAi.app
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
