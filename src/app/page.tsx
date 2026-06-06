'use client';

import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('@/components/navigation/Navbar'), { ssr: false });
const Hero = dynamic(() => import('@/components/hero/Hero'), { ssr: false });
const About = dynamic(() => import('@/components/about/About'), { ssr: false });
const Services = dynamic(() => import('@/components/services/Services'), { ssr: false });
const Process = dynamic(() => import('@/components/ui/Process'), { ssr: false });
const Ubuntu = dynamic(() => import('@/components/ubuntu/Ubuntu'), { ssr: false });
const Industries = dynamic(() => import('@/components/industries/Industries'), { ssr: false });
const WhyChooseUs = dynamic(() => import('@/components/why-choose-us/WhyChooseUs'), { ssr: false });
const Portfolio = dynamic(() => import('@/components/portfolio/Portfolio'), { ssr: false });
const CallToAction = dynamic(() => import('@/components/ui/CallToAction'), { ssr: false });
const Contact = dynamic(() => import('@/components/contact/Contact'), { ssr: false });
const Footer = dynamic(() => import('@/components/footer/Footer'), { ssr: false });
const CustomCursor = dynamic(() => import('@/components/ui/CustomCursor'), { ssr: false });
const Preloader = dynamic(() => import('@/components/ui/Preloader'), { ssr: false });

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
