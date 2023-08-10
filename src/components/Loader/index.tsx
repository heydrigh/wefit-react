import loader from '@assets/icons/loader.png';
import * as S from './styles';

function Loader() {
  return (
    <S.SpinnerWrapper>
      <img src={loader} alt='loader' />
    </S.SpinnerWrapper>
  );
}

export default Loader;
