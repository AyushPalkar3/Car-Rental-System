
import { Link, useLocation } from 'react-router-dom'
import { all_routes } from '../../../../router/all_routes';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import "overlayscrollbars/overlayscrollbars.css";

const SettingsSidebar = () => {
  const location = useLocation();
  return (
    <div className="col-xl-3">
  {/* inner sidebar */}
    <div className="settings-sidebar ">
 <OverlayScrollbarsComponent style={{height: 'calc(100vh - 80px)'}}>

    <div className="sidebar-menu">
      <ul>
        <li className="menu-title">
          <span>ACCOUNT SETTING</span>
        </li>
        <li>
          <ul className="sidebar-links pb-3 mb-3 border-bottom">
            <li className={location.pathname.includes(all_routes.profileSettings)?'active':''}>
              <Link to={all_routes.profileSettings}>
                <i className="ti ti-user-edit me-2" />
                <span>Profile</span>
                <span className="track-icon" />
              </Link>
            </li>
            <li className={location.pathname.includes(all_routes.securitySetting)?'active':''}>
              <Link to={all_routes.securitySetting}>
                <i className="ti ti-lock me-2" />
                <span>Security</span>
              </Link>
            </li>
            {/* <li className={location.pathname.includes(all_routes.notificationsSetting)?'active':''}>
              <Link to={all_routes.notificationsSetting}>
                <i className="ti ti-bell me-2" />
                <span>Notifications</span>
              </Link>
            </li>
            <li className={location.pathname.includes(all_routes.integrationsSettings)?'active':''}>
              <Link to={all_routes.integrationsSettings}>
                <i className="ti ti-device-nintendo me-2" />
                <span>Integrations</span>
              </Link>
            </li>
            <li className={location.pathname.includes(all_routes.trackerSetting)?'active':''}>
              <Link to={all_routes.trackerSetting}>
                <i className="ti ti-brand-stackshare me-2" />
                <span>Tracker</span>
              </Link>
            </li> */}
          </ul>
        </li>
        {/* <li className="menu-title">
          <span>WEBSITE SETTING</span>
        </li>
        <li>
          <ul className="sidebar-links pb-3 mb-3 border-bottom">
            <li className={location.pathname.includes(all_routes.companySetting)?'active':''}>
              <Link to={all_routes.companySetting}>
                <i className="ti ti-building me-2" />
                <span>Company Settings</span>
                <span className="track-icon" />
              </Link>
            </li>
            <li className={location.pathname.includes(all_routes.localizationSetting)?'active':''}>
              <Link to={all_routes.localizationSetting}>
                <i className="ti ti-settings-2 me-2" />
                <span>Localization</span>
              </Link>
            </li>
            <li className={location.pathname.includes(all_routes.prefixes)?'active':''}>
              <Link to={all_routes.prefixes}>
                <i className="ti ti-corner-up-left-double me-2" />
                <span>Prefixes</span>
              </Link>
            </li>
            <li className={location.pathname.includes(all_routes.seoSetup)?'active':''}>
              <Link to={all_routes.seoSetup}>
                <i className="ti ti-seo me-2" />
                <span>SEO Setup</span>
              </Link>
            </li>
            <li className={location.pathname.includes(all_routes.languageSetting)?'active':''}>
              <Link to={all_routes.languageSetting}>
                <i className="ti ti-language me-2" />
                <span>Language</span>
              </Link>
            </li>
            <li className={location.pathname.includes(all_routes.maintenanceMode)?'active':''}>
              <Link to={all_routes.maintenanceMode}>
                <i className="ti ti-color-filter me-2" />
                <span>Maintenance Mode</span>
              </Link>
            </li>
            <li className={location.pathname.includes(all_routes.loginSetting)?'active':''}>
              <Link to={all_routes.loginSetting}>
                <i className="ti ti-lock-bolt me-2" />
                <span>Login &amp; Register</span>
              </Link>
            </li>
            <li className={location.pathname.includes(all_routes.aiConfiguration)?'active':''}>
              <Link to={all_routes.aiConfiguration}>
                <i className="ti ti-grain me-2" />
                <span>AI Configuration</span>
              </Link>
            </li>
            <li className={location.pathname.includes(all_routes.pluginManagers)?'active':''}>
              <Link to={all_routes.pluginManagers}>
                <i className="ti ti-car-crash me-2" />
                <span>Plugin Managers</span>
              </Link>
            </li>
          </ul>
        </li>
        <li className="menu-title">
          <span>RENTAL SETTINGS</span>
        </li>
        <li>
          <ul className="sidebar-links pb-3 mb-3 border-bottom">
            <li className={location.pathname.includes(all_routes.rentalSetting)?'active':''}>
              <Link to={all_routes.rentalSetting}>
                <i className="ti ti-file-invoice me-2" />
                <span>Rental</span>
                <span className="track-icon" />
              </Link>
            </li>
            <li className={location.pathname.includes(all_routes.insuranceSetting)?'active':''}>
              <Link to={all_routes.insuranceSetting}>
                <i className="ti ti-file-delta me-2" />
                <span>Insurance</span>
              </Link>
            </li>
          </ul>
        </li>
        <li className="menu-title">
          <span>APP SETTINGS</span>
        </li>
        <li>
          <ul className="sidebar-links pb-3 mb-3 border-bottom">
            <li className={location.pathname.includes(all_routes.invoiceSetting)?'active':''}>
              <Link to={all_routes.invoiceSetting}>
                <i className="ti ti-file-invoice me-2" />
                <span>Invoice Settings</span>
                <span className="track-icon" />
              </Link>
            </li>
            <li className={location.pathname.includes(all_routes.invoiceTemplate)?'active':''}>
              <Link to={all_routes.invoiceTemplate}>
                <i className="ti ti-template me-2" />
                <span>Invoice Templates</span>
              </Link>
            </li>
            <li className={location.pathname.includes(all_routes.signaturesSetting)?'active':''}>
              <Link to={all_routes.signaturesSetting}>
                <i className="ti ti-signature me-2" />
                <span>Signatures</span>
              </Link>
            </li>
            <li className={location.pathname.includes(all_routes.customFields)?'active':''}>
              <Link to={all_routes.customFields}>
                <i className="ti ti-forms me-2" />
                <span>Custom Fields</span>
              </Link>
            </li>
          </ul>
        </li>
        <li className="menu-title">
          <span>SYSTEM SETTINGS</span>
        </li>
        <li>
          <ul className="sidebar-links pb-3 mb-3 border-bottom">
            <li className={location.pathname.includes(all_routes.emailSetting)?'active':''}>
              <Link to={all_routes.emailSetting}>
                <i className="ti ti-mail me-2" />
                <span>Email Settings</span>
                <span className="track-icon" />
              </Link>
            </li>
            <li className={location.pathname.includes(all_routes.emailTemplates)?'active':''}>
              <Link to={all_routes.emailTemplates}>
                <i className="ti ti-mail-fast me-2" />
                <span>Email Templates</span>
                <span className="track-icon" />
              </Link>
            </li>
            <li className={location.pathname.includes(all_routes.smsGateways)?'active':''}>
              <Link to={all_routes.smsGateways}>
                <i className="ti ti-messages me-2" />
                <span>SMS Gateways</span>
                <span className="track-icon" />
              </Link>
            </li>
            <li className={location.pathname.includes(all_routes.gdprCookies)?'active':''}>
              <Link to={all_routes.gdprCookies}>
                <i className="ti ti-cookie me-2" />
                <span>GDPR Cookies</span>
                <span className="track-icon" />
              </Link>
            </li>
          </ul>
        </li>
        <li className="menu-title">
          <span>FINANCE SETTINGS</span>
        </li>
        <li>
          <ul className="sidebar-links pb-3 mb-3 border-bottom">
            <li className={location.pathname.includes(all_routes.paymentMethods)?'active':''}>
              <Link to={all_routes.paymentMethods}>
                <i className="ti ti-currency-dollar me-2" />
                <span>Payment Methods</span>
              </Link>
            </li>
            <li className={location.pathname.includes(all_routes.bankAccounts)?'active':''}>
              <Link to={all_routes.bankAccounts}>
                <i className="ti ti-file-dollar me-2" />
                <span>Bank Accounts</span>
              </Link>
            </li>
            <li className={location.pathname.includes(all_routes.taxRates)?'active':''}>
              <Link to={all_routes.taxRates}>
                <i className="ti ti-file-percent me-2" />
                <span>Tax Rates</span>
              </Link>
            </li>
            <li className={location.pathname.includes(all_routes.currencies)?'active':''}>
              <Link to={all_routes.currencies}>
                <i className="ti ti-world-dollar me-2" />
                <span>Currencies</span>
              </Link>
            </li>
          </ul>
        </li>
        <li className="menu-title">
          <span>OTHER SETTINGS</span>
        </li>
        <li>
          <ul className="sidebar-links">
            <li className={location.pathname.includes(all_routes.sitemap)?'active':''}>
              <Link to={all_routes.sitemap}>
                <i className="ti ti-map me-2" />
                <span>Sitemap</span>
              </Link>
            </li>
            <li className={location.pathname.includes(all_routes.clearCache)?'active':''}>
              <Link to={all_routes.clearCache}>
                <i className="ti ti-database-x me-2" />
                <span>Clear Cache</span>
              </Link>
            </li>
            <li className={location.pathname.includes(all_routes.storage)?'active':''}>
              <Link to={all_routes.storage}>
                <i className="ti ti-database me-2" />
                <span>Storage</span>
              </Link>
            </li>
            <li className={location.pathname.includes(all_routes.cronjob)?'active':''}>
              <Link to={all_routes.cronjob}>
                <i className="ti ti-clock-cog me-2" />
                <span>Cronjob</span>
              </Link>
            </li>
            <li className={location.pathname.includes(all_routes.systemBackup)?'active':''}>
              <Link to={all_routes.systemBackup}>
                <i className="ti ti-file-check me-2" />
                <span>System Backup</span>
              </Link>
            </li>
            <li className={location.pathname.includes(all_routes.databaseBackup)?'active':''}>
              <Link to={all_routes.databaseBackup}>
                <i className="ti ti-file-database me-2" />
                <span>Database Backup</span>
              </Link>
            </li>
            <li className={location.pathname.includes(all_routes.systemUpdate)?'active':''}>
              <Link to={all_routes.systemUpdate}>
                <i className="ti ti-refresh-dot me-2" />
                <span>System Update</span>
              </Link>
            </li>
          </ul>
        </li> */}
      </ul>
    </div>
  
 </OverlayScrollbarsComponent>
 </div>
  {/* /inner sidebar */}
</div>

  )
}

export default SettingsSidebar