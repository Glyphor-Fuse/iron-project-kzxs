import { motion } from 'framer-motion';

export const GlyphorBadge = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed bottom-6 right-6 z-50 mix-blend-difference"
    >
      <a
        href="https://glyphor.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-all"
      >
        <div className="w-2 h-2 rounded-full bg-acid animate-pulse" />
        <span className="text-xs font-medium text-white tracking-widest uppercase">
          Made with Glyphor
        </span>
      </a>
    </motion.div>
  );
};