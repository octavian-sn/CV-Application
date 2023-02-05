import React, { Component } from 'react';
import SidebarForm from './SidebarForm';

class Form extends Component {
  constructor(props) {
    super(props);
  }
  state = {};

  render() {
    return (
      <form className="form">
        <SidebarForm data={this.props.data} update={this.props.update} />
      </form>
    );
  }
}

export default Form;
