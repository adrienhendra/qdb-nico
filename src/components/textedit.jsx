import React, { Component } from 'react';

/* Semantic UI */
import { Segment, Input, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

/* React Quill */
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// import "react-quill/dist/quill.bubble.css";

/*
 * This contains editable text box with label and update button.
 * Used for questions and answers value boxes.
 */
class TextEdit extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' }; // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this);

    /* React Quill setup */
    this.modules = {
      formula: true,
      toolbar: [
        [{ header: [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
        ['link', 'image'],
        ['clean'],
        ['formula']
      ]
    };

    /* React Quill formats */
    this.formats = [
      'header',
      'bold',
      'italic',
      'underline',
      'strike',
      'blockquote',
      'list',
      'bullet',
      'indent',
      'link',
      'image'
    ];
  }

  handleChange(value) {
    this.setState({ text: value });
  }

  render() {
    let temp_label = this.props.label;
    return (
      <Segment>
        <p>{temp_label}</p>
        <ReactQuill
          theme="snow"
          readOnly={false}
          value={this.state.text}
          modules={this.modules}
          onChange={this.handleChange}
        />
        <br />
        <Input label="Question Tag" placeholder="None" readOnly={false} />
        <br />
        <br />
        <Button content="Save" />
        <Button content="Reset" />
        <Button content="Cancel" />
      </Segment>
    );
  }
}

export { TextEdit };
