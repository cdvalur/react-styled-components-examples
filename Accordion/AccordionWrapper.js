import React, {useState, useEffect } from "react";
import { AccordionWrapperStyled } from './styles';
import AccordionPanel from './AccordionPanel';
import { ThemeProvider } from 'styled-components';
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
    <ThemeProvider theme={props.theme}>
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
  </ThemeProvider>);
};
AccordionWrapper.defaultProps = {
  theme: {
    backgroundColor: "#036196",
    textColor: "white",
  }
}
export default AccordionWrapper;