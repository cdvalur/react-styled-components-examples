import styled from 'styled-components';

const Button = styled.button`
width: 200px;
height: 35px;
background-color: ${props => props.backgroundColor ? props.backgroundColor : 'pink'};
color:black;
font-weight: bold;
display: block;
box-sizing: border-box;
border-color: green;
border-style: solid;
border-width: 1px;
cursor: pointer;
margin: 10px
`
export default Button;