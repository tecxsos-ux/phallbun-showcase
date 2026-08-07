
import { Product, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { nameKey: 'nav.home', path: '/' },
  { nameKey: 'nav.products', path: '/products' },
  { nameKey: 'nav.about', path: '/about' },
  { nameKey: 'nav.contact', path: '/contact' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'serum-visage',
    nameKey: 'items.antiage.name',
    subtitleKey: 'items.antiage.subtitle',
    price: '89 CHF',
    image: '/img/serum-visage.jpg',
    infographicImage: '/img/serum-infographic.jpg',
    ageRange: 'All Skin Types',
    descriptionKeys: [
      'items.antiage.desc1',
      'items.antiage.desc2',
      'items.antiage.desc3'
    ],
    featuresKeys: [
      'items.antiage.f1',
      'items.antiage.f2',
      'items.antiage.f3',
      'items.antiage.f4',
      'items.antiage.f5',
      'items.antiage.f6',
      'items.antiage.f7',
      'items.antiage.f8'
    ]
  },
  {
    id: 'creme-visage',
    nameKey: 'items.young.name',
    subtitleKey: 'items.young.subtitle',
    price: '69 CHF',
    image: '/img/creme-visage.jpg',
    infographicImage: '/img/creme-infographic.jpg',
    ageRange: 'All Skin Types',
    descriptionKeys: [
      'items.young.desc1',
      'items.young.desc2'
    ],
    featuresKeys: [
      'items.young.f1',
      'items.young.f2',
      'items.young.f3',
      'items.young.f4',
      'items.young.f5',
      'items.young.f6',
      'items.young.f7'
    ]
  }
];

export const CONTACT_DETAILS = {
  name: 'PHALLBUN',
  address: 'Hüningerstrasse 14, 4056 Basel',
  email: 'phallbun.ck@gmail.com',
  phone: '+41 77 928 81 33',
  facebook: 'https://www.facebook.com/share/1cfW2ipi4T/?mibextid=wwXIfr',
  instagram: 'https://www.instagram.com/phallbunpb/',
  tiktok: 'https://www.tiktok.com/@phallbun.ch'
};
