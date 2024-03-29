import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './components/sidebar';
import CSSCantina from './components/css-cantina';
import Home from './components/home';
import Loud from './components/loud';
import MapRoom from './components/map-room';
import FamilyTree from './components/family-tree';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/style.less';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.pushState = 'pushState' in window.history;
  }

  render() {
    return <Router onUpdate={() => window.scrollTo(0,0)}
                   forceRefresh={!this.pushState}>
      <div className='app row'>
        <Sidebar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/css-cantina' component={CSSCantina} />
          <Route exact path='/map-room' component={MapRoom} />
          <Route exact path='/family-tree' component={FamilyTree} />
          <Route exact path='/loud' component={Loud} title="LOUD Component" />
          <Route render={() => 'Not found!'} />
        </Switch>
      </div>
    </Router>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
