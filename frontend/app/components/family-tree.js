import React from 'react';
import Grandparent from './grandparent';
import Parent from './parent';
import Kid from './kid';

export default class FamilyTree extends React.Component {
  render() {
    return <div className="family-tree ten columns">

      <p>Example: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Family_tree.svg/440px-Family_tree.svg.png" /></p>
      <hr/>
      <h1>FAMILY TREE CHALLENGE</h1>
      <div>
        <Grandparent />
        <Parent />
        <Kid />
      </div>
    </div>;
  }
}
