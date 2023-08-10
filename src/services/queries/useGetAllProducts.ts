import { AxiosError } from 'axios';
import { useQuery, UseQueryOptions } from 'react-query';

import { productsApi, GetMoviesResponse } from '@services/api/routes';

type GetAllProductsOptions = UseQueryOptions<
  GetMoviesResponse,
  AxiosError,
  GetMoviesResponse
>;

export const getProductsQueryKey = 'getProductsQueryKey';

const getAllProducts = async () => {
  const { data } = await productsApi.getAllMovies();

  return data;
};

const useGetAllProducts = (options?: GetAllProductsOptions) =>
  useQuery<GetMoviesResponse, AxiosError, GetMoviesResponse>(
    getProductsQueryKey,
    getAllProducts,
    options,
  );

export default useGetAllProducts;
