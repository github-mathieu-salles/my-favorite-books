import {useMyFavoriteBooks} from "./hooks/useMyFavoriteBooks.js";
import {SearchSelect} from "./_designSystem/searchSelect/searchSelect.jsx";
import {FavoriteBookTable} from "./components/favoriteBooksTable/favoriteBookTable.jsx";

import './app.scss'

export const App = () => {
  const { state: {books, genreOptions, isLoading}, selectedGenre, setSelectedGenre } = useMyFavoriteBooks()

  return (
    <div className="MyFavoriteBooks-Layout">
      <h1>
        <span aria-hidden>📚</span> My Favorite Books
      </h1>
      <main>
        <div>
          <SearchSelect options={genreOptions} value={selectedGenre} onChange={setSelectedGenre} placeholder="Genre" />
        </div>
        <FavoriteBookTable books={books} isLoading={isLoading} />
      </main>
    </div>
  )
}