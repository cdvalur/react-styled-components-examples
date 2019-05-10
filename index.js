import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Button from './Button';
import ExtendedButton from './ButtonExtend';
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
          <Button backgroundColor="red" textColor="white">red Button</Button>
          <Button>default Button</Button>
        </p>
        <p>
          Extending Component Styles
         <ExtendedButton>Extended Button</ExtendedButton>
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
