import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  width: 100%;
  gap: 1.6rem;
  grid-template-columns: 1fr;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
