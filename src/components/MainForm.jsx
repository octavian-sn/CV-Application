import React, { Component } from 'react';

class MainForm extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    const updateInfo = this.props.update.info;
    return (
      <div className="main--form">
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
            cols="30"
            rows="10"
            placeholder="Summary"
            onChange={(e) => updateInfo(e)}
          ></textarea>
        </div>
      </div>
    );
  }
}

export default MainForm;
