import { BastketItemCountAtom, bastketTotalAtom, clearBasketAtom } from '../state/atoms';

import React from 'react';
import { useAtom } from 'jotai';

const CheckoutSummary: React.FC = () => {
  const [total] = useAtom(bastketTotalAtom);
  const [itemCount] = useAtom(BastketItemCountAtom);
  const [, clearBasket] = useAtom(clearBasketAtom);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Checkout Summary</h2>
      <p>Total Items: {itemCount}</p>
      <p>Total Price: £{total.toFixed(2)}</p>
      <button className="bg-green-500 text-white px-4 py-2 rounded mt-4">
        Proceed to Checkout
      </button>
      <button onClick={clearBasket} className="bg-green-500 text-white px-4 py-2 rounded mt-4">
        Proceed to Checkout
      </button>
    </div>
    
  );
};

export default CheckoutSummary;