import {LoadingIndicator} from "../../components/loadingIndicator/loadingIndicator.jsx";

import './table.scss'

export const Table = ({ meta: { caption, columns }, data, isLoading }) => {
  if (data.length === 0) return null
  return (
    <table className="Table">
      <caption>{caption}</caption>
      <thead>
      <tr>
        {columns.map(({header}) => (
          <th key={header}>{header}</th>
        ))}
      </tr>
      </thead>
      {!isLoading
        ? <tbody>
        {data.map((row) => (
          <tr key={row.title}>
            {columns.map(({key, transformer}) => (
              <td key={row[key]}>{transformer ? transformer(row[key]) : row[key]}</td>
            ))}
          </tr>
        ))}
        </tbody>
        : <div className="Table-body--loading">
          <LoadingIndicator isLoading={isLoading}/>
        </div>
      }
    </table>
  )
}