import { useEffect } from 'react';

type EmbedApi = {
  mount(options: { product: string; color: string }): boolean;
  destroy(): void;
};

function api(): EmbedApi | undefined {
  return (window as Window & { BigCorpsSupportEmbed?: EmbedApi }).BigCorpsSupportEmbed;
}

/** Mounted only by the public Home page, never by the authenticated tool. */
export default function SupportLauncher() {
  useEffect(() => {
    let active = true;
    const start = () => {
      if (active) api()?.mount({ product: 'minia', color: '#10b981' });
    };
    const selector = 'script[data-bigcorps-support-library]';
    let script = document.querySelector<HTMLScriptElement>(selector);
    if (api()) start();
    else {
      if (!script) {
        script = document.createElement('script');
        script.dataset.bigcorpsSupportLibrary = '1';
        script.src = 'https://www.minhai.app/bigcorps-support-embed.js';
        script.async = true;
        document.head.appendChild(script);
      }
      script.addEventListener('load', start);
    }
    return () => {
      active = false;
      script?.removeEventListener('load', start);
      api()?.destroy();
    };
  }, []);
  return null;
}
