import React from 'react';

export default class Parent extends React.Component {
  render() {
    return <div className="parent twelve columns">
      <h4>Parents</h4>
      <div className="three columns">Greg</div>
      <div className="four columns">
        <div className="four columns">Danika</div>
        <div className="four columns">Charles</div>
      </div>
      <div className="three columns">jane</div>
    </div>;
  }
}
