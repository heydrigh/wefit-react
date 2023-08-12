import { css, styled } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius.default};
    padding: 6.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `}
`;

export const Heading = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.large};
    font-weight: ${theme.fonts.weight.bold};
    text-align: center;
    color: ${theme.colors.secondary};
  `}
`;

export const Separator = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
    height: 1px;
    width: 44.7rem;
    margin-bottom: 3.2rem;
  `}
`;

export const Illustration = styled.img`
  margin-top: 3.2rem;
  position: relative;
`;

export const ButtonWrapper = styled.div`
  width: 18rem;
`;
