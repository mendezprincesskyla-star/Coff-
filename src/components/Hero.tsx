import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-caramel/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-espresso/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="inline-block px-4 py-1.5 bg-caramel/10 text-caramel rounded-full text-xs font-bold tracking-widest uppercase mb-6">
            Artisanal & Handcrafted
          </span>
          <h1 className="text-6xl lg:text-8xl font-serif text-espresso leading-[1.1] mb-6">
            Better Mornings, <br />
            <span className="text-caramel italic">Brewed Daily.</span>
          </h1>
          <p className="text-xl text-espresso/70 max-w-lg mb-10 leading-relaxed">
            Experience artisanal coffee and handcrafted snacks in a space designed for your focus and your flow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/menu"
              className="bg-espresso text-white px-10 py-5 rounded-full font-bold hover:bg-caramel transition-all flex items-center justify-center gap-2 group shadow-lg shadow-espresso/10"
            >
              Order for Pickup
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/menu"
              className="border-2 border-espresso text-espresso px-10 py-5 rounded-full font-bold hover:bg-espresso hover:text-white transition-all text-center"
            >
              See the Menu
            </Link>
          </div>
          
          <div className="mt-12 flex items-center gap-4 text-sm text-espresso/60">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://picsum.photos/seed/user${i}/100/100`}
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-cream"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <p>Joined by <span className="font-bold text-espresso">2,000+</span> coffee lovers this week</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-square">
            <img
              src="https://picsum.photos/seed/coffee-hero/1200/1500"
              alt="Coffí Interior"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating Card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-xl shadow-xl max-w-[200px]"
          >
            <p className="text-xs font-bold text-caramel uppercase tracking-widest mb-2">Signature Drink</p>
            <p className="text-lg font-serif text-espresso leading-tight">Honey Oat Latte</p>
            <div className="mt-3 h-1 w-12 bg-caramel rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
