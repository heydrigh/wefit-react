import { ComponentType } from 'react';

import HeaderMenu from '@components/HeaderMenu';
import * as S from './styles';

const withLayout = <P extends object>(
  WrappedComponent: ComponentType<P>,
): ComponentType<P> =>
  function WithLayoutComponent(props: P) {
    return (
      <S.Wrapper>
        <HeaderMenu />
        <WrappedComponent {...props} />
      </S.Wrapper>
    );
  };

export default withLayout;
