import React, {useState, useEffect } from "react";
import { AccordionWrapperStyled } from './Styles/AccordionStyles';
import AccordionPanel from './AccordionPanel';
const AccordionWrapper = (props) => {
const { children, allowMultipleOpen } = props;  
const[ openSections, setOpenScetions] = useState({});
const init = () => {
  const openSections = {};
  props.children.forEach(child => {
          if (child.props.isOpen) {
            openSections[child.props.title] = true;
          }
      });
      return openSections;
}
 useEffect(() => {
    (async () => {
    const result = await init();
    setOpenScetions(result);
  })();
    
  }, []);

const onClick = title => {
    const isOpen = !!openSections[title];
    if (allowMultipleOpen) {
      setOpenScetions({
                ...openSections,
                [title]: !isOpen
              });

    }else{
        setOpenScetions({
              [title]: !isOpen
            });
    }
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