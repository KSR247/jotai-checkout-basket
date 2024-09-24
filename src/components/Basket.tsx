import { bastketAtom, bastketTotalAtom } from '../state/atoms';

import React from 'react';
import { useAtom } from 'jotai';

const Bastket: React.FC = () => {
  const [bastket, setBastket] = useAtom(bastketAtom);
  const [total] = useAtom(bastketTotalAtom);

  const updateQuantity = (id: number, quantity: number) => {
    setBastket((prevBastket) =>
      prevBastket.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item
      ).filter((item) => item.quantity > 0)
    );
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Bastket</h2>
      {bastket.length === 0 ? (
        <p>Your Bastket is empty</p>
      ) : (
        <>
          <ul>
            {bastket.map((item) => (
              <li key={item.id} className="mb-2 flex justify-between items-center">
                <span>{item.name} - £{item.price.toFixed(2)}</span>
                <div>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="bg-red-500 text-white px-2 py-1 rounded mr-2"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="bg-green-500 text-white px-2 py-1 rounded ml-2"
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-right">
            <strong>Total: £{total.toFixed(2)}</strong>
          </div>
        </>
      )}
    </div>
  );
};

export default Bastket;