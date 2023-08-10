import Button from '@components/Button';
import shoppingCartIcon from '@assets/icons/shoppingCartIcon.svg';
import * as S from './styles';
import { MovieCardProps } from './types';

function MovieCard({ movie, itemQuantity, onClick }: MovieCardProps) {
  return (
    <S.Wrapper>
      <S.MovieCover src={movie.image} />
      <S.Title>{movie.title}</S.Title>
      <S.Price>{movie.title}</S.Price>
      <S.ButtonWrapper>
        <Button
          onClick={onClick}
          variant={itemQuantity ? 'success' : 'primary'}
        >
          <S.QuantityWrapper>
            <S.Icon src={shoppingCartIcon} />
            <S.Quantity>{itemQuantity}</S.Quantity>
          </S.QuantityWrapper>
          <S.ButtonText>
            {itemQuantity ? 'ITEM ADICIONADO' : 'ADICIONAR AO CARRINHO'}
          </S.ButtonText>
        </Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}

export default MovieCard;
