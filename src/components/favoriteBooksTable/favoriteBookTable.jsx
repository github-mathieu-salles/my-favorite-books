import {Table} from "../../_designSystem/table/table.jsx";
import {capitalize} from "../../helpers/string.jsx";

export const FavoriteBookTable = ({ books, isLoading }) => {

  const meta = {
    caption: 'Top 10 Favorite Books',
    columns: [
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
  }
  return (
    <Table meta={meta} data={books} isLoading={isLoading} />
  )
}