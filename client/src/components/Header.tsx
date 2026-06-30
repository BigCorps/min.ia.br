import { Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-bold text-gray-900">min.IA</span>
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-3">
          <a href="https://min.ia.br/login" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">
            Entrar
          </a>
          <a href="https://min.ia.br">
            <Button
              size="sm"
              className="bg-gradient-to-r from-blue-500 to-emerald-500 hover:opacity-90 text-white font-semibold group"
            >
              Começar Grátis
              <ArrowRight size={16} className="ml-1.5 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
