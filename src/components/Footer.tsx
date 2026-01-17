export const Footer = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12 px-6 border-t border-stone-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="font-display text-6xl md:text-[10rem] leading-[0.8] uppercase text-stone-800 mb-8 select-none">
              Gravity<br/>Breakers
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
              {[
                { title: "Event", links: ["Tickets", "Schedule", "Arena Map", "Accessibility"] },
                { title: "Drivers", links: ["Standings", "Profiles", "Hall of Fame", "Apply to Race"] },
                { title: "Connect", links: ["Instagram", "YouTube", "TikTok", "Newsletter"] },
              ].map((col, i) => (
                <div key={i}>
                  <h4 className="font-bold uppercase text-acid mb-4 tracking-widest text-xs">{col.title}</h4>
                  <ul className="space-y-2">
                    {col.links.map((link) => (
                      <li key={link}>
                        <a href="#" className="text-stone-400 hover:text-white transition-colors text-sm uppercase font-medium">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="bg-stone-900 p-8 rounded-sm">
              <h3 className="font-display text-2xl uppercase mb-4">Join the Pit Crew</h3>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="ENTER EMAIL" 
                  className="bg-black border border-stone-700 text-white px-4 py-3 w-full font-mono text-sm placeholder:text-stone-600 focus:outline-none focus:border-acid"
                />
                <button className="bg-acid text-black px-6 font-bold uppercase hover:bg-white transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end border-t border-stone-800 pt-8 gap-4">
          <p className="text-stone-600 text-xs uppercase tracking-widest">
            © 2024 Gravity Breakers Inc. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            {/* Fake Sponsors */}
            <div className="h-8 w-24 bg-stone-800/50" />
            <div className="h-8 w-24 bg-stone-800/50" />
            <div className="h-8 w-24 bg-stone-800/50" />
          </div>
        </div>
      </div>
    </footer>
  );
};