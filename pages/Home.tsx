
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();

  const heroSlides = [
    {
      id: 'hero-duo',
      taglineKey: 'hero.tagline',
      titleKey: 'hero.slide0_title',
      subtitleKey: 'hero.slide0_sub',
      badgeKey: 'hero.slide0_badge',
      image: '/img/collection-hero.jpg'
    },
    {
      id: 'hero-serum',
      taglineKey: 'hero.tagline',
      titleKey: 'hero.slide1_title',
      subtitleKey: 'hero.slide1_sub',
      badgeKey: 'hero.slide1_badge',
      image: '/img/serum-infographic.jpg',
      secondaryImage: '/img/serum-visage.jpg'
    },
    {
      id: 'hero-creme',
      taglineKey: 'hero.tagline',
      titleKey: 'hero.slide2_title',
      subtitleKey: 'hero.slide2_sub',
      badgeKey: 'hero.slide2_badge',
      image: '/img/creme-infographic.jpg',
      secondaryImage: '/img/creme-visage.jpg'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div className="pt-20">
      {/* Redesigned Luxury Hero Section */}
      <section className="relative min-h-[90vh] overflow-hidden bg-black flex items-center justify-center py-16">
        <div className="absolute inset-0 animate-luxury-flow z-0 opacity-40"></div>
        <div className="ambient-glow-circle"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-8 text-left">
              <div className="space-y-4">
                <span className="text-gold tracking-[0.5em] uppercase text-xs md:text-sm font-bold block animate-fade-in opacity-90">
                  {t('hero.tagline')}
                </span>
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-white leading-tight tracking-tight drop-shadow-2xl">
                  {t(heroSlides[currentSlide].titleKey)}
                </h1>
                <p className="text-gray-300 text-lg md:text-2xl font-light italic tracking-wide">
                  {t(heroSlides[currentSlide].subtitleKey)}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="/products"
                  className="bg-gold hover:bg-white text-black px-10 py-4 font-bold uppercase tracking-[0.2em] transition-all duration-500 shadow-2xl shadow-gold/20 text-xs sm:text-sm"
                >
                  {t('hero.explore')}
                </Link>
                <Link
                  to="/about"
                  className="backdrop-blur-md border border-white/30 hover:bg-white hover:text-black text-white px-10 py-4 font-bold uppercase tracking-[0.2em] transition-all duration-500 text-xs sm:text-sm"
                >
                  {t('hero.heritage')}
                </Link>
              </div>

              {/* Slide selector pills */}
              <div className="pt-8 flex items-center space-x-3">
                {heroSlides.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlide(index)}
                    className={`px-4 py-2 rounded-full text-[11px] font-serif uppercase tracking-widest transition-all border ${
                      index === currentSlide
                        ? 'bg-gold text-black border-gold font-bold shadow-lg shadow-gold/20 scale-105'
                        : 'bg-black/40 text-gray-400 border-white/10 hover:border-gold/50 hover:text-white'
                    }`}
                  >
                    {t(slide.badgeKey)}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Hero Image Card Showcase */}
            <div className="lg:col-span-6 relative flex justify-center">
              <div className="relative w-full max-w-lg lg:max-w-xl group">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-gold/30 via-gold/10 to-gold/40 blur-xl opacity-70 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative rounded-2xl overflow-hidden border border-gold/30 bg-zinc-950/80 backdrop-blur-md shadow-2xl transition-all duration-700">
                  <img
                    src={heroSlides[currentSlide].image}
                    alt={t(heroSlides[currentSlide].titleKey)}
                    className="w-full h-[450px] sm:h-[550px] object-cover object-center transition-all duration-700 hover:scale-105"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 text-left">
                    <span className="text-gold text-xs font-bold uppercase tracking-widest block">
                      {t(heroSlides[currentSlide].badgeKey)}
                    </span>
                    <p className="text-white text-sm font-serif italic mt-1">
                      PHALLBUN Luxury Skincare · Bio Formula
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute inset-y-0 left-4 right-4 z-30 flex items-center justify-between pointer-events-none">
          <button
            onClick={prevSlide}
            className="pointer-events-auto p-4 rounded-full border border-white/10 bg-black/40 backdrop-blur-md hover:bg-gold hover:text-black text-white transition-all shadow-xl"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="pointer-events-auto p-4 rounded-full border border-white/10 bg-black/40 backdrop-blur-md hover:bg-gold hover:text-black text-white transition-all shadow-xl"
            aria-label="Next Slide"
          >
            <ChevronRight size={24} />
          </button>
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
                src="/img/collection-hero.jpg"
                alt="PHALLBUN Collection"
                className="relative z-10 w-full h-[600px] object-cover contrast-[1.05] shadow-2xl rounded-sm"
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
