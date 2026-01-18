
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % PRODUCTS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % PRODUCTS.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + PRODUCTS.length) % PRODUCTS.length);

  return (
    <div className="pt-20">
      {/* Hero Image Slider Section */}
      <section className="relative h-[90vh] overflow-hidden bg-black">
        <div className="absolute inset-0 animate-luxury-flow z-0 opacity-50"></div>

        {PRODUCTS.map((product, index) => (
          <div
            key={product.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <div className="absolute inset-0 bg-black/50 z-10" />
            <img
              src={product.image}
              alt={t(product.nameKey)}
              className={`w-full h-full object-cover transition-transform duration-[10000ms] ease-linear ${index === currentSlide ? 'scale-110' : 'scale-100'
                }`}
            />
          </div>
        ))}

        <div className="ambient-glow-circle"></div>

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <div className="max-w-5xl">
            <span className="text-gold tracking-[0.5em] uppercase mb-6 text-xs md:text-sm block animate-fade-in opacity-80">{t('hero.tagline')}</span>
            <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-8 leading-tight tracking-tight drop-shadow-2xl">
              {t(PRODUCTS[currentSlide].nameKey)}
            </h1>
            <p className="text-white/90 text-lg md:text-2xl mb-12 max-w-3xl mx-auto font-light italic tracking-wide">
              {t(PRODUCTS[currentSlide].subtitleKey)}
            </p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 justify-center">
              <Link
                to="/products"
                className="bg-gold hover:bg-white text-black px-12 py-5 font-bold uppercase tracking-[0.2em] transition-all duration-500 shadow-2xl shadow-gold/20 text-sm"
              >
                {t('hero.explore')}
              </Link>
              <Link
                to="/about"
                className="backdrop-blur-sm border border-white/30 hover:bg-white hover:text-black text-white px-12 py-5 font-bold uppercase tracking-[0.2em] transition-all duration-500 text-sm"
              >
                {t('hero.heritage')}
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute inset-y-0 left-4 right-4 z-30 flex items-center justify-between pointer-events-none">
          <button
            onClick={prevSlide}
            className="pointer-events-auto p-4 rounded-full border border-white/10 bg-black/40 backdrop-blur-md hover:bg-gold hover:text-black transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="pointer-events-auto p-4 rounded-full border border-white/10 bg-black/40 backdrop-blur-md hover:bg-gold hover:text-black transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex space-x-4">
          {PRODUCTS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-[2px] transition-all duration-700 ${index === currentSlide ? 'w-16 bg-gold' : 'w-6 bg-white/20'
                }`}
            />
          ))}
        </div>
      </section>

      {/* Philosophy Preview */}
      <section className="relative py-32 bg-black overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.03)_0%,_transparent_70%)] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -top-10 -left-10 w-full h-full border border-gold/10 z-0"></div>
              <img
                src="https://i.ibb.co/DPdKwW3Z/product-antiage.jpg"
                alt="Brand Identity"
                className="relative z-10 w-full h-[600px] object-cover contrast-[1.1] shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-10">
              <div className="space-y-4">
                <span className="text-gold tracking-[0.4em] uppercase font-bold text-xs block">{t('philosophy.tagline')}</span>
                <h2 className="text-5xl md:text-6xl font-serif text-white leading-tight">{t('philosophy.title')}</h2>
              </div>
              <p className="text-gray-400 text-xl leading-relaxed font-light italic">
                {t('philosophy.quote')}
              </p>
              <div className="space-y-6 pt-4 border-t border-white/10">
                <div className="flex items-center space-x-6">
                  <span className="text-gold text-2xl font-serif">01.</span>
                  <div>
                    <h4 className="text-white uppercase tracking-widest font-bold text-sm">{t('philosophy.feature1')}</h4>
                    <p className="text-gray-500 text-sm mt-1">{t('philosophy.feature1_sub')}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <span className="text-gold text-2xl font-serif">02.</span>
                  <div>
                    <h4 className="text-white uppercase tracking-widest font-bold text-sm">{t('philosophy.feature2')}</h4>
                    <p className="text-gray-500 text-sm mt-1">{t('philosophy.feature2_sub')}</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed font-light italic border-t border-white/10 pt-6">
                {t('philosophy.extra_text')}
              </p>
              <Link
                to="/about"
                className="inline-flex items-center space-x-4 group text-gold font-bold uppercase tracking-[0.2em] text-xs pt-6"
              >
                <span>{t('philosophy.discover')}</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform" size={16} />
              </Link>
            </div>
          </div>

          {/* Target Market Section */}
          <div className="mt-32 border-t border-white/10 pt-20">
            <h3 className="text-3xl font-serif text-white text-center mb-16 uppercase tracking-[0.2em]">{t('philosophy.target_market.title')}</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="bg-zinc-900/30 p-10 border border-white/5 hover:border-gold/30 transition-all duration-300">
                <h4 className="text-gold font-serif text-xl mb-6 uppercase tracking-widest">{t('philosophy.target_market.geo_title')}</h4>
                <p className="text-gray-400 font-light leading-relaxed">
                  {t('philosophy.target_market.geo_text')}
                </p>
              </div>

              <div className="bg-zinc-900/30 p-10 border border-white/5 hover:border-gold/30 transition-all duration-300">
                <h4 className="text-gold font-serif text-xl mb-6 uppercase tracking-widest">{t('philosophy.target_market.customers_title')}</h4>
                <p className="text-gray-400 font-light leading-relaxed">
                  {t('philosophy.target_market.customers_text')}
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-white/60 text-sm tracking-widest uppercase font-bold border border-gold/20 inline-block px-8 py-3 rounded-full">
                {t('philosophy.target_market.compliance')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
