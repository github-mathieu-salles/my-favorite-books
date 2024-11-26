import {LoadingIndicator} from "../../components/loadingIndicator/loadingIndicator.jsx";

export const TableBody = ({ columns, data, isLoading }) => {
  if (isLoading) return (
    <tbody className="Table-body--loading">
      <tr>
        <td>
          <div >
            <LoadingIndicator isLoading={isLoading}/>
          </div>
        </td>
      </tr>
    </tbody>
  )

  if (data.length === 0) return (
    <tbody className="Table-body--empty">
      <tr>
        <td>
          <div >
            No data available
          </div>
        </td>
      </tr>
    </tbody>
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