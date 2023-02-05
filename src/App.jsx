import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Form from './components/Form';
import './styles/app.css';

class App extends Component {
  state = {
    contact: {
      address: '430 Blackwell Street, Anchorage, AK, 99518',
      phone: '907-980-4070',
      email: 'tony@fishmore.com',
      website: 'tony.fishmore.com',
    },
    skills: [
      'Communication',
      'Adaptability',
      'Detail-oriented',
      'Team-work',
      'Reliability',
      'Problem-solving skills',
      'Willingness to learn',
      'Autonomous',
    ],
  };

  update = {
    skills: (e) => {
      const newArr = e.target.value.split(', ');
      this.setState({
        skills: newArr,
      });
    },
    contact: (e) => {
      const { name, value } = e.target;
      this.setState((prevState) => ({
        contact: { ...prevState.contact, [name]: value },
      }));
    },
  };

  render() {
    const { contact, skills } = this.state;

    return (
      <div className="app">
        <Form data={this.state} update={this.update} />

        <div className="pdf">
          <div className="resume">
            <Sidebar contact={contact} skills={skills} />
            <Main />
          </div>
          <div className="background-overlay"></div>
        </div>
      </div>
    );
  }
}

export default App;
