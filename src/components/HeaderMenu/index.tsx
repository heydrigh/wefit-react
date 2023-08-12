import bagIcon from '@assets/icons/bagIcon.svg';
import useAppSelector from '@hooks/useAppSelector';
import { pluralize } from '@utils/strings';
import { RoutesEnum } from '@routes/routes';
import * as S from './styles';

function HeaderMenu() {
  const { items } = useAppSelector((state) => state.cart);

  const totalItems = items.reduce(
    (acc, currentItem) => acc + currentItem.quantity,
    0,
  );

  return (
    <S.Wrapper>
      <S.WeMovies to={RoutesEnum.Home}>WeMovies</S.WeMovies>
      <S.CartWrapper to={RoutesEnum.Cart}>
        <S.WordsWrapper>
          <S.MyCart>Meu Carrinho</S.MyCart>
          <S.ItemsQuantity>
            {pluralize(totalItems, 'item', 'itens')}
          </S.ItemsQuantity>
        </S.WordsWrapper>
        <S.BagIcon src={bagIcon} alt='Bag icon' />
      </S.CartWrapper>
    </S.Wrapper>
  );
}

export default HeaderMenu;
