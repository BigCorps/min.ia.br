import { MessageSquare, SlidersHorizontal, Zap, Building2, User } from 'lucide-react';

const MINHAI_URL = 'https://minhai.app';
const APP_URL    = 'https://app.min.ia.br';

// ── Passos de como funciona ───────────────────────────────────────────────
const STEPS = [
  {
    num: '01',
    icon: User,
    title: 'Crie sua conta minhAi',
    desc: 'Uma única conta dá acesso ao Min.IA e à plataforma completa para o seu negócio. Gratuito para começar — sem cartão.',
    color: '#3B82F6',
  },
  {
    num: '02',
    icon: SlidersHorizontal,
    title: 'Escolha o assistente',
    desc: 'Se você tiver mais de um assistente configurado na minhAi, selecione qual quer usar. O Min.IA carrega as funções e o contexto dele.',
    color: '#6366F1',
  },
  {
    num: '03',
    icon: MessageSquare,
    title: 'Fale o que precisa',
    desc: 'Toque numa categoria do carrossel ou digite diretamente. O assistente abre a função, pede só o que falta e executa.',
    color: '#10B981',
  },
];

// ── Comparativo Min.IA vs minhAi ──────────────────────────────────────────
const MINIA_POINTS = [
  'Interface pessoal por chat',
  'Acesso às suas +100 funções',
  'Executa em segundos, sem menus',
  'Mobile-first, funciona no browser',
  'Ideal para uso rápido do dono',
];

const MINHAI_POINTS = [
  'Assistente configurado para o seu negócio',
  'Atende clientes no WhatsApp, Instagram e Totem',
  'Personalidade, nome e funções que você escolhe',
  'Pagamentos PIX, NFC e TEF integrados',
  'Dashboard completo com relatórios e integrações',
];

// ── Casos de uso reais ────────────────────────────────────────────────────
const USE_CASES = [
  {
    emoji: '💳',
    title: 'Cobrar no PIX em segundos',
    desc: 'Toque em "Gerar PIX", informe o valor. QR Code pronto para compartilhar.',
  },
  {
    emoji: '📅',
    title: 'Checar a agenda do dia',
    desc: 'Toque em "Ver Agenda". O Google Calendar do assistente aparece no chat.',
  },
  {
    emoji: '🔍',
    title: 'Consultar um CNPJ ou CPF',
    desc: 'Digite o número ou toque em "Dados CNPJ". Resultado da Receita Federal na hora.',
  },
  {
    emoji: '📷',
    title: 'Ler um QR Code ou código de barras',
    desc: 'Toque em "Ler QR Code". A câmera abre. Aponte e pronto.',
  },
  {
    emoji: '🌐',
    title: 'Traduzir um texto',
    desc: 'Toque em "Traduzir Texto", cole o conteúdo, escolha o idioma.',
  },
  {
    emoji: '🗺️',
    title: 'Traçar rota até o cliente',
    desc: 'Toque em "Traçar Rota", informe o destino. Abre direto no Maps.',
  },
];

export default function Features() {
  return (
    <>
      {/* ── Seção 1: Como funciona ──────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="text-center mb-14 max-w-xl mx-auto space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Como funciona
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Três passos para começar
            </h2>
            <p className="text-gray-500 text-base">
              Não tem configuração complexa. Você cria a conta, abre o Min.IA e já pode usar qualquer função.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="relative flex flex-col gap-4 p-6 rounded-2xl border border-gray-100 bg-gray-50/50">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-black" style={{ color: step.color, opacity: 0.15 }}>
                      {step.num}
                    </span>
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${step.color}18` }}
                    >
                      <Icon size={18} style={{ color: step.color }} />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">{step.title}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Seção 2: Min.IA vs minhAi ───────────────────────────────── */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container">
          <div className="text-center mb-14 max-w-xl mx-auto space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">
              Entenda a diferença
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Min.IA é pra você.<br />
              minhAi é pro seu negócio.
            </h2>
            <p className="text-gray-500 text-base">
              Os dois andam juntos — mesma conta, mesmo saldo de créditos. Cada um tem um papel diferente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {/* Card Min.IA */}
            <div className="rounded-2xl border-2 border-blue-100 bg-white p-7 flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <User size={20} className="text-blue-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Min.IA</p>
                  <p className="text-xs text-blue-600 font-semibold">Para o dono</p>
                </div>
              </div>
              <ul className="space-y-2.5">
                {MINIA_POINTS.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 mt-1.5" />
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href={`${APP_URL}/min`}
                className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:underline"
              >
                Abrir Min.IA →
              </a>
            </div>

            {/* Card minhAi */}
            <div className="rounded-2xl border-2 border-emerald-100 bg-white p-7 flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                  <Building2 size={20} className="text-emerald-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">minhAi</p>
                  <p className="text-xs text-emerald-600 font-semibold">Para o negócio</p>
                </div>
              </div>
              <ul className="space-y-2.5">
                {MINHAI_POINTS.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0 mt-1.5" />
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href={MINHAI_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:underline"
              >
                Conheça a minhAi →
              </a>
            </div>
          </div>

          <p className="text-center text-xs text-gray-400 mt-8">
            Ao criar uma conta na minhAi, você já tem acesso ao Min.IA automaticamente.
          </p>
        </div>
      </section>

      {/* ── Seção 3: Casos de uso reais ────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="text-center mb-14 max-w-xl mx-auto space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-600">
              Na prática
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              O que você vai usar todo dia
            </h2>
            <p className="text-gray-500 text-base">
              Funções que resolvem tarefas reais em segundos — sem abrir outro app, sem digitar muito.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {USE_CASES.map((uc) => (
              <div
                key={uc.title}
                className="flex gap-4 p-5 rounded-xl border border-gray-100 bg-gray-50/60 hover:bg-gray-50 transition-colors"
              >
                <span className="text-2xl flex-shrink-0 mt-0.5">{uc.emoji}</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-1">{uc.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{uc.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-gray-400">
              Essas são 6 dos mais de 100 casos de uso disponíveis no Min.IA.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}