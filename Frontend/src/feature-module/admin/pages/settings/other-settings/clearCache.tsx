
import { Link } from 'react-router-dom'

const ClearCache = () => {
  return (
    <div className="card">
  <div className="card-header">
    <h5>Other Settings</h5>
  </div>
  <div className="card-body">
    <div>
      <div>
        <h6 className="mb-3">Clear Cache</h6>
        <p className="mb-3">
          Clearing the cache may improve performance but will remove temporary
          files, stored preferences, and cached data from websites and
          applications.
        </p>
        <Link to="#" className="btn btn-primary">
          Clear Cache
        </Link>
      </div>
    </div>
  </div>
</div>

  )
}

export default ClearCache