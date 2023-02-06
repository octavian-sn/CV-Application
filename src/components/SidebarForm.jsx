import React, { Component } from 'react';

class SidebarForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { address, phone, email, website } = this.props.data.contact;
    const skills = this.props.data.skills;
    const updateSkills = this.props.update.skills;
    const updateContact = this.props.update.contact;
    return (
      <div className="sidebar--form">
        <div className="form--contact">
          <h4>Contact</h4>
          <input
            type="text"
            name="address"
            placeholder="Address"
            onChange={(e) => updateContact(e)}
          />
          <input
            type="phone"
            name="phone"
            placeholder="Phone number"
            onChange={(e) => updateContact(e)}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => updateContact(e)}
          />
          <input
            type="text"
            name="website"
            placeholder="Website"
            onChange={(e) => updateContact(e)}
          />
        </div>
        <h4>Skills</h4>
        <textarea
          name="skills"
          id=""
          cols="32"
          rows="6"
          value={skills.join(', ')}
          onChange={(e) => updateSkills(e)}
        ></textarea>
      </div>
    );
  }
}

export default SidebarForm;
