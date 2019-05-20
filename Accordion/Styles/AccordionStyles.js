import styled, {css} from 'styled-components';

const AccordionContainer = styled.div`
    display: block;
    padding: 1px 10px;
`;
const AccordionWrapperStyled = styled.div`
    display: block;
`;
const AccordionTitle = styled.div`
    padding:10px;
    font-size: 1rem;
    font-weight: bold;
    color: white
    cursor: pointer
    background: #036196;
`;

const AccordionIcon = styled.div`
    float: right;
    position: relative;
    width: 15px;
    height: 15px;
    top: 4px;
    &:before,
    &:after{
        content: "";
        position: absolute;
        background-color: white;
        transition: transform 0.35s ease-out;
    }

    /* Vertical line */
    &:before{
        top: 0;
        left: 50%;
        width: 3px;
        height: 100%;
        margin-left: -2px;
        transform:${(props) => props.isOpen ? "rotate(90deg);": "none"}
    }

    /* horizontal line */
    &:after{
        top: 50%;
        left: 0;
        width: 100%;
        height: 3px;
        margin-top: -1px;
        transform:${(props) => props.isOpen ? "rotate(180deg);": "none"}
    }

`;
const AccordionBody = styled.div`
   display: block;
   background: white;
   max-height: 0px;
   overflow: hidden;
   visibility: ${(props) => props.isOpen ? "visible": "hidden"}
   transition: max-height 0.35s ease-in-out,visibility 0.35s ease-out;
  ${ props => props.isOpen && css`
    max-height: 500px;
  `};
`;


export {
  AccordionContainer,
  AccordionWrapperStyled,
  AccordionBody,
  AccordionTitle,
  AccordionIcon
}