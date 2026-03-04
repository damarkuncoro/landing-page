import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBasket, 
  Leaf, 
  Truck, 
  Heart, 
  ChevronRight, 
  Star, 
  Menu, 
  X, 
  ArrowRight,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-harvest-green rounded-full flex items-center justify-center text-white">
            <Leaf size={24} />
          </div>
          <span className="text-2xl font-serif font-bold tracking-tight text-harvest-dark">GreenHarvest</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
          <a href="#" className="hover:text-harvest-earth transition-colors">Shop</a>
          <a href="#" className="hover:text-harvest-earth transition-colors">Our Story</a>
          <a href="#" className="hover:text-harvest-earth transition-colors">Farmers</a>
          <a href="#" className="hover:text-harvest-earth transition-colors">Recipes</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="px-6 py-2 rounded-full border border-harvest-green/20 text-sm font-medium hover:bg-harvest-green/5 transition-colors">
            Login
          </button>
          <button className="px-6 py-2 rounded-full bg-harvest-green text-white text-sm font-medium hover:bg-harvest-dark transition-colors shadow-lg shadow-harvest-green/20">
            Get Started
          </button>
        </div>

        <button 
          className="md:hidden text-harvest-dark"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 flex flex-col gap-4 md:hidden"
          >
            <a href="#" className="text-lg font-serif py-2 border-b border-gray-100">Shop</a>
            <a href="#" className="text-lg font-serif py-2 border-b border-gray-100">Our Story</a>
            <a href="#" className="text-lg font-serif py-2 border-b border-gray-100">Farmers</a>
            <a href="#" className="text-lg font-serif py-2 border-b border-gray-100">Recipes</a>
            <div className="flex flex-col gap-3 mt-4">
              <button className="w-full py-3 rounded-xl bg-harvest-green text-white font-medium">Get Started</button>
              <button className="w-full py-3 rounded-xl border border-harvest-green/20 font-medium">Login</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-harvest-green/10 text-harvest-green text-xs font-bold uppercase tracking-widest mb-6">
            Fresh from the soil
          </span>
          <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] mb-8 text-harvest-dark">
            Nature's Best, <br />
            <span className="italic text-harvest-earth">Delivered</span> to You.
          </h1>
          <p className="text-lg text-harvest-dark/70 mb-10 max-w-lg leading-relaxed">
            Experience the true taste of organic. We partner with local regenerative farmers to bring you seasonal, nutrient-dense produce that's good for you and the planet.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 rounded-full bg-harvest-green text-white font-medium text-lg hover:bg-harvest-dark transition-all flex items-center gap-2 group shadow-xl shadow-harvest-green/20">
              Start Your Box
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-full border border-harvest-green/20 text-harvest-dark font-medium text-lg hover:bg-white transition-all">
              View Seasonal Menu
            </button>
          </div>
          
          <div className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <img 
                  key={i}
                  src={`https://picsum.photos/seed/user${i}/100/100`} 
                  className="w-10 h-10 rounded-full border-2 border-harvest-cream object-cover"
                  referrerPolicy="no-referrer"
                  alt="User"
                />
              ))}
            </div>
            <p className="text-sm text-harvest-dark/60">
              <span className="font-bold text-harvest-dark">2,500+</span> families eating fresh this week
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative z-10">
            <img 
              src="https://picsum.photos/seed/organic-basket/800/1000" 
              alt="Organic Basket" 
              className="pill-image w-full max-w-md mx-auto shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-harvest-gold/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-harvest-green/10 rounded-full blur-3xl" />
          
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 -right-4 z-20 bg-white p-4 rounded-2xl shadow-xl border border-harvest-green/5 flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-harvest-gold rounded-full flex items-center justify-center text-white">
              <Star fill="currentColor" size={20} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-tighter text-harvest-dark/40">Top Rated</p>
              <p className="font-serif text-lg leading-none">Heirloom Tomatoes</p>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 -left-4 z-20 bg-white p-4 rounded-2xl shadow-xl border border-harvest-green/5 flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-harvest-green rounded-full flex items-center justify-center text-white">
              <Leaf size={20} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-tighter text-harvest-dark/40">100% Organic</p>
              <p className="font-serif text-lg leading-none">Zero Pesticides</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Leaf className="text-harvest-green" />,
      title: "Regenerative Farming",
      description: "We go beyond organic. Our farmers focus on soil health and biodiversity."
    },
    {
      icon: <Truck className="text-harvest-earth" />,
      title: "Zero-Waste Delivery",
      description: "Reusable crates and compostable packaging. No plastic, ever."
    },
    {
      icon: <Heart className="text-harvest-gold" />,
      title: "Fair Trade Always",
      description: "We ensure our farmers earn 3x more than the industry average."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-3xl bg-harvest-cream flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-serif mb-4">{feature.title}</h3>
              <p className="text-harvest-dark/60 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductGrid = () => {
  const products = [
    { name: "Seasonal Harvest Box", price: "$45", category: "Best Seller", img: "vegetables" },
    { name: "Organic Honeycrisp", price: "$12", category: "Fruits", img: "apple" },
    { name: "Wildflower Honey", price: "$18", category: "Pantry", img: "honey" },
    { name: "Sourdough Loaf", price: "$9", category: "Bakery", img: "bread" },
    { name: "Heirloom Carrots", price: "$6", category: "Vegetables", img: "carrot" },
    { name: "Fresh Kale Bunch", price: "$4", category: "Greens", img: "kale" },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-harvest-earth font-bold uppercase tracking-widest text-xs mb-4 block">This week's picks</span>
            <h2 className="text-5xl font-serif">Fresh from the <span className="italic">Fields</span></h2>
          </div>
          <div className="flex gap-4">
            {['All', 'Vegetables', 'Fruits', 'Pantry'].map(cat => (
              <button key={cat} className="px-5 py-2 rounded-full text-sm font-medium border border-harvest-green/10 hover:bg-harvest-green hover:text-white transition-all">
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="card-soft overflow-hidden group"
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={`https://picsum.photos/seed/product-${product.img}/600/800`} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest">
                    {product.category}
                  </span>
                </div>
                <button className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-harvest-green text-white flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                  <ShoppingBasket size={20} />
                </button>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-serif">{product.name}</h3>
                  <span className="text-xl font-serif text-harvest-earth">{product.price}</span>
                </div>
                <p className="text-sm text-harvest-dark/50 mb-6">Locally sourced from Sunny Valley Farm</p>
                <button className="w-full py-3 rounded-xl border border-harvest-green/10 text-sm font-medium hover:bg-harvest-green hover:text-white transition-all">
                  Quick Add
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-10 py-4 rounded-full border-2 border-harvest-dark text-harvest-dark font-bold hover:bg-harvest-dark hover:text-white transition-all">
            Shop All Products
          </button>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-harvest-dark text-harvest-cream overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-harvest-green/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-harvest-earth/20 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">
              "The quality is <span className="italic text-harvest-gold">unmatched</span>. I can finally taste the seasons again."
            </h2>
            <div className="flex items-center gap-4">
              <img 
                src="https://picsum.photos/seed/chef/200/200" 
                alt="Chef" 
                className="w-16 h-16 rounded-full object-cover border-2 border-harvest-gold"
                referrerPolicy="no-referrer"
              />
              <div>
                <p className="font-serif text-xl">Elena Rodriguez</p>
                <p className="text-sm text-harvest-cream/50 uppercase tracking-widest">Executive Chef & Mother</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-[32px] border border-white/10">
                <p className="text-4xl font-serif mb-2">98%</p>
                <p className="text-sm text-harvest-cream/60 uppercase tracking-widest">Customer Satisfaction</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-[32px] border border-white/10">
                <p className="text-4xl font-serif mb-2">12k+</p>
                <p className="text-sm text-harvest-cream/60 uppercase tracking-widest">Meals Delivered</p>
              </div>
            </div>
            <div className="space-y-6 mt-12">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-[32px] border border-white/10">
                <p className="text-4xl font-serif mb-2">50+</p>
                <p className="text-sm text-harvest-cream/60 uppercase tracking-widest">Local Farm Partners</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-[32px] border border-white/10">
                <p className="text-4xl font-serif mb-2">0%</p>
                <p className="text-sm text-harvest-cream/60 uppercase tracking-widest">Plastic Waste</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="pt-24 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-harvest-green rounded-full flex items-center justify-center text-white">
                <Leaf size={18} />
              </div>
              <span className="text-xl font-serif font-bold text-harvest-dark">GreenHarvest</span>
            </div>
            <p className="text-harvest-dark/60 mb-8 leading-relaxed">
              Cultivating a healthier future through regenerative agriculture and community-driven food systems.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-harvest-cream flex items-center justify-center text-harvest-dark hover:bg-harvest-green hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-harvest-cream flex items-center justify-center text-harvest-dark hover:bg-harvest-green hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-harvest-cream flex items-center justify-center text-harvest-dark hover:bg-harvest-green hover:text-white transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-xl mb-6">Shop</h4>
            <ul className="space-y-4 text-harvest-dark/60">
              <li><a href="#" className="hover:text-harvest-green transition-colors">Weekly Boxes</a></li>
              <li><a href="#" className="hover:text-harvest-green transition-colors">Seasonal Produce</a></li>
              <li><a href="#" className="hover:text-harvest-green transition-colors">Pantry Staples</a></li>
              <li><a href="#" className="hover:text-harvest-green transition-colors">Gift Cards</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-xl mb-6">Company</h4>
            <ul className="space-y-4 text-harvest-dark/60">
              <li><a href="#" className="hover:text-harvest-green transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-harvest-green transition-colors">Farmer Network</a></li>
              <li><a href="#" className="hover:text-harvest-green transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-harvest-green transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-xl mb-6">Newsletter</h4>
            <p className="text-sm text-harvest-dark/60 mb-6">Get seasonal recipes and farm updates delivered to your inbox.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full px-6 py-4 rounded-full bg-harvest-cream border-none focus:ring-2 focus:ring-harvest-green outline-none text-sm"
              />
              <button className="absolute right-2 top-2 bottom-2 px-6 rounded-full bg-harvest-dark text-white text-xs font-bold uppercase tracking-widest">
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-12 border-t border-harvest-green/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-harvest-dark/40 uppercase tracking-widest">
            © 2026 GreenHarvest Organic Groceries. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-harvest-dark/40 uppercase tracking-widest">
            <a href="#" className="hover:text-harvest-dark transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-harvest-dark transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-harvest-green selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ProductGrid />
        <Testimonials />
        
        {/* CTA Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-harvest-gold rounded-[48px] p-12 md:p-24 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full blur-xl" />
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-2xl" />
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <h2 className="text-5xl md:text-7xl font-serif text-harvest-dark mb-8">
                  Ready to eat <span className="italic">better</span>?
                </h2>
                <p className="text-xl text-harvest-dark/70 mb-12 max-w-2xl mx-auto">
                  Join thousands of families who have switched to a more sustainable, delicious way of eating. First box is 20% off.
                </p>
                <button className="px-12 py-5 rounded-full bg-harvest-dark text-white font-bold text-xl hover:scale-105 transition-transform shadow-2xl shadow-harvest-dark/20">
                  Claim Your Discount
                </button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
