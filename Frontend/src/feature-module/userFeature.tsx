
import NewHeader from './home/home-new/header'
import { Outlet } from 'react-router-dom'
import Progress from './common/progressbar'
import NewFooter from './home/home-new/footer'

const UserFeature = () => {
  return (
    <div className={`main-wrapper`}>
        <NewHeader />
        <Outlet />
        <Progress />
        <NewFooter />
        </div>
  )
}

export default UserFeature