import { Hero } from '../components/Hero';
import { Schedule } from '../components/Schedule';
import { TruckLineup } from '../components/TruckLineup';
import { Pricing } from '../components/Pricing';
import { motion } from 'framer-motion';

const Marquee = () => (
  <div className="bg-acid overflow-hidden py-4 border-y border-black">
    <motion.div 
      animate={{ x: "-50%" }}
      transition={{ ease: "linear", duration: 10, repeat: Infinity }}
      className="flex whitespace-nowrap"
    >
      {[...Array(10)].map((_, i) => (
        <span key={i} className="text-4xl font-display uppercase text-black mx-8 flex items-center gap-4">
          Total Destruction <span className="w-4 h-4 bg-black rotate-45" />
        </span>
      ))}
    </motion.div>
  </div>
);

const VideoTeaser = () => (
  <section className="h-[60vh] md:h-[80vh] w-full relative group overflow-hidden bg-black">
    <img 
      src="<div className="relative">
  <img 
    src="https://images.pexels.com/photos/3892895/pexels-photo-3892895.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
    alt="A lively crowd gathers at a football stadium during an outdoor event, showcasing spectator excitement."
    width="6960"
    height="4640"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/people-on-a-stadium-3892895/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by Luis Quintero on Pexels
    </a>
  </div>
</div>" 
      alt="Crowd" 
      className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000"
    />
    <div className="absolute inset-0 flex items-center justify-center">
        <motion.button 
            whileHover={{ scale: 1.1 }}
            className="w-24 h-24 rounded-full bg-acid/90 backdrop-blur flex items-center justify-center pl-1 group-hover:shadow-[0_0_50px_rgba(204,255,0,0.4)] transition-shadow"
        >
            <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-black border-b-[10px] border-b-transparent ml-1" />
        </motion.button>
    </div>
    <div className="absolute bottom-10 left-10">
        <h3 className="text-white font-display text-4xl uppercase">Watch Highlights</h3>
        <p className="text-stone-400 font-mono text-sm">2023 World Finals • Las Vegas</p>
    </div>
  </section>
);

const Index = () => {
  return (
    <main>
      <Hero />
      <Marquee />
      <Schedule />
      <TruckLineup />
      <VideoTeaser />
      <Pricing />
    </main>
  );
};

export default Index;