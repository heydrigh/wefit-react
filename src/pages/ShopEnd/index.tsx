import Button from '@components/Button';
import thumbsUp from '@assets/thumbsUp.png';
import { useNavigate } from 'react-router-dom';
import { RoutesEnum } from '@routes/routes';
import withLayout from 'hocs/withLayout';
import * as S from './styles';

function ShopEnd() {
  const navigate = useNavigate();
  const handleBackButton = () => {
    navigate(RoutesEnum.Home);
  };

  return (
    <S.Wrapper>
      <S.Heading>Compra realizada com sucesso!</S.Heading>
      <S.Illustration src={thumbsUp} alt='Thumbs up' />

      <S.ButtonWrapper>
        <Button onClick={handleBackButton}>VOLTAR</Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}

export default withLayout(ShopEnd);
