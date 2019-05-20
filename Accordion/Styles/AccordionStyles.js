import styled from 'styled-components';

const AccordionContainer = styled.div`
    display: block;
    border: 1px solid #FFF;
    padding: 5px 10px;
    background: #036196;
`;
const AccordionWrapperStyled = styled.div`
    display: block;
`;
const AccordionTitle = styled.div`
    padding:10px;
    font-size: 20px;
    font-weight: bold;
    display: inline-block;
    color: white
`;

const AccordionIcon = styled.div`
    float: right;
    position: relative;
    width: 15px;
    height: 15px;
    top: 15px;
    &:before,
    &:after{
        content: "";
        position: absolute;
        background-color: white;
        transition: transform 0.25s ease-out;
    }

    /* Vertical line */
    &:before{
        top: 0;
        left: 50%;
        width: 3px;
        height: 100%;
        margin-left: -2px;
    }

    /* horizontal line */
    &:after{
        top: 50%;
        left: 0;
        width: 100%;
        height: 3px;
        margin-top: -1px;
    }
     &:hover{
        cursor: pointer;
        
        &:before{ transform: rotate(90deg); }
        &:after{ transform: rotate(180deg); }
    }
`;
const AccordionSectionStyled = styled.div`
    cursor: pointer;
`;
const AccordionPanelStyled = styled.div`
   display: block;
`;


export {
  AccordionContainer,
  AccordionWrapperStyled,
  AccordionSectionStyled,
  AccordionPanelStyled,
  AccordionTitle,
  AccordionIcon
}