import React from 'react';

export default class FamilyTree extends React.Component {
  render() {
    return <div className="family-tree ten columns">
      <h1>Family Tree</h1>
      <p>
        <strong>TODO</strong>: display a family tree (left-to-right flow)
        with the following individuals:
      </p>
      <ul>
        <li>Alan, husband of Betty</li>
        <li>Betty, wife of Alan</li>
        <li>Charles, son of Alan and Betty, husband of Jane</li>
        <li>Danica, daughter of Alan and Betty, wife of Greg</li>
        <li>Ethan, husband of Fran</li>
        <li>Fran, wife of Ethan</li>
        <li>Greg, son of Ethan and Fran, husband of Danica</li>
        <li>Harry, husband of Irene</li>
        <li>Irene, wife of Harry</li>
        <li>Jane, daughter of Harry and Irene, wife of Charles</li>
        <li>Kelly, daughter of Charles and Jane</li>
        <li>Lola, daughter of Charles and Jane</li>
        <li>Matthew, son of Danica and Greg</li>
        <li>Nelson, son of Danica and Greg</li>
      </ul>
      <p>
        Each node on the tree should be a React Component and CSS should be used
        to indicate ancestor, sibling, and descendant relationships (lines are
        optional, focus on correct indentation and grouping).
      </p>
      <p>Example: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Family_tree.svg/440px-Family_tree.svg.png" /></p>
    </div>;
  }
}
