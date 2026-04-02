import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function EmailCapture() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-2xl relative overflow-hidden text-center">
          {/* Decorative blur */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-caramel/5 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-espresso/5 rounded-full blur-3xl -z-10" />

          {!isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-caramel font-bold tracking-widest uppercase text-xs mb-6 block">Join the Coffí Club</span>
              <h2 className="text-4xl md:text-5xl font-serif text-espresso mb-6">Your First Sip is on Us.</h2>
              <p className="text-espresso/60 text-lg mb-10 max-w-2xl mx-auto">
                Sign up for our newsletter and get a free pastry with your first visit. Plus, stay updated on seasonal specials and exclusive events.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-8 py-5 rounded-full bg-cream/50 border border-espresso/10 focus:outline-none focus:border-caramel transition-colors text-espresso"
                />
                <button
                  type="submit"
                  className="bg-espresso text-white px-10 py-5 rounded-full font-bold hover:bg-caramel transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  Join Now
                  <Send size={18} />
                </button>
              </form>
              <p className="mt-6 text-xs text-espresso/40">
                By signing up, you agree to our Privacy Policy and Terms of Service.
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-10"
            >
              <div className="w-20 h-20 bg-caramel/10 text-caramel rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 size={40} />
              </div>
              <h2 className="text-4xl font-serif text-espresso mb-4">You're in!</h2>
              <p className="text-espresso/60 text-lg">
                Check your inbox for your welcome gift. We can't wait to see you at Coffí.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
