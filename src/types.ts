export interface Product {
    id: number;
    name: string;
    price: number;
  }
  
  export interface BastketItem extends Product {
    quantity: number;
  }