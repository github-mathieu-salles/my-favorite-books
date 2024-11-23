import {useMyFavoriteBooks} from "./hooks/useMyFavoriteBooks.js";

export const App = () => {
  const { books, isLoading } = useMyFavoriteBooks()

  return (
    <>
      {isLoading && <p>Loading...</p>}
      <p>my favorite books : {books.length}</p>
    </>
  )
}