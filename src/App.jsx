import {useMyFavoriteBooks} from "./hooks/useMyFavoriteBooks.js";
import {LoadingIndicator} from "./components/loadingIndicator/loadingIndicator.jsx";

export const App = () => {
  const { books, isLoading } = useMyFavoriteBooks()

  return (
    <>
      <LoadingIndicator isLoading={isLoading} />
      <p>my favorite books : {books.length}</p>
    </>
  )
}