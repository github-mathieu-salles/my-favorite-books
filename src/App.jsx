import {useMyFavoriteBooks} from "./hooks/useMyFavoriteBooks.js";
import {LoadingIndicator} from "./components/loadingIndicator/loadingIndicator.jsx";
import {SearchSelect} from "./_designSystem/searchSelect/searchSelect.jsx";

export const App = () => {
  const { state: {books, genreOptions, isLoading}, selectedGenre, setSelectedGenre } = useMyFavoriteBooks()

  return (
    <>
      <LoadingIndicator isLoading={isLoading} />
      <SearchSelect options={genreOptions} value={selectedGenre} onChange={setSelectedGenre} placeholder="Genre" />
      <p>my favorite books : {books.length}</p>
    </>
  )
}