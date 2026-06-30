import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTA() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container">
        <div className="relative rounded-2xl overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-emerald-600" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full blur-3xl" />
          </div>
          
          {/* Content */}
          <div className="relative z-10 px-6 md:px-12 py-16 md:py-24 text-center">
            <div className="space-y-6 max-w-2xl mx-auto">
              {/* Icon */}
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
            <img
              src="/arte.png"
              alt="ArteFinal"
              className="w-full h-full object-contain"
            />
          </div>
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Pronto para assumir o controle?
              </h2>

              {/* Description */}
              <p className="text-lg text-white/90 leading-relaxed">
                Ganhe 20 créditos grátis e comece a usar todas as funções do min.IA sem restrições. Sem cartão de crédito necessário.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a href="https://min.ia.br/app">
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-gray-100 font-semibold group w-full sm:w-auto"
                  >
                    Começar Grátis
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
                <a href="https://min.ia.br/login">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 font-semibold w-full sm:w-auto"
                  >
                    Entrar na Conta
                  </Button>
                </a>
              </div>

              {/* Subtext */}
              <p className="text-sm text-white/70 pt-2">
                Sem compromisso. Cancele a qualquer momento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
