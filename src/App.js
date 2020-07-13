import React, { Component } from 'react';
import './App.css';

import AddBookmark from './addBookmark/addBookmark';
import BookmarkApp from './bookmarkApp/bookmarkApp';
import Rating from './rating/rating';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bookmarks: [
        {
          title: "This is my story",
          url: "www.mybigstory.com",
          rating: 4,
          description: "I love playing games and living in the dream travelling the world"
        },
        {
          title: "This is your story",
          url: "www.yourbigstory.com",
          rating: 4,
          description: "You love playing games and living in the dream travelling the world"
        }
      ],
      showAddForm: false
    };
  }

  render() {

    const page = this.state.showAddForm
          ? <AddBookmark />
          : <BookmarkApp bookmarks={this.state.bookmarks}/>;

    return (
      <div className="App">
        { page }
        <Rating value={4}/>
      </div>
    );
  }
}

export default App;