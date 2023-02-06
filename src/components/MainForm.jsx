import React, { Component } from 'react';

class MainForm extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    const data = this.props.data.form;
    const addSection = this.props.update.addSection;
    const updateFormData = this.props.update.form;
    return (
      <form className="form--main" onSubmit={addSection}>
        <h4>Experience & Education</h4>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={data.title}
          onChange={(e) => updateFormData(e)}
        />
        <input
          type="text"
          name="institution"
          placeholder="Company/Institution"
          value={data.institution}
          onChange={(e) => updateFormData(e)}
        />
        <input
          type="text"
          name="interval"
          placeholder="Time frame"
          value={data.interval}
          onChange={(e) => updateFormData(e)}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={data.location}
          onChange={(e) => updateFormData(e)}
        />
        <textarea
          name="activity"
          cols="30"
          rows="4"
          placeholder="Job tasks and responsibilities.&#10;Leave empty if you're submitting an education field."
          value={data.activity}
          onChange={(e) => updateFormData(e)}
        ></textarea>
        <button id="add-button">Add</button>
      </form>
    );
  }
}

export default MainForm;
