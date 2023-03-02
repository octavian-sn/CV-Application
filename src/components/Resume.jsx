import React from 'react';
import Sidebar from './Sidebar';
import Main from './Main';

class Resume extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const [contact, skills, picture, info, experience, education, update] =
      this.props.data;
    return (
      <div className="resume">
        <Sidebar
          contact={contact}
          skills={skills}
          picture={picture}
          update={update}
        />
        <Main info={info} experience={experience} education={education} />
      </div>
    );
  }
}

export default Resume;
