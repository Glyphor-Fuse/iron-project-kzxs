import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock } from 'lucide-react';

const events = [
  { day: "FRI", date: "OCT 24", title: "Qualifying & Pit Party", time: "18:00 - 22:00", type: "Access Pass" },
  { day: "SAT", date: "OCT 25", title: "Main Event: Freestyle", time: "19:00 - 23:00", type: "Standard" },
  { day: "SUN", date: "OCT 26", title: "Championship Finals", time: "14:00 - 18:00", type: "Premium" },
];

export const Schedule = () => {
  return (
    <section className="bg-acid text-black py-24 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
         <img src="<div className="relative">
  <img 
    src="https://images.pexels.com/photos/14512047/pexels-photo-14512047.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
    alt="A rugged blue Jeep tackling a challenging off-road pathway in the wilderness."
    width="4000"
    height="4000"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/off-road-vehicle-on-the-rough-road-14512047/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by Wallace Silva on Pexels
    </a>
  </div>
</div>" className="w-full h-full object-cover mix-blend-multiply" alt="Texture" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-black/20 pb-8">
          <div>
            <h2 className="font-display text-7xl md:text-9xl uppercase leading-none">The<br/>Circuit</h2>
          </div>
          <div className="flex flex-col gap-2 text-right">
            <div className="flex items-center gap-2 justify-end font-bold uppercase tracking-widest">
              <MapPin size={18} /> Ford Field, Detroit
            </div>
            <p className="max-w-md text-sm font-medium opacity-70">
              Three days of high-octane competition. Access the pit party to meet the drivers and see the machines up close.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-l border-black/10">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ backgroundColor: '#000', color: '#ccff00' }}
              className="group relative p-8 md:p-12 border-r border-b border-black/10 transition-colors duration-300 min-h-[400px] flex flex-col justify-between"
            >
              <div className="flex justify-between items-start">
                <span className="text-6xl font-display opacity-30 group-hover:opacity-100 transition-opacity">{event.day}</span>
                <span className="text-xs font-bold border border-current px-2 py-1 uppercase">{event.type}</span>
              </div>
              
              <div>
                <div className="flex items-center gap-2 text-sm font-bold uppercase mb-2 opacity-60">
                   <Calendar size={14} /> {event.date}
                   <span className="mx-2">•</span>
                   <Clock size={14} /> {event.time}
                </div>
                <h3 className="text-3xl font-display uppercase leading-tight group-hover:translate-x-2 transition-transform duration-300">
                  {event.title}
                </h3>
              </div>

              <div className="absolute bottom-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowIcon />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ArrowIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 30L30 10M30 10H10M30 10V30" stroke="currentColor" strokeWidth="2"/>
  </svg>
);