import Index from './pages/Index';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { GlyphorBadge } from './utils/GlyphorBadge';

function App() {
  return (
    <div className="relative min-h-screen bg-carbon font-ui overflow-x-hidden">
      {/* Global Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 mix-blend-overlay bg-noise opacity-40"></div>
      
      <Navbar />
      <Index />
      <Footer />
      <GlyphorBadge />
    </div>
  );
}

export default App;