import { ArrowRight, Sparkles, Zap, Brain, Shield, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';

const CATEGORIES = [
  { name: 'Conhecimento', icon: Brain },
  { name: 'Comercial', icon: Zap },
  { name: 'Financeiro', icon: Shield },
  { name: 'Informação', icon: Rocket },
  { name: 'Multimídia', icon: Sparkles },
  { name: 'Agendamento', icon: Brain },
  { name: 'Contato', icon: Zap },
  { name: 'Localização', icon: Shield },
];

function CategoryCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const animate = () => {
      if (!isPaused) {
        track.style.animation = `carousel-scroll 40s linear infinite`;
      }
    };

    animate();
  }, [isPaused]);

  return (
    <div
      className="w-full overflow-hidden py-4 -mx-4 px-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        ref={trackRef}
        className="flex gap-3 w-max"
        style={{
          animation: `carousel-scroll 40s linear infinite`,
          animationPlayState: isPaused ? 'paused' : 'running',
          willChange: 'transform',
        }}
      >
        {Array.from({ length: 4 }).map((_, copyIdx) =>
          CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={`${copyIdx}-${idx}`}
                className="flex-shrink-0 px-4 py-2 rounded-full border border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50 transition-all cursor-pointer group active:scale-95"
              >
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-blue-500 group-hover:text-emerald-500 transition-colors" />
                  <span className="text-sm font-medium text-gray-700 whitespace-nowrap">{cat.name}</span>
                </div>
              </div>
            );
          })
        )}
      </div>

      <style>{`
        @keyframes carousel-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${(100 / 4).toFixed(2)}%); }
        }
      `}</style>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-20 md:pt-40 md:pb-32">
      {/* Background gradient decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-emerald-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-400/10 to-emerald-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col items-center text-center gap-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-200">
            <Sparkles size={16} className="text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">powered by minhAi</span>
          </div>

          {/* Title */}
          <div className="space-y-3">
            <h1 className="text-4xl font-bold text-gray-900 leading-tight">
              Seu assistente pessoal,{' '}
              <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
                sem restrições
              </span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Acesso a todas as funções — até as ocultas para seus clientes. Execute qualquer tarefa em segundos.
            </p>
          </div>

          {/* Carousel */}
          <CategoryCarousel />

          {/* CTAs */}
          <div className="flex flex-col gap-3 w-full">
            <a href="https://min.ia.br/">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-emerald-500 hover:opacity-90 text-white font-semibold group w-full"
              >
                Começar Grátis
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="https://min.ia.br/login">
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold w-full"
              >
                Entrar
              </Button>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="space-y-3 pt-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-green-700 font-bold text-xs">✓</span>
              </div>
              Sem cartão de crédito necessário
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-green-700 font-bold text-xs">✓</span>
              </div>
              20 créditos grátis para começar
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-green-700 font-bold text-xs">✓</span>
              </div>
              Acesso imediato a todas as funções
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-200 w-fit">
              <Sparkles size={16} className="text-blue-600" />
              <span className="text-sm font-semibold text-blue-700">powered by minhAi</span>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                Seu assistente pessoal,{' '}
                <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
                  sem restrições
                </span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Acesso a todas as funções — até as ocultas para seus clientes. Execute qualquer tarefa em segundos. Gerenciador completo dos seus assistentes de atendimento.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex gap-4 pt-4">
              <a href="https://min.ia.br/app">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-emerald-500 hover:opacity-90 text-white font-semibold group"
                >
                  Começar Grátis
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="https://min.ia.br/login">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold"
                >
                  Entrar
                </Button>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-col gap-3 pt-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-700 font-bold text-xs">✓</span>
                </div>
                Sem cartão de crédito necessário
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-700 font-bold text-xs">✓</span>
                </div>
                20 créditos grátis para começar
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-700 font-bold text-xs">✓</span>
                </div>
                Acesso imediato a todas as funções
              </div>
            </div>
          </div>

          {/* Right: Carousel */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md">
              <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 shadow-lg">
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-gray-900">Categorias de Funções</h3>
                  <CategoryCarousel />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
