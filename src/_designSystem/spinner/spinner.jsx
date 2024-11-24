import loadingIcon from './assets/_LoadingIcon.png'
import './spinner.scss'

export const Spinner = () => {
  const size = 20

  return (
    <div className="spinner" style={{ '--spinner-size': `${size}px`}}>
      <img src={loadingIcon} className="icon" alt="" width={size} height={size}/>
    </div>
  )
}