import React, { Component } from 'react';

class FieldsForm extends Component {
  constructor(props) {
    super(props);
  }

  renderFields = () => {
    const arr = [...this.props.data.experience, ...this.props.data.education];
    return (
      <ul>
        <p className="title">Experience & Education</p>
        {arr.map((field) => {
          return (
            <li className="" key={field.key}>
              <p>{field.title}</p>
              <button
                onClick={() => this.props.update.removeSection(field.key)}
              ></button>
            </li>
          );
        })}
      </ul>
    );
  };

  render() {
    return <div className="form--fields">{this.renderFields()}</div>;
  }
}

export default FieldsForm;
