
import { Outlet } from 'react-router-dom'
import Progress from './common/progressbar'

const HomeFeature = () => {
  return (
    <div className={`main-wrapper`}>
    <Outlet />
    <Progress />
    </div>
  )
}

export default HomeFeature