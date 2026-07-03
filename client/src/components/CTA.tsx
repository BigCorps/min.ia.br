import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const APP_URL    = 'https://app.min.ia.br';
const MINHAI_URL = 'https://minhai.app';

export default function CTA() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="container">

        {/* Título da seção */}
        <div className="text-center mb-12 max-w-lg mx-auto space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
            Comece agora
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Por onde você quer começar?
          </h2>
          <p className="text-gray-500 text-base">
            Mesma conta, mesmo saldo de créditos — você escolhe a porta de entrada.
          </p>
        </div>

        {/* Dois caminhos lado a lado */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">

          {/* ── Caminho 1: já tem conta ─────────────────────────────── */}
          <div className="rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 p-8 flex flex-col gap-6 shadow-lg shadow-blue-100">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-blue-100 mb-3">
                Já tenho conta minhAi
              </p>
              <h3 className="text-2xl font-bold text-white leading-snug">
                Abrir a min.IA
              </h3>
              <p className="text-blue-100 text-sm mt-2 leading-relaxed">
                Entre com sua conta e execute qualquer função — PIX, agenda, consultas, câmera e muito mais.
              </p>
            </div>

            <div className="flex flex-col gap-3 mt-auto">
              <a href={`${APP_URL}/min`}>
                <Button
                  size="lg"
                  className="w-full bg-white text-blue-600 hover:bg-blue-50 font-semibold group shadow-sm"
                >
                  Entrar no min.IA
                  <ArrowRight size={17} className="ml-2 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </a>
              <a
                href={`${APP_URL}/min/login`}
                className="text-center text-sm text-blue-100 hover:text-white transition-colors"
              >
                Fazer login →
              </a>
            </div>
          </div>

          {/* ── Caminho 2: criar conta minhAi ───────────────────────── */}
          <div className="rounded-2xl bg-white border-2 border-emerald-100 p-8 flex flex-col gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-3">
                Ainda não tenho conta
              </p>
              <h3 className="text-2xl font-bold text-gray-900 leading-snug">
                Criar conta na minhAi
              </h3>
              <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                Crie seu assistente de IA gratuito. Você ganha 20 créditos para testar e já tem acesso ao Min.IA no mesmo login.
              </p>
            </div>

            {/* Diferencial dos 20 créditos */}
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-emerald-50 border border-emerald-100">
              <span className="text-emerald-500 text-base flex-shrink-0 mt-0.5">✦</span>
              <p className="text-sm text-emerald-800 leading-relaxed">
                <strong>20 créditos grátis</strong> ao criar a conta — sem cartão, sem prazo para usar.
              </p>
            </div>

            <div className="flex flex-col gap-3 mt-auto">
              <a href={MINHAI_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-500 to-emerald-500 hover:opacity-90 text-white font-semibold group shadow-sm"
                >
                  Criar conta grátis na minhAi
                  <ArrowRight size={17} className="ml-2 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </a>
              <p className="text-center text-xs text-gray-400">
                Após criar, acesse{' '}
                <a href={`${APP_URL}/min`} className="font-semibold text-blue-500 hover:underline">
                  app.min.ia.br
                </a>{' '}
                com o mesmo login.
              </p>
            </div>
          </div>

        </div>

        {/* Rodapé da seção */}
        <p className="text-center text-xs text-gray-400 mt-10 max-w-sm mx-auto leading-relaxed">
          O Min.IA usa o mesmo saldo de créditos da minhAi. Créditos comprados em um funcionam no outro.
        </p>

      </div>
    </section>
  );
}