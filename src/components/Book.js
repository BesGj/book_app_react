import React, { Component } from 'react';


class Book extends Component {


  render() {

    const src = `http://books.google.com/books/content?id=${this.props.id}_VADwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api`;
    return (
      <img src={src} className="book" />
    );
  }
}

export default Gif;
