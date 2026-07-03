import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRef, useState } from 'react';

const APP_URL = 'https://app.min.ia.br';
const MINHAI_URL = 'https://minhai.app';

// Amostra real de funções por categoria — mostra concretamente o que o produto faz
const FUNCTION_PREVIEW = [
  { cat: 'Localização',   color: '#3B82F6', fns: ['Buscar Endereço', 'Consultar CEP', 'Traçar Rota'] },
  { cat: 'Agendamento',   color: '#10B981', fns: ['Marcar Evento', 'Ver Agenda', 'Cancelar Consulta'] },
  { cat: 'Consultas',     color: '#6366F1', fns: ['Dados de CNPJ', 'Consultar CPF', 'Consultar Placa'] },
  { cat: 'Arquivos',      color: '#F59E0B', fns: ['Editar Imagem', 'Converter Arquivo', 'Remover Fundo'] },
  { cat: 'Câmera',        color: '#EF4444', fns: ['Ler QR Code', 'Ler Código de Barras', 'Imagem em Texto'] },
  { cat: 'Utilitários',   color: '#8B5CF6', fns: ['Emitir Nota Fiscal', 'Lembrete de eEmédios', 'Criar Anotação'] },
];

// Carrossel de categorias — usado abaixo do hero como transição
const ALL_CATEGORIES = [
  'Conhecimento', 'Comercial', 'Financeiro', 'Informação',
  'Multimídia', 'Agendamento', 'Contato', 'Localização',
  'Consultas', 'Identificação', 'Arquivos', 'Utilitários', 'Câmera', 'Serviços',
];

function CategoryCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const duplicated = [...ALL_CATEGORIES, ...ALL_CATEGORIES, ...ALL_CATEGORIES];

  return (
    <div
      className="w-full overflow-hidden py-3"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        ref={trackRef}
        className="flex gap-2.5 w-max"
        style={{
          animation: 'cat-scroll 35s linear infinite',
          animationPlayState: paused ? 'paused' : 'running',
          willChange: 'transform',
        }}
      >
        {duplicated.map((cat, idx) => (
          <span
            key={idx}
            className="flex-shrink-0 px-4 py-1.5 rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-700 whitespace-nowrap hover:border-blue-300 hover:text-blue-700 transition-colors cursor-default"
          >
            {cat}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes cat-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-${(100 / 3).toFixed(3)}%); }
        }
      `}</style>
    </div>
  );
}

function FunctionGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {FUNCTION_PREVIEW.map((group) => (
        <div
          key={group.cat}
          className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm"
        >
          <p
            className="text-xs font-bold uppercase tracking-wider mb-2.5"
            style={{ color: group.color }}
          >
            {group.cat}
          </p>
          <ul className="space-y-1.5">
            {group.fns.map((fn) => (
              <li key={fn} className="flex items-center gap-2 text-sm text-gray-700">
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: group.color }}
                />
                {fn}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

const TRUST = [
  '20 créditos grátis para testar',
  'Sem cartão de crédito',
  'Funciona no celular e no computador',
];

export default function Hero() {
  return (
    <>
      {/* ── Hero principal ─────────────────────────────────────────── */}
      <section className="relative bg-white pt-6 pb-10 md:pt-8 md:pb-16 overflow-hidden">
        {/* Decoração de fundo — sutil, não dominante */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[480px] h-[480px] rounded-full bg-gradient-to-br from-blue-50 to-emerald-50 blur-3xl opacity-60" />
        </div>

        <div className="container relative z-10">
          {/* Mobile */}
          <div className="md:hidden flex flex-col gap-8 text-center items-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-700">
              Powered by minhAi
            </span>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-gray-900 leading-tight tracking-tight">
                A sua IA pessoal.{' '}
                <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
                  100 funções, uma conversa.
                </span>
              </h1>
              <p className="text-base text-gray-500 leading-relaxed max-w-sm mx-auto">
                Execute pagamentos, consultas, agendamentos, traduções, edição de arquivos e muito
                mais — diretamente pelo chat, sem abrir o dashboard.
              </p>
            </div>

            <div className="flex flex-col gap-2.5 w-full max-w-xs">
              <a href={`${APP_URL}/min`} className="w-full">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-500 to-emerald-500 hover:opacity-90 text-white font-semibold group shadow-md"
                >
                  Começar grátis
                  <ArrowRight size={17} className="ml-2 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </a>
              <a href={`${APP_URL}/min/login`} className="w-full">
                <Button size="lg" variant="outline" className="w-full border-gray-200 text-gray-700 font-semibold">
                  Já tenho conta
                </Button>
              </a>
            </div>

            <ul className="space-y-2">
              {TRUST.map((t) => (
                <li key={t} className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Check size={15} className="text-emerald-500 flex-shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop: 2 colunas */}
          <div className="hidden md:grid grid-cols-2 gap-14 items-start">
            {/* Esquerda */}
            <div className="space-y-8 pt-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-700">
                Powered by minhAi
              </span>

              <div className="space-y-5">
                <h1 className="text-[2.75rem] font-bold text-gray-900 leading-tight tracking-tight">
                  A sua IA pessoal.<br />
                  <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
                    100 funções, uma conversa.
                  </span>
                </h1>
                <p className="text-lg text-gray-500 leading-relaxed">
                  Execute pagamentos, consultas, agendamentos, traduções, edição de arquivos e
                  muito mais — diretamente pelo chat, sem abrir o dashboard completo.
                </p>
              </div>

              <div className="flex gap-3">
                <a href={`${APP_URL}/min`}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-emerald-500 hover:opacity-90 text-white font-semibold group shadow-md"
                  >
                    Começar grátis
                    <ArrowRight size={17} className="ml-2 group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </a>
                <a href={`${APP_URL}/min/login`}>
                  <Button size="lg" variant="outline" className="border-gray-200 text-gray-700 font-semibold">
                    Já tenho conta
                  </Button>
                </a>
              </div>

              <ul className="space-y-2.5">
                {TRUST.map((t) => (
                  <li key={t} className="flex items-center gap-2 text-sm text-gray-500">
                    <Check size={15} className="text-emerald-500 flex-shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>

              {/* Bridge para minhAi — sutil, sem competir com o CTA principal */}
              <div className="pt-2 border-t border-gray-100">
                <p className="text-sm text-gray-400">
                  Quer um assistente de IA para o seu negócio?{' '}
                  <a
                    href={MINHAI_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600 hover:underline"
                  >
                    Conheça a minhAi →
                  </a>
                </p>
              </div>
            </div>

            {/* Direita: grade de funções reais */}
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                O que você pode fazer
              </p>
              <FunctionGrid />
              <p className="text-xs text-gray-400 mt-4 text-right">
                + 80 outras funções disponíveis
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Carrossel de categorias — transição visual ─────────────── */}
      <div className="border-y border-gray-100 bg-gray-50/50 py-1">
        <CategoryCarousel />
      </div>
    </>
  );
}