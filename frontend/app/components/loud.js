import React from 'react';

export default class Loud extends React.Component {
  constructor() {
    super();
    this.state = {};
    console.log('!!!----------!!!');
    console.log('method: constructor');
    console.log('state:');
    console.log(this.state);
  }

  static getDerivedStateFromProps() {
    console.log('!!!----------!!!');
    console.log('static method: getDerivedStateFromProps');
    return null;
  }

  render() {
    console.log('!!!----------!!!');
    console.log('method: render');
    console.log('state:');
    console.log(this.state);
    const message = this.state && this.state.message ? this.state.message : '';
    return <div className="loud ten columns">
      <h1>LOUD component</h1>
      <p>{message}</p>
    </div>;
  }

  componentDidMount() {
    console.log('!!!----------!!!');
    console.log('method: componentDidMount');
    console.log('state:');
    console.log(this.state);

    console.log('!!!----------!!!');
    console.log('(( changing state; triggering update ))');
    this.setState({message: 'check the console'});
  }

  shouldComponentUpdate() {
    console.log('!!!----------!!!');
    console.log('method: shouldComponentUpdate');
    console.log('state:');
    console.log(this.state);
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log('!!!----------!!!');
    console.log('method: getSnapshotBeforeUpdate');
    console.log('state:');
    console.log(this.state);
    return null;
  }

  componentDidUpdate() {
    console.log('!!!----------!!!');
    console.log('method: componentDidUpdate');
    console.log('state:');
    console.log(this.state);
  }
}
