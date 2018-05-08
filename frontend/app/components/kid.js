import React from 'react';

export default class Kid extends React.Component {
  render() {
    return <div className="twelve columns">
      <h4>Children</h4>
      <div className="five columns">
        <div className="three columns">Matthew</div>
        <div className="three columns">Nelson</div>
      </div>
      <div className="six columns">
        <div className="three columns">Kelly</div>
        <div className="three columns">Lola</div>
      </div>

    </div>;
  }
}
