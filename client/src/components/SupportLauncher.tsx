import { MessageCircle } from 'lucide-react';

/**
 * Link-only launcher on the public landing. The actual chat stays on
 * the first-party BigCorps support page; no visitor/customer data or
 * third-party cookies are carried over.
 */
export default function SupportLauncher() {
  return (
    <a
      href="https://www.minhai.app/minia/suporte"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir o suporte min.IA"
      title="Falar com o suporte min.IA"
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-[60] grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-[#3B82F6] to-[#10B981] text-white shadow-xl transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 motion-reduce:transition-none sm:bottom-6 sm:right-6"
    >
      <MessageCircle aria-hidden="true" size={24} strokeWidth={2.2} />
    </a>
  );
}
