
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 animate-luxury-flow opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intro Section */}
        <div className="text-center mb-24">
          <span className="text-gold tracking-[0.3em] uppercase text-sm font-bold opacity-80">{t('about.tagline')}</span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mt-4 mb-8">{t('about.title')}</h1>
          <div className="max-w-3xl mx-auto text-gray-400 italic text-xl font-light border-y border-white/10 py-10">
            {t('about.quote')}
          </div>
        </div>

        {/* Founder's Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="relative group">
            <div className="absolute inset-0 border border-gold transform translate-x-4 translate-y-4 z-0 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2 opacity-50" />
            <img 
              src="https://i.ibb.co/wrdQq0Xw/about-us-photo.jpg" 
              alt={t('about.founder_title')} 
              className="relative z-10 w-full h-[600px] object-cover shadow-2xl grayscale-[0.2] contrast-[1.1] group-hover:grayscale-0 transition-all duration-1000"
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl font-serif text-white border-l-4 border-gold pl-6 uppercase tracking-wider">{t('about.founder_title')}</h2>
            <div className="space-y-6 text-gray-300 leading-relaxed text-lg font-light">
              <p>{t('about.founder_p1')}</p>
              <p>{t('about.founder_p2')}</p>
              <p className="text-white italic font-medium">{t('about.founder_belief')}</p>
              <p>{t('about.founder_p3')}</p>
              <p>{t('about.founder_p4')}</p>
              <p className="text-gold font-serif text-2xl italic pt-4">
                {t('about.founder_footer')}
              </p>
            </div>
          </div>
        </div>

        {/* Why PHALLBUN / Karma Section */}
        <section className="bg-zinc-950/60 backdrop-blur-md p-16 md:p-24 border border-white/5 relative overflow-hidden shadow-2xl">
          <div className="absolute -right-20 -bottom-20 text-[200px] font-serif text-white/5 select-none uppercase pointer-events-none">Karma</div>
          <div className="max-w-4xl mx-auto relative z-10 text-center space-y-10">
            <h2 className="text-4xl md:text-5xl font-serif text-white uppercase tracking-widest">{t('about.why_title')}</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
            <p className="text-gray-400 text-xl leading-relaxed italic">
              {t('about.why_quote')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left pt-10">
              <div className="space-y-4 border-l border-gold/30 pl-8">
                <h4 className="text-gold font-serif text-2xl uppercase tracking-wider">{t('about.purpose_title')}</h4>
                <p className="text-gray-300 leading-relaxed font-light">
                  {t('about.purpose_text')}
                </p>
              </div>
              <div className="space-y-4 border-l border-gold/30 pl-8">
                <h4 className="text-gold font-serif text-2xl uppercase tracking-wider">{t('about.vision_title')}</h4>
                <p className="text-gray-300 leading-relaxed font-light">
                  {t('about.vision_text')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <div className="mt-32 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-gold tracking-widest uppercase">{t('about.philosophy_title')}</h2>
            <p className="text-gray-500 mt-4 uppercase tracking-[0.3em] text-xs">
              {t('about.simple')} • {t('about.honest')} • {t('about.gentle')} • {t('about.effective')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['simple', 'honest', 'gentle', 'effective'].map((item) => (
              <div key={item} className="p-10 border border-white/5 bg-zinc-900/40 backdrop-blur-sm text-center hover:border-gold/50 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="text-gold text-3xl mb-4 group-hover:scale-110 transition-transform duration-500 relative z-10">💎</div>
                <h3 className="text-white font-serif text-xl uppercase tracking-widest relative z-10">{t(`about.${item}`)}</h3>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
