import { useEffect, useState } from "react";

import Books from "../server/books.js";

const booksServer = new Books()

export const useMyFavoriteBooks = () => {
  const [state, setState] = useState({
    books: [],
    genreOptions: [],
    isLoading: false,
  });
  const [selectedGenre, setSelectedGenre] = useState(null)

  useEffect(() => {
    setState((values) => { return {
      ...values,
      isLoading: true,
    }})

    booksServer.askListBooks(selectedGenre).then(({books, genreOptions}) => {
      genreOptions.sort((a, b) => a.localeCompare(b))
      setState({
        books,
        genreOptions,
        isLoading: false,
      })
    })
  }, [selectedGenre]);

  return { state, selectedGenre, setSelectedGenre }
}