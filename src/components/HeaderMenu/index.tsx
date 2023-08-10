import bagIcon from '@assets/icons/bagIcon.svg';
import * as S from './styles';

function HeaderMenu() {
  return (
    <S.Wrapper>
      <S.WeMovies>WeMovies</S.WeMovies>
      <S.CartWrapper>
        <S.WordsWrapper>
          <S.MyCart>Meu Carrinho</S.MyCart>
          <S.ItemsQuantity>1 item</S.ItemsQuantity>
        </S.WordsWrapper>
        <S.BagIcon src={bagIcon} alt='Bag icon' />
      </S.CartWrapper>
    </S.Wrapper>
  );
}

export default HeaderMenu;
