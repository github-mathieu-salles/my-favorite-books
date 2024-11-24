import {LoadingIndicator} from "../../components/loadingIndicator/loadingIndicator.jsx";

export const TableBody = ({ columns, data, isLoading }) => {
  if (isLoading) return (
    <div className="Table-body--loading">
      <LoadingIndicator isLoading={isLoading}/>
    </div>
  )

  if (data.length === 0) return (
    <div className="Table-body--empty">
      No data available
    </div>
  )

  return (
    <tbody>
    {data.map((row) => (
      <tr key={row.title}>
        {columns.map(({key, transformer}) => (
          <td key={row[key]}>{transformer ? transformer(row[key]) : row[key]}</td>
        ))}
      </tr>
    ))}
    </tbody>
  )
}