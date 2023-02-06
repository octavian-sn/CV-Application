import React, { Component } from 'react';
import SidebarForm from './SidebarForm';
import MainForm from './MainForm';

class Form extends Component {
  constructor(props) {
    super(props);
  }
  state = {};

  render() {
    return (
      <form className="form">
        <MainForm data={this.props.data} update={this.props.update} />
        <SidebarForm data={this.props.data} update={this.props.update} />
      </form>
    );
  }
}

export default Form;
