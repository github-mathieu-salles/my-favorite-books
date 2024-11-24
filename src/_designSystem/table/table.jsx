import {TableBody} from "./tableBody.jsx";

import './table.scss'

export const Table = ({meta: {caption, columns}, data, isLoading}) => {
  return (
    <table className="Table" style={{ '--columns-length': columns.length }}>
      <caption>{caption}</caption>
      <thead>
      <tr>
        {columns.map(({header}) => (
          <th key={header}>{header}</th>
        ))}
      </tr>
      </thead>
      <TableBody isLoading={isLoading} columns={columns} data={data}/>
    </table>
  )
}