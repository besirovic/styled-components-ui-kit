import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fullWidthStyle, borderStyle, activeHoverStateStyle } from './InputStyle';

const Input = styled.input`
  padding: ${props => props.theme.spacing[props.size]}px;
  border-radius: ${props => props.theme.edgeSize[props.size]}px

  ${fullWidthStyle}
  ${borderStyle}
  ${activeHoverStateStyle}  
`;

Input.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  fullWidth: PropTypes.bool
};

Input.defaultProps = {
  size: 'medium',
  fullWidth: false
};

export default Input;
