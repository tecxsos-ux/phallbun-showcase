
import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { useLanguage } from '../context/LanguageContext';

const Products: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-24 bg-black relative overflow-hidden min-h-screen animate-luxury-flow">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.05)_0%,_transparent_50%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 space-y-4">
          <span className="text-gold tracking-[0.3em] uppercase text-sm font-bold opacity-80">{t('products.tagline')}</span>
          <h1 className="text-5xl md:text-6xl font-serif text-white">{t('products.title')}</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light italic">
            {t('products.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Daily Care Note */}
        <div className="mt-24 bg-zinc-950/80 backdrop-blur-md p-10 border border-gold/20 relative overflow-hidden group shadow-2xl">
          <div className="absolute top-0 right-0 p-8 text-6xl text-gold/10 group-hover:text-gold/20 transition-colors duration-1000">☀️</div>
          <div className="max-w-3xl relative z-10">
            <h3 className="text-gold font-serif text-2xl mb-6 tracking-widest uppercase">{t('products.sunNote_title')}</h3>
            <p className="text-gray-300 leading-relaxed italic text-lg font-light">
              {t('products.sunNote_text')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
