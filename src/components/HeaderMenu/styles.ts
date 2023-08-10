import styled, { css } from 'styled-components';

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1.8rem 1rem;
`;

export const WeMovies = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.fonts.sizes.large};
    font-weight: ${theme.fonts.weight.bold};
  `}
`;

export const CartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WordsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

export const MyCart = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.fonts.sizes.small};
    font-weight: ${theme.fonts.weight.semiBold};
  `}
`;

export const ItemsQuantity = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.tertiary};
    font-size: ${theme.fonts.sizes.xsmall};
    font-weight: ${theme.fonts.weight.semiBold};
  `}
`;

export const BagIcon = styled.img`
  margin-left: 0.8rem;
`;
