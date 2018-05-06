import React, { Component } from 'react';

/* Semantic UI */
import { Modal, Segment, Input, Button, Rating, Label } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

/* React Quill */
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

/* Text Edit */
import { TextEdit } from './textedit';

/*
 * This contains view only text box with label and update button.
 * Used for questions and answers value boxes.
 */
class TextView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '', // You can also pass a Quill Delta here
      data: {
        rating: 0,
        lastUpdate: 'unknown'
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.updateEvent = this.updateEvent.bind(this);

    /* React Quill setup */
    this.modules = {
      formula: true,
      toolbar: false
    };

    /* React Quill formats */
    this.formats = [];
  }

  handleChange(value) {
    this.setState({ text: value });
  }

  updateEvent() {
    console.log('Test click');
  }

  render() {
    let temp_label = this.props.label + ' ';
    return (
      <Segment>
        <p>{temp_label}</p>
        <Input label="Category" placeholder="None" readOnly={true} />
        <br />
        <br />
        <Input label="Sub-category" placeholder="None" readOnly={true} />
        <br />
        <br />
        <Rating maxRating={10} disabled={true} />
        <br />
        <br />
        <ReactQuill
          theme="snow"
          readOnly={true}
          value={this.state.text}
          modules={this.modules}
          onChange={this.handleChange}
        />
        <br />
        <Input label="Question Tag" placeholder="None" readOnly={true} />
        <br />
        <br />
        <Modal
          trigger={<Button circular size="tiny" icon="configure" content="Update" onClick={this.updateEvent} />}
          size="fullscreen">
          <Modal.Header content="Edit question" />
          <Modal.Content image>
            <TextEdit label="world" />
          </Modal.Content>
        </Modal>
      </Segment>
    );
  }
}

export { TextView };
