import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.theme.button[props.color].backgroundColor[props.disabled ? 'hover' : 'default']};
  color: ${props => props.theme.button[props.color].color.default};
  
  padding: ${props => props.theme.button[props.size].padding};
  border: none;
  border-radius: 3px;

  &:hover {
  cursor: ${props => !props.disabled ? 'pointer' : 'not-allowed'};
    background-color: ${props => props.theme.button[props.color].backgroundColor.hover};
    color: ${props => props.theme.button[props.color].color.hover};
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
