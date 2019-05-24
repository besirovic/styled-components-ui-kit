import PropTypes from 'prop-types';
import styled from 'styled-components';

import { hoveredStyle, disabledStyle } from './ButtonStyle';

const Button = styled.button`
  background-color: ${props => props.theme.colors[props.color]};
  color: ${props => ['light', 'default'].includes(props.color) ? props.theme.colors.dark : props.theme.colors.light};
  
  padding: ${props => props.color !== 'default' ? props.theme.spacing[props.size] + 'px' : undefined};
  border: none;
  border-radius: ${props => props.theme.edgeSize[props.size]}px;

  ${props => props.disabled !== true ? hoveredStyle : disabledStyle}

  &, &:active {
    outline: none;
  }
`;

Button.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool
};

Button.defaultProps = {
  color: 'default',
  size: 'medium',
  disabled: false
};

export default Button;
