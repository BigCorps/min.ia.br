import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const APP_URL = 'https://app.min.ia.br';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="container flex items-center justify-between h-16">

        {/* Marca */}
        <a href="/" className="flex items-center gap-2.5 group" aria-label="Min.IA – Início">
          <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0">
            <img
              src="/minia/logo.png"
              alt="Min.IA"
              className="w-full h-full object-cover"
              width={36}
              height={36}
            />
          </div>
          <div className="leading-tight">
            <span className="block text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              Min.IA
            </span>
            <span className="block text-[10px] text-gray-400 font-normal">
              by minhAi
            </span>
          </div>
        </a>

        {/* Ações */}
        <div className="flex items-center gap-3">
          <a
            href={`${APP_URL}/min/login`}
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors hidden sm:block"
          >
            Entrar
          </a>
          <a href={`${APP_URL}/min`}>
            <Button
              size="sm"
              className="bg-gradient-to-r from-blue-500 to-emerald-500 hover:opacity-90 text-white font-semibold group shadow-sm"
            >
              Começar grátis
              <ArrowRight size={15} className="ml-1.5 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}