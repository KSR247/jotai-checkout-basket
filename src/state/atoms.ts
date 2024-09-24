import { BastketItem, Product } from '../types';

import { atom } from 'jotai';

export const bastketAtom = atom<BastketItem[]>([]);

export const bastketTotalAtom = atom((get) => {
  const bastket = get(bastketAtom);
  return bastket.reduce((total, item) => total + item.price * item.quantity, 0);
});

export const BastketItemCountAtom = atom((get) => {
  const bastket = get(bastketAtom);
  return bastket.reduce((count, item) => count + item.quantity, 0);
});

export const productsAtom = atom<Promise<Product[]>>(async () => {
    const response = await fetch('https://mocki.io/v1/4a869733-27e4-43f2-9b92-81db52767edc');
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    return data.products;
  });

  export const clearBasketAtom = atom(
    null, 
    (get, set) => {
      set(bastketAtom, []);
    }
  );