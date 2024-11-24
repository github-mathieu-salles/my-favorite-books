import {Table} from "../../_designSystem/table/table.jsx";
import {capitalize} from "../../helpers/string.jsx";

import "./FavoriteBookTable.scss"

export const FavoriteBookTable = ({ books, isLoading }) => {

  const meta = [
    {
      header: 'title',
      key: 'title',
    },
    {
      header: 'author',
      key: 'author',
    },
    {
      header: 'year',
      key: 'year',
    },
    {
      header: 'genre',
      key: 'genre',
      transformer: (genre) => genre.map(capitalize).join(', '),
    },
  ]
  return (
    <div className="FavoriteBookTable-Container">
      <Table meta={meta} data={books} isLoading={isLoading} />
    </div>
  )
}