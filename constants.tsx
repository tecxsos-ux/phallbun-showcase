
import { Product, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { nameKey: 'nav.home', path: '/' },
  { nameKey: 'nav.products', path: '/products' },
  { nameKey: 'nav.about', path: '/about' },
  { nameKey: 'nav.contact', path: '/contact' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'anti-age-repair',
    nameKey: 'items.antiage.name',
    subtitleKey: 'items.antiage.subtitle',
    image: 'https://i.ibb.co/DPdKwW3Z/product-antiage.jpg',
    ageRange: '25+',
    descriptionKeys: [
      'items.antiage.desc2',
      'items.antiage.desc3'
    ],
    featuresKeys: [
      'items.antiage.f1',
      'items.antiage.f2',
      'items.antiage.f3',
      'items.antiage.f4'
    ]
  },
  {
    id: 'daily-protective',
    nameKey: 'items.young.name',
    subtitleKey: 'items.young.subtitle',
    image: 'https://i.ibb.co/TxpSV4BN/product-cream.jpg',
    ageRange: '10–25',
    descriptionKeys: [
      'items.young.desc2'
    ],
    featuresKeys: [
      'items.young.f1',
      'items.young.f2',
      'items.young.f3',
      'items.young.f4',
      'items.young.f5'
    ]
  }
];

export const CONTACT_DETAILS = {
  name: 'PHALLBUN',
  address: 'Hüningerstrasse 14, 4056 Basel',
  email: 'phallbun.ck@gmail.com',
  phone: '+41 77 928 81 33'
};
