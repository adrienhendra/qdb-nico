import React, { Component } from "react";

/* Semantic UI */
import { Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

/* React Quill */
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

/*
 * This contains view only text box with label and update button.
 * Used for questions and answers value boxes.
 */
class TextView extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" }; // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this);

    /* React Quill setup */
    this.modules = {
      formula: true,
      toolbar: []
    };

    /* React Quill formats */
    this.formats = [];
  }

  handleChange(value) {
    this.setState({ text: value });
  }

  render() {
    return (
      <div>
        <ReactQuill
          theme="snow"
          readOnly={true}
          value={this.state.text}
          modules={this.modules}
          onChange={this.handleChange}
        />
        <Button content="Save" />
        <Button content="Reset" />
        <Button content="Cancel" />
      </div>
    );
  }
}

export { TextView };
