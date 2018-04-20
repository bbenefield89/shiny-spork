import React, { Component } from 'react';

// noteList json
import noteList from '../../noteList.js';

// components
import NoteContainer from '../notecontainer/NoteContainer.js';

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
