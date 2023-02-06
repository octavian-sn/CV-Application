import React, { Component } from 'react';
import SidebarForm from './SidebarForm';
import InfoForm from './InfoForm';
import MainForm from './MainForm';
import '../styles/form.css';

class Form extends Component {
  constructor(props) {
    super(props);
  }
  state = {};

  render() {
    return (
      <div className="form">
        <InfoForm data={this.props.data} update={this.props.update} />
        <SidebarForm data={this.props.data} update={this.props.update} />
        <MainForm data={this.props.data} update={this.props.update} />
      </div>
    );
  }
}

export default Form;
