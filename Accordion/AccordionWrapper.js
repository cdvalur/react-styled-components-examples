import React, { Fragment } from "react";
import { AccordionWrapperStyled } from './Styles/AccordionStyles';
import AccordionPanel from './AccordionPanel';
const AccordionWrapper = (props) => {
  const { children } = props;
  return(<Fragment>
  <AccordionWrapperStyled>
    {children.map(child => (
          <AccordionPanel
            title={child.props.title}
          >
            {child.props.children}
          </AccordionPanel>
        ))}
  </AccordionWrapperStyled>
  </Fragment>);
};

export default AccordionWrapper;