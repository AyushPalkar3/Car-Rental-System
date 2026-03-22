import { all_routes } from "../../../router/all_routes";


export const header = [
  {
    tittle: "Home",
    route: "/",
  },
    {
    tittle: "Cars",
    route: all_routes.listingGrid,
  },
      {
    tittle: "About Us",
    route: all_routes.aboutUs,
  },
      {
    tittle: "Contact Us",
    route: all_routes.contactUs,
  },
  // {
  //   tittle: "Listings",
  //   base: "listings",
  //   showAsTab: false,
  //   separateRoute: false,
  //   menu: [
   
  //     {
  //       menuValue: "Listing Grid",
  //       route: all_routes.listingGrid,
  //       hasSubRoute: false,
  //       showSubRoute: false,
  //       subMenus: [],
  //     },
  //     {
  //       menuValue: "Listing List",
  //       route: all_routes.listingList,
  //       hasSubRoute: false,
  //       showSubRoute: false,
  //       subMenus: [],
  //     },
  //     {
  //       menuValue: "Listing With Map",
  //       route: all_routes.listingMap,
  //       hasSubRoute: false,
  //       showSubRoute: false,
  //       subMenus: [],
  //     },
  //     {
  //       menuValue: "Listing Details",
  //       route: all_routes.listingDetails,
  //       hasSubRoute: false,
  //       showSubRoute: false,
  //       subMenus: [],
  //     },
      
  //   ],
  // },

  // {
  //   tittle: "Pages",
  //   showAsTab: false,
  //   separateRoute: false,
  //   base: "pages",
  //   menu: [
     
  //     {
  //       menuValue: "About Us",
  //       route: all_routes.aboutUs,
  //       hasSubRoute: false,
  //       showSubRoute: false,
  //       subMenus: [],
  //     },
  //     {
  //       menuValue: "Contact",
  //       route: all_routes.contactUs,
  //       hasSubRoute: false,
  //       showSubRoute: false,
  //       subMenus: [],
  //     },
      
  //     {
  //       menuValue: "Authentication",
  //       hasSubRoute: true,
  //       showSubRoute: true,
  //       showAsTab2: false,
  //       subMenus: [
  //         {
  //           menuValue: "Sign Up",
  //           route: all_routes.register,
  //           hasSubRoute: false,
  //           showSubRoute: false,
  //           subMenus: [],
  //         },
  //         {
  //           menuValue: "Sign In",
  //           route: all_routes.login,
  //           hasSubRoute: false,
  //           showSubRoute: false,
  //           subMenus: [],
  //         },
  //         {
  //           menuValue: "Forgot Password",
  //           route: all_routes.forgotPassword,
  //           hasSubRoute: false,
  //           showSubRoute: false,
  //           subMenus: [],
  //         },
  //         {
  //           menuValue: "Reset",
  //           route: all_routes.resetPassword,
  //           hasSubRoute: false,
  //           showSubRoute: false,
  //           subMenus: [],
  //         },
          
  //       ],
  //     },
  //     {
  //       menuValue: "Booking",
  //       hasSubRoute: true,
  //       showSubRoute: true,
  //       showAsTab2: false,
  //       subMenus: [
  //         {
  //           menuValue: "Booking Checkout",
  //           route: all_routes.bookingCheckout,
  //           hasSubRoute: false,
  //           showSubRoute: false,
  //           subMenus: [],
  //         },
  //         {
  //           menuValue: "Booking",
  //           route: all_routes.booking,
  //           hasSubRoute: false,
  //           showSubRoute: false,
  //           subMenus: [],
  //         },
  //         {
  //           menuValue: "Invoice Details",
  //           route: all_routes.invoiceDetails,
  //           hasSubRoute: false,
  //           showSubRoute: false,
  //           subMenus: [],
  //         },
         
          
  //       ],
  //     },
  //     {
  //       menuValue: "Error Page",
  //       hasSubRoute: true,
  //       showSubRoute: true,
  //       showAsTab2: false,
  //       subMenus: [
  //         {
  //           menuValue: "404 Error",
  //           route: all_routes.error404,
  //           hasSubRoute: false,
  //           showSubRoute: false,
  //           subMenus: [],
  //         },
  //         {
  //           menuValue: "500 Error",
  //           route: all_routes.error500,
  //           hasSubRoute: false,
  //           showSubRoute: false,
  //           subMenus: [],
  //         },
         
         
          
  //       ],
  //     },
  //     {
  //       menuValue: "Pricing",
  //       route: all_routes.pricing,
  //       hasSubRoute: false,
  //       showSubRoute: false,
  //       subMenus: [],
  //     },
  //     {
  //       menuValue: "FAQ",
  //       route: all_routes.faq,
  //       hasSubRoute: false,
  //       showSubRoute: false,
  //       subMenus: [],
  //     },
  //     {
  //       menuValue: "Gallery",
  //       route: all_routes.gallery,
  //       hasSubRoute: false,
  //       showSubRoute: false,
  //       subMenus: [],
  //     },
  //     {
  //       menuValue: "Our Team",
  //       route: all_routes.ourTeam,
  //       hasSubRoute: false,
  //       showSubRoute: false,
  //       subMenus: [],
  //     },
  //     {
  //       menuValue: "Testimonials",
  //       route: all_routes.testimonial,
  //       hasSubRoute: false,
  //       showSubRoute: false,
  //       subMenus: [],
  //     },
  //     {
  //       menuValue: "Terms & Conditions",
  //       route: all_routes.termsConditions,
  //       hasSubRoute: false,
  //       showSubRoute: false,
  //       subMenus: [],
  //     },
  //     {
  //       menuValue: "Privacy Policy",
  //       route: all_routes.privacyPolicy,
  //       hasSubRoute: false,
  //       showSubRoute: false,
  //       subMenus: [],
  //     },
  //     {
  //       menuValue: "Maintenance",
  //       route: all_routes.maintenance,
  //       hasSubRoute: false,
  //       showSubRoute: false,
  //       subMenus: [],
  //     },
  //     {
  //       menuValue: "Coming Soon",
  //       route: all_routes.comingSoon,
  //       hasSubRoute: false,
  //       showSubRoute: false,
  //       subMenus: [],
  //     },
  //   ],
  // },
  // {
  //   tittle: "Blog",
  //   base: "blog",
  //   showAsTab: false,
  //   separateRoute: false,
  //   menu: [
   
  //     {
  //       menuValue: "Blog Grid",
  //       route: all_routes.blogGrid,
  //       hasSubRoute: false,
  //       showSubRoute: false,
  //       subMenus: [],
  //     },
  //     {
  //       menuValue: "Blog List",
  //       route: all_routes.blogList,
  //       hasSubRoute: false,
  //       showSubRoute: false,
  //       subMenus: [],
  //     },
  //     {
  //       menuValue: "Blog Details",
  //       route: all_routes.blogDetails,
  //       hasSubRoute: false,
  //       showSubRoute: false,
  //       subMenus: [],
  //     },
      
  //   ],
  // },
  // {
  //   tittle: "Dashboard",
  //   base: "user",
  //   showAsTab: false,
  //   separateRoute: false,
  //   menu: [
   
  //     {
  //       menuValue: "User Dashboard",
  //       hasSubRoute: true,
  //       showSubRoute: true,
  //       showAsTab2: false,
  //       subMenus: [
  //         {
  //           menuValue: "Dashboard",
  //           route: all_routes.userDashboard,
  //           hasSubRoute: false,
  //           showSubRoute: false,
  //           subMenus: [],
  //         },
  //         {
  //           menuValue: "My Bookings",
  //           route: all_routes.userBookings,
  //           hasSubRoute: false,
  //           showSubRoute: false,
  //           subMenus: [],
  //         },
  //         {
  //           menuValue: "Reviews",
  //           route: all_routes.userReviews,
  //           hasSubRoute: false,
  //           showSubRoute: false,
  //           subMenus: [],
  //         },
  //         {
  //           menuValue: "Wishlist",
  //           route: all_routes.userWishlist,
  //           hasSubRoute: false,
  //           showSubRoute: false,
  //           subMenus: [],
  //         },
  //         {
  //           menuValue: "Messages",
  //           route: all_routes.userMessages,
  //           hasSubRoute: false,
  //           showSubRoute: false,
  //           subMenus: [],
  //         },
  //         {
  //           menuValue: "My Wallet",
  //           route: all_routes.userWallet,
  //           hasSubRoute: false,
  //           showSubRoute: false,
  //           subMenus: [],
  //         },
  //         {
  //           menuValue: "Payments",
  //           route: all_routes.userPayment,
  //           hasSubRoute: false,
  //           showSubRoute: false,
  //           subMenus: [],
  //         },
  //         {
  //           menuValue: "Settings",
  //           route: all_routes.userSettings,
  //           hasSubRoute: false,
  //           showSubRoute: false,
  //           subMenus: [],
  //         }
         
         
         
          
  //       ],
  //     },
  //     {
  //       menuValue: "Admin Dashboard",
  //       hasSubRoute: true,
  //       showSubRoute: true,
  //       showAsTab2: false,
  //       subMenus: [
  //         {
  //           menuValue: "Dashboard",
  //           route: all_routes.adminDashboard,
  //           hasSubRoute: false,
  //           admin:true,
  //           showSubRoute: false,
  //           subMenus: [],
  //         },
  //         {
  //           menuValue: "My Bookings",
  //           route: all_routes.adminReservationsList,
  //           hasSubRoute: false,
  //           admin:true,
  //           showSubRoute: false,
  //           subMenus: [],
  //         },
  //         {
  //           menuValue: "Manage",
  //           route: all_routes.adminCustomerList,
  //           hasSubRoute: false,
  //           admin:true,
  //           showSubRoute: false,
  //           subMenus: [],
  //         },
  //         {
  //           menuValue: "Rentals",
  //           route: all_routes.adminCarsList,
  //           hasSubRoute: false,
  //           admin:true,
  //           showSubRoute: false,
  //           subMenus: [],
  //         },
  //         {
  //           menuValue: "Finance & Accounts",
  //           route: all_routes.userMessages,
  //           hasSubRoute: false,
  //           admin:true,
  //           showSubRoute: false,
  //           subMenus: [],
  //         },
  //         {
  //           menuValue: "Others",
  //           route: all_routes.adminInvoicesList,
  //           hasSubRoute: false,
  //           admin:true,
  //           showSubRoute: false,
  //           subMenus: [],
  //         },
  //         {
  //           menuValue: "CMS",
  //           route: all_routes.adminPagesList,
  //           hasSubRoute: false,
  //           admin:true,
  //           showSubRoute: false,
  //           subMenus: [],
  //         },
  //         {
  //           menuValue: "Support",
  //           route: all_routes.adminContactMessagesList,
  //           hasSubRoute: false,
  //           admin:true,
  //           showSubRoute: false,
  //           subMenus: [],
  //         },
  //         {
  //           menuValue: "User Management",
  //           route: all_routes.adminUsersList,
  //           hasSubRoute: false,
  //           admin:true,
  //           showSubRoute: false,
  //           subMenus: [],
  //         },
  //         {
  //           menuValue: "Reports",
  //           route: all_routes.adminEarningsReportList,
  //           hasSubRoute: false,
  //           admin:true,
  //           showSubRoute: false,
  //           subMenus: [],
  //         },
  //         {
  //           menuValue: "Settings & Configuration",
  //           route: all_routes.profileSettings,
  //           hasSubRoute: false,
  //           admin:true,
  //           showSubRoute: false,
  //           subMenus: [],
  //         },
         
         
         
          
  //       ],
  //     },
  //   ],
  // },
];
