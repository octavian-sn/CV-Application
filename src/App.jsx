import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Form from './components/Form';
import picture from './assets/profile.jpg';
import './styles/app.css';

class App extends Component {
  state = {
    picture: picture,
    contact: {
      address: '430 Blackwell Street, Anchorage, AK, 99518',
      phone: '907-980-4070',
      email: 'tony@moore.com',
      website: 'tony.moore.com',
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
    info: {
      name: 'Tony',
      surname: 'Moore',
      title: 'Web Developer',
      about:
        'Result-oriented and dedicated junior web developer with 1 year of experience, always driven to provide the ultimate user experience using the latest tools to write concise, clean, maintainable code. In my spare time I enjoy reading books, taking long walks in the parks or through the woods, and just being out in the nature away from the city noise.',
    },
    experience: [
      {
        interval: 'SEP 2022 - PRESENT',
        title: 'Junior Web Developer',
        company: 'My First WebTeam',
        location: 'Sibiu, RO',
        activity:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        interval: 'JUN 2022 - AUG 2022',
        title: 'Intern Web Developer',
        company: 'My First WebTeam',
        location: 'Sibiu, RO',
        activity:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
    ],
    education: [
      {
        interval: 'SEP 2012 - IUN 2016',
        title: 'Bachelor of Laws',
        school: 'Universitatea Transilvania of Brasov',
      },
      {
        interval: 'SEP 2007 - IUN 2011',
        title: 'High school degree',
        school: 'High school of Arts "Joan of Arc" of Rouen',
      },
    ],
  };

  update = {
    picture: (e) => {
      this.setState({
        picture: URL.createObjectURL(e.target.files[0]),
      });
      console.log(this.state.picture);
    },
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
    info: (e) => {
      const { name, value } = e.target;
      this.setState((prevState) => ({
        info: { ...prevState.info, [name]: value },
      }));
    },
  };

  render() {
    const { contact, skills, picture, info } = this.state;

    return (
      <div className="app">
        <div className="background-overlay"></div>

        <Form data={this.state} update={this.update} />
        <div className="resume">
          <Sidebar
            contact={contact}
            skills={skills}
            picture={picture}
            update={this.update.picture}
          />
          <Main info={info} />
        </div>
      </div>
    );
  }
}

export default App;
