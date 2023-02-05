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
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={address}
              onChange={(e) => updateContact(e)}
            />
          </label>
          <label>
            Phone:
            <input
              type="phone"
              name="phone"
              value={phone}
              onChange={(e) => updateContact(e)}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => updateContact(e)}
            />
          </label>
          <label>
            Website:
            <input
              type="text"
              name="website"
              value={website}
              onChange={(e) => updateContact(e)}
            />
          </label>
        </div>
        <label>
          {<h4>Skills</h4>}
          <textarea
            name="skills"
            id=""
            cols="50"
            rows="5"
            value={skills.join(', ')}
            onChange={(e) => updateSkills(e)}
          ></textarea>
        </label>
      </div>
    );
  }
}

export default SidebarForm;
