import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './components/sidebar';
import Home from './components/home';

class App extends React.Component {
  render() {
    return <div className="app row">
      <Sidebar />
      <Home />
    </div>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
