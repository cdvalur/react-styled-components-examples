import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Button from './Button';
import ExtendedButton from './ButtonExtend';
import ReversedButton from './ReversedButton';
import {Link, StyledLink} from './StyledLink'
import AccordionWrapper from './Accordion/AccordionWrapper';
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
          <AccordionWrapper>
            <div title="Button">
          <Button backgroundColor="yellow" textColor="green">Yellow Button</Button>
        </div>
        <div title="Extended Button">
         <ExtendedButton>Extended Button</ExtendedButton>
        </div>
          </AccordionWrapper>
         <p>
         
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
