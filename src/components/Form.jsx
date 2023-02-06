import React, { Component } from 'react';
import SidebarForm from './SidebarForm';
import InfoForm from './InfoForm';
import '../styles/form.css';

class Form extends Component {
  constructor(props) {
    super(props);
  }
  state = {};

  render() {
    return (
      <form className="form">
        <InfoForm data={this.props.data} update={this.props.update} />
        <SidebarForm data={this.props.data} update={this.props.update} />
      </form>
    );
  }
}

export default Form;
