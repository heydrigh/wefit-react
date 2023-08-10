export interface Product {
  id: number;
  price: number;
  title: string;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}
