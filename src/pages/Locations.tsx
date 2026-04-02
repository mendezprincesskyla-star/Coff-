import { motion } from 'motion/react';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

const locations = [
  {
    name: 'The Original Corner',
    address: '123 Brew Street, Coffee City',
    hours: 'Mon-Fri: 7am - 7pm | Sat-Sun: 8am - 8pm',
    phone: '(555) 123-4567',
    image: 'https://picsum.photos/seed/loc1/800/600',
  },
  {
    name: 'Downtown Hub',
    address: '456 Espresso Ave, Metro Center',
    hours: 'Mon-Fri: 6am - 6pm | Sat-Sun: 9am - 5pm',
    phone: '(555) 987-6543',
    image: 'https://picsum.photos/seed/loc2/800/600',
  },
  {
    name: 'The Garden Studio',
    address: '789 Latte Lane, Green District',
    hours: 'Mon-Sun: 8am - 6pm',
    phone: '(555) 456-7890',
    image: 'https://picsum.photos/seed/loc3/800/600',
  }
];

export default function Locations() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-serif text-espresso mb-6">Find Your Corner</h1>
          <p className="text-espresso/60 text-lg max-w-2xl mx-auto">
            Whether you're looking for a quiet workspace or a quick pick-me-up, we have a spot waiting for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 mb-24">
          {locations.map((loc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-espresso/5 group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={loc.image}
                  alt={loc.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif text-espresso mb-4">{loc.name}</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3 text-sm text-espresso/60">
                    <MapPin size={18} className="text-caramel shrink-0" />
                    <span>{loc.address}</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-espresso/60">
                    <Clock size={18} className="text-caramel shrink-0" />
                    <span>{loc.hours}</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-espresso/60">
                    <Phone size={18} className="text-caramel shrink-0" />
                    <span>{loc.phone}</span>
                  </div>
                </div>
                <button className="w-full bg-espresso text-white py-4 rounded-xl font-bold hover:bg-caramel transition-all flex items-center justify-center gap-2">
                  <Navigation size={18} />
                  Get Directions
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Map Placeholder */}
        <div className="bg-cream rounded-[3rem] aspect-[21/9] overflow-hidden relative flex items-center justify-center border border-espresso/5">
          <div className="absolute inset-0 opacity-20 grayscale">
            <img
              src="https://picsum.photos/seed/map/1920/1080"
              alt="Map"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-10 text-center p-12 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl max-w-md">
            <h4 className="text-2xl font-serif text-espresso mb-4">Interactive Map</h4>
            <p className="text-espresso/60 mb-6">Our full interactive map is coming soon to help you find the closest Coffí.</p>
            <button className="text-caramel font-bold hover:underline">View on Google Maps</button>
          </div>
        </div>
      </div>
    </div>
  );
}
