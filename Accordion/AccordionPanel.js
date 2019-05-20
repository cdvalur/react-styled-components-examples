import React, { Fragment } from "react";
import {AccordionContainer, AccordionPanelStyled, AccordionTitle, AccordionIcon} from './Styles/AccordionStyles';

const AccordionPanel = (props) => {

const onClick = () => {
    props.onClick(props.title);
  };

return(<Fragment>
<AccordionContainer>
    <AccordionTitle onClick={onClick}>{props.title}
    <AccordionIcon></AccordionIcon>
    </AccordionTitle>
    {props.isOpen && (<AccordionPanelStyled>
    {props.children}
    </AccordionPanelStyled>)}
</AccordionContainer>
</Fragment>)
}

export default AccordionPanel;