import React from "react";
import {AccordionContainer, AccordionBody, AccordionTitle, AccordionIcon} from './styles';

const AccordionPanel = (props) => {

const onClick = () => {
    props.onClick(props.title);
  };

return(<AccordionContainer>
    <AccordionTitle onClick={onClick}>{props.title}
    <AccordionIcon isOpen={props.isOpen}></AccordionIcon>
    </AccordionTitle>
    {<AccordionBody isOpen={props.isOpen}>
    {props.children}
    </AccordionBody>}
</AccordionContainer>)
}

export default AccordionPanel;