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
