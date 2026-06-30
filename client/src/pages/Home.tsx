import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

/**
 * Home Page
 * Landing page for min.IA - Seu Assistente Pessoal Inteligente
 * Minimalismo Técnico Elegante design approach
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <Hero />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
