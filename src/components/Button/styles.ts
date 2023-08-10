import styled, { css, DefaultTheme } from 'styled-components';
import { IButtonProps } from './types';

const ButtonModifiers = {
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary};
  `,
  success: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.success};
  `,
};

export const Wrapper = styled.button<Pick<IButtonProps, 'variant'>>`
  ${({ theme, variant }) => css`
    position: relative;
    height: 4rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.8rem;
    cursor: pointer;
    border-radius: ${theme.border.radius.default};
    color: ${theme.colors.white};
    ${!!variant && ButtonModifiers[variant](theme)}
  `}
`;
