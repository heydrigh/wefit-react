import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius.default};
    padding: 1rem 1.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `}
`;

export const MovieCover = styled.img`
  width: 14.7rem;
  height: 18.8rem;
  margin-bottom: 0.8rem;
`;

export const Title = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.xsmall};
    font-weight: ${theme.fonts.weight.bold};
    color: ${theme.colors.fontGray};
    margin-bottom: 0.2rem;
  `}
`;

export const Price = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.subtitle};
    font-weight: ${theme.fonts.weight.bold};
    color: ${theme.colors.fontGray};
    margin-bottom: 0.8rem;
  `}
`;

export const ButtonWrapper = styled.div`
  width: 28.8rem;
`;

export const Icon = styled.img``;

export const QuantityWrapper = styled.div`
  position: absolute;
  display: flex;
  margin: auto;
  left: 4rem;
`;

export const Quantity = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.xsmall};
    color: ${theme.colors.white};
  `}
`;

export const ButtonText = styled.p`
  ${({ theme }) => css`
    margin-left: 4rem;
    font-size: ${theme.fonts.sizes.xsmall};
    font-weight: ${theme.fonts.weight.bold};
    color: ${theme.colors.white};
  `}
`;
