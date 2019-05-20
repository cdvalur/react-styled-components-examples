import React, { Fragment } from "react";

const Accordion = (props) => {
  return (
    <div title={props.title} isOpen={props.isOpen}>
      {props.children}
    </div>
  )
}

export default Accordion;