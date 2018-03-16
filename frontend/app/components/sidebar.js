import React from 'react';
import '../styles/sidebar.less';

export default class Sidebar extends React.Component {
  render() {
    return <div className="sidebar three columns">
      <ul>
        <li>Home</li>
        <li>Foo</li>
        <li>Bar</li>
      </ul>
    </div>;
  }
}
