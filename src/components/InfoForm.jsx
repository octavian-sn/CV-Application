import React, { Component } from 'react';

class InfoForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const updateInfo = this.props.update.info;
    return (
      <div className="form--info">
        <h4>Info</h4>
        <input
          type="text"
          name="name"
          placeholder="First Name"
          onChange={(e) => updateInfo(e)}
        />
        <input
          type="text"
          name="surname"
          placeholder="Last Name"
          onChange={(e) => updateInfo(e)}
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={(e) => updateInfo(e)}
        />
        <textarea
          name="about"
          cols="31"
          rows="8"
          placeholder="Summary"
          onChange={(e) => updateInfo(e)}
        ></textarea>
      </div>
    );
  }
}

export default InfoForm;
