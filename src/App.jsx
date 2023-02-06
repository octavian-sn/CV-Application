import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Form from './components/Form';
import picture from './assets/profile.jpg';
import uniqid from 'uniqid';
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
        interval: 'Sep 2022 - Present',
        title: 'Junior Web Developer',
        institution: 'My First WebTeam',
        location: 'Sibiu, RO',
        activity:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        key: uniqid(),
      },
      {
        interval: 'Jun 2022 - Aug 2022',
        title: 'Intern Web Developer',
        institution: 'My First WebTeam',
        location: 'Sibiu, RO',
        activity:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        key: uniqid(),
      },
    ],
    education: [
      {
        title: 'Bachelor of Laws',
        interval: 'Sep 2012 - Jun 2016',
        institution: 'University of Transilvania',
        location: 'Brasov, RO',
        key: uniqid(),
      },
      {
        title: 'High School Degree',
        interval: 'Sep 2007 - Jun 2011',
        institution: 'High school of Arts "Joan of Arc"',
        location: 'Rouen, FR',
        key: uniqid(),
      },
    ],
    form: {
      title: '',
      interval: '',
      institution: '',
      location: '',
      activity: '',
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
    info: (e) => {
      const { name, value } = e.target;
      this.setState((prevState) => ({
        info: { ...prevState.info, [name]: value },
      }));
    },
    form: (e) => {
      const { name, value } = e.target;
      this.setState((prevState) => ({
        form: { ...prevState.form, [name]: value },
      }));
    },
    addSection: (e) => {
      const { title, interval, institution, location, activity } =
        this.state.form;
      e.preventDefault();
      if (activity === '' && title !== '') {
        this.setState((prevState) => ({
          education: [
            ...prevState.education,
            { title, interval, institution, location, key: uniqid() },
          ],
        }));
      }
      if (activity !== '' && title !== '') {
        this.setState((prevState) => ({
          experience: [
            ...prevState.experience,
            { title, interval, institution, location, activity, key: uniqid() },
          ],
        }));
      }
      this.setState({
        form: {
          title: '',
          interval: '',
          institution: '',
          location: '',
          activity: '',
          key: '',
        },
      });
    },
  };

  render() {
    const { contact, skills, picture, info, experience, education } =
      this.state;

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
          <Main info={info} experience={experience} education={education} />
        </div>
      </div>
    );
  }
}

export default App;
