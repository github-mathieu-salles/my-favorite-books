import {data} from './data.js';

export default class Books {
  askListBooks(genre) {
    return this._mockServerRequest(genre);
  }

  _mockServerRequest = (genre) => {
    return new Promise(resolve => {
      const filteredBooks = []
      let genreOptions = []

      for (const book of data.books) {
        genreOptions = genreOptions.concat(book.genre)
        if (!genre || genre && book.genre.includes(genre)) {
          filteredBooks.push(book)
        }
      }

      window.setTimeout(() => {
        resolve({ books: filteredBooks.slice(0, 10), genreOptions: Array.from(new Set(genreOptions)) });
      }, this._random());
    });
  }

  _random() {
    return Math.floor(Math.random() * 1200);
  }
}
