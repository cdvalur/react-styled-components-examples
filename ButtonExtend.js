import Button from './Button';
import styled from 'styled-components';
//  over rides existing styles
const ExtendedButton = styled(Button)`
background-color: green;
color: white;
`;

export default ExtendedButton;
