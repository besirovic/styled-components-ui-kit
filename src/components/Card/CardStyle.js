import { css } from 'styled-components';

export const fullWidthStyle = css`
  ${props => props.fullWidth ? `
    width: 100%;
    display: flex;
  ` : `
    display: inline-flex;
  `}
`;

export const withCenteredContentStyle = css`
  ${props => props.centered ? `
    justify-content: center;
  ` : undefined}
`;

export const withBorderStyle = css`
  ${props => props.borderWidth && props.borderColor ? `
    border: ${props.borderWidth}px ${props.borderStyle} ${props.borderColor}
  ` : undefined}
`;
