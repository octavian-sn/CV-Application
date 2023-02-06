import React, { Component } from 'react';
import uniqid from 'uniqid';
import '../styles/main.css';

class Main extends Component {
  constructor(props) {
    super(props);
  }
  state = {};

  renderInfo = (info) => {
    return (
      <div className="main--info">
        <div className="main--info-name">
          <h1>{info.name}</h1>
          <h1>{info.surname}</h1>
        </div>
        <h3>{info.title.toUpperCase()}</h3>
        <h4>Summary</h4>
        <p>{info.about}</p>
      </div>
    );
  };

  renderExperienceEducation = (data, section) => {
    return (
      <div className="main--category">
        <h3 className="title">{section}</h3>
        {data.map((item) => {
          return (
            <div className="main--category-field" key={uniqid()}>
              <div className="field-left">
                <p className="title">{item.title}</p>
                <p className="info">{item.interval}</p>
              </div>
              <div className="field-right">
                <p className="title">{item.institution}</p>
                <p className="info">{item.location}</p>
                {item.activity && (
                  <p className="info activity">{item.activity}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    const { info, experience, education } = this.props;
    return (
      <div className="main">
        {this.renderInfo(info)}
        {this.renderExperienceEducation(experience, 'Experience')}
        {this.renderExperienceEducation(education, 'Education')}
      </div>
    );
  }
}

export default Main;
