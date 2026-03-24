import Navbar from './components/navbar/Navbar';
import HeroSection from './components/hero/HeroSection';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-light">
      <Navbar />
      <HeroSection />
    </div>
  );
}
