import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/sidebar.less';

export default class Sidebar extends React.Component {
  render() {
    return <div className="sidebar two columns">
      <ul>
        <li>
          <NavLink exact to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink exact to='/css-cantina'>CSS Cantina</NavLink>
        </li>
        <li>
          <NavLink exact to='/map-room'>Map Room</NavLink>
        </li>
      </ul>
    </div>;
  }
}
