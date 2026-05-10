export default function GrimstrandWebsite() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur border-b border-zinc-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img
              src="/mnt/data/file_000000001b3c71fdb1b72e01f05c8598"
              alt="Grimstrand Logo"
              className="h-12 w-12 object-cover rounded-full border border-zinc-700"
            />
            <div>
              <h1 className="text-2xl font-black tracking-widest">GRIMSTRAND</h1>
              <p className="text-xs text-zinc-400 uppercase tracking-[0.3em]">
                Offroad • Motorsports • Apparel
              </p>
            </div>
          </div>

          <div className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
            <a href="#shop" className="hover:text-zinc-300">Shop</a>
            <a href="#collections" className="hover:text-zinc-300">Collections</a>
            <a href="#vehicles" className="hover:text-zinc-300">Vehicles</a>
            <a href="#about" className="hover:text-zinc-300">About</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black z-10" />

        <img
          src="/mnt/data/file_000000001b3c71fdb1b72e01f05c8598"
          alt="Grimstrand Skull"
          className="absolute inset-0 w-full h-full object-cover opacity-20 scale-110"
        />

        <div className="relative z-20 max-w-5xl px-6 text-center">
          <h1 className="text-5xl md:text-8xl font-black leading-none tracking-tight uppercase">
            Built For
            <span className="block text-zinc-400">The Wild</span>
          </h1>

          <p className="mt-8 text-lg md:text-2xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            GRIMSTRAND is the next-generation offroad apparel and motorsports brand for riders,
            mudders, racers, truck fanatics, and adrenaline junkies.
          </p>

          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-5">
            <button className="bg-white text-black px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform">
              Shop The Drop
            </button>

            <button className="border border-zinc-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-zinc-900 transition-all">
              Explore Gear
            </button>
          </div>
        </div>
      </section>

      {/* FEATURED CATEGORIES */}
      <section id="collections" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <p className="uppercase tracking-[0.4em] text-zinc-500 text-sm">
              Featured Collections
            </p>
            <h2 className="text-4xl md:text-6xl font-black mt-4 uppercase">
              Dominate Every Terrain
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Offroad Apparel',
                desc: 'Heavy-duty shirts, hoodies, tactical jackets, and race-inspired streetwear.',
              },
              {
                title: 'Motorsports Gear',
                desc: 'Performance gear for ATV, UTV, motocross, overland, and truck culture.',
              },
              {
                title: 'Vehicle Lifestyle',
                desc: 'Built for people who live loud, ride hard, and never stay on pavement.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-black border border-zinc-800 rounded-3xl overflow-hidden hover:border-white transition-all"
              >
                <div className="h-72 overflow-hidden">
                  <img
                    src="/mnt/data/file_000000001b3c71fdb1b72e01f05c8598"
                    alt={item.title}
                    className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-black uppercase">{item.title}</h3>
                  <p className="mt-4 text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section id="vehicles" className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <img
              src="/mnt/data/file_000000001b3c71fdb1b72e01f05c8598"
              alt="Grimstrand Brand"
              className="rounded-3xl border border-zinc-800 shadow-2xl"
            />
          </div>

          <div>
            <p className="uppercase tracking-[0.4em] text-zinc-500 text-sm">
              Search Engine Optimized
            </p>

            <h2 className="text-4xl md:text-6xl font-black mt-5 uppercase leading-tight">
              The Future Of Offroad Clothing
            </h2>

            <p className="mt-8 text-zinc-400 text-lg leading-relaxed">
              Whether people search for offroad shirts, ATV apparel, dirt bike clothing,
              truck culture brands, overlanding gear, motocross lifestyle apparel, or custom
              motorsports fashion — GRIMSTRAND is built to dominate search visibility and stand out instantly.
            </p>

            <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
              The dark gothic aesthetic combined with aggressive motorsports branding creates a memorable identity that hooks customers immediately.
            </p>
          </div>
        </div>
      </section>

      {/* SHOP SECTION */}
      <section id="shop" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="uppercase tracking-[0.4em] text-zinc-500 text-sm">
                Best Sellers
              </p>
              <h2 className="text-4xl md:text-6xl font-black uppercase mt-3">
                Most Wanted
              </h2>
            </div>

            <button className="hidden md:block border border-zinc-700 px-6 py-3 rounded-xl hover:bg-white hover:text-black transition-all">
              View All
            </button>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[1,2,3,4].map((item) => (
              <div
                key={item}
                className="bg-black border border-zinc-800 rounded-3xl overflow-hidden hover:border-zinc-400 transition-all"
              >
                <div className="h-72 overflow-hidden bg-zinc-900">
                  <img
                    src="/mnt/data/file_000000001b3c71fdb1b72e01f05c8598"
                    alt="Product"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold uppercase">Grimstrand Tee</h3>
                  <p className="text-zinc-500 mt-2">Premium Heavyweight Offroad Shirt</p>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-2xl font-black">$39</span>
                    <button className="bg-white text-black px-4 py-2 rounded-xl font-bold hover:scale-105 transition-transform">
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section id="about" className="py-28 px-6 bg-black border-t border-zinc-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black uppercase leading-tight">
            Ride Hard.
            <span className="block text-zinc-500">Live Grim.</span>
          </h2>

          <p className="mt-10 text-xl text-zinc-400 leading-relaxed max-w-4xl mx-auto">
            GRIMSTRAND was created for people obsessed with horsepower, mud, speed,
            freedom, and rebellion. Every piece is designed to look brutal, premium,
            and unforgettable.
          </p>

          <button className="mt-10 bg-white text-black px-10 py-4 rounded-2xl font-black text-lg hover:scale-105 transition-transform">
            Join The Movement
          </button>
        </div>
      </section>

      {/* FOOTER */}
            {/* LIVE CHAT BOX */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-white text-black px-6 py-4 rounded-full shadow-2xl font-black uppercase tracking-wider hover:scale-105 transition-transform">
          Live Chat
        </button>
      </div>

      {/* EMAIL SIGNUP */}
      <section className="py-24 px-6 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[0.4em] text-zinc-500 text-sm">
            Stay Updated
          </p>

          <h2 className="text-4xl md:text-6xl font-black uppercase mt-5">
            Join The Grimstrand Army
          </h2>

          <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
            Get early access to exclusive drops, motorsports gear, offroad apparel, giveaways, and limited collections.
          </p>

          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-black border border-zinc-700 px-6 py-4 rounded-2xl text-white w-full md:w-[420px]"
            />

            <button className="bg-white text-black px-8 py-4 rounded-2xl font-black hover:scale-105 transition-transform">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <footer className="py-10 border-t border-zinc-900 text-center text-zinc-500 text-sm uppercase tracking-widest">
        © 2026 GRIMSTRAND — Offroad Clothing & Motorsports Lifestyle Brand
      </footer>
    </div>
  )
}
