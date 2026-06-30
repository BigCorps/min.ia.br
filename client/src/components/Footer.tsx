import { Sparkles } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 md:py-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">min.IA</span>
            </div>
            <p className="text-sm text-gray-400">
              Seu assistente pessoal inteligente, sem restrições.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white text-sm">Produto</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://min.ia.br" className="hover:text-white transition">
                  Landing Page
                </a>
              </li>
              <li>
                <a href="https://min.ia.br/app" className="hover:text-white transition">
                  Aplicativo
                </a>
              </li>
              <li>
                <a href="https://minhAi.com" className="hover:text-white transition">
                  minhAi
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white text-sm">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Termos de Serviço
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white text-sm">Comunidade</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800" />

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>&copy; {currentYear} min.IA. Todos os direitos reservados.</p>
          <p className="text-xs text-gray-500 mt-4 md:mt-0">
            Powered by <a href="https://minhAi.com" className="text-blue-400 hover:text-blue-300 transition">minhAi</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
