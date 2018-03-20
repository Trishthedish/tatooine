import React from 'react';
import '../styles/css-cantina.less';

export default class CSSCantina extends React.Component {
  render() {
    return <div className="cantina ten columns">
      <h1>CSS Cantina</h1>
      <div className="alejandro">
        <p>Alejandro</p>
      </div>
      <div className="bobby">
        <p>Bobby</p>
        <div className="charlie">
          <p>Charlie</p>
        </div>
      </div>
    </div>;
  }
}
