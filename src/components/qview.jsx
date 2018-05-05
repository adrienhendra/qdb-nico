import React, { Component } from 'react';

/* Semantic UI */
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

/* Text View */
import { TextView } from './textview';

/* Text Edit */
import { TextEdit } from './textedit';

/*
 * This contains view only text box with label and update button.
 * Used for questions and answers value boxes.
 */
class QView extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' }; // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ text: value });
  }

  render() {
    return (
      <div>
        <TextView />
        <TextEdit />
        <Button content="Save" />
        <Button content="Reset" />
        <Button content="Cancel" />
      </div>
    );
  }
}

export { QView };
