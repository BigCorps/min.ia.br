import { Brain, Zap, Shield, Rocket, Lock, Cpu } from 'lucide-react';

const features = [
  {
    id: 'knowledge',
    title: 'Conhecimento Ilimitado',
    description: 'Acesse toda base de conhecimento dos seus assistentes. Consulte, analise e aprenda com dados consolidados.',
    icon: Brain,
    color: 'from-blue-500 to-emerald-500',
  },
  {
    id: 'power',
    title: 'Poder Concentrado',
    description: 'Execute todas as funções em um único lugar. Sem limites, sem restrições, sem intermediários.',
    icon: Zap,
    color: 'from-blue-500 to-emerald-500',
  },
  {
    id: 'management',
    title: 'Gerenciamento Completo',
    description: 'Controle total dos seus assistentes de atendimento. Configure, monitore e otimize em tempo real.',
    icon: Shield,
    color: 'from-blue-500 to-emerald-500',
  },
  {
    id: 'speed',
    title: 'Velocidade Extrema',
    description: 'Execute qualquer tarefa em segundos. Processamento instantâneo com IA de última geração.',
    icon: Rocket,
    color: 'from-blue-500 to-emerald-500',
  },
  {
    id: 'hidden',
    title: 'Funções Ocultas',
    description: 'Acesso às funções avançadas que são bloqueadas para seus clientes. Controle total do sistema.',
    icon: Lock,
    color: 'from-blue-500 to-emerald-500',
  },
  {
    id: 'integration',
    title: 'Integração com minhAi',
    description: 'Sincronização perfeita com seus assistentes de atendimento. Um ecossistema completo.',
    icon: Cpu,
    color: 'from-blue-500 to-emerald-500',
  },
];

export default function Features() {
  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Tudo que você precisa em um assistente
          </h2>
          <p className="text-lg text-gray-600">
            min.IA combina poder, velocidade e controle total. Seu assistente pessoal sem limites.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="group relative p-6 rounded-xl border border-gray-200 bg-white hover:border-blue-300 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-5 bg-gradient-to-br ${feature.color} transition-opacity`} />

                {/* Icon */}
                <div className={`relative mb-4 w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center text-white`}>
                  <Icon size={24} />
                </div>

                {/* Content */}
                <div className="relative space-y-2 flex-1">
                  <h3 className="font-bold text-gray-900 text-lg">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
