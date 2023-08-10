import withLayout from 'hocs/withLayout';
import Loader from '@components/Loader';
import * as S from './styles';

function Home() {
  return (
    <S.Container>
      <Loader />
    </S.Container>
  );
}

export default withLayout(Home);
