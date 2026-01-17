import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const tiers = [
  { 
    name: "Rookie Pass", 
    price: "$45", 
    color: "bg-white", 
    text: "text-black",
    features: ["General Admission", "Upper Bowl Seating", "Event Sticker"] 
  },
  { 
    name: "Adrenaline", 
    price: "$89", 
    color: "bg-acid", 
    text: "text-black",
    features: ["Lower Bowl Seating", "Pit Party Access", "Official T-Shirt", "Fast Lane Entry"] 
  },
  { 
    name: "Total Chaos", 
    price: "$199", 
    color: "bg-carbon border border-stone-800", 
    text: "text-white",
    features: ["Front Row Suites", "Driver Meet & Greet", "Track Walk", "All-Inclusive F&B", "VIP Parking"] 
  },
];

export const Pricing = () => {
  return (
    <section className="bg-stone-900 py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-display text-6xl md:text-8xl text-white uppercase mb-4">Secure Your <span className="text-acid">Seat</span></h2>
          <p className="text-stone-400 font-mono uppercase tracking-widest">Tickets selling fast. Don't miss the mayhem.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -20 }}
              className={`relative p-8 md:p-12 ${tier.color} ${tier.text} clip-slant h-full flex flex-col`}
            >
              {i === 1 && (
                <div className="absolute top-0 right-0 bg-black text-white text-xs font-bold px-3 py-1 uppercase tracking-widest">
                  Best Value
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="font-display text-3xl uppercase mb-2">{tier.name}</h3>
                <div className="text-5xl font-bold font-ui">{tier.price}</div>
              </div>

              <ul className="space-y-4 mb-12 flex-grow">
                {tier.features.map((feat, j) => (
                  <li key={j} className="flex items-center gap-3 font-medium text-sm uppercase tracking-wide opacity-80">
                    <Check size={16} strokeWidth={3} /> {feat}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 font-display text-xl uppercase tracking-wide border-2 border-current hover:bg-black hover:text-white hover:border-black transition-colors`}>
                Select Pass
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};