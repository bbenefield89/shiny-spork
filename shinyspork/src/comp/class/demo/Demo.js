import React, { Component } from 'react';

// components
import NoteContainer from '../notecontainer/NoteContainer.js';

// noteList json
const noteList = require('../../noteList.js');

class Demo extends Component {
  render() {
    return (
      <div>
        <NoteContainer noteList={noteList} />
      </div>
    );
  }
}

export default Demo;
