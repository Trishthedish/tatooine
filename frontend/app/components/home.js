import React from 'react';

export default class Home extends React.Component {
  render() {
    return <div className="home ten columns">
      <h1>Home</h1>
      <p className='todo'>
        add a TODOs list powered by <a href='/api/todos'>/api/todos</a>
      </p>
    </div>;
  }
}
