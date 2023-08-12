import { CartItem } from './types';

export const calculateTotalPrice = (cartItems: CartItem[]) =>
  cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
