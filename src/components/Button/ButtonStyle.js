import { css } from 'styled-components';

export const hoveredStyle = css`
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;

export const disabledStyle = css`
  opacity: 0.6;
  cursor: not-allowed;
`;
