import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const items = [
  {
    name: 'Honey Oat Latte',
    price: '$6.50',
    tag: 'Signature',
    image: 'https://picsum.photos/seed/latte/600/600',
    desc: 'Creamy oat milk, local honey, and double espresso.',
  },
  {
    name: 'Smashed Avocado Croissant',
    price: '$9.00',
    tag: 'Bestseller',
    image: 'https://picsum.photos/seed/croissant/600/600',
    desc: 'Flaky pastry topped with fresh avocado and chili flakes.',
  },
  {
    name: 'Cold Brew Flight',
    price: '$12.00',
    tag: 'New',
    image: 'https://picsum.photos/seed/coldbrew/600/600',
    desc: 'A tasting tour of our three seasonal cold brew roasts.',
  },
];

export default function FeaturedMenu() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-serif text-espresso mb-4">Guest Favorites</h2>
            <p className="text-espresso/60 text-lg">
              Handpicked selections from our seasonal menu, crafted with care.
            </p>
          </div>
          <Link
            to="/menu"
            className="text-caramel font-bold flex items-center gap-2 hover:gap-3 transition-all group"
          >
            Explore Full Menu
            <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 shadow-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-caramel text-[10px] font-bold uppercase tracking-widest rounded-full">
                    {item.tag}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-serif text-espresso">{item.name}</h3>
                <p className="font-bold text-caramel">{item.price}</p>
              </div>
              <p className="text-espresso/60 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
