import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fullWidthStyle, withCenteredContentStyle, withBorderStyle } from './CardStyle';

const Card = styled.div`
  background-color: ${props => props.theme.colors[props.backgroundColor] || props.backgroundColor};
  padding: ${props => props.theme.spacing.large}px;
  border-radius: ${props => props.theme.edgeSize.medium * 2}px;
  box-sizing: border-box;

  ${fullWidthStyle}
  ${withCenteredContentStyle}
  ${withBorderStyle}
`;

Card.propTypes = {
  fullWidth: PropTypes.bool,
  centered: PropTypes.bool,
  backgroundColor: PropTypes.oneOf(['primary', 'secondary', 'light', 'dark']) || PropTypes.string,
  borderWidth: PropTypes.oneOf(['small', 'medium', 'large']) || PropTypes.number,
  borderColor: PropTypes.oneOf(['primary', 'secondary', 'light', 'dark']) || PropTypes.string,
  borderStyle: PropTypes.string
};

Card.defaultProps = {
  fullWidth: false,
  centered: false,
  backgroundColor: 'light',
  borderStyle: 'solid'
};

export default Card;
