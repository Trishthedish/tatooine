import React from 'react';

export default class Grandparent extends React.Component {
  render() {
    return <div className="grandparent twelve columns">
      <h4>Grandparents</h4>
      <div className="three columns">
        <div className="three columns">Ethan</div>
        <div className="three columns">Fran</div>
      </div>
      <div className="three columns">
        <div className="three columns">Alan</div>
        <div className="three columns">Betty</div>
      </div>
      <div className="three columns">
        <div className="three columns">Harry</div>
        <div className="three columns">Irene</div>
      </div>

    </div>;
  }
}
