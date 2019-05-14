import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => !props.disabled ? props.theme.button[props.color].backgroundColor.default : props.theme.button.disabled.backgroundColor};
  color: ${props => !props.disabled ? props.theme.button[props.color].color.default : props.theme.button.disabled.color};
  
  padding: ${props => props.theme.button[props.size].padding};
  border: none;
  border-radius: 3px;

  &:hover {
  cursor: ${props => !props.disabled ? 'pointer' : 'disabled'};
    background-color: ${props => !props.disabled ? props.theme.button[props.color].backgroundColor.hover : undefined};
    color: ${props => !props.disabled ? props.theme.button[props.color].color.hover : undefined};
  }

  &, &:active {
    outline: none;
  }
`;

Button.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'dark', 'light', 'default']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool
};

Button.defaultProps = {
  color: 'default',
  size: 'medium',
  disabled: false
};

export default Button;
