import { Product } from '@services/slices/cart/types';

export interface MovieCardProps {
  movie: Product;
  itemQuantity: number;
  onClick: () => void;
}
