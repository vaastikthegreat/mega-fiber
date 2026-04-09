import React, { useEffect, useState, useRef } from 'react';
import { Phone, Mail, Facebook, Instagram, Linkedin, Check, X, Wifi, Package, MapPin, ArrowRight, ArrowUp, Smartphone, Tv, CreditCard, Zap, Droplet, Flame, Database, Car, PhoneCall, MoreHorizontal, AlertCircle, Play, Apple, Shield, Landmark, MonitorPlay, Building2, Cable, ClipboardCheck, Clock, Router as RouterIcon, Rocket, Globe, Plus, Minus, Gauge, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';

const TopBar = () => (
  <div className="hidden md:flex justify-end items-center py-2 px-8 bg-white text-sm text-gray-600 border-b">
    <div className="flex items-center space-x-6">
      <span className="flex items-center"><Phone size={14} className="mr-2 text-emerald-600" /> Call: +91 - 9355548880</span>
      <span className="flex items-center"><Mail size={14} className="mr-2 text-emerald-600" /> info@megafiber.in</span>
      <div className="flex space-x-3">
        <Facebook size={14} className="cursor-pointer hover:text-emerald-600 transition-colors duration-500" />
        <Instagram size={14} className="cursor-pointer hover:text-emerald-600 transition-colors duration-500" />
        <Linkedin size={14} className="cursor-pointer hover:text-emerald-600 transition-colors duration-500" />
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path ? "text-emerald-600 font-bold" : "hover:text-emerald-600 transition-colors duration-500";
  
  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className="flex justify-between items-center py-4 px-4 md:px-8 bg-white sticky top-0 z-50 shadow-sm relative">
      <div className="flex items-center">
        {/* <Link to="/" className="flex items-center text-2xl font-bold text-slate-900">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center text-white mr-2">
            <Wifi size={24} />
          </div>
          Mega<span className="text-emerald-600">Fiber</span>
        </Link> */}
        <Link to="/" className="flex items-center text-2xl font-bold text-slate-900">
          <img src="mega-fiber-logo.png" alt="MegaFiber Logo" className="w-60" />
          </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8 font-medium text-gray-700">
        <Link to="/" className={isActive("/")}>Home</Link>
        <Link to="/about" className={isActive("/about")}>About</Link>
        <Link to="/services" className={isActive("/services")}>Services</Link>
        <Link to="/contact" className={isActive("/contact")}>Contact Us</Link>
        <Link to="/recharge" className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2 rounded-full font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-500 flex items-center">
          <Zap size={18} className="mr-2" /> Recharge
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="text-emerald-600 focus:outline-none p-2">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 md:hidden overflow-hidden"
          >
            <div className="flex flex-col py-4 px-6 space-y-4 font-medium text-gray-700">
              <Link to="/" className={isActive("/")}>Home</Link>
              <Link to="/about" className={isActive("/about")}>About</Link>
              <Link to="/services" className={isActive("/services")}>Services</Link>
              <Link to="/contact" className={isActive("/contact")}>Contact Us</Link>
              <Link to="/recharge" className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2 rounded-full font-bold hover:shadow-lg transition-all duration-500 flex items-center justify-center mt-2">
                <Zap size={18} className="mr-2" /> Recharge
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onOpenModal }: { onOpenModal: (type: string, data?: string) => void }) => (
  <div className="relative overflow-hidden bg-white pt-16 pb-32">
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-emerald-500 to-teal-600 transform rotate-45 opacity-10"></div>
      <div className="absolute top-20 right-0 w-1/2 h-full bg-slate-50 transform -skew-x-12 translate-x-20"></div>
      <div className="absolute bottom-10 right-10 md:right-32 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-gradient-to-tr from-emerald-600 to-teal-400 transform rotate-12 z-0 opacity-90 clip-triangle"></div>
    </div>

    <div className="container mx-auto px-8 relative z-10 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-12 md:mb-0">
        <h2 className="text-xl font-bold text-slate-800 tracking-wider mb-2 uppercase">Ultra Fast Entertainment</h2>
        <div className="flex items-baseline mb-4">
          <h1 className="text-8xl md:text-[150px] font-black text-slate-900 leading-none tracking-tighter">500</h1>
          <span className="text-2xl md:text-3xl font-bold text-white bg-slate-800 px-4 py-2 ml-2 rounded-md">Mbps</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 uppercase">Starts From ₹499 Per Month</h3>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button onClick={() => onOpenModal('contact')} className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-3 rounded-md font-medium flex items-center justify-center hover:shadow-lg transition-all duration-500">
            Contact Now <ArrowRight size={18} className="ml-2" />
          </button>
        </div>
      </div>
      <div className="md:w-1/2 relative">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRBpmwmN8G5s4T8U3jJAxWvuvwV5p6OiilwQ&s" alt="img001" className="relative z-10 rounded-2xl shadow-2xl object-cover h-[300px] md:h-[450px] w-full" referrerPolicy="no-referrer" />
      </div>
    </div>
  </div>
);

