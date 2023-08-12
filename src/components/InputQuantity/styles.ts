import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin: 0 1rem;
`;

export const Input = styled.input`
  ${({ theme }) => css`
    width: 6.2rem;
    height: 2.6rem;
    padding: 1.6rem;
    text-align: center;
    border: 1px solid #ccc;
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
    color: ${theme.colors.secondary};
    border-radius: ${theme.border.radius.default};
    border-color: ${theme.colors.borderGray};
  `}
`;
