import React, { Component } from 'react';
import github from '../assets/gitb.png';

export default function Credits() {
  return (
    <div className="credits">
      <div className="credits--image">
        <a href="https://github.com/octavian-sn/cv-application">
          <img src={github} alt="github logo" />
        </a>
      </div>
      <div className="credits--text">Crafted by Octavian Șulic</div>
    </div>
  );
}
