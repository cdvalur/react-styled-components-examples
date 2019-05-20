import React, { Fragment } from "react";
import {AccordionContainer, AccordionPanelStyled, AccordionTitle, AccordionIcon} from './Styles/AccordionStyles';

const AccordionPanel = (props) => {
return(<Fragment>
<AccordionContainer>
    <AccordionTitle>{props.title}</AccordionTitle>
    <AccordionIcon></AccordionIcon>
    {props.isOpen && (<AccordionPanelStyled>
    {props.children}
    </AccordionPanelStyled>)}
</AccordionContainer>
</Fragment>)
}

export default AccordionPanel;