import Navbar from '@/components/navigation/Navbar';
import Hero from '@/components/hero/Hero';
import About from '@/components/about/About';
import Services from '@/components/services/Services';
import Process from '@/components/ui/Process';
import Ubuntu from '@/components/ubuntu/Ubuntu';
import Community from '@/components/community/Community';
import Industries from '@/components/industries/Industries';
import WhyChooseUs from '@/components/why-choose-us/WhyChooseUs';
import Portfolio from '@/components/portfolio/Portfolio';
import CallToAction from '@/components/ui/CallToAction';
import Contact from '@/components/contact/Contact';
import Footer from '@/components/footer/Footer';
import CustomCursor from '@/components/ui/CustomCursor';
import Preloader from '@/components/ui/Preloader';

/* Server Component. Sections are Client Components ('use client'), so they are
   server-rendered then hydrated — real HTML in the initial response (SEO +
   faster first paint). Only the 3D lion stays client-only (ssr:false), handled
   inside Hero. */
export default function Home() {
  return (
    <>
      <Preloader />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Ubuntu />
        <Community />
        <Industries />
        <WhyChooseUs />
        <Portfolio />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
