import React, { Component } from 'react';
import './bookmarkApp.css';
import BookmarkList from '../bookmarkList/bookmarkList';
import Fab from '../fab/fab';

class BookmarkApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="bookmarkApp">
        <h2>Bookmarks</h2>
        <BookmarkList bookmarks={this.props.bookmarks}/>
        <Fab/>
      </div>
    );
  }
}

BookmarkApp.defaultProps = {
  bookmarks: []
}

export default BookmarkApp;