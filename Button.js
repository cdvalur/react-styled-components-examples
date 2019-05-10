import styled from 'styled-components';

const Button = styled.button`
width: 200px;
padding: 10px;
height: auto;
background-color: ${props => props.backgroundColor ? props.backgroundColor : 'pink'};
color:${props => props.textColor ? props.textColor : 'black'};
font-weight: bold;
display: block;
box-sizing: border-box;
border-color: green;
border-style: solid;
border-width: 1px;
margin: 10px;
text-align: center;
`
export default Button;