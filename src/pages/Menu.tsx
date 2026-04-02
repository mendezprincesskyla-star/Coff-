import { motion } from 'motion/react';

const menuData = [
  {
    category: 'Coffee',
    items: [
      { name: 'Espresso', price: '$3.50', desc: 'Rich, intense, and perfectly extracted.' },
      { name: 'Americano', price: '$4.00', desc: 'Espresso with hot water for a smooth finish.' },
      { name: 'Cappuccino', price: '$5.00', desc: 'Equal parts espresso, steamed milk, and foam.' },
      { name: 'Latte', price: '$5.50', desc: 'Espresso with silky steamed milk and light foam.' },
      { name: 'Flat White', price: '$5.25', desc: 'Velvety micro-foam over a double ristretto.' },
    ]
  },
  {
    category: 'Signature Drinks',
    items: [
      { name: 'Honey Oat Latte', price: '$6.50', desc: 'Creamy oat milk, local honey, and double espresso.', bestseller: true },
      { name: 'Caramel Cloud', price: '$6.75', desc: 'Cold brew topped with salted caramel cold foam.' },
      { name: 'Lavender Haze', price: '$6.25', desc: 'Espresso, lavender syrup, and steamed milk.' },
      { name: 'Maple Pecan Brew', price: '$6.50', desc: 'Warm maple notes with a nutty pecan finish.' },
    ]
  },
  {
    category: 'Snacks & Pastries',
    items: [
      { name: 'Smashed Avocado Croissant', price: '$9.00', desc: 'Flaky pastry topped with fresh avocado and chili flakes.', bestseller: true },
      { name: 'Almond Croissant', price: '$5.50', desc: 'Twice-baked with almond cream and sliced almonds.' },
      { name: 'Seasonal Fruit Tart', price: '$7.00', desc: 'Buttery crust with vanilla custard and fresh berries.' },
      { name: 'Dark Chocolate Brownie', price: '$4.50', desc: 'Fudgy, rich, and topped with sea salt flakes.' },
    ]
  }
];

export default function Menu() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-serif text-espresso mb-6">The Menu</h1>
          <p className="text-espresso/60 text-lg max-w-2xl mx-auto">
            Every item is crafted with artisanal precision and the finest ingredients we can find.
          </p>
        </div>

        <div className="space-y-24">
          {menuData.map((section, idx) => (
            <motion.section
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif text-espresso mb-12 flex items-center gap-4">
                {section.category}
                <div className="h-px bg-espresso/10 flex-grow" />
              </h2>

              <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
                {section.items.map((item, i) => (
                  <div key={i} className="group flex justify-between items-start border-b border-espresso/5 pb-6">
                    <div className="max-w-[70%]">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-xl font-serif text-espresso group-hover:text-caramel transition-colors">
                          {item.name}
                        </h3>
                        {item.bestseller && (
                          <span className="px-2 py-0.5 bg-caramel/10 text-caramel text-[10px] font-bold uppercase tracking-widest rounded-full">
                            Bestseller
                          </span>
                        )}
                      </div>
                      <p className="text-espresso/60 text-sm">{item.desc}</p>
                    </div>
                    <p className="font-bold text-espresso">{item.price}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
}
