import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius.default};
    padding: 2.4rem;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 1rem;
    border-bottom: 1px solid ${theme.colors.tertiary};
    padding-bottom: 2.1rem;
    margin-bottom: 2.1rem;
  `}
`;

export const Row = styled.div`
  grid-column: span 12;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

interface ColumnProps {
  columns?: number;
  justifyContent?: string;
}

export const Column = styled.div<ColumnProps>`
  ${({ columns = 4, justifyContent = 'flex-start' }) => css`
    flex: ${columns / 12};
    max-width: ${(columns / 12) * 100}%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: ${justifyContent};
  `}
`;

export const ProductWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Heading = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.tertiary};
    font-size: ${theme.fonts.sizes.small};
    font-weight: ${theme.fonts.weight.bold};
  `}
`;

export const Cover = styled.img`
  width: 8.9rem;
  height: 11.4rem;
`;

export const Details = styled.div`
  margin-left: 5.2rem;
`;

export const Title = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-size: ${theme.fonts.sizes.small};
    font-weight: ${theme.fonts.weight.bold};
  `}
`;

export const Price = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-size: ${theme.fonts.sizes.subtitle};
    font-weight: ${theme.fonts.weight.bold};
  `}
`;

export const BinButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  img {
    display: block;
  }
`;

export const BinIcon = styled.img``;

export const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ConfirmButtonWrapper = styled.div`
  width: 23.5rem;
`;

export const TotalWrapper = styled.div`
  width: 23.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TotalPrice = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-size: ${theme.fonts.sizes.xlarge};
    font-weight: ${theme.fonts.weight.bold};
    margin-left: 1rem;
  `}
`;
