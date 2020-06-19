import React, { Component } from 'react';
import './bookmarkList.css';
import Bookmark from '../bookmark/bookmark';
import PropTypes from 'prop-types';

class BookmarkList extends Component {
  render() {
    const bookmarks = this
          .props
          .bookmarks
          .map((bookmark, i) => <Bookmark { ...bookmark } key={i}/>);
    return (
      <div className="bookmarkList">
        {bookmarks}
      </div>
    );
  }
}

BookmarkList.propTypes = {
  bookmarks: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    rating: PropTypes.number,
    description: PropTypes.string
  }))
};

BookmarkList.propTypes = {
  bookmarks: PropTypes.array
};

export default BookmarkList;