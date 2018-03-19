import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './components/sidebar';
import Home from './components/home';
import { BrowserRouter as Router } from 'react-router-dom'

class App extends React.Component {
  render() {
    const pushState = 'pushState' in window.history;
    return <Router onUpdate={() => window.scrollTo(0,0)}
                   forceRefresh={!pushState}>
      <div className="app row">
        <Sidebar />
        <Home />
      </div>
    </Router>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
