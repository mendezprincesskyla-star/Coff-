import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-24 bg-espresso text-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://picsum.photos/seed/story/1000/1250"
              alt="Our Story"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-caramel rounded-2xl -z-10 hidden lg:block" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-caramel font-bold tracking-widest uppercase text-xs mb-6 block">Our Story</span>
          <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
            Born in a Kitchen, <br />
            <span className="text-caramel italic">Perfected for You.</span>
          </h2>
          <p className="text-cream/70 text-lg mb-8 leading-relaxed">
            Coffí wasn't born in a boardroom; it was born in a kitchen at 5:00 AM. We believe the perfect cup of coffee is only half the story. The other half is the community it builds and the quiet moments it fuels.
          </p>
          <p className="text-cream/70 text-lg mb-10 leading-relaxed">
            From our direct-trade sourcing to our chef-led snack pairings, every detail is designed to elevate your daily ritual.
          </p>
          <Link
            to="/about"
            className="inline-block bg-caramel text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-espresso transition-all shadow-xl"
          >
            Read Our Full Story
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
