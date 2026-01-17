import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <section className="relative h-[110vh] w-full overflow-hidden flex items-center justify-center bg-carbon">
      {/* Background Video/Image */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 w-full h-full"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-carbon via-transparent to-carbon/40 z-10" />
        <img 
          src="<div className="relative">
  <img 
    src="https://images.pexels.com/photos/29176531/pexels-photo-29176531.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
    alt="A monster truck performs a thrilling jump in a packed indoor stadium during a live event."
    width="4590"
    height="3060"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/exciting-monster-truck-jump-at-indoor-arena-29176531/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by James Mirakian on Pexels
    </a>
  </div>
</div>" 
          alt="Monster Truck Jump" 
          className="w-full h-full object-cover opacity-80"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-start"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 border border-acid text-acid text-xs font-bold tracking-widest uppercase bg-acid/10 backdrop-blur-sm">
              World Tour 2024
            </span>
            <span className="text-stone-400 text-sm font-bold tracking-widest uppercase">
              Oct 24-26 • Detroit, MI
            </span>
          </div>

          <h1 className="font-display text-[14vw] leading-[0.8] text-white uppercase mix-blend-overlay opacity-50 select-none pointer-events-none">
            Total
          </h1>
          <motion.h1 
            style={{ y: y2 }}
            className="font-display text-[14vw] leading-[0.8] text-acid uppercase mt-[-4vw] relative"
          >
            Chaos
            <span className="absolute -top-10 -right-20 text-xl font-ui font-normal text-white tracking-normal w-48 hidden md:block">
              // WARNING: Extreme noise levels. Ear protection required.
            </span>
          </motion.h1>

          <div className="mt-12 flex flex-col md:flex-row gap-6 items-start md:items-center">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#ccff00", color: "#000" }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-5 bg-white text-black font-display text-2xl uppercase tracking-wide overflow-hidden clip-tag transition-colors"
            >
              <span className="relative z-10 flex items-center gap-3">
                Secure Seats <ArrowRight className="w-6 h-6" />
              </span>
            </motion.button>
            
            <p className="max-w-xs text-stone-400 text-sm leading-relaxed border-l-2 border-stone-700 pl-4">
              The world's most destructive motorsport event returns. Witness gravity-defying stunts and raw horsepower.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] rotate-90 origin-left translate-y-8 translate-x-3">Scroll</span>
        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
      </motion.div>
    </section>
  );
};