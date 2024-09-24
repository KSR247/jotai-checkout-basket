import Bastket from './components/Basket';
import CheckoutSummary from './components/CheckoutSummary';
import ProductList from './components/ProductList';
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Jotai Checkout Basket App</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        <ProductList />
        <Bastket />
        <CheckoutSummary />
      </div>
    </div>
  );
};

export default App;