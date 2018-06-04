import React, { Component } from 'react';
import './App.css';
import Rambo from './Rambo';
import Gun from './Gun';

class SchootingScene extends Component {
  render() {
    return (
      <div className="ShootingScene">
        <div>
          <Rambo />
          <Gun />
          {[...Array(50)].map((x, i) => {
            return (
              <span key={`bullet-${x}`} className={`bullet bullet-${i}`} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default SchootingScene;
