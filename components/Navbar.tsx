
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../types';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLangs, setShowLangs] = useState(false);
  const location = useLocation();
  const { lang, setLang, t } = useLanguage();

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
    { code: 'it', label: 'IT' },
    { code: 'de', label: 'DE' }
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-4 group">
            <img
              src="https://i.ibb.co/6JvL1qyh/logo.png"
              alt="PHALLBUN Logo"
              className="h-32 w-auto group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <span className="text-3xl font-serif font-bold tracking-[0.3em] text-gold hidden sm:block">PHALLBUN</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.nameKey}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium tracking-[0.2em] uppercase transition-all duration-300 relative group/link ${location.pathname === link.path ? 'text-gold' : 'text-white hover:text-gold'
                  }`}
              >
                {t(link.nameKey)}
                <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-gold transition-transform duration-300 origin-left ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover/link:scale-x-100'}`}></span>
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setShowLangs(!showLangs)}
                className="flex items-center space-x-2 text-white hover:text-gold transition-colors text-sm font-bold uppercase tracking-widest"
              >
                <Globe size={18} />
                <span>{lang.toUpperCase()}</span>
              </button>
              {showLangs && (
                <div className="absolute top-full right-0 mt-4 w-24 bg-zinc-950 border border-gold/20 py-2 shadow-2xl">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code); setShowLangs(false); }}
                      className={`w-full px-4 py-2 text-left text-xs tracking-widest hover:bg-gold hover:text-black transition-colors ${lang === l.code ? 'text-gold' : 'text-white'}`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-6">
            {/* Mobile Language Icon */}
            <div className="relative">
              <button onClick={() => setShowLangs(!showLangs)} className="text-white">
                <Globe size={24} />
              </button>
              {showLangs && (
                <div className="absolute top-full right-0 mt-4 w-20 bg-zinc-950 border border-gold/20 py-2">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code); setShowLangs(false); }}
                      className="w-full px-4 py-2 text-xs text-white hover:text-gold"
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gold focus:outline-none transition-colors duration-300"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 animate-fade-in-down">
          <div className="px-4 pt-4 pb-8 space-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.nameKey}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-5 text-lg font-serif tracking-[0.2em] uppercase transition-all ${location.pathname === link.path ? 'text-gold pl-8' : 'text-white hover:text-gold hover:pl-8'
                  }`}
              >
                {t(link.nameKey)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
