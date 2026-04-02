import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-caramel font-bold tracking-widest uppercase text-xs mb-6 block">Our Story</span>
            <h1 className="text-5xl md:text-7xl font-serif text-espresso mb-8 leading-tight">
              More Than Just <br />
              <span className="text-caramel italic">A Coffee Shop.</span>
            </h1>
            <p className="text-espresso/70 text-lg mb-6 leading-relaxed">
              Coffí wasn't born in a boardroom; it was born in a kitchen at 5:00 AM. We believe the perfect cup of coffee is only half the story. The other half is the community it builds and the quiet moments it fuels.
            </p>
            <p className="text-espresso/70 text-lg mb-6 leading-relaxed">
              Our founder, a lifelong coffee enthusiast and pastry chef, wanted to create a space where artisanal quality meets a warm, inviting atmosphere. A place where you can find your focus or find your flow.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://picsum.photos/seed/about-main/1000/1250"
              alt="Coffí Interior"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-24">
          <div className="text-center p-10 rounded-3xl bg-white shadow-sm border border-espresso/5">
            <h3 className="text-4xl font-serif text-caramel mb-4">100%</h3>
            <p className="font-bold text-espresso mb-2">Direct Trade</p>
            <p className="text-espresso/60 text-sm">Ensuring fair wages and the highest quality beans from our partner farms.</p>
          </div>
          <div className="text-center p-10 rounded-3xl bg-white shadow-sm border border-espresso/5">
            <h3 className="text-4xl font-serif text-caramel mb-4">Small</h3>
            <p className="font-bold text-espresso mb-2">Batch Roasting</p>
            <p className="text-espresso/60 text-sm">Roasted locally every week to ensure maximum freshness in every cup.</p>
          </div>
          <div className="text-center p-10 rounded-3xl bg-white shadow-sm border border-espresso/5">
            <h3 className="text-4xl font-serif text-caramel mb-4">Chef</h3>
            <p className="font-bold text-espresso mb-2">Led Kitchen</p>
            <p className="text-espresso/60 text-sm">Our snacks aren't just an afterthought—they're curated pairings made fresh.</p>
          </div>
        </div>

        <div className="bg-espresso text-cream rounded-[3rem] p-12 md:p-24 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-caramel/10 rounded-full blur-3xl" />
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Our Mission</h2>
            <p className="text-cream/70 text-xl leading-relaxed mb-12">
              To provide a sanctuary for the modern professional and the casual enthusiast alike. We strive to serve excellence in every cup and kindness in every interaction.
            </p>
            <div className="flex items-center gap-6">
              <img
                src="https://picsum.photos/seed/founder/200/200"
                alt="Founder"
                className="w-20 h-20 rounded-full border-2 border-caramel"
                referrerPolicy="no-referrer"
              />
              <div>
                <p className="text-xl font-serif">Isabella Thorne</p>
                <p className="text-caramel font-bold uppercase tracking-widest text-xs">Founder & Head Roaster</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
