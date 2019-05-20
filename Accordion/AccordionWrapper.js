import React, {useState } from "react";
import { AccordionWrapperStyled } from './Styles/AccordionStyles';
import AccordionPanel from './AccordionPanel';
const AccordionWrapper = (props) => {
  const { children } = props;

const[ openSections, setOpenScetions] = useState({});
const onClick = title => {
    const isOpen = !!openSections[title];

    setOpenScetions({
          [title]: !isOpen
        });
  };

  return(
  <AccordionWrapperStyled>
    {children.map(child => (
          <AccordionPanel
            isOpen={!!openSections[child.props.title]}
            title={child.props.title}
            onClick={onClick}
          >
            {child.props.children}
          </AccordionPanel>
        ))}
  </AccordionWrapperStyled>);
};

export default AccordionWrapper;