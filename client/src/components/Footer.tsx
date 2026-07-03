const APP_URL    = 'https://app.min.ia.br';
const MINHAI_URL = 'https://minhai.app';

const PRODUCT_LINKS = [
  { label: 'Abrir Min.IA',       href: `${APP_URL}/min` },
  { label: 'Entrar',             href: `${APP_URL}/min/login` },
  { label: 'Criar conta grátis', href: MINHAI_URL, external: true },
  { label: 'minhAi.app',        href: MINHAI_URL, external: true },
];

const LEGAL_LINKS = [
  { label: 'Termos de Uso',        href: `${APP_URL}/min/termos` },
  { label: 'Aviso de Privacidade', href: `${APP_URL}/min/aviso` },
  { label: 'Exclusão de Dados',    href: `${APP_URL}/min/exclusao` },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-12 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Marca */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src="/logo.png"
                  alt="min.IA"
                  className="w-full h-full object-cover"
                  width={32}
                  height={32}
                />
              </div>
              <span className="font-bold text-gray-900">min.IA</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              A min.IA é o painel pessoal da minhAi. Acesse mais de 100 funções de IA diretamente pelo chat.
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Desenvolvido por{' '}
              <a
                href="https://bigcorps.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:underline text-gray-500"
              >
                BigCorps Tecnologia
              </a>
            </p>
          </div>

          {/* Produto */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
              Produto
            </p>
            <ul className="space-y-2.5">
              {PRODUCT_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.external ? '_blank' : undefined}
                    rel={l.external ? 'noopener noreferrer' : undefined}
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
              Legal
            </p>
            <ul className="space-y-2.5">
              {LEGAL_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Linha de rodapé */}
        <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400">
            © {year} Min.IA — BigCorps Tecnologia LTDA · CNPJ 14.282.244/0001-19
          </p>
          <p className="text-xs text-gray-400">
            Powered by{' '}
            <a
              href={MINHAI_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-500 hover:underline"
            >
              minhAi.app
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}