import { bastketAtom, productsAtom } from '../state/atoms';

import { Product } from '../types';
import React from 'react';
import { useAtom } from 'jotai';

const ProductList: React.FC = () => {
const [products,] = useAtom(productsAtom);
const [, setBastket] = useAtom(bastketAtom);

  const addToBastket = (product: Product) => {
    setBastket((prevBastket) => {
      const existingItem = prevBastket.find((item) => item.id === product.id);
      if (existingItem) {
        return prevBastket.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevBastket, { ...product, quantity: 1 }];
    });
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="mb-2 flex justify-between items-center">
            <span>{product.name} - £{product.price.toFixed(2)}</span>
            <button
              onClick={() => addToBastket(product)}
              className="bg-blue-500 text-white px-2 py-1 rounded"
            >
              Add to Bastket
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;