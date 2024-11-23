import { useEffect, useState } from "react";

import Books from "../server/books.js";

const booksServer = new Books()

export const useMyFavoriteBooks = () => {
  const [state, setState] = useState({
    books: [],
    genreOptions: [],
    isLoading: false,
  });

  useEffect(() => {
    setState((values) => { return {
      ...values,
      isLoading: true,
    }})

    booksServer.askListBooks().then(({books, genreOptions}) => {
      setState({
        books,
        genreOptions,
        isLoading: false,
      })
    })
  }, []);

  return state
}