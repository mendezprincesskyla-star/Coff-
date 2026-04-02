import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream/90 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="text-3xl font-serif font-bold text-white mb-6 block">
              Coffí<span className="text-caramel">.</span>
            </Link>
            <p className="text-cream/60 leading-relaxed mb-8">
              Artisanal coffee and handcrafted snacks in a space designed for your focus and your flow.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-caramel transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-caramel transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-caramel transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/menu" className="hover:text-caramel transition-colors">Menu</Link></li>
              <li><Link to="/about" className="hover:text-caramel transition-colors">Our Story</Link></li>
              <li><Link to="/locations" className="hover:text-caramel transition-colors">Locations</Link></li>
              <li><Link to="/loyalty" className="hover:text-caramel transition-colors">Loyalty Program</Link></li>
              <li><Link to="/faq" className="hover:text-caramel transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-caramel" />
                <span>123 Brew Street, Coffee City</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-caramel" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-caramel" />
                <span>hello@coffi.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Opening Hours</h4>
            <ul className="space-y-4 text-cream/60">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span className="text-white">7:00 - 19:00</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-white">8:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white">8:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-cream/40">
          <p>© 2026 Coffí. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
