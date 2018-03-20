import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sidebar.less';

export default class Sidebar extends React.Component {
  render() {
    return <div className="sidebar two columns">
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/css-cantina'>CSS Cantina</Link>
        </li>
        <li>
          <Link to='/map-room'>Map Room</Link>
        </li>
      </ul>
    </div>;
  }
}
