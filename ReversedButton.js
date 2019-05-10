import React from 'react';
const ReversedButton = props => <button {...props} children={props.children.split('').reverse()} />;

export default ReversedButton;