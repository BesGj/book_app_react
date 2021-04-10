import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Search from './search';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: []

    };

  }



  search = (query) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&limit=10`
    fetch(url).then(response => response.json()).then((data) => {
       const books = data.items
       this.setState({
         books: books

        });

    })
  }



  render() {
     return (
      <div>
         <div>
           <Search searchFunction={this.search} />
         </div>
          <div>
            {this.state.books.map((book, index) => (
            <div key={index}>
             <p>Hello, {book.id}!</p>
             <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
             </div>
            ))}
         </div>
       </div>
     );
  }
};

export default App;
