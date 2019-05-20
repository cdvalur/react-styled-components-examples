import React, { Fragment } from "react";

const Accordion = (props) => {
  return (
    <div title={props.title}>
      {props.children}
    </div>
  )
}

export default Accordion;