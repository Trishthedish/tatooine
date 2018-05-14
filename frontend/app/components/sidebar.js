import React from 'react';
import { NavLink } from 'react-router-dom';

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
        <li>
          <NavLink exact to='/family-tree'>Family Tree</NavLink>
        </li>
        <li>
          <NavLink exact to='/loud'>Loud Component</NavLink>
        </li>
      </ul>
    </div>;
  }
}
