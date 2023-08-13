import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1.8rem 1rem;
`;

export const WeMovies = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.fonts.sizes.large};
    font-weight: ${theme.fonts.weight.bold};
    text-decoration: none;
  `}
`;

export const WordsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

export const MyCart = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.fonts.sizes.small};
    font-weight: ${theme.fonts.weight.semiBold};

    ${media.lessThan('small')`
      display: none;
    `}
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

export const CartWrapper = styled(Link)`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    &:hover {
      ${MyCart} {
        color: ${theme.colors.white};
      }

      ${ItemsQuantity} {
        color: ${theme.colors.tertiary};
      }
    }
  `}
`;
