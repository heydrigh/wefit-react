import bagIcon from '@assets/icons/bagIcon.svg';
import useAppSelector from '@hooks/useAppSelector';
import { pluralize } from '@utils/strings';
import * as S from './styles';

function HeaderMenu() {
  const { items } = useAppSelector((state) => state.cart);

  const totalItems = items.reduce(
    (acc, currentItem) => acc + currentItem.quantity,
    0,
  );

  return (
    <S.Wrapper>
      <S.WeMovies>WeMovies</S.WeMovies>
      <S.CartWrapper>
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
