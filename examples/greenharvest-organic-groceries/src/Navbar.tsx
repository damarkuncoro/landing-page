
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