const PricingCard = ({ title, price, speed, features, recommended = false, ribbonText = "", onSelect }: any) => (
  <div className={`relative bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 flex flex-col ${recommended ? 'transform md:scale-105 z-10 border-emerald-500 border-2' : ''}`}>
    {ribbonText && (
      <div className="absolute top-4 -left-10 w-40 bg-emerald-500 text-white text-xs font-bold py-1 text-center transform -rotate-45 shadow-md">
        {ribbonText}
      </div>
    )}
    <div className="p-8 flex-grow flex flex-col items-center text-center border-b border-gray-100">
      <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white mb-4 shadow-lg ${recommended ? 'bg-emerald-500' : 'bg-slate-900'}`}>
        <Wifi size={28} />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <div className="flex items-baseline justify-center mb-2">
        <span className="text-4xl font-black text-emerald-600">₹{price}</span>
        <span className="text-gray-500 ml-1">/ Month</span>
      </div>
      <p className="text-sm text-gray-600">{speed}</p>
    </div>
    <div className="p-8 bg-gray-50 flex-grow flex flex-col">
      <ul className="space-y-4 mb-8 flex-grow">
        {features.map((feature: any, idx: number) => (
          <li key={idx} className="flex items-start text-sm text-gray-700">
            {feature.included ? (
              <Check size={18} className="text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
            ) : (
              <X size={18} className="text-red-500 mr-3 flex-shrink-0 mt-0.5" />
            )}
            <span className={feature.included ? '' : 'text-gray-400 line-through'}>{feature.text}</span>
          </li>
        ))}
      </ul>
      <button onClick={() => onSelect(title)} className={`w-full py-3 font-bold rounded-md transition-colors duration-500 mt-auto ${recommended ? 'bg-emerald-500 text-white hover:bg-emerald-600' : 'border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white'}`}>
        GET STARTED
      </button>
    </div>
  </div>
);

const Pricing = ({ onOpenModal }: { onOpenModal: (type: string, data?: string) => void }) => {
  const featuresList = [
    { text: "35+ OTT APPS", included: true },
    { text: "350+ Live HD TV Channels", included: true },
    { text: "Easy Online Payment", included: true },
    { text: "Free unlimited Local & STD", included: true },
    { text: "Landline", included: false },
    { text: "No Data Limit", included: true },
    { text: "₹ 1000 Security Deposit on Monthly Plan", included: false },
  ];

  return (
    <div className="relative py-24 bg-white">
      <div className="absolute left-0 top-0 w-1/3 h-full bg-slate-900 transform -skew-x-12 -translate-x-20 z-0 hidden md:block"></div>
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="text-center mb-16">
          <h4 className="text-emerald-600 font-bold tracking-wider uppercase mb-2">Pricing Plan</h4>
          <h2 className="text-4xl font-black text-slate-900">Choose your plan</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          <PricingCard 
            title="Only Internet" price="399" speed="75 Mbps for 6 months" 
            features={featuresList.map((f, i) => i === 0 || i === 1 || i === 4 || i === 6 ? {...f, included: false} : f)}
            ribbonText="SINGLE PERSON"
            onSelect={(plan: string) => onOpenModal('plan', plan)}
          />
          <PricingCard 
            title="Internet Plus" price="534" speed="150 Mbps for 1 month" 
            features={featuresList.map((f, i) => i === 0 || i === 4 || i === 6 ? {...f, included: false} : f)}
            ribbonText="PEOPLE CHOICE"
            onSelect={(plan: string) => onOpenModal('plan', plan)}
          />
          <PricingCard 
            title="Internet Plus" price="699" speed="300 Mbps for 1 month" 
            features={featuresList.map((f, i) => i === 6 ? {...f, included: false} : {...f, included: true})}
            recommended={true}
            ribbonText="BEST SELLER"
            onSelect={(plan: string) => onOpenModal('plan', plan)}
          />
          <PricingCard 
            title="Internet Plus" price="1799" speed="1000 Mbps for 1 month" 
            features={featuresList.map((f, i) => i === 4 || i === 6 ? {...f, included: false} : f)}
            ribbonText="BIG SCREEN+"
            onSelect={(plan: string) => onOpenModal('plan', plan)}
          />
        </div>
      </div>
    </div>
  );
};

const CustomPackage = () => (
  <div className="py-20 bg-white relative overflow-hidden border-t border-gray-100">
    <div className="container mx-auto px-8 flex flex-col md:flex-row items-center justify-between relative z-10">
      <div className="flex items-center md:w-1/2 mb-10 md:mb-0">
        <div className="w-20 h-20 mr-6 text-emerald-500 hidden sm:block">
          <Package size={80} strokeWidth={1} />
        </div>
        <div>
          <h4 className="text-emerald-600 font-bold tracking-wider uppercase mb-2">Can't find the right package</h4>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Configure your own package now</h2>
          <Link to="/contact" className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-3 rounded-md font-medium flex items-center hover:shadow-lg transition-all duration-500 w-max">
            Contact Now <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
      <div className="md:w-1/2 relative w-full">
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100 to-transparent transform skew-x-12 -z-10"></div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRBpmwmN8G5s4T8U3jJAxWvuvwV5p6OiilwQ&s" alt="VR Gaming" className="rounded-xl shadow-xl object-cover h-[300px] w-full" referrerPolicy="no-referrer" />
      </div>
    </div>
  </div>
);

const ServiceVan = () => (
  <div className="py-24 bg-white relative overflow-hidden">
    <div className="absolute left-0 top-0 w-1/2 h-full bg-slate-900 transform -skew-x-12 -translate-x-20 z-0 hidden md:block"></div>
    <div className="absolute right-0 bottom-0 w-1/3 h-1/2 bg-emerald-50 transform skew-x-12 translate-x-10 z-0"></div>
    
    <div className="container mx-auto px-8 flex flex-col md:flex-row items-center relative z-10">
      <div className="md:w-1/2 mb-10 md:mb-0 relative w-full">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRBpmwmN8G5s4T8U3jJAxWvuvwV5p6OiilwQ&s" alt="Service Van" className="rounded-xl shadow-2xl object-cover h-[350px] w-full relative z-10" referrerPolicy="no-referrer" />
        <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-emerald-500 rounded-xl z-0 hidden sm:block"></div>
      </div>
      <div className="md:w-1/2 md:pl-20 text-center md:text-left">
        <h4 className="text-emerald-600 font-bold tracking-wider uppercase mb-2">We are at your service</h4>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Call +91 - 9355548880</h2>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-slate-900 relative pt-40 pb-8 mt-32">
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-3/4 lg:w-2/3 bg-gradient-to-r from-emerald-600 to-teal-800 rounded-2xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between z-20">
      <div className="mb-6 md:mb-0 md:mr-8 text-white text-center md:text-left">
        <h3 className="text-2xl md:text-3xl font-bold mb-2">Sign up for our newsletter</h3>
        <p className="text-emerald-100">Stay up to update with our latest news and products.</p>
      </div>
      <div className="flex flex-col sm:flex-row w-full md:w-auto">
        <input type="email" placeholder="Your Email Address" className="px-4 py-3 w-full md:w-64 rounded-t-md sm:rounded-l-md sm:rounded-t-none focus:outline-none text-slate-900" />
        <button className="bg-slate-900 text-white px-6 py-3 rounded-b-md sm:rounded-r-md sm:rounded-b-none font-bold hover:bg-slate-800 transition-colors duration-500">
          Subscribe
        </button>
      </div>
    </div>

    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#10b981 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>

    <div className="container mx-auto px-8 relative z-10 flex flex-col items-center">
      <div className="flex items-center text-3xl font-bold text-white mb-12">
        {/* <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center text-white mr-3">
          <Wifi size={28} />
        </div> */}
        {/* Mega<span className="text-emerald-500">Fiber</span> */}
         <Link to="/" className="flex bg-white rounded items-center text-2xl font-bold text-slate-900">
          <img src="mega-fiber-logo.png" alt="MegaFiber Logo" className="w-60" />
          </Link>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12 mb-12 text-gray-300">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full border border-emerald-500 flex items-center justify-center text-emerald-500 mr-4">
            <Phone size={18} />
          </div>
          <span>+91 - 9355548880</span>
        </div>
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full border border-emerald-500 flex items-center justify-center text-emerald-500 mr-4">
            <Mail size={18} />
          </div>
          <span>info@megafiber.in</span>
        </div>
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full border border-emerald-500 flex items-center justify-center text-emerald-500 mr-4">
            <MapPin size={18} />
          </div>
          <span className="text-center md:text-left">Shop no 10, Pradhan Market Sector 122, Noida - 201301</span>
        </div>
      </div>

      <div className="flex space-x-4 mb-12">
        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-emerald-600 transition-colors duration-500"><Facebook size={18} /></a>
        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-emerald-600 transition-colors duration-500"><Linkedin size={18} /></a>
        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-emerald-600 transition-colors duration-500"><Instagram size={18} /></a>
      </div>

      <div className="text-gray-500 text-sm">
        <span className="text-emerald-500">MegaFiber</span> © All Rights Reserved - 2026
      </div>
    </div>
  </footer>
);

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');
  const navigate = useNavigate();

  const openModal = (type: string, plan: string = '') => {
    setModalType(type);
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(false);
    navigate('/thank-you');
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Hero onOpenModal={openModal} />
      <Pricing onOpenModal={openModal} />
      <CustomPackage />
      <ServiceVan />

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-slate-50">
              <h3 className="text-xl font-bold text-slate-900">
                {modalType === 'plan' ? `Request ${selectedPlan}` : 'Contact Us'}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-red-500 transition-colors">
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input type="text" required className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Enter your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number *</label>
                <input type="tel" required className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Enter mobile number" />
              </div>
              {modalType === 'plan' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Installation Address *</label>
                  <textarea required rows={3} className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Enter your full address"></textarea>
                </div>
              )}
              {modalType === 'contact' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                  <textarea required rows={3} className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="How can we help you?"></textarea>
                </div>
              )}
              <button type="submit" className="w-full bg-emerald-600 text-white font-bold py-3 rounded-md hover:bg-emerald-700 transition-colors duration-500 mt-4">
                Submit Request
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

const About = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="py-20 bg-slate-50 min-h-[60vh] overflow-hidden">
    <div className="container mx-auto px-8">
      <div className="max-w-3xl mx-auto text-center mb-24">
        <h4 className="text-emerald-600 font-bold tracking-wider uppercase mb-2">About Us</h4>
        <h2 className="text-4xl font-black text-slate-900 mb-6">Connecting You to the Digital World</h2>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Mega Fiber is a leading provider of ultra-fast broadband, reliable WiFi connections, and seamless recharge services. We are dedicated to delivering uninterrupted, high-speed internet to homes and businesses, ensuring you stay connected to what matters most.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-4xl font-black text-emerald-600 mb-2">10K+</h3>
            <p className="text-slate-900 font-medium">Happy Customers</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-4xl font-black text-emerald-600 mb-2">99.9%</h3>
            <p className="text-slate-900 font-medium">Uptime Guarantee</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-4xl font-black text-emerald-600 mb-2">24/7</h3>
            <p className="text-slate-900 font-medium">Customer Support</p>
          </div>
        </div>
      </div>

      {/* Reasons to Choose Us Section */}
      <div className="mt-32 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:40px_40px] opacity-5 pointer-events-none"></div>
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 relative z-10">
          <div>
            <div className="w-16 h-1.5 bg-emerald-600 mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Few Great Reasons Make<br />You Choose Us
            </h2>
          </div>
          <Link to="/services" className="mt-6 md:mt-0 bg-emerald-600 text-white px-8 py-3 rounded-md font-bold hover:bg-emerald-700 transition-colors flex items-center shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300">
            View Services <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-50 text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="w-20 h-20 mx-auto rounded-full border-2 border-emerald-500 flex items-center justify-center text-emerald-600 mb-6 bg-emerald-50">
              <Cable size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Fiber to the Home<br />(FTTH) Network</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Mega Fiber, Delhi's first Internet Provider with FTTH technology, ensures ultra-fast and reliable connectivity.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-8 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-50 text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="w-20 h-20 mx-auto rounded-full border-2 border-emerald-500 flex items-center justify-center text-emerald-600 mb-6 bg-emerald-50">
              <Tv size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">350+ IPTV Channels<br />and 35+ OTT Apps</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Enjoy 350+ IPTV channels, 10,000+ on-demand videos with Mega Fiber, a high-speed Internet Provider.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-8 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-50 text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="w-20 h-20 mx-auto rounded-full border-2 border-emerald-500 flex items-center justify-center text-emerald-600 mb-6 bg-emerald-50">
              <ClipboardCheck size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Flexible Plans For<br />Your Needs</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Mega Fiber, the reliable Internet Provider, lets you customize plans—pay only for the internet you actually need!
            </p>
          </div>
          {/* Card 4 */}
          <div className="bg-white p-8 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-50 text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="w-20 h-20 mx-auto rounded-full border-2 border-emerald-500 flex items-center justify-center text-emerald-600 mb-6 bg-emerald-50">
              <Clock size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">24/7 Customer<br />Support</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our Internet Provider team offers 24/7 technical support, ensuring seamless and reliable connectivity always.
            </p>
          </div>
        </div>
      </div>

      {/* Live Sport & TV shows Section */}
      <div className="mt-40 flex flex-col lg:flex-row items-center gap-16 relative">
        {/* Left Images */}
        <div className="lg:w-1/2 relative w-full">
          <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 w-[600px] h-[600px] bg-emerald-50 rounded-full opacity-50 pointer-events-none"></div>
          
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRBpmwmN8G5s4T8U3jJAxWvuvwV5p6OiilwQ&s" alt="TV Shows" className="rounded-xl shadow-2xl w-4/5 object-cover h-[500px] relative z-10" referrerPolicy="no-referrer" />
          
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRBpmwmN8G5s4T8U3jJAxWvuvwV5p6OiilwQ&s" alt="Remote Control" className="absolute top-1/4 -right-4 w-2/5 rounded-xl shadow-2xl border-4 border-white object-cover h-[200px] z-20" referrerPolicy="no-referrer" />
          
          <div className="absolute -bottom-10 -right-4 w-64 h-64 bg-emerald-600 rounded-full flex items-center justify-center border-8 border-white shadow-xl overflow-hidden z-30">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRBpmwmN8G5s4T8U3jJAxWvuvwV5p6OiilwQ&s" alt="Happy User" className="w-full h-full object-cover opacity-90 mix-blend-overlay" referrerPolicy="no-referrer" />
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 bg-white p-3 rounded-full shadow-lg">
              <RouterIcon size={24} className="text-emerald-600" />
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 mt-16 lg:mt-0 relative z-10">
          <div className="w-16 h-1.5 bg-emerald-600 mb-6"></div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
            Live Sport & TV shows<br />with Mega Fiber IPTV & OTT
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Experience the Best IPTV & OTT Solution with Mega Fiber, the Internet Provider that brings you seamless entertainment at the most affordable price! Watch your favourite movies, TV shows, and live sports in stunning UHD quality without interruptions. Never miss a moment of the biggest games and events—immerse yourself in the action from the comfort of your home.
          </p>

          <div className="space-y-8">
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-emerald-600 flex-shrink-0 mt-1 mr-4">
                <Check size={20} strokeWidth={3} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">A Reliable Connection</h4>
                <p className="text-gray-600">Ensures stable, fast, and uninterrupted connectivity.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-emerald-600 flex-shrink-0 mt-1 mr-4">
                <Check size={20} strokeWidth={3} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Powerful Secure Internet</h4>
                <p className="text-gray-600">Delivers ultra-fast speed with rock-solid protection for a seamless & safe online experience.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        // If we reached the end, scroll back to start
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Scroll by one card width
          const cardWidth = scrollRef.current.children[0].clientWidth + 24; // 24px is gap-6
          scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
      }
    }, 3000); // Auto scroll every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const openModal = (service: string) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(false);
    navigate('/thank-you');
  };

  const faqs = [
    {
      question: "Does Mega Fiber Offer Home Broadband And WiFi Services?",
      answer: "Yes, Mega Fiber provides high-speed home broadband and comprehensive WiFi solutions tailored for your needs."
    },
    {
      question: "Is IPTV Available With Mega Fiber's Broadband Plans?",
      answer: "Absolutely! Our high-speed internet supports IPTV services, giving you access to the best IPTV streaming experience."
    },
    {
      question: "Who Is The Best Internet Provider In Noida?",
      answer: "Mega Fiber is consistently rated as one of the top internet service providers in Noida, offering reliable and fast connectivity."
    },
    {
      question: "What Is The Best High-Speed Internet Service Available In My Area?",
      answer: "Please contact our support team or check our coverage map to find the best high-speed plans available in your specific location."
    }
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="py-20 bg-slate-50 min-h-[60vh] overflow-hidden">
      
      {/* Explore Our Services Section */}
      <div className="container mx-auto px-8 mb-32">
        <div className="text-center mb-16">
          <div className="w-16 h-1.5 bg-red-600 mx-auto mb-6 relative">
            <div className="absolute -left-1 -top-1 w-3.5 h-3.5 rounded-full bg-red-600"></div>
            <div className="absolute -right-1 -top-1 w-3.5 h-3.5 rounded-full bg-red-600"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">Explore Our Services</h2>
        </div>
        
        <div ref={scrollRef} className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth">
          {/* Card 1 - Dark */}
          <div onClick={() => openModal('Home Broadband')} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] flex-none snap-start bg-[#0a1128] p-10 shadow-[0_0_15px_rgba(0,0,0,0.05)] border border-gray-100 text-center hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col h-full relative overflow-hidden">
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-red-600/20 rounded-br-[100px] -translate-x-8 -translate-y-8"></div>
            <div className="absolute top-0 left-0 w-16 h-16 border-[3px] border-red-600/30 rounded-br-[80px] -translate-x-4 -translate-y-4"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 border-[3px] border-red-600/30 rounded-tl-[100px] translate-x-8 translate-y-8"></div>

            <div className="w-16 h-16 mx-auto flex items-center justify-center text-red-600 mb-6 relative z-10">
              <Gauge size={40} strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Home Broadband</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-8 flex-grow relative z-10">
              Mega Fiber provides high-speed Home Broadband solutions to homes and businesses,...
            </p>
            <div className="flex items-center justify-center text-white font-medium hover:text-red-400 transition-colors relative z-10">
              Learn More <ArrowRight size={18} className="ml-2" strokeWidth={1.5} />
            </div>
          </div>

          {/* Card 2 */}
          <div onClick={() => openModal('Internet Leased Line')} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] flex-none snap-start bg-white p-10 shadow-[0_0_15px_rgba(0,0,0,0.05)] border border-gray-100 text-center hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col h-full">
            <div className="w-16 h-16 mx-auto flex items-center justify-center text-red-600 mb-6">
              <Rocket size={40} strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Internet Leased<br/>Line</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
              Experience unparalleled connectivity with Mega Fiber's Internet Leased Line — a...
            </p>
            <div className="flex items-center justify-center text-slate-900 font-medium hover:text-red-600 transition-colors">
              Learn More <ArrowRight size={18} className="ml-2" strokeWidth={1.5} />
            </div>
          </div>

          {/* Card 3 */}
          <div onClick={() => openModal('IPTV and OTT')} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] flex-none snap-start bg-white p-10 shadow-[0_0_15px_rgba(0,0,0,0.05)] border border-gray-100 text-center hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col h-full">
            <div className="w-16 h-16 mx-auto flex items-center justify-center text-red-600 mb-6">
              <Tv size={40} strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">IPTV and OTT</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
              Transform your entertainment experience with Mega Fiber's IPTV & OTT services, offering seamles...
            </p>
            <div className="flex items-center justify-center text-slate-900 font-medium hover:text-red-600 transition-colors">
              Learn More <ArrowRight size={18} className="ml-2" strokeWidth={1.5} />
            </div>
          </div>

          {/* Card 4 */}
          <div onClick={() => openModal('Smart Business Broadband')} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] flex-none snap-start bg-white p-10 shadow-[0_0_15px_rgba(0,0,0,0.05)] border border-gray-100 text-center hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col h-full">
            <div className="w-16 h-16 mx-auto flex items-center justify-center text-red-600 mb-6">
              <Globe size={40} strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Smart Business<br/>Broadband</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
              Mega Fiber's Smart Business Broadband delivers high-speed internet designed for modern...
            </p>
            <div className="flex items-center justify-center text-slate-900 font-medium hover:text-red-600 transition-colors">
              Learn More <ArrowRight size={18} className="ml-2" strokeWidth={1.5} />
            </div>
          </div>

          {/* Card 5 */}
          <div onClick={() => openModal('Landline')} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] flex-none snap-start bg-white p-10 shadow-[0_0_15px_rgba(0,0,0,0.05)] border border-gray-100 text-center hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col h-full">
            <div className="w-16 h-16 mx-auto flex items-center justify-center text-red-600 mb-6">
              <PhoneCall size={40} strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Landline</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
              Mega Fiber's Landline Services leverage SIP (Session Initiation Protocol) technology, providin...
            </p>
            <div className="flex items-center justify-center text-slate-900 font-medium hover:text-red-600 transition-colors">
              Learn More <ArrowRight size={18} className="ml-2" strokeWidth={1.5} />
            </div>
          </div>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center mt-12 space-x-2">
          <div className="w-2 h-2 rounded-full bg-red-600"></div>
          <div className="w-2 h-2 rounded-full bg-red-300"></div>
        </div>
      </div>

      {/* Powerfully Secure Section */}
      <div className="relative py-24 mb-32">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-100 to-red-50/30 z-0"></div>
        <div className="container mx-auto px-8 relative z-10 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRBpmwmN8G5s4T8U3jJAxWvuvwV5p6OiilwQ&s" alt="Family watching TV" className="rounded-2xl shadow-2xl object-cover h-[400px] w-full" referrerPolicy="no-referrer" />
          </div>
          <div className="md:w-1/2 md:pl-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
              Not Just Fast, But<br/>Powerfully Secure!
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Experience the power of ultra-fast internet with rock-solid security. Enjoy seamless browsing, streaming, and gaming—without compromising on safety. Stay connected, stay protected!
            </p>
            <div className="flex items-baseline mb-8">
              <span className="text-3xl font-bold text-red-600">₹399/</span>
              <span className="text-xl font-bold text-red-600 ml-2">per month</span>
            </div>
            <button onClick={() => openModal('Secure Plan')} className="bg-red-600 text-white px-8 py-3 rounded-md font-bold hover:bg-red-700 transition-colors flex items-center shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300">
              Read More <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-8 relative">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:40px_40px] opacity-5 pointer-events-none"></div>
        
        <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
          {/* Left Side - FAQs */}
          <div className="lg:w-1/2 w-full">
            <div className="w-16 h-1.5 bg-red-600 mb-6 relative">
              <div className="absolute -left-1 -top-1 w-3.5 h-3.5 rounded-full bg-red-600"></div>
              <div className="absolute -right-1 -top-1 w-3.5 h-3.5 rounded-full bg-red-600"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-12">
              Few Great Reasons Make<br/>You Choose us
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300">
                  <button 
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className={`font-bold text-lg pr-4 ${openFaq === index ? 'text-red-600' : 'text-slate-900'}`}>
                      {faq.question}
                    </span>
                    <span className="text-slate-900 flex-shrink-0">
                      {openFaq === index ? <Minus size={24} className="text-red-600" /> : <Plus size={24} />}
                    </span>
                  </button>
                  
                  {/* Expandable Content */}
                  <div 
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="lg:w-1/2 w-full relative flex justify-center mt-12 lg:mt-0">
            {/* Decorative Background Shape */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-red-50 rounded-[40px] rotate-12 -z-10 border border-red-100"></div>
            
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRBpmwmN8G5s4T8U3jJAxWvuvwV5p6OiilwQ&s" alt="Woman using laptop" className="relative z-10 w-4/5 object-cover rounded-2xl drop-shadow-2xl" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-slate-50">
              <h3 className="text-xl font-bold text-slate-900">Request {selectedService}</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-red-500 transition-colors">
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input type="text" required className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Enter your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number *</label>
                <input type="tel" required className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Enter mobile number" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Installation Address *</label>
                <textarea required rows={3} className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Enter your full address"></textarea>
              </div>
              <button type="submit" className="w-full bg-emerald-600 text-white font-bold py-3 rounded-md hover:bg-emerald-700 transition-colors duration-500 mt-4">
                Send Request
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

const ContactUs = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="py-20 bg-white min-h-[60vh]">
    <div className="container mx-auto px-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2">
          <h4 className="text-emerald-600 font-bold tracking-wider uppercase mb-2">Contact Us</h4>
          <h2 className="text-4xl font-black text-slate-900 mb-6">Get in Touch</h2>
          <p className="text-gray-600 mb-8">Have questions about our plans or need technical support? Our team is here to help you 24/7.</p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-emerald-600 mr-4 flex-shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Our Location</h4>
                <p className="text-gray-600">Shop no 10, Pradhan Market Sector 122, Noida - 201301</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-emerald-600 mr-4 flex-shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Phone Number</h4>
                <p className="text-gray-600">+91 - 9355548880</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-emerald-600 mr-4 flex-shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Email Address</h4>
                <p className="text-gray-600">info@megafiber.in</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2 bg-slate-50 p-8 rounded-xl border border-gray-100">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Enter you name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input type="email" className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Enter your email" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="How can we help you?"></textarea>
            </div>
            <button className="w-full bg-emerald-600 text-white font-bold py-3 rounded-md hover:bg-emerald-700 transition-colors duration-500">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </motion.div>
);

const Recharge = () => {
  const [activeTab, setActiveTab] = useState('Mobile');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const navItems = [
    { icon: Smartphone, label: 'Mobile' },
    { icon: Tv, label: 'DTH' },
    { icon: CreditCard, label: 'Data Card' },
    { icon: Zap, label: 'Electricity' },
    { icon: Wifi, label: 'Broadband' },
    { icon: Droplet, label: 'Water' },
    { icon: Flame, label: 'Gas' },
    { icon: Database, label: 'Cylinder' },
    { icon: Car, label: 'Fastag' },
    { icon: PhoneCall, label: 'Landline' },
    { icon: MoreHorizontal, label: '+More' },
  ];

  const operators = [
    { name: 'Jio', color: 'text-blue-600', bg: 'bg-blue-50' },
    { name: 'Airtel', color: 'text-red-600', bg: 'bg-red-50' },
    { name: 'VI', color: 'text-yellow-600', bg: 'bg-yellow-50' },
    { name: 'BSNL', color: 'text-blue-800', bg: 'bg-blue-50' },
    { name: 'MTNL', color: 'text-green-600', bg: 'bg-green-50' },
  ];

  const handlePayment = async (e: React.FormEvent, service: string) => {
    e.preventDefault();
    setPaymentError(null);
    setIsProcessing(true);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    // Find amount field (could be named differently depending on form, but we'll try to find it)
    let amountStr = formData.get('amount') as string;
    
    // If no amount in form data, try to find an input with placeholder "Enter Amount"
    if (!amountStr) {
      const amountInput = form.querySelector('input[placeholder*="Amount"]') as HTMLInputElement;
      if (amountInput) amountStr = amountInput.value;
    }
    
    // Default amount if not found or invalid
    const amount = parseFloat(amountStr) || 100;

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          service,
          details: `Payment for ${service} service`
        }),
      });

      const session = await response.json();
      
      if (session.error) {
        setPaymentError(session.error);
        setIsProcessing(false);
        return;
      }

      if (session.url) {
        window.location.href = session.url;
      } else {
        setPaymentError('Failed to get checkout URL');
        setIsProcessing(false);
      }
    } catch (error) {
      console.error('Payment error:', error);
      setPaymentError('Failed to initiate payment. Please try again.');
      setIsProcessing(false);
    }
  };

  const renderForm = () => {
    const inputClass = "w-full px-0 py-2 border-b border-gray-300 focus:border-emerald-500 focus:outline-none transition-colors bg-transparent";
    const labelClass = "block text-sm font-bold text-slate-700 mb-1";
    const btnClass = `w-full ${isProcessing ? 'bg-emerald-400 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-700'} text-white font-bold py-3 rounded-md mt-4 transition-colors duration-300 flex justify-center items-center`;

    const renderButton = (text: string) => (
      <button type="submit" className={btnClass} disabled={isProcessing}>
        {isProcessing ? (
          <span className="flex items-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </span>
        ) : text}
      </button>
    );

    switch (activeTab) {
      case 'Mobile':
        return (
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
            <h2 className="text-xl font-bold text-slate-900 mb-6">Mobile Recharge</h2>
            <div className="flex items-center space-x-6 mb-6">
              <label className="flex items-center cursor-pointer">
                <input type="radio" name="type" className="w-4 h-4 text-emerald-600 focus:ring-emerald-500 border-gray-300" defaultChecked />
                <span className="ml-2 text-slate-700 font-medium">Prepaid</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input type="radio" name="type" className="w-4 h-4 text-emerald-600 focus:ring-emerald-500 border-gray-300" />
                <span className="ml-2 text-slate-700 font-medium">Postpaid</span>
              </label>
            </div>
            <div className="space-y-5">
              <div>
                <label className={labelClass}>Mobile Number:</label>
                <input type="text" placeholder="Enter Mobile Number" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Operator :</label>
                <select className={`${inputClass} text-gray-500`}>
                  <option>Select Operator</option>
                  <option>Jio</option>
                  <option>Airtel</option>
                  <option>VI</option>
                  <option>BSNL</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Circle :</label>
                <select className={`${inputClass} text-gray-500`}>
                  <option>Select Circle</option>
                  <option>Delhi NCR</option>
                  <option>Mumbai</option>
                  <option>Maharashtra</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Amount :</label>
                <input type="text" placeholder="Enter Amount" className={inputClass} />
              </div>
              {renderButton('Proceed')}
            </div>
          </motion.div>
        );
      case 'DTH':
        return (
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
            <h2 className="text-xl font-bold text-slate-900 mb-6">DTH Recharge</h2>
            <div className="space-y-5">
              <div>
                <label className={labelClass}>Operator :</label>
                <select className={`${inputClass} text-gray-500`}>
                  <option>Select Operator</option>
                  <option>Tata Play</option>
                  <option>Airtel Digital TV</option>
                  <option>Dish TV</option>
                  <option>D2H</option>
                  <option>Sun Direct</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Subscriber ID / Smart Card No:</label>
                <input type="text" placeholder="Enter Subscriber ID" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Amount :</label>
                <input type="text" placeholder="Enter Amount" className={inputClass} />
              </div>
              {renderButton('Proceed')}
            </div>
          </motion.div>
        );
      case 'Data Card':
        return (
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
            <h2 className="text-xl font-bold text-slate-900 mb-6">Data Card Recharge</h2>
            <div className="flex items-center space-x-6 mb-6">
              <label className="flex items-center cursor-pointer">
                <input type="radio" name="dc_type" className="w-4 h-4 text-emerald-600 focus:ring-emerald-500 border-gray-300" defaultChecked />
                <span className="ml-2 text-slate-700 font-medium">Prepaid</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input type="radio" name="dc_type" className="w-4 h-4 text-emerald-600 focus:ring-emerald-500 border-gray-300" />
                <span className="ml-2 text-slate-700 font-medium">Postpaid</span>
              </label>
            </div>
            <div className="space-y-5">
              <div>
                <label className={labelClass}>Data Card Number:</label>
                <input type="text" placeholder="Enter Data Card Number" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Operator :</label>
                <select className={`${inputClass} text-gray-500`}>
                  <option>Select Operator</option>
                  <option>Jio</option>
                  <option>Airtel</option>
                  <option>VI</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Amount :</label>
                <input type="text" placeholder="Enter Amount" className={inputClass} />
              </div>
              {renderButton('Proceed')}
            </div>
          </motion.div>
        );
      case 'Electricity':
        return (
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
            <h2 className="text-xl font-bold text-slate-900 mb-6">Electricity Bill Payment</h2>
            <div className="space-y-5">
              <div>
                <label className={labelClass}>State :</label>
                <select className={`${inputClass} text-gray-500`}>
                  <option>Select State</option>
                  <option>Delhi</option>
                  <option>Maharashtra</option>
                  <option>Uttar Pradesh</option>
                  <option>Karnataka</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Electricity Board :</label>
                <select className={`${inputClass} text-gray-500`}>
                  <option>Select Board</option>
                  <option>BSES Rajdhani</option>
                  <option>BSES Yamuna</option>
                  <option>Tata Power</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Consumer Number :</label>
                <input type="text" placeholder="Enter Consumer Number" className={inputClass} />
              </div>
              {renderButton('Fetch Bill')}
            </div>
          </motion.div>
        );
      case 'Broadband':
        return (
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
            <h2 className="text-xl font-bold text-slate-900 mb-6">Broadband Bill Payment</h2>
            <div className="space-y-5">
              <div>
                <label className={labelClass}>Operator :</label>
                <select className={`${inputClass} text-gray-500`}>
                  <option>Select Operator</option>
                  <option>Mega Fiber</option>
                  <option>Airtel Xstream</option>
                  <option>JioFiber</option>
                  <option>BSNL Bharat Fiber</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Customer ID / Account No :</label>
                <input type="text" placeholder="Enter Customer ID" className={inputClass} />
              </div>
              {renderButton('Fetch Bill')}
            </div>
          </motion.div>
        );
      case 'Water':
        return (
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
            <h2 className="text-xl font-bold text-slate-900 mb-6">Water Bill Payment</h2>
            <div className="space-y-5">
              <div>
                <label className={labelClass}>Water Board :</label>
                <select className={`${inputClass} text-gray-500`}>
                  <option>Select Water Board</option>
                  <option>Delhi Jal Board</option>
                  <option>BWSSB Bengaluru</option>
                  <option>MCGM Water</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Consumer Number :</label>
                <input type="text" placeholder="Enter Consumer Number" className={inputClass} />
              </div>
              {renderButton('Fetch Bill')}
            </div>
          </motion.div>
        );
      case 'Gas':
        return (
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
            <h2 className="text-xl font-bold text-slate-900 mb-6">Piped Gas Bill Payment</h2>
            <div className="space-y-5">
              <div>
                <label className={labelClass}>Gas Provider :</label>
                <select className={`${inputClass} text-gray-500`}>
                  <option>Select Provider</option>
                  <option>Indraprastha Gas (IGL)</option>
                  <option>Mahanagar Gas (MGL)</option>
                  <option>Adani Gas</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Customer ID :</label>
                <input type="text" placeholder="Enter Customer ID" className={inputClass} />
              </div>
              {renderButton('Fetch Bill')}
            </div>
          </motion.div>
        );
      case 'Cylinder':
        return (
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
            <h2 className="text-xl font-bold text-slate-900 mb-6">Book a Cylinder</h2>
            <div className="space-y-5">
              <div>
                <label className={labelClass}>Gas Provider :</label>
                <select className={`${inputClass} text-gray-500`}>
                  <option>Select Provider</option>
                  <option>Bharat Gas</option>
                  <option>HP Gas</option>
                  <option>Indane Gas</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Registered Mobile No / LPG ID :</label>
                <input type="text" placeholder="Enter Mobile No or LPG ID" className={inputClass} />
              </div>
              {renderButton('Proceed')}
            </div>
          </motion.div>
        );
      case 'Fastag':
        return (
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
            <h2 className="text-xl font-bold text-slate-900 mb-6">Fastag Recharge</h2>
            <div className="space-y-5">
              <div>
                <label className={labelClass}>Fastag Issuer Bank :</label>
                <select className={`${inputClass} text-gray-500`}>
                  <option>Select Bank</option>
                  <option>ICICI Bank</option>
                  <option>HDFC Bank</option>
                  <option>Paytm Payments Bank</option>
                  <option>SBI</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Vehicle Registration Number :</label>
                <input type="text" placeholder="e.g. DL1AB1234" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Amount :</label>
                <input type="text" placeholder="Enter Amount" className={inputClass} />
              </div>
              {renderButton('Proceed')}
            </div>
          </motion.div>
        );
      case 'Landline':
        return (
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
            <h2 className="text-xl font-bold text-slate-900 mb-6">Landline Bill Payment</h2>
            <div className="space-y-5">
              <div>
                <label className={labelClass}>Operator :</label>
                <select className={`${inputClass} text-gray-500`}>
                  <option>Select Operator</option>
                  <option>BSNL Landline</option>
                  <option>MTNL Landline</option>
                  <option>Airtel Landline</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Landline Number (with STD) :</label>
                <input type="text" placeholder="Enter Landline Number" className={inputClass} />
              </div>
              {renderButton('Fetch Bill')}
            </div>
          </motion.div>
        );
      case '+More':
        return (
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
            <h2 className="text-xl font-bold text-slate-900 mb-6">More Services</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 border border-gray-200 rounded-lg flex flex-col items-center justify-center hover:border-emerald-500 hover:text-emerald-600 cursor-pointer transition-colors group">
                <Shield size={28} className="mb-2 text-slate-600 group-hover:text-emerald-600 transition-colors" />
                <span className="text-sm font-medium text-center">Insurance</span>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg flex flex-col items-center justify-center hover:border-emerald-500 hover:text-emerald-600 cursor-pointer transition-colors group">
                <Landmark size={28} className="mb-2 text-slate-600 group-hover:text-emerald-600 transition-colors" />
                <span className="text-sm font-medium text-center">Loan Repayment</span>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg flex flex-col items-center justify-center hover:border-emerald-500 hover:text-emerald-600 cursor-pointer transition-colors group">
                <MonitorPlay size={28} className="mb-2 text-slate-600 group-hover:text-emerald-600 transition-colors" />
                <span className="text-sm font-medium text-center">Cable TV</span>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg flex flex-col items-center justify-center hover:border-emerald-500 hover:text-emerald-600 cursor-pointer transition-colors group">
                <Building2 size={28} className="mb-2 text-slate-600 group-hover:text-emerald-600 transition-colors" />
                <span className="text-sm font-medium text-center">Municipal Tax</span>
              </div>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-slate-50 min-h-screen pb-20">
      {/* Dark Navigation Bar */}
      <div className="bg-slate-900 text-white relative">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between px-6 py-4 border-b border-slate-800">
          <div className="flex items-center text-emerald-400 font-bold">
            {(() => {
              const activeItem = navItems.find(item => item.label === activeTab);
              const ActiveIcon = activeItem?.icon;
              return ActiveIcon ? <ActiveIcon size={24} className="mr-3" /> : null;
            })()}
            {activeTab}
          </div>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white focus:outline-none p-2">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute top-full left-0 w-full bg-slate-900 z-40 border-b border-slate-800 overflow-hidden shadow-2xl"
            >
              <div className="flex flex-col py-2">
                {navItems.map((item, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => {
                      setActiveTab(item.label);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center py-3 px-6 cursor-pointer transition-colors duration-300 ${activeTab === item.label ? 'bg-slate-800 text-emerald-400 border-l-4 border-emerald-500' : 'text-gray-300 hover:bg-slate-800 hover:text-emerald-400 border-l-4 border-transparent'}`}
                  >
                    <item.icon size={20} className="mr-3" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Navigation */}
        <div className="hidden md:flex container mx-auto px-4 justify-between min-w-max">
          {navItems.map((item, idx) => (
            <div 
              key={idx} 
              onClick={() => setActiveTab(item.label)}
              className={`flex flex-col items-center py-4 px-6 cursor-pointer border-b-4 transition-colors duration-300 ${activeTab === item.label ? 'border-emerald-500 text-emerald-400' : 'border-transparent hover:text-emerald-400'}`}
            >
              <item.icon size={24} className="mb-2" />
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Warning Banner */}
      <div className="bg-yellow-50 border-b border-yellow-100">
        <div className="container mx-auto px-8 py-3 flex items-center text-yellow-700 text-sm font-medium">
          <AlertCircle size={16} className="mr-2 flex-shrink-0" />
          <p>Never respond to any KYC SMS or call alerts, it's mostly done via fraudsters as no telecom operator performs KYC over phone call</p>
        </div>
      </div>

      <div className="container mx-auto px-8 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Form */}
          <div className="col-span-1 bg-white p-6 rounded-xl shadow-sm border border-gray-100 min-h-[400px]">
            <form onSubmit={(e) => handlePayment(e, activeTab)}>
              {renderForm()}
              {paymentError && (
                <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-md flex items-start">
                  <AlertCircle size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                  <span>{paymentError}</span>
                </div>
              )}
            </form>
          </div>

          {/* Right Promo */}
          <div className="col-span-1 lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row">
            <div className="p-8 md:w-3/5 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-emerald-500 mb-1">RECHARGE OR PAY BILLS</h2>
              <h3 className="text-3xl font-black text-slate-900 mb-4">ON MEGA FIBER APP</h3>
              <p className="text-lg text-slate-700 mb-8">
                Instant discount upto <span className="text-red-500 font-bold">₹100</span><br/>on every recharge via app
              </p>
              
              <div className="flex space-x-6 mb-8 text-slate-600">
                <div className="flex flex-col items-center"><Zap size={24} className="mb-1 text-emerald-500" /><span className="text-xs">Electricity</span></div>
                <div className="flex flex-col items-center"><Wifi size={24} className="mb-1 text-emerald-500" /><span className="text-xs">Broadband</span></div>
                <div className="flex flex-col items-center"><Droplet size={24} className="mb-1 text-emerald-500" /><span className="text-xs">Water</span></div>
                <div className="flex flex-col items-center"><Flame size={24} className="mb-1 text-emerald-500" /><span className="text-xs">Gas</span></div>
                <div className="flex flex-col items-center"><MoreHorizontal size={24} className="mb-1 text-emerald-500" /><span className="text-xs">+More</span></div>
              </div>

              <div className="flex space-x-4">
                <button className="bg-slate-900 text-white px-4 py-2 rounded-md flex items-center hover:bg-slate-800 transition-colors">
                  <Play size={20} className="mr-2" />
                  <div className="text-left">
                    <div className="text-[10px] leading-none">GET IT ON</div>
                    <div className="font-bold text-sm leading-tight">Google Play</div>
                  </div>
                </button>
                <button className="bg-slate-900 text-white px-4 py-2 rounded-md flex items-center hover:bg-slate-800 transition-colors">
                  <Apple size={20} className="mr-2" />
                  <div className="text-left">
                    <div className="text-[10px] leading-none">Download on the</div>
                    <div className="font-bold text-sm leading-tight">App Store</div>
                  </div>
                </button>
              </div>
            </div>
            <div className="md:w-2/5 bg-emerald-50 relative min-h-[200px]">
              <div className="absolute inset-0 flex items-center justify-center p-6">
                 <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Happy Users" className="rounded-xl shadow-lg object-cover h-full w-full" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>

        {/* Operators Section */}
        <div className="mt-12 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-slate-900 mb-8 border-b pb-4">Select an Operator to Recharge</h3>
          <div className="flex flex-wrap justify-center md:justify-between gap-8">
            {operators.map((op, idx) => (
              <div key={idx} className="flex flex-col items-center cursor-pointer group">
                <div className={`w-20 h-20 rounded-full ${op.bg} flex items-center justify-center mb-3 shadow-sm border border-gray-100 group-hover:shadow-md transition-all duration-300 group-hover:-translate-y-1`}>
                  <span className={`font-black text-2xl ${op.color}`}>{op.name}</span>
                </div>
                <span className="font-medium text-slate-700 group-hover:text-emerald-600 transition-colors">{op.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SEO Text Section */}
        <div className="mt-12 bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-sm text-slate-700 space-y-6">
          <div>
            <h4 className="font-bold text-slate-900 text-base mb-2">Online Mobile Recharge & Bill Payments at Mega Fiber</h4>
            <p>Mega Fiber offers you to make hassle-free, fast, and secure mobile recharge for all operators and Bill Payments.</p>
            <p className="font-medium mt-2">Make online mobile recharges, bill payments and buy gift cards on Mega Fiber & earn exclusive cashback and rewards.</p>
          </div>
          
          <div>
            <h4 className="font-bold text-emerald-700 mb-2">Mobile Recharge</h4>
            <p><span className="text-emerald-600 cursor-pointer hover:underline">Jio recharge</span>, <span className="text-emerald-600 cursor-pointer hover:underline">Airtel recharge</span>, <span className="text-emerald-600 cursor-pointer hover:underline">VI recharge</span>, <span className="text-emerald-600 cursor-pointer hover:underline">BSNL recharge</span>, and <span className="text-emerald-600 cursor-pointer hover:underline">MTNL recharge</span>.</p>
          </div>

          <div>
            <h4 className="font-bold text-emerald-700 mb-2">DTH Recharge</h4>
            <p><span className="text-emerald-600 cursor-pointer hover:underline">Tata Sky recharge</span>, <span className="text-emerald-600 cursor-pointer hover:underline">Dish Tv recharge</span>, <span className="text-emerald-600 cursor-pointer hover:underline">D2H recharge</span>, <span className="text-emerald-600 cursor-pointer hover:underline">Airtel DTH recharge</span> & <span className="text-emerald-600 cursor-pointer hover:underline">Sun Direct recharge</span>.</p>
          </div>

          <div>
            <h4 className="font-bold text-emerald-700 mb-2">Online Bill Payment</h4>
            <p>Pay bills like <span className="text-emerald-600 cursor-pointer hover:underline">Electricity</span>, <span className="text-emerald-600 cursor-pointer hover:underline">Water</span>, <span className="text-emerald-600 cursor-pointer hover:underline">Gas</span>, <span className="text-emerald-600 cursor-pointer hover:underline">Broadband</span>, <span className="text-emerald-600 cursor-pointer hover:underline">Postpaid</span>, <span className="text-emerald-600 cursor-pointer hover:underline">Landline</span>, and more on Mega Fiber.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 100);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
};

const ThankYou = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const sessionId = searchParams.get('session_id');

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="py-32 bg-slate-50 min-h-[60vh] flex items-center justify-center">
      <div className="container mx-auto px-8 text-center">
        <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
          <Check size={48} strokeWidth={3} />
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
          {sessionId ? 'Payment Successful!' : 'Thank You!'}
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          {sessionId 
            ? 'Your recharge/payment has been processed successfully. A confirmation has been sent to your registered email.' 
            : 'Your request has been received. Our team will contact you soon.'}
        </p>
        <Link to="/" className="inline-flex items-center bg-emerald-600 text-white px-8 py-3 rounded-md font-bold hover:bg-emerald-700 transition-colors duration-500">
          Back to Home <ArrowRight size={18} className="ml-2" />
        </Link>
      </div>
    </motion.div>
  );
};

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
    >
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="text-emerald-600"
      >
        <Wifi size={80} strokeWidth={2} />
      </motion.div>
    </motion.div>
  );
};

const PageLoader = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>
      {children}
    </>
  );
};

export default function App() {
  return (
    <Router>
      <PageLoader>
        <ScrollToTop />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          className="min-h-screen bg-slate-50 font-sans flex flex-col"
        >
          <TopBar />
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/recharge" element={<Recharge />} />
              <Route path="/thank-you" element={<ThankYou />} />
            </Routes>
          </div>
          <Footer />
        </motion.div>
      </PageLoader>
    </Router>
  );
}
