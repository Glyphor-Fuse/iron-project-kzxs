import { motion } from 'framer-motion';

const trucks = [
  { name: "Bone Crusher", stats: "1500 HP", img: "<div className="relative">
  <img 
    src="https://images.pexels.com/photos/29176532/pexels-photo-29176532.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
    alt="A thrilling monster truck event with vibrant energy and roaring audience."
    width="2148"
    height="3007"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/exciting-monster-truck-event-with-crowd-29176532/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by James Mirakian on Pexels
    </a>
  </div>
</div>" },
  { name: "Grave Digger", stats: "1600 HP", img: "<div className="relative">
  <img 
    src="https://images.pexels.com/photos/29176532/pexels-photo-29176532.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
    alt="A thrilling monster truck event with vibrant energy and roaring audience."
    width="2148"
    height="3007"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/exciting-monster-truck-event-with-crowd-29176532/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by James Mirakian on Pexels
    </a>
  </div>
</div>" },
  { name: "Max-D", stats: "1450 HP", img: "<div className="relative">
  <img 
    src="https://images.pexels.com/photos/29176532/pexels-photo-29176532.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
    alt="A thrilling monster truck event with vibrant energy and roaring audience."
    width="2148"
    height="3007"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/exciting-monster-truck-event-with-crowd-29176532/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by James Mirakian on Pexels
    </a>
  </div>
</div>" },
  { name: "El Toro", stats: "1550 HP", img: "<div className="relative">
  <img 
    src="https://images.pexels.com/photos/29176532/pexels-photo-29176532.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
    alt="A thrilling monster truck event with vibrant energy and roaring audience."
    width="2148"
    height="3007"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/exciting-monster-truck-event-with-crowd-29176532/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by James Mirakian on Pexels
    </a>
  </div>
</div>" },
];

export const TruckLineup = () => {
  return (
    <section className="bg-concrete py-32 px-6">
      <div className="max-w-[1800px] mx-auto">
        <div className="mb-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="font-display text-5xl md:text-8xl text-white uppercase">
            The <span className="text-stroke">Beasts</span>
          </h2>
          <p className="text-stone-400 max-w-md text-right font-mono text-xs uppercase tracking-wider">
            Specially engineered for destruction. <br/>Methanol-fueled 540CI Engines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {trucks.map((truck, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-[3/4] overflow-hidden bg-black cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-80" />
              
              <img 
                src={truck.img} 
                alt={truck.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1 grayscale group-hover:grayscale-0"
              />
              
              <div className="absolute bottom-0 left-0 w-full p-6 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-acid font-mono text-xs mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {truck.stats} // CLASS A
                </p>
                <h3 className="font-display text-4xl text-white uppercase italic">
                  {truck.name}
                </h3>
              </div>

              {/* Glitch Overlay on Hover */}
              <div className="absolute inset-0 bg-acid/20 mix-blend-color-dodge opacity-0 group-hover:opacity-100 transition-opacity duration-100 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};