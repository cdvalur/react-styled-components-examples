import React, { Fragment, useState } from "react";
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

      console.log(openSections);
  };

  return(<Fragment>
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
  </AccordionWrapperStyled>
  </Fragment>);
};

export default AccordionWrapper;