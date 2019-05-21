import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Button from './Button';
import ExtendedButton from './ButtonExtend';
import ReversedButton from './ReversedButton';
import {Link, StyledLink} from './StyledLink'
import {AccordionWrapper, Accordion } from './Accordion';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Chandra'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <div style={{display: "flex"}}>
        <p>
         Get into  Styled Components
          <Button backgroundColor="yellow" textColor="green">Yellow Button</Button>
          <Button backgroundColor="red" textColor="white">Red Button</Button>
          <Button>Default Button</Button>
        </p>
        <p>
          Extending Component Styles
         <ExtendedButton>Extended Button</ExtendedButton>
        </p>
        <p>
          Using "as" polymorphic prop
         <Button as="a" href="/" theme={{textDecoration: "none"}}>Button as a Link</Button>
         Custom Rendered Component
         <Button as={ReversedButton}  style={{textDecoration: "none"}}>Reversed Button</Button>
        </p>
        <p>
          Styling any components <br/>
        <div>
        <Link>Unstyled, boring Link</Link>
        <br />
        <StyledLink>Styled, exciting Link</StyledLink>
        </div>
      </p>
  </div>
  <div>
      <h2>Accordions Multi Open</h2>
        <AccordionWrapper allowMultipleOpen theme={{backgroundColor: "yellow",textColor: "black"}}>
            <Accordion title="Button">
                <Button backgroundColor="yellow" textColor="green">Yellow Button</Button>
            </Accordion>
            <Accordion title="Extended Button">
                  <ExtendedButton>Extended Button</ExtendedButton>
            </Accordion>
        </AccordionWrapper>
    </div>
    <div>
      <h2>Accordions Collapsable</h2>
        <AccordionWrapper>
            <Accordion title="Button">
                <Button backgroundColor="yellow" textColor="green">Yellow Button</Button>
            </Accordion>
            <Accordion title="Extended Button">
                  <ExtendedButton>Extended Button</ExtendedButton>
            </Accordion>
        </AccordionWrapper>
    </div>
    <div>
      <h2>Accordions Default Open</h2>
        <AccordionWrapper>
            <Accordion title="Button" isOpen>
                <Button backgroundColor="yellow" textColor="green">Yellow Button</Button>
            </Accordion>
            <Accordion title="Extended Button">
                  <ExtendedButton>Extended Button</ExtendedButton>
            </Accordion>
        </AccordionWrapper>
    </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
