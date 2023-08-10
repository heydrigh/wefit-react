import { Product } from '@services/slices/cart/types';
import { api } from '.';

export type GetMoviesResponse = Product[];

export const productsApi = {
  getAllMovies: () => api.get<GetMoviesResponse>('/products'),
};
