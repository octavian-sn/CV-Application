import React, { Component } from 'react';
import uniqid from 'uniqid';
import '../styles/main.css';

class Main extends Component {
  constructor(props) {
    super(props);
  }
  state = {};

  renderinfo = (info) => {
    return (
      <div className="main--info">
        <div className="main--info-name">
          <h1>{info.name}</h1>
          <h1>{info.surname}</h1>
        </div>
        <h3>{info.title.toUpperCase()}</h3>
        <h4>Summary</h4>
        <p>{info.about}</p>
      </div>
    );
  };

  render() {
    const { info } = this.props;
    return <div className="main">{this.renderinfo(info)}</div>;
  }
}

export default Main;
