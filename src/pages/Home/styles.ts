import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  display: grid;
  width: 100%;
  gap: 1.6rem;
  grid-template-columns: 1fr;

  ${media.greaterThan('small')`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${media.greaterThan('medium')`
    grid-template-columns: repeat(3, 1fr);
  `}
`;
