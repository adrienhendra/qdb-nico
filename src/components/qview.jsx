import React, { Component } from 'react';

/* Semantic UI */
import { Segment, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

/* Text View */
import { TextView } from './textview';

/*
 * This contains view only text box with label and update button.
 * Used for questions and answers value boxes.
 */
class QView extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' }; // You can also pass a Quill Delta here
  }

  render() {
    return (
      <Segment>
        <TextView label="Hello" />
      </Segment>
    );
  }
}

export { QView };
