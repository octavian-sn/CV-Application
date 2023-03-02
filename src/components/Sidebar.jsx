import React, { Component } from 'react';
import uniqid from 'uniqid';
import '../styles/sidebar.css';

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    changePicture: false,
  };

  hover = () => {
    this.setState({
      changePicture: !this.state.changePicture,
    });
  };

  renderContact = () => {
    const details = this.props.contact;
    const arr = [];
    for (const field in details) {
      arr.push(
        <div className="contact--field" key={uniqid()}>
          <h4 className="title">{field.toUpperCase()}</h4>
          <p className="info">{details[field]}</p>
        </div>
      );
    }
    return <div className="contact">{arr}</div>;
  };

  renderSkills = () => {
    return (
      <div className="skills">
        <h3 className="title">Skills</h3>
        {this.props.skills.map((skill) => (
          <p className="info" key={uniqid()}>
            {skill}
          </p>
        ))}
      </div>
    );
  };

  render() {
    return (
      <div className="sidebar">
        <div className="picture">
          <img src={this.props.picture} alt="profile" />
          <input
            type="file"
            className={`${this.state.changePicture && 'opaque'}`}
            onChange={(e) => this.props.update(e)}
            onMouseEnter={this.hover}
            onMouseLeave={this.hover}
            value={''}
          ></input>
        </div>
        {this.renderContact()}
        {this.renderSkills()}
      </div>
    );
  }
}

export default Sidebar;
