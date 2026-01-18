
import React, { useState } from 'react';
import { CONTACT_DETAILS } from '../constants';
import { MapPin, Mail, Phone, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t('contact.success_msg'));
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-20">
          <span className="text-gold tracking-[0.3em] uppercase text-sm">{t('contact.tagline')}</span>
          <h1 className="text-5xl md:text-6xl font-serif text-white mt-4">{t('contact.title')}</h1>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          <div className="space-y-12">
            <div className="bg-zinc-950 p-10 border border-white/5 space-y-8">
              <h2 className="text-3xl font-serif text-white">{t('contact.headquarters')}</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gold/10 p-3 rounded-full text-gold">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold tracking-widest uppercase text-xs mb-1">{t('contact.address_label')}</h4>
                    <p className="text-gray-400">{CONTACT_DETAILS.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gold/10 p-3 rounded-full text-gold">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold tracking-widest uppercase text-xs mb-1">{t('contact.email_label')}</h4>
                    <p className="text-gray-400">{CONTACT_DETAILS.email}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gold/10 p-3 rounded-full text-gold">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold tracking-widest uppercase text-xs mb-1">{t('contact.phone_label')}</h4>
                    <p className="text-gray-400">{CONTACT_DETAILS.phone}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="aspect-video flex items-center justify-center border border-gold/20 overflow-hidden bg-zinc-900 group">
              <img
                src="https://i.ibb.co/1YHDVN0X/brandname.png"
                alt="PHALLBUN Brand"
                className="max-h-full max-w-full object-contain p-8 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="bg-zinc-950 p-10 md:p-12 border border-white/5 shadow-2xl">
            <h3 className="text-2xl font-serif text-white mb-8">{t('contact.form_title')}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">{t('contact.name_label')}</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:border-gold outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">{t('contact.email_field_label')}</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:border-gold outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">{t('contact.subject_label')}</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:border-gold outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">{t('contact.message_label')}</label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:border-gold outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gold text-black py-4 px-8 font-bold uppercase tracking-widest flex items-center justify-center space-x-2 hover:bg-gold/80 transition-all shadow-gold"
              >
                <span>{t('contact.send_btn')}</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
