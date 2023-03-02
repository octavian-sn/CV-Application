import React, { Component } from 'react';
import SidebarForm from './SidebarForm';
import InfoForm from './InfoForm';
import MainForm from './MainForm';
import FieldsForm from './FieldsForm';
import Credits from './Credits';
import '../styles/form.css';

class Form extends Component {
  constructor(props) {
    super(props);
  }
  state = {};

  render() {
    return (
      <div className="form">
        <Credits />
        <InfoForm data={this.props.data} update={this.props.update} />
        <SidebarForm data={this.props.data} update={this.props.update} />
        <MainForm data={this.props.data} update={this.props.update} />
        <FieldsForm data={this.props.data} update={this.props.update} />
        {this.props.print()}
      </div>
    );
  }
}

export default Form;
