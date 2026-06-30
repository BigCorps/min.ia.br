import { Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center">
            <img
              src="/logo.png"
              alt="min.IA"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-display font-bold text-lg text-gray-900 group-hover:text-cyan-600 transition-colors">
            min.IA
          </span>
        </a>

        {/* CTAs */}
        <div className="flex items-center gap-3">
          <a href="https://app.min.ia.br/login" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">
            Entrar
          </a>
          <a href="https://app.min.ia.br">
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
