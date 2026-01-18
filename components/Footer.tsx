
import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_DETAILS } from '../constants';
import { Instagram, Facebook, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Brand */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <img src="https://i.ibb.co/6JvL1qyh/logo.png" alt="PHALLBUN Logo" className="h-16 w-auto" />
              <h2 className="text-3xl font-serif text-gold tracking-[0.2em] uppercase">PHALLBUN</h2>
            </div>
            <p className="text-gray-400 leading-relaxed italic text-lg max-w-sm">
              "Simple, honest, gentle, effective. Inspired by love, designed for confidence."
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white hover:text-gold transition-all duration-300 hover:-translate-y-1" aria-label="Instagram"><Instagram size={24} /></a>
              <a href="#" className="text-white hover:text-gold transition-all duration-300 hover:-translate-y-1" aria-label="Facebook"><Facebook size={24} /></a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-8">
            <h3 className="text-xl font-serif font-bold tracking-widest uppercase border-b border-gold/20 pb-4 inline-block">Explore</h3>
            <ul className="space-y-5">
              <li><Link to="/" className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 block">Home</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 block">Products</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 block">Our Story</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 block">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-xl font-serif font-bold tracking-widest uppercase border-b border-gold/20 pb-4 inline-block">Connect</h3>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4 text-gray-400 group">
                <MapPin className="text-gold shrink-0 group-hover:scale-110 transition-transform" size={24} />
                <span className="leading-relaxed">{CONTACT_DETAILS.address}</span>
              </li>
              <li className="flex items-center space-x-4 text-gray-400 group">
                <Mail className="text-gold shrink-0 group-hover:scale-110 transition-transform" size={24} />
                <span className="leading-relaxed transition-colors group-hover:text-white">{CONTACT_DETAILS.email}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-24 pt-10 border-t border-white/5 text-center text-gray-500 text-sm tracking-[0.1em]">
          <p>© {new Date().getFullYear()} PHALLBUN LUXURY SKINCARE. Crafted with sincerity.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
