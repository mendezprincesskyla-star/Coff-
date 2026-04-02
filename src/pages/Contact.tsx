import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-serif text-espresso mb-6">Get in Touch</h1>
          <p className="text-espresso/60 text-lg max-w-2xl mx-auto">
            Have a question, feedback, or just want to say hello? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-serif text-espresso mb-8">Contact Information</h2>
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-caramel/10 rounded-xl flex items-center justify-center text-caramel shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-bold text-espresso mb-1">Email Us</p>
                  <p className="text-espresso/60">hello@coffi.com</p>
                  <p className="text-espresso/60">press@coffi.com</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-caramel/10 rounded-xl flex items-center justify-center text-caramel shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-bold text-espresso mb-1">Call Us</p>
                  <p className="text-espresso/60">(555) 123-4567</p>
                  <p className="text-espresso/60">Mon-Fri, 9am - 5pm</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-caramel/10 rounded-xl flex items-center justify-center text-caramel shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-bold text-espresso mb-1">Headquarters</p>
                  <p className="text-espresso/60">123 Brew Street, Coffee City</p>
                  <p className="text-espresso/60">Floor 4, Suite 402</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-caramel text-white">
              <h3 className="text-2xl font-serif mb-4">Wholesale Inquiries</h3>
              <p className="mb-6 text-white/80">Interested in serving Coffí at your office or restaurant? We offer custom roasting and training.</p>
              <button className="bg-white text-caramel px-8 py-3 rounded-full font-bold hover:bg-espresso hover:text-white transition-all">
                Learn More
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-10 md:p-12 rounded-[3rem] shadow-xl border border-espresso/5"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-espresso/60 uppercase tracking-widest">First Name</label>
                  <input
                    type="text"
                    className="w-full px-6 py-4 rounded-2xl bg-cream/50 border border-espresso/10 focus:outline-none focus:border-caramel transition-colors"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-espresso/60 uppercase tracking-widest">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-6 py-4 rounded-2xl bg-cream/50 border border-espresso/10 focus:outline-none focus:border-caramel transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-espresso/60 uppercase tracking-widest">Email Address</label>
                <input
                  type="email"
                  className="w-full px-6 py-4 rounded-2xl bg-cream/50 border border-espresso/10 focus:outline-none focus:border-caramel transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-espresso/60 uppercase tracking-widest">Subject</label>
                <select className="w-full px-6 py-4 rounded-2xl bg-cream/50 border border-espresso/10 focus:outline-none focus:border-caramel transition-colors appearance-none">
                  <option>General Inquiry</option>
                  <option>Feedback</option>
                  <option>Wholesale</option>
                  <option>Careers</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-espresso/60 uppercase tracking-widest">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-6 py-4 rounded-2xl bg-cream/50 border border-espresso/10 focus:outline-none focus:border-caramel transition-colors resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              <button className="w-full bg-espresso text-white py-5 rounded-full font-bold hover:bg-caramel transition-all flex items-center justify-center gap-2 shadow-lg">
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
