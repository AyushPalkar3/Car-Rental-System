import { all_routes } from "../../../../router/all_routes";

export const SidebarData = [

    {
      label: "Main",
      submenuOpen: true,
      showSubRoute: false,
      submenuHdr: "Main",
      submenuItems: [
        {
          label: "Dashboard",
          link: all_routes.adminDashboard,
          icon: 'layout-dashboard',
          showSubRoute: false,
          submenu: false,
        },
        
      ],
    },
    {
      label: "Bookings",
      submenuOpen: true,
      submenuHdr: "Bookings",
      submenu: true,
      showSubRoute: false,
      submenuItems: [
        {
          label: "Reservations",
          link: all_routes.adminReservationsList,
          sublink:all_routes.adminAddReservations,
          sublink2:all_routes.adminEditReservations,
          sublink3:all_routes.reservationDetails,
          icon: 'files',
          showSubRoute: false,
          submenu: false,
        },
        // {
        //   label: "Calendar",
        //   link: all_routes.adminCalender,
        //   icon: 'calendar-bolt',
        //   showSubRoute: false,
        //   submenu: false,
        // },
        // {
        //   label: "Quotations",
        //   link: all_routes.adminQuotationsList,
        //   sublink:all_routes.addQuotation,
        //   sublink2:all_routes.editQuotation,
        //   sublink3:all_routes.quotationDetails,
        //   icon: 'file-symlink',
        //   showSubRoute: false,
        //   submenu: false,
        // },
        // {
        //   label: "Enquiries",
        //   link: all_routes.adminEnquiriesList,
        //   icon: 'mail',
        //   showSubRoute: false,
        //   submenu: false,
        // },
      ],
    },
    {
      label: "Manage",
      submenuOpen: true,
      submenuHdr: "Manage",
      submenu: false,
      showSubRoute: false,
      submenuItems: [
        
        {
          label: "Customers",
          link: all_routes.adminCustomerList,
          sublink:all_routes.customerDetails,
          sublink2:all_routes.adminCustomersCompaniesList,
          sublink3:all_routes.companyDetails,
          icon: 'users-group',
          showSubRoute: false,
          submenu: false,
        },
        // {
        //   label: "Drivers",
        //   link: all_routes.adminDriversList,
        //   icon: 'user-bolt',
        //   showSubRoute: false,
        //   submenu: false,
        // },
                {
          label: "Car Partner",
          link: all_routes.adminCarPartnerList,
          icon: 'user-bolt',
          showSubRoute: false,
          submenu: false,
        },
        // {
        //   label: "Locations",
        //   link: all_routes.adminLocationsList,
        //   icon: 'map-pin',
        //   showSubRoute: false,
        //   submenu: false,
        // },
       
      ],
    },
    {
      label: "Rentals",
      submenuOpen: true,
      submenuHdr: "Rentals",
      showSubRoute: false,
      submenuItems: [
        {
          label: "Car",
          link: all_routes.adminCarsList,
          sublink:all_routes.addCar,
          sublink2:all_routes.editCar,
          sublink3:all_routes.carDetails,
          icon: 'car',
          showSubRoute: false,
          submenu: false,
        },
        // {
        //   label: "Car Attributes",
        //   icon: 'device-camera-phone',
        //   showSubRoute: false,
        //   submenu: true,
        //   submenuItems: [
        //     { label: "Brands", link: all_routes.adminBrandsList, showSubRoute: false },
        //     { label: "Types", link: all_routes.adminTypesList, showSubRoute: false },
        //     { label: "Models", link: all_routes.adminModelsList, showSubRoute: false },
        //     { label: "Transmissions", link: all_routes.adminTransmissionsList, showSubRoute: false },
        //     { label: "Fuels", link: all_routes.adminFuelList, showSubRoute: false },
        //     { label: "Colors", link: all_routes.adminColorList, showSubRoute: false },
        //     { label: "Steering", link: all_routes.adminSteeringList, showSubRoute: false },
        //     { label: "Seats", link: all_routes.adminSeatsList, showSubRoute: false },
        //     { label: "Cylinders", link: all_routes.adminCylindersList, showSubRoute: false },
        //     { label: "Doors", link: all_routes.adminDoorsList, showSubRoute: false },
        //     { label: "Features", link: all_routes.adminFeaturesList, showSubRoute: false },
        //     { label: "Safty Features", link: all_routes.adminSafetyFeaturesList, showSubRoute: false },
        //   ]
        // },
        // {
        //     label: "Extra Service",
        //     link: all_routes.adminExtraServicesList,
        //     icon: 'script-plus',
        //     showSubRoute: false,
        //     submenu: false,
        //   },
          // {
          //   label: "Seasonal Pricing",
          //   link: all_routes.adminPricingList,
          //   icon: 'file-dollar',
          //   showSubRoute: false,
          //   submenu: false,
          // },
          // {
          //   label: "Inspections",
          //   link: all_routes.adminInspectionsList,
          //   icon: 'dice-6',
          //   showSubRoute: false,
          //   submenu: false,
          // },
          // {
          //   label: "Tracking",
          //   link: all_routes.adminTrackingMap,
          //   icon: 'map-pin-pin',
          //   showSubRoute: false,
          //   submenu: false,
          // },
          // {
          //   label: "Maintenance",
          //   link: all_routes.adminMaintenanceList,
          //   icon: 'color-filter',
          //   showSubRoute: false,
          //   submenu: false,
          // },
          // {
          //   label: "Reviews",
          //   link: all_routes.adminReviewsList,
          //   icon: 'star',
          //   showSubRoute: false,
          //   submenu: false,
          // },
      ],
    },
    {
      label: "Finance & Accounts",
      submenuOpen: true,
      submenuHdr: "Finance & Accounts",
      showSubRoute: false,
      submenuItems: [
        {
          label: "Invoices",
          link: all_routes.adminInvoicesList,
          icon: 'file-invoice',
          showSubRoute: false,
          submenu: false,
        },
        {
          label: "Payments",
          link: all_routes.adminPaymentsList,
          icon: 'credit-card',
          showSubRoute: false,
          submenu: false,
        },
      ],
    },
  
    {
      label: "Others",
      submenuOpen: true,
      showSubRoute: false,
      submenuHdr: "Others",
      submenuItems: [
        
        // {
        //   label: "Messages",
        //   link: all_routes.adminChat,
        //   count:'5',
        //   icon: 'message',
        //   showSubRoute: false,
        //   submenu: false,
        // },
        {
          label: "Coupons",
          link: all_routes.adminCouponsList,
          icon: 'discount-2',
          showSubRoute: false,
          submenu: false,
        },
        // {
        //   label: "Newsletters",
        //   link: all_routes.adminNewslettersList,
        //   icon: 'file-horizontal',
        //   showSubRoute: false,
        //   submenu: false,
        // },
        
      ],
    },
  

    {
      label: "Support",
      submenuOpen: true,
      showSubRoute: false,
      submenuHdr: "Support",
      submenuItems: [
        {
          label: "Contact Messages",
          link: all_routes.adminContactMessagesList,
          icon: 'messages',
          showSubRoute: false,
        },
        // {
        //   label: "Announcements",
        //   link: all_routes.adminAnnouncementsList,
        //   icon: 'speakerphone',
        //   showSubRoute: false,
        // },
        // {
        //   label: "Tickets",
        //   link: all_routes.adminTicketsList,
        //   icon: 'ticket',
        //   showSubRoute: false,
        // },
        
      ],
    },
    // {
    //     label: "User Management",
    //     submenuOpen: true,
    //     showSubRoute: false,
    //     submenuHdr: "User Management",
    //     submenuItems: [
    //       {
    //         label: "Users",
    //         link: all_routes.adminUsersList,
    //         icon: 'user-circle',
    //         showSubRoute: false,
    //       },
    //       {
    //         label: "Roles & Permissions",
    //         link: all_routes.adminRolesPermissionsList,
    //         icon: 'user-shield',
    //         showSubRoute: false,
    //       },
          
    //     ],
    //   },
    // {
    //   label: "Reports",
    //   submenuOpen: true,
    //   showSubRoute: false,
    //   submenuHdr: "Reports",
    //   submenuItems: [
    //     {
    //       label: "Income vs Expense",
    //       link: all_routes.adminIncomeReportList,
    //       icon: 'chart-histogram',
    //       showSubRoute: false,
    //     },
    //     {
    //       label: "Earnings",
    //       link: all_routes.adminEarningsReportList,
    //       icon: 'chart-line',
    //       showSubRoute: false,
    //     },
    //     {
    //       label: "Rentals",
    //       link: all_routes.adminRentalReportList,
    //       icon: 'chart-infographic',
    //       showSubRoute: false,
    //     },
        
    //   ],
    // },
    // {
    //     label: "Authentication",
    //     submenuOpen: true,
    //     showSubRoute: false,
    //     submenuHdr: "Authentication",
    //     submenuItems: [
    //       {
    //         label: "Login",
    //         link: all_routes.adminlogin,
    //         icon: 'login',
    //         showSubRoute: false,
    //       },
    //       {
    //         label: "Forgot Password",
    //         link: all_routes.forgotPassword,
    //         icon: 'help-triangle',
    //         showSubRoute: false,
    //       },
    //       {
    //         label: "Email Verification",
    //         link: all_routes.adminOtp,
    //         icon: 'mail-exclamation',
    //         showSubRoute: false,
    //       },
    //       {
    //         label: "Reset Password",
    //         link: all_routes.adminResetPassword,
    //         icon: 'restore',
    //         showSubRoute: false,
    //       },
          
    //     ],
    //   },
  
    // {
    //   label: "Settings & Configuration",
    //   submenu: true,
    //   showSubRoute: false,
    //   submenuHdr: "Settings & Configuration",
    //   submenuItems: [
    //     {
    //       label: "Account Settings",
    //       submenu: true,
    //       showSubRoute: false,
    //       icon: 'user-cog',
    //       submenuItems: [
    //         {
    //             label: "Profile",
    //             link: all_routes.profileSettings
    //         },
    //         {
    //             label: "Security",
    //             link: all_routes.securitySetting
    //         },
    //         {
    //             label: "Notifications",
    //             link: all_routes.notificationsSetting
    //         },
    //         {
    //             label: "Integrations",
    //             link: all_routes.integrationsSettings
    //         },
    //         {
    //             label: "Tracker",
    //             link: "/admin/account-settings/tracker-setting"
    //         }
    //       ],
    //     },
    //     {
    //       label: "Website Settings",
    //       submenu: true,
    //       showSubRoute: false,
    //       icon: 'user-cog',
    //       submenuItems: [
    //         {
    //             label: "Company Settings",
    //             link: "/admin/website-settings/company-setting"
    //         },
    //         {
    //             label: "Localization",
    //             link: "/admin/website-settings/localization-setting"
    //         },
    //         {
    //             label: "Prefixes",
    //             link: "/admin/website-settings/prefixes"
    //         },
    //         {
    //             label: "SEO Setup",
    //             link: "/admin/website-settings/seo-setup"
    //         },
    //         {
    //             label: "Language",
    //             link: "/admin/website-settings/language-setting"
    //         },
    //         {
    //             label: "Maintenance Mode",
    //             link: "/admin/website-settings/maintenance-mode"
    //         },
    //         {
    //             label: "Login & Register",
    //             link: "/admin/website-settings/login-setting"
    //         },
    //         {
    //             label: "AI Configuration",
    //             link: "/admin/website-settings/ai-configuration"
    //         },
    //         {
    //             label: "Plugin Managers",
    //             link: "/admin/website-settings/plugin-managers"
    //         }
    //       ],
    //     },
    //     {
    //       label: "Rental Settings",
    //       submenu: true,
    //       showSubRoute: false,
    //       icon: 'clock-cog',
    //       submenuItems: [
    //         {
    //             label: "Rental",
    //             link: "/admin/rental-settings/rental-setting"
    //         },
    //         {
    //             label: "Insurance",
    //             link: "/admin/rental-settings/insurance-setting"
    //         }
    //       ],
    //     },
    //     {
    //       label: "App Settings",
    //       submenu: true,
    //       showSubRoute: false,
    //       icon: 'device-mobile-cog',
    //       submenuItems: [
    //         {
    //             label: "Invoice Settings",
    //             link: "/admin/app-settings/invoice-setting"
    //         },
    //         {
    //             label: "Invoice Templates",
    //             link: "/admin/app-settings/invoice-template"
    //         },
    //         {
    //             label: "Signatures",
    //             link: "/admin/app-settings/signatures-setting"
    //         },
    //         {
    //             label: "Custom Fields",
    //             link: "/admin/app-settings/custom-fields"
    //         }
    //       ],
    //     },
    //     {
    //       label: "System Settings",
    //       submenu: true,
    //       showSubRoute: false,
    //       icon: 'device-desktop-cog',
    //       submenuItems: [
    //         {
    //             label: "Email Settings",
    //             link: "/admin/system-settings/email-setting"
    //         },
    //         {
    //             label: "Email Templates",
    //             link: "/admin/system-settings/email-templates"
    //         },
    //         {
    //             label: "SMS Gateways",
    //             link: "/admin/system-settings/sms-gateways"
    //         },
    //         {
    //             label: "GDPR Cookies",
    //             link: "/admin/system-settings/gdpr-cookies"
    //         }
    //       ],
    //     },
    //     {
    //       label: "Finance Settings",
    //       submenu: true,
    //       showSubRoute: false,
    //       icon: 'settings-dollar',
    //       submenuItems: [
    //         {
    //             label: "Payment Methods",
    //             link: "/admin/finance-settings/payment-methods"
    //         },
    //         {
    //             label: "Bank Accounts",
    //             link: "/admin/finance-settings/bank-accounts"
    //         },
    //         {
    //             label: "Tax Rates",
    //             link: "/admin/finance-settings/tax-rates"
    //         },
    //         {
    //             label: "Currencies",
    //             link: "/admin/finance-settings/currencies"
    //         }
    //       ],
    //     },
    //     {
    //       label: "Other Settings",
    //       submenu: true,
    //       showSubRoute: false,
    //       icon: 'settings-2',
    //       submenuItems: [
    //         {
    //             label: "Sitemap",
    //             link: "/admin/other-settings/sitemap"
    //         },
    //         {
    //             label: "Clear Cache",
    //             link: "/admin/other-settings/clear-cache"
    //         },
    //         {
    //             label: "Storage",
    //             link: "/admin/other-settings/storage"
    //         },
    //         {
    //             label: "Cronjob",
    //             link: "/admin/other-settings/cronjob"
    //         },
    //         {
    //             label: "System Backup",
    //             link: "/admin/other-settings/system-backup"
    //         },
    //         {
    //             label: "Database Backup",
    //             link: "/admin/other-settings/database-backup"
    //         },
    //         {
    //             label: "System Update",
    //             link: "/admin/other-settings/system-update"
    //         }
    //       ],
    //     },
        
    //   ],
    // },
  
    // {
    //   label: "UI Interface",
    //   submenuOpen: true,
    //   showSubRoute: false,
    //   submenuHdr: "UI Interface",
    //   submenuItems: [
    //     {
    //       label: "Base UI",
    //       submenu: true,
    //       showSubRoute: false,
    //       icon: 'vector-bezier',
    //       submenuItems: [
    //         { label: "Alerts", link: all_routes.alerts, showSubRoute: false },
    //         { label: "Accordion", link: all_routes.accordion, showSubRoute: false },
    //         { label: "Avatar", link: all_routes.avatar, showSubRoute: false },
    //         { label: "Badges", link:all_routes.badges, showSubRoute: false },
    //         { label: "Border", link: all_routes.borders, showSubRoute: false },
    //         { label: "Buttons", link: all_routes.buttons, showSubRoute: false },
    //         {
    //           label: "Button Group",
    //           link: all_routes.buttonsgroup,
    //           showSubRoute: false,
    //         },
    //         { label: "Breadcrumb", link: all_routes.breadcrumb, showSubRoute: false },
    //         { label: "Card", link: all_routes.cards, showSubRoute: false },
    //         { label: "Carousel", link: all_routes.carousel, showSubRoute: false },
    //         { label: "Colors", link: all_routes.colors, showSubRoute: false },
    //         { label: "Dropdowns", link: all_routes.dropdowns, showSubRoute: false },
    //         { label: "Grid", link: all_routes.grid, showSubRoute: false },
    //         { label: "Images", link: all_routes.images, showSubRoute: false },
    //         { label: "Lightbox", link: all_routes.lightbox, showSubRoute: false },
    //         { label: "Media", link: all_routes.media, showSubRoute: false },
    //         { label: "Modals", link: all_routes.modals, showSubRoute: false },
    //         { label: "Offcanvas", link: all_routes.offcanvas, showSubRoute: false },
    //         { label: "Pagination", link: all_routes.pagination, showSubRoute: false },
    //         { label: "Popovers", link: all_routes.popover, showSubRoute: false },
    //         { label: "Progress", link: all_routes.progress, showSubRoute: false },
    //         {
    //           label: "Placeholders",
    //           link: all_routes.placeholder,
    //           showSubRoute: false,
    //         },
    //         { label: "Spinner", link: all_routes.spinner, showSubRoute: false },
    //         {
    //           label: "Sweet Alerts",
    //           link: all_routes.sweetalerts,
    //           showSubRoute: false,
    //         },
    //         { label: "Tabs", link: all_routes.navtabs, showSubRoute: false },
    //         { label: "Toasts", link: all_routes.toasts, showSubRoute: false },
    //         { label: "Tooltips", link: all_routes.tooltip, showSubRoute: false },
    //         { label: "Typography", link: all_routes.typography, showSubRoute: false },
    //         { label: "Video", link: all_routes.video, showSubRoute: false },
    //         { label: "Sortable", link: all_routes.Sortable, showSubRoute: false },
    //         { label: "SwiperJs", link: all_routes.SwiperJs, showSubRoute: false },
    //       ],
    //     },
    //     {
    //       label: "Advanced UI",
    //       submenu: true,
    //       showSubRoute: false,
    //       icon: 'stack-forward',
    //       submenuItems: [
    //         { label: "Ribbon", link: all_routes.ribbon, showSubRoute: false },
    //         { label: "Clipboard", link: all_routes.clipboard, showSubRoute: false },
    //         { label: "Drag & Drop", link: all_routes.draganddrop, showSubRoute: false },
    //         {
    //           label: "Range Slider",
    //           link: all_routes.rangeslider,
    //           showSubRoute: false,
    //         },
    //         {
    //           label: "Text Editor",
    //           link: all_routes.texteditor,
    //           showSubRoute: false,
    //         },
    //         { label: "Counter", link: all_routes.counter, showSubRoute: false },
    //         { label: "Scrollbar", link: all_routes.scrollbar, showSubRoute: false },
    //         { label: "Timeline", link: all_routes.timeline, showSubRoute: false },
    //       ],
    //     },
    //     {
    //       label: "Charts",
    //       submenu: true,
    //       showSubRoute: false,
    //       icon: 'chart-infographic',
    //       submenuItems: [
    //         { label: "Apex Charts", link: all_routes.apexchart, showSubRoute: false },
    //         { label: "Chart Js", link: all_routes.chartjs, showSubRoute: false },
    //       ],
    //     },
    //     {
    //       label: "Icons",
    //       submenu: true,
    //       showSubRoute: false,
    //       icon: 'icons',
    //       submenuItems: [
    //         {
    //           label: "Fontawesome Icons",
    //           link: all_routes.fontawesome,
    //           showSubRoute: false,
    //         },
    //         {
    //           label: "Remix Icon",
    //           link: all_routes.remixIcon,
    //           showSubRoute: false,
    //         },
    //         {
    //           label: "Bootstrap Icon",
    //           link: all_routes.BootstrapIcon,
    //           showSubRoute: false,
    //         },
    //         {
    //           label: "Tabler Icon",
    //           link: all_routes.TablerIcon,
    //           showSubRoute: false,
    //         },
           
    //         { label: "Ionic Icons", link: all_routes.ionicicons, showSubRoute: false },
    //         {
    //           label: "Material Icons",
    //           link: all_routes.materialicons,
    //           showSubRoute: false,
    //         },
    //         { label: "Pe7 Icons", link: all_routes.pe7icons, showSubRoute: false },
          
    //         {
    //           label: "Themify Icons",
    //           link: all_routes.themifyicons,
    //           showSubRoute: false,
    //         },
    //         {
    //           label: "Weather Icons",
    //           link: all_routes.iconweather,
    //           showSubRoute: false,
    //         },
    //         {
    //           label: "Typicon Icons",
    //           link: all_routes.typicons,
    //           showSubRoute: false,
    //         },
    //         { label: "Flag Icons", link: all_routes.flagicons, showSubRoute: false },
    //       ],
    //     },
    //     {
    //       label: "Forms",
    //       submenu: true,
    //       showSubRoute: false,
    //       icon: 'input-search',
    //       submenuItems: [
    //         {
    //           label: "Form Elements",
    //           submenu: true,
    //           showSubRoute: false,
    //           submenuItems: [
    //             {
    //               label: "Basic Inputs",
    //               link: all_routes.basicinput,
    //               showSubRoute: false,
    //             },
    //             {
    //               label: "Checkbox & Radios",
    //               link: all_routes.checkboxradio,
    //               showSubRoute: false,
    //             },
    //             {
    //               label: "Input Groups",
    //               link: all_routes.inputgroup,
    //               showSubRoute: false,
    //             },
    //             {
    //               label: "Grid & Gutters",
    //               link: all_routes.gridgutters,
    //               showSubRoute: false,
    //             },
    //             {
    //               label: "Form Select",
    //               link: all_routes.formselect,
    //               showSubRoute: false,
    //             },
    //             { label: "Input Masks", link: all_routes.formmask, showSubRoute: false },
    //             {
    //               label: "File Uploads",
    //               link: all_routes.fileupload,
    //               showSubRoute: false,
    //             },
    //           ],
    //         },
    //         {
    //           label: "Layouts",
    //           submenu: true,
    //           showSubRoute: false,
    //           submenuItems: [
    //             { label: "Horizontal Form", link: all_routes.formhorizontal },
    //             { label: "Vertical Form", link: all_routes.formvertical },
    //             { label: "Floating Labels", link: all_routes.floatinglabel },
    //           ],
    //         },
    //         { label: "Form Validation", link: all_routes.formvalidation },
    //         { label: "Select", link: all_routes.select2 },
    //         { label: "Form Wizard", link: all_routes.wizard },
    //         { label: "Form Picker", link: all_routes.FormPicker },
    //       ],
    //     },
    //     {
    //       label: "Tables",
    //       submenu: true,
    //       showSubRoute: false,
    //       icon: 'table',
    //       submenuItems: [
    //         { label: "Basic Tables", link: all_routes.tablebasic },
    //         { label: "Data Table", link: all_routes.datatable },
    //       ],
    //     },
    //     {
    //       label: "Map",
    //       submenu: true,
    //       showSubRoute: false,
    //       icon: 'map-pin-pin',
    //       submenuItems: [
    //         { label: "Leaflet", link: all_routes.Leaflets },
    //       ],
    //     },
    //   ],
    // },
    //     {
    //   label: "Cms",
    //   submenuOpen: true,
    //   showSubRoute: false,
    //   submenuHdr: "Cms",
  
    //   submenuItems: [
    //     {
    //       label: "Pages",
    //       link: all_routes.adminPagesList,
    //       icon: 'file-invoice',
    //       showSubRoute: false,
    //       submenu: false,
    //     },
    //     {
    //       label: "Menu Management",
    //       link: all_routes.adminMenuManagementList,
    //       icon: 'menu-2',
    //       showSubRoute: false,
    //       submenu: false,
    //     },
    //     {
    //         label: "Blogs",
    //         icon: 'device-desktop-analytics',
    //         showSubRoute: false,
    //         submenu: true,
    //         submenuItems: [
    //           { 
    //             label: "All Blogs", 
    //             link: all_routes.adminBlogsList, 
    //             sublink:all_routes.adminAddBlog,
    //             sublink2:all_routes.adminEditBlog,
    //             sublink3:all_routes.adminblogDetails,
    //             showSubRoute: false 
    //           },
    //           { label: "Categories", link: all_routes.adminBlogCategoriesList, showSubRoute: false },
    //           { label: "Comments", link: all_routes.adminBlogCommentsList, showSubRoute: false },
    //           { label: "Blog Tags", link: all_routes.adminBlogTagsList, showSubRoute: false },
    //         ]
    //       },
    //       {
    //         label: "Locations",
    //         icon: 'map',
    //         showSubRoute: false,
    //         submenu: true,
    //         submenuItems: [
    //           { label: "Countries", link: all_routes.adminCountriesList, showSubRoute: false },
    //           { label: "States", link: all_routes.adminStateList, showSubRoute: false },
    //           { label: "Cities", link: all_routes.adminCityList, showSubRoute: false },
    //         ]
    //       },
    //     {
    //       label: "Testimonials",
    //       link: all_routes.adminTestimonialsList,
    //       icon: 'brand-hipchat',
    //       showSubRoute: false,
    //       submenu: false,
    //     },
    //     {
    //         label: "FAQ's",
    //         icon: 'question-mark',
    //         showSubRoute: false,
    //         submenu: true,
    //         submenuItems: [
    //           { label: "FAQ's", link: all_routes.adminFaqList, showSubRoute: false },
    //           { label: "FAQ Category", link: all_routes.adminFaqCategoryList, showSubRoute: false },
    //         ]
    //       },
    //   ],
    // },
  
    // {
    //   label: "Extras",
    //   submenuOpen: true,
    //   showSubRoute: false,
    //   submenuHdr: "Extras",
    //   submenuItems: [
    //     {
    //       label: "Documentation",
    //       link: "#",
    //       icon: 'file-shredder',
    //       showSubRoute: false,
    //     },
    //     {
    //       label: "Changelog",
    //       link: "#",
    //       icon: 'exchange',
    //       showSubRoute: false,
    //     },
    //     {
    //       label: "Multi Level",
    //       showSubRoute: false,
    //       submenu: true,
    //       icon: 'menu-2',
    //       submenuItems: [
    //         { label: "Level 1.1", link: "#", showSubRoute: false },
    //         {
    //           label: "Level 1.2",
    //           submenu: true,
    //           showSubRoute: false,
    //           submenuItems: [
    //             { label: "Level 2.1", link: "#", showSubRoute: false },
    //             {
    //               label: "Level 2.2",
    //               submenu: true,
    //               showSubRoute: false,
    //               submenuItems: [
    //                 { label: "Level 3.1", link: "#", showSubRoute: false },
    //                 { label: "Level 3.2", link: "#", showSubRoute: false },
    //               ],
    //             },
    //           ],
    //         },
    //       ],
    //     },
    //   ],
    // },
  ];