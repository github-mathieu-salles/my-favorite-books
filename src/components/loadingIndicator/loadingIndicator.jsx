import { Spinner } from "../../_designSystem/spinner/spinner.jsx";
import './loadingIndicator.scss'


export const LoadingIndicator = ({ isLoading }) => {
  if (!isLoading) return null

  return (
    <div className="loading-indicator">
      <Spinner />
      <p>Loading...</p>
    </div>
  )
}