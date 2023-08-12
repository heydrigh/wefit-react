import Button from '@components/Button';
import girlHolding from '@assets/girlHolding.png';
import { useNavigate } from 'react-router-dom';
import { RoutesEnum } from '@routes/routes';
import * as S from './styles';

function EmptyCart() {
  const navigate = useNavigate();
  const handleBackButton = () => {
    navigate(RoutesEnum.Home);
  };

  return (
    <S.Wrapper>
      <S.Heading>Parece que não há nada por aqui :(</S.Heading>
      <S.Illustration src={girlHolding} alt='Girl hold sign' />
      <S.Separator />
      <S.ButtonWrapper>
        <Button onClick={handleBackButton}>VOLTAR</Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}

export default EmptyCart;
