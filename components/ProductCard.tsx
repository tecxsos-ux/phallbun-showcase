
import React from 'react';
import { Product } from '../types';
import { Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { t } = useLanguage();

  return (
    <div className="group flex flex-col bg-zinc-900 border border-white/5 shadow-2xl transition-all duration-700 hover:shadow-gold/20 hover:border-gold/30">
      <div className="relative overflow-hidden aspect-[4/5]">
        <img
          src={product.image}
          alt={t(product.nameKey)}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 ease-out"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>

      </div>

      <div className="p-10 flex flex-col flex-grow bg-black/40 backdrop-blur-md">
        <h3 className="text-3xl font-serif text-white mb-2 group-hover:text-gold transition-colors duration-500">{t(product.nameKey)}</h3>
        <p className="text-gold tracking-widest uppercase text-xs font-bold mb-8 opacity-80">{t(product.subtitleKey)}</p>

        <div className="space-y-4 mb-10">
          {product.descriptionKeys.map((key, i) => (
            <p key={i} className="text-gray-400 text-sm leading-relaxed font-light">{t(key)}</p>
          ))}
        </div>

        <div className="mt-auto space-y-4">
          <div className="flex items-center space-x-4 mb-2">
            <div className="h-[1px] bg-gold/30 flex-grow"></div>
            <p className="text-white text-[10px] font-bold uppercase tracking-[0.3em] whitespace-nowrap">{t('products.focusesOn')}</p>
            <div className="h-[1px] bg-gold/30 flex-grow"></div>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {product.featuresKeys.map((key, i) => (
              <div key={i} className="flex items-start space-x-3 text-sm text-gray-300">
                <Check className="text-gold mt-1 shrink-0" size={12} />
                <span className="font-light">{t(key)}</span>
              </div>
            ))}
          </div>
        </div>

        <button className="mt-12 w-full py-5 bg-transparent border border-gold/40 text-gold hover:bg-gold hover:text-black hover:border-gold active:scale-[0.97] active:translate-y-0.5 transition-all duration-300 font-bold uppercase tracking-[0.25em] text-xs shadow-sm shadow-gold/5 outline-none focus:ring-1 focus:ring-gold/50">
          {t('products.orderNow')}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
