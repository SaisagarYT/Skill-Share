import Container from '../common/Container';
import Button from '../common/Button';
import Input from '../common/Input';

import SolarSystemBg from './SolarSystemBg';
import GridBg from './GridBg';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[80vh] flex flex-col justify-center">
      {/* Grid background - bottom-most layer */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none">
        <GridBg />
      </div>
      {/* Green vignette gradient above grid */}
      <div className="absolute inset-0 w-full h-full z-10 pointer-events-none select-none" style={{
        background: `
          radial-gradient(ellipse 90% 70% at 0% 0%, #b0ffb3 0%, transparent 70%),
          radial-gradient(ellipse 90% 70% at 100% 0%, #b0ffb3 0%, transparent 70%),
          radial-gradient(ellipse 90% 70% at 0% 100%, #b0ffb3 0%, transparent 70%),
          radial-gradient(ellipse 90% 70% at 100% 100%, #b0ffb3 0%, transparent 70%),
          radial-gradient(ellipse 60% 40% at 50% 0%, #b0ffb3 0%, transparent 80%),
          radial-gradient(ellipse 30% 15% at 50% 50%, #b0ffb3 0%, transparent 80%)
        `,
        opacity: 0.22,
        mixBlendMode: 'lighten',
      }} />
      {/* Solar system SVGs above gradient */}
      <SolarSystemBg />
      {/* Content above all backgrounds */}
      <Container className="relative z-30 flex flex-col items-center text-center pt-24 pb-16">
        <span className="inline-block bg-primary/60 text-dark px-4 py-1 rounded-full font-medium mb-6 text-sm">
          Run Your Business on Autopilot
        </span>
        <h1 className="text-5xl md:text-6xl font-extrabold text-heading mb-4 leading-tight">
          Next-Gen Tools for <br className="hidden md:inline" />
          High-Performing Teams
        </h1>
        <p className="text-lg md:text-xl text-subheading mb-8 max-w-2xl">
          All-in-one SaaS solution designed to simplify your daily operations.<br />
          Whether you’re managing projects, collaborating with teams
        </p>
        <form className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Your email address"
            className="flex-1"
          />
          <Button type="submit" className="flex items-center justify-center gap-2">
            Request a Demo
            <span className="inline-block bg-accent text-dark rounded-full p-1 ml-1">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Button>
        </form>
      </Container>
    </section>
  );
}
