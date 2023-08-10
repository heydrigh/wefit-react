import withLayout from 'hocs/withLayout';
import Loader from '@components/Loader';
import useGetAllProducts from '@services/queries/useGetAllProducts';
import useAppSelector from '@hooks/useAppSelector';
import MovieCard from '@components/MovieCard';
import { Product } from '@services/slices/cart/types';
import useAppDispatch from '@hooks/useAppDispatch';
import { addToCart } from '@services/slices/cart';
import * as S from './styles';

function Home() {
  const { data: products, isLoading } = useGetAllProducts();
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.cart);

  if (isLoading) return <Loader />;

  const handleClick = (product: Product) => {
    dispatch(addToCart(product));
  };

  return (
    <S.Wrapper>
      {products?.map((product) => (
        <MovieCard
          onClick={() => handleClick(product)}
          movie={product}
          itemQuantity={
            items.find((item) => item.id === product.id)?.quantity || 0
          }
        />
      ))}
    </S.Wrapper>
  );
}

export default withLayout(Home);
