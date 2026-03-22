
import { Link, useLocation } from 'react-router-dom'
import { all_routes } from '../../../router/all_routes'

const SettingsSidebar = () => {
    const routes = all_routes
    const location = useLocation();
    const isLinkActive = (route:string) => {
        // Check if the current location matches the given route
        return location.pathname === route;
    };

return (
        <div className="col-lg-3 theiaStickySidebar">
            <div className="stickybar">
                <div className="settings-widget">
                    <div className="settings-menu">
                        <ul>
                            <li>
                                <Link to={routes.userSettings} className={isLinkActive(routes.userSettings) ? "active" : ""}>
                                    <i className="feather icon-user" /> Profile
                                </Link>
                            </li>
                            {/* <li>
                                <Link to={routes.userSecurity} className={isLinkActive(routes.userSecurity) ? "active" : ""}>
                                    <i className="feather icon-shield" /> Security
                                </Link>
                            </li> */}
                            {/* <li>
                                <Link to={routes.preference} className={isLinkActive(routes.preference) ? "active" : ""}>
                                    <i className="feather icon-star" /> Preferences
                                </Link>
                            </li> */}
                            {/* <li>
                                <Link to={routes.notification} className={isLinkActive(routes.notification) ? "active" : ""}>
                                    <i className="feather icon-bell" /> Notifications
                                </Link>
                            </li> */}
                            {/* <li>
                                <Link to={routes.userIntegration} className={isLinkActive(routes.userIntegration) ? "active" : ""}>
                                    <i className="feather icon-git-merge" /> Integration
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
)
}

export default SettingsSidebar
