import { Coffee, Wifi, Utensils, Clock } from 'lucide-react';
import { motion } from 'motion/react';

const props = [
  {
    icon: Coffee,
    title: 'Artisanal Sourcing',
    desc: 'Direct-trade beans roasted in small batches for peak flavor.',
  },
  {
    icon: Wifi,
    title: 'Work-Friendly Vibe',
    desc: 'High-speed Wi-Fi, ample outlets, and cozy corners for focus.',
  },
  {
    icon: Utensils,
    title: 'Chef-Led Snacks',
    desc: 'Curated pairings made fresh daily in our kitchen.',
  },
  {
    icon: Clock,
    title: 'Quick Pickup',
    desc: 'Order ahead and skip the line with our seamless mobile app.',
  },
];

export default function ValueProps() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-espresso mb-6">Why Coffí?</h2>
          <p className="text-espresso/60 text-lg">
            We believe the perfect cup of coffee is only half the story. The other half is the community it builds.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {props.map((prop, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-cream/30 border border-espresso/5 hover:border-caramel/30 transition-all group"
            >
              <div className="w-12 h-12 bg-caramel/10 rounded-xl flex items-center justify-center text-caramel mb-6 group-hover:bg-caramel group-hover:text-white transition-colors">
                <prop.icon size={24} />
              </div>
              <h3 className="text-xl font-serif text-espresso mb-3">{prop.title}</h3>
              <p className="text-espresso/60 leading-relaxed text-sm">{prop.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
