import {useMyFavoriteBooks} from "./hooks/useMyFavoriteBooks.js";
import {SearchSelect} from "./_designSystem/searchSelect/searchSelect.jsx";
import {FavoriteBookTable} from "./components/favoriteBooksTable/favoriteBookTable.jsx";

export const App = () => {
  const { state: {books, genreOptions, isLoading}, selectedGenre, setSelectedGenre } = useMyFavoriteBooks()

  return (
    <>
      <SearchSelect options={genreOptions} value={selectedGenre} onChange={setSelectedGenre} placeholder="Genre" />
      <FavoriteBookTable books={books} isLoading={isLoading} />
    </>
  )
}