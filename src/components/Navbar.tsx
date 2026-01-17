import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Ticket } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-40 flex justify-between items-center px-6 py-6 md:px-12 mix-blend-difference text-white"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-acid rotate-45" />
          <span className="font-display text-2xl tracking-tighter uppercase">Gravity<br/><span className="text-acid">Breakers</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8 font-bold tracking-widest uppercase text-sm">
          {['Schedule', 'The Fleet', 'Arena', 'Partners'].map((item) => (
            <a key={item} href="#" className="hover:text-acid transition-colors">{item}</a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-2 bg-white text-black px-6 py-3 font-bold uppercase tracking-wide hover:bg-acid transition-colors clip-tag">
            <Ticket size={18} />
            Get Passes
          </button>
          
          <button 
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 hover:text-acid transition-colors"
          >
            <Menu size={32} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed inset-0 z-50 bg-acid flex flex-col p-8"
          >
            <div className="flex justify-end mb-12">
              <button onClick={() => setIsOpen(false)} className="p-2 text-black">
                <X size={32} />
              </button>
            </div>
            
            <div className="flex flex-col gap-6">
              {['Schedule', 'The Fleet', 'Arena', 'Partners'].map((item, i) => (
                <motion.a
                  key={item}
                  href="#"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="font-display text-6xl text-black uppercase hover:text-white transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>
            
            <div className="mt-auto">
              <button className="w-full py-6 bg-black text-white font-display text-2xl uppercase hover:bg-white hover:text-black transition-colors">
                Buy Tickets Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};