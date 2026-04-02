import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'Freelance Designer',
    content: "The best workspace in the city. The Wi-Fi is fast, the coffee is exceptional, and the atmosphere is just right for productivity.",
    rating: 5,
  },
  {
    name: 'Marcus Chen',
    role: 'Coffee Enthusiast',
    content: "I've tried every specialty shop in town, and Coffí's Honey Oat Latte is on another level. The attention to detail is obvious.",
    rating: 5,
  },
  {
    name: 'Elena Rodriguez',
    role: 'Local Resident',
    content: "My morning ritual. The staff knows my order, and the avocado croissant is the perfect start to my day. Truly premium experience.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-espresso mb-4">What Our Guests Say</h2>
          <div className="flex justify-center gap-1 text-caramel">
            {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={20} fill="currentColor" />)}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-3xl bg-cream/20 border border-espresso/5 relative"
            >
              <Quote className="absolute top-6 right-6 text-caramel/10" size={48} />
              <div className="flex gap-1 text-caramel mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="text-espresso/80 italic mb-8 leading-relaxed">"{t.content}"</p>
              <div>
                <p className="font-bold text-espresso">{t.name}</p>
                <p className="text-xs text-espresso/50 uppercase tracking-widest mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
