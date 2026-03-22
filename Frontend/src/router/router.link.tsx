
import { Navigate } from "react-router";
import { all_routes } from "./all_routes";

import SignUp from "../feature-module/authentication/signup";
import Login from "../feature-module/authentication/login";
import ForgotPassword from "../feature-module/authentication/forgotpassword";
import ResetPassword from "../feature-module/authentication/resetpassword";
import ListingGrid from "../feature-module/listings/listing-grid";
import Listingslist from "../feature-module/listings/listing-list";
import Faq from "../feature-module/pages/faq/faq";
import Gallerys from "../feature-module/pages/gallery";
import Pricing from "../feature-module/pages/pricing/pricing";
import BlogList from "../feature-module/blog/bloglist";
import BlogGrid from "../feature-module/blog/bloggrid";
import BlogDetails from "../feature-module/blog/blogdetails";
import BookingCheckout from "../feature-module/booking/booking-checkout";
import Booking from "../feature-module/booking/booking";
import Testimonials from "../feature-module/pages/testimonial/testimonials";
import TermsCondition from "../feature-module/pages/termscondition/termscondition";
import Maintenance from "../feature-module/pages/maintenance/maintenance";
import Error404 from "../feature-module/pages/errorpages/error404";
import Error500 from "../feature-module/pages/errorpages/error500";
import Contact from "../feature-module/contact/contact";
import UserSettings from "../feature-module/user/settings/usersettings";
import UserDashboard from "../feature-module/user/userdashboard";
import UserIntegration from "../feature-module/user/userintegration";
import UserSecurity from "../feature-module/user/settings/usersecurity";
import UserPreferences from "../feature-module/user/settings/userpreferences";
import UserNotification from "../feature-module/user/settings/usernotification";
import UserWishList from "../feature-module/user/wishlist/userwishlist";
import UserMessages from "../feature-module/user/usermessages";
import UserReview from "../feature-module/user/userreview";
import UserBookingCancelled from "../feature-module/user/userbookingcancelled";
import UserBookings from "../feature-module/user/userbookings";
import UserBookingUpcoming from "../feature-module/user/user-booking-upcoming";
import UserBookingComplete from "../feature-module/user/user-booking-complete";
import { UserBookingInprogress } from "../feature-module/user/user-booking-inprogress";
import UserPayment from "../feature-module/user/userpayment";
import BookingAddon from "../feature-module/booking/booking-addon";
import BookingDetail from "../feature-module/booking/booking-detail";
import BookingPayment from "../feature-module/booking/booking-payment";
import BookingSuccess from "../feature-module/booking/booking-success";
import HomeOne from "../feature-module/home/home-one/home-one";
import HomeTwo from "../feature-module/home/home-two/home-two";
import HomeThree from "../feature-module/home/home-three/home-three";
import OurTeam from "../feature-module/pages/ourteam/ourTeam";
import ComingSoon from "../feature-module/pages/comingsoon/comingsoon";
import UserWallet from "../feature-module/user/wallet/userwallet";
import PrivacyPolicy from "../feature-module/pages/privacypolicy/privacypolicy";
import AboutUs from "../feature-module/pages/aboutus";
import InvoiceDetails from "../feature-module/booking/invoice";
import BookingCalendar from "../feature-module/user/bookings-calendar";
import BookingCompleteCalendar from "../feature-module/user/booking-complete-calendar";
import BookingCancelledCalendar from "../feature-module/user/booking.cancelled-calendar";
import BookingInprogressCalendar from "../feature-module/user/booking-inprogress-calendar";
import BookingUpcomingCalendar from "../feature-module/user/booking-upcoming-calendar";
import ListingMap from "../feature-module/listings/listing-map";
import HomeNew from "../feature-module/home/home-new/homeNew";
import AddListing from "../feature-module/listings/add-listing";
import AdminDashboard from "../feature-module/admin/pages/dashboard/adminDashboard";
import AdminLogin from "../feature-module/admin/auth/login";
import ReservationsList from "../feature-module/admin/pages/bookings/reservations/reservationsList";
import CarPartnerReservationsList from "../feature-module/Car Partner/pages/bookings/reservations/reservationsList";
import AdminForgotPassword from "../feature-module/admin/auth/forgot-password";
import AdminOtp from "../feature-module/admin/auth/otp";
import AdminResetPassword from "../feature-module/admin/auth/reset-password";
import QuotationsList from "../feature-module/admin/pages/bookings/quotations/quotationsList";
import EnquiriesList from "../feature-module/admin/pages/bookings/enquiries/enquiriesList";
import CustomersList from "../feature-module/admin/pages/manage/customersList";
import CustomersCompaniesList from "../feature-module/admin/pages/manage/customersCompaniesList";
import DriversList from "../feature-module/admin/pages/manage/driversList";
import LocationsList from "../feature-module/admin/pages/manage/locationsList";
import CarsList from "../feature-module/admin/pages/rentals/cars/carsList";
import BrandsList from "../feature-module/admin/pages/rentals/car-attributes/brandsList";
import TypesList from "../feature-module/admin/pages/rentals/car-attributes/typesList";
import ModelsList from "../feature-module/admin/pages/rentals/car-attributes/modelsList";
import TransmissionsList from "../feature-module/admin/pages/rentals/car-attributes/transmissionsList";
import FuelList from "../feature-module/admin/pages/rentals/car-attributes/fuelList";
import ColorList from "../feature-module/admin/pages/rentals/car-attributes/colorList";
import SteeringList from "../feature-module/admin/pages/rentals/car-attributes/steeringList";
import SeatsList from "../feature-module/admin/pages/rentals/car-attributes/seatsList";
import CylindersList from "../feature-module/admin/pages/rentals/car-attributes/cylindersList";
import DoorsList from "../feature-module/admin/pages/rentals/car-attributes/doorsList";
import FeaturesList from "../feature-module/admin/pages/rentals/car-attributes/featuresList";
import SafetyFeaturesList from "../feature-module/admin/pages/rentals/car-attributes/safetyFeaturesList";
import Calender from "../feature-module/admin/pages/bookings/calender/calender";
import ExtraServicesList from "../feature-module/admin/pages/rentals/extraServicesList";
import PricingList from "../feature-module/admin/pages/rentals/pricingList";
import InspectionsList from "../feature-module/admin/pages/rentals/inspectionsList";
import MaintenanceList from "../feature-module/admin/pages/rentals/maintenanceList";
import ReviewsList from "../feature-module/admin/pages/rentals/reviewsList";
import InvoicesList from "../feature-module/admin/pages/finance/invoicesList";
import AddReservation from "../feature-module/admin/pages/bookings/reservations/addReservation";
import EditReservation from "../feature-module/admin/pages/bookings/reservations/editReservation";
import ClipBoard from "../feature-module/admin/pages/uiInterface/advanced-ui/clipboard";
import Counter from "../feature-module/admin/pages/uiInterface/advanced-ui/counter";
import DragAndDrop from "../feature-module/admin/pages/uiInterface/advanced-ui/dragdrop";
import Timeline from "../feature-module/admin/pages/uiInterface/advanced-ui/timeline";
import TextEditor from "../feature-module/admin/pages/uiInterface/advanced-ui/texteditor";
import Apexchart from "../feature-module/admin/pages/uiInterface/charts/apexcharts";
import FontawesomeIcons from "../feature-module/admin/pages/uiInterface/icons/fontawesome";
import MaterialIcons from "../feature-module/admin/pages/uiInterface/icons/materialicon";
import PE7Icons from "../feature-module/admin/pages/uiInterface/icons/pe7icons";
import ThemifyIcons from "../feature-module/admin/pages/uiInterface/icons/themify";
import TypiconIcons from "../feature-module/admin/pages/uiInterface/icons/typicons";
import BasicInputs from "../feature-module/admin/pages/uiInterface/forms/formelements/basic-inputs";
import WeatherIcons from "../feature-module/admin/pages/uiInterface/icons/weathericons";
import CheckboxRadios from "../feature-module/admin/pages/uiInterface/forms/formelements/checkbox-radios";
import InputGroup from "../feature-module/admin/pages/uiInterface/forms/formelements/input-group";
import GridGutters from "../feature-module/admin/pages/uiInterface/forms/formelements/grid-gutters";
import FormSelect from "../feature-module/admin/pages/uiInterface/forms/formelements/form-select";
import FormMask from "../feature-module/admin/pages/uiInterface/forms/formelements/form-mask";
import FileUpload from "../feature-module/admin/pages/uiInterface/forms/formelements/fileupload";
import FormHorizontal from "../feature-module/admin/pages/uiInterface/forms/formelements/layouts/form-horizontal";
import FormVertical from "../feature-module/admin/pages/uiInterface/forms/formelements/layouts/form-vertical";
import FloatingLabel from "../feature-module/admin/pages/uiInterface/forms/formelements/layouts/floating-label";
import FormValidation from "../feature-module/admin/pages/uiInterface/forms/formelements/layouts/form-validation";
import FormSelect2 from "../feature-module/admin/pages/uiInterface/forms/formelements/layouts/form-select2";
import FormWizard from "../feature-module/admin/pages/uiInterface/forms/formelements/form-wizard";
import DataTables from "../feature-module/admin/pages/uiInterface/table/data-tables";
import TablesBasic from "../feature-module/admin/pages/uiInterface/table/tables-basic";
import IonicIcons from "../feature-module/admin/pages/uiInterface/icons/ionicicons";
import Placeholder from "../feature-module/admin/pages/uiInterface/base-ui/placeholder";
import Alert from "../feature-module/admin/pages/uiInterface/base-ui/alert";
import Tooltips from "../feature-module/admin/pages/uiInterface/base-ui/tooltips";
import Ribbon from "../feature-module/admin/pages/uiInterface/advanced-ui/ribbon";
import Swiperjs from "../feature-module/admin/pages/uiInterface/base-ui/swiper";
import TablerIcons from "../feature-module/admin/pages/uiInterface/icons/tablericons";
import BootstrapIcons from "../feature-module/admin/pages/uiInterface/icons/bootstrapicons";
import RemixIcons from "../feature-module/admin/pages/uiInterface/icons/remixIcons";
import FormPikers from "../feature-module/admin/pages/uiInterface/forms/formpickers";
import Leaflet from "../feature-module/admin/pages/uiInterface/map/leaflet";
import Accordion from "../feature-module/admin/pages/uiInterface/base-ui/accordion";
import Avatar from "../feature-module/admin/pages/uiInterface/base-ui/avatar";
import Badges from "../feature-module/admin/pages/uiInterface/base-ui/badges";
import Borders from "../feature-module/admin/pages/uiInterface/base-ui/borders";
import Breadcrumb from "../feature-module/admin/pages/uiInterface/base-ui/breadcrumb";
import Buttons from "../feature-module/admin/pages/uiInterface/base-ui/buttons";
import ButtonsGroup from "../feature-module/admin/pages/uiInterface/base-ui/buttonsgroup";
import Cards from "../feature-module/admin/pages/uiInterface/base-ui/cards";
import Carousel from "../feature-module/admin/pages/uiInterface/base-ui/carousel";
import Colors from "../feature-module/admin/pages/uiInterface/base-ui/colors";
import Dropdowns from "../feature-module/admin/pages/uiInterface/base-ui/dropdowns";
import Grid from "../feature-module/admin/pages/uiInterface/base-ui/grid";
import Images from "../feature-module/admin/pages/uiInterface/base-ui/images";
import Lightboxes from "../feature-module/admin/pages/uiInterface/base-ui/lightbox";
import Media from "../feature-module/admin/pages/uiInterface/base-ui/media";
import Modals from "../feature-module/admin/pages/uiInterface/base-ui/modals";
import NavTabs from "../feature-module/admin/pages/uiInterface/base-ui/navtabs";
import Offcanvas from "../feature-module/admin/pages/uiInterface/base-ui/offcanvas";
import Pagination from "../feature-module/admin/pages/uiInterface/base-ui/pagination";
import Popovers from "../feature-module/admin/pages/uiInterface/base-ui/popover";
import RangeSlides from "../feature-module/admin/pages/uiInterface/advanced-ui/rangeslider";
import Progress from "../feature-module/admin/pages/uiInterface/base-ui/progress";
import Spinner from "../feature-module/admin/pages/uiInterface/base-ui/spinner";
import Typography from "../feature-module/admin/pages/uiInterface/base-ui/typography";
import Video from "../feature-module/admin/pages/uiInterface/base-ui/video";
import Toasts from "../feature-module/admin/pages/uiInterface/base-ui/toasts";
import Sortable from "../feature-module/admin/pages/uiInterface/base-ui/ui-sortable";
import SweetAlert from "../feature-module/admin/pages/uiInterface/base-ui/sweetAlerts";
import ChartJs from "../feature-module/admin/pages/uiInterface/charts/chartjs";
import FlagIcons from "../feature-module/admin/pages/uiInterface/icons/flagicons";
import PaymentsList from "../feature-module/admin/pages/finance/paymentsList";
import CouponsList from "../feature-module/admin/pages/others/couponsList";
import NewslettersList from "../feature-module/admin/pages/others/newslettersList";
import UnavailabilityRequests from "../feature-module/admin/pages/others/unavailabilityRequests";
import ProfileSettings from "../feature-module/admin/pages/settings/account-settings/profileSettings";
import SecuritySetting from "../feature-module/admin/pages/settings/account-settings/securitySetting";
import NotificationsSetting from "../feature-module/admin/pages/settings/account-settings/notificationsSetting";
import IntegrationsSettings from "../feature-module/admin/pages/settings/account-settings/integrationsSettings";
import TrackerSetting from "../feature-module/admin/pages/settings/account-settings/trackerSetting";
import PluginManagers from "../feature-module/admin/pages/settings/website-settings/pluginManagers";
import AiConfiguration from "../feature-module/admin/pages/settings/website-settings/aiConfiguration";
import LoginSetting from "../feature-module/admin/pages/settings/website-settings/loginSetting";
import MaintenanceMode from "../feature-module/admin/pages/settings/website-settings/maintenanceMode";
import Language2Setting from "../feature-module/admin/pages/settings/website-settings/language2Setting";
import LanguageSetting from "../feature-module/admin/pages/settings/website-settings/languageSetting";
import SeoSetup from "../feature-module/admin/pages/settings/website-settings/seoSetup";
import Prefixes from "../feature-module/admin/pages/settings/website-settings/prefixes";
import LocalizationSetting from "../feature-module/admin/pages/settings/website-settings/localizationSetting";
import CompanySetting from "../feature-module/admin/pages/settings/website-settings/companySetting";
import RentalSetting from "../feature-module/admin/pages/settings/rental-settings/rentalSetting";
import InsuranceSetting from "../feature-module/admin/pages/settings/rental-settings/insuranceSetting";
import CustomFields from "../feature-module/admin/pages/settings/app-settings/customFields";
import SignaturesSetting from "../feature-module/admin/pages/settings/app-settings/signaturesSetting";
import InvoiceTemplate from "../feature-module/admin/pages/settings/app-settings/invoiceTemplate";
import InvoiceSetting from "../feature-module/admin/pages/settings/app-settings/invoiceSetting";
import GdprCookies from "../feature-module/admin/pages/settings/system-settings/gdprCookies";
import SmsGateways from "../feature-module/admin/pages/settings/system-settings/smsGateways";
import EmailTemplates from "../feature-module/admin/pages/settings/system-settings/emailTemplates";
import EmailSetting from "../feature-module/admin/pages/settings/system-settings/emailSetting";
import Currencies from "../feature-module/admin/pages/settings/finance-settings/currencies";
import TaxRates from "../feature-module/admin/pages/settings/finance-settings/taxRates";
import BankAccounts from "../feature-module/admin/pages/settings/finance-settings/bankAccounts";
import PaymentMethods from "../feature-module/admin/pages/settings/finance-settings/paymentMethods";
import SystemUpdate from "../feature-module/admin/pages/settings/other-settings/systemUpdate";
import DatabaseBackup from "../feature-module/admin/pages/settings/other-settings/databaseBackup";
import SystemBackup from "../feature-module/admin/pages/settings/other-settings/systemBackup";
import Cronjob from "../feature-module/admin/pages/settings/other-settings/cronjob";
import Storage from "../feature-module/admin/pages/settings/other-settings/storage";
import ClearCache from "../feature-module/admin/pages/settings/other-settings/clearCache";
import Sitemap from "../feature-module/admin/pages/settings/other-settings/sitemap";
import PagesList from "../feature-module/admin/pages/cms/pagesList";
import MenuManagementList from "../feature-module/admin/pages/cms/menuManagementList";
import BlogsList from "../feature-module/admin/pages/cms/blogs/blogsList";
import BlogCategoriesList from "../feature-module/admin/pages/cms/blogs/blogCategoriesList";
import BlogCommentsList from "../feature-module/admin/pages/cms/blogs/blogCommentsList";
import BlogTagsList from "../feature-module/admin/pages/cms/blogs/blogTagsList";
import CountriesList from "../feature-module/admin/pages/cms/locations/countriesList";
import StateList from "../feature-module/admin/pages/cms/locations/stateList";
import CityList from "../feature-module/admin/pages/cms/locations/cityList";
import TestimonialsList from "../feature-module/admin/pages/cms/testimonialsList";
import FaqList from "../feature-module/admin/pages/cms/faqList";
import FaqCategoryList from "../feature-module/admin/pages/cms/faqCategoryList";
import ContactMessagesList from "../feature-module/admin/pages/support/contactMessagesList";
import AnnouncementsList from "../feature-module/admin/pages/support/announcementsList";
import TicketsList from "../feature-module/admin/pages/support/ticketsList";
import UsersList from "../feature-module/admin/pages/user-management/usersList";
import RolesPermissionsList from "../feature-module/admin/pages/user-management/rolesPermissionsList";
import IncomeReportList from "../feature-module/admin/pages/reports/incomeReportList";
import EarningsReportList from "../feature-module/admin/pages/reports/earningsReportList";
import RentalReportList from "../feature-module/admin/pages/reports/rentalReportList";
import AddQuotation from "../feature-module/admin/pages/bookings/quotations/addQuotation";
import EditQuotation from "../feature-module/admin/pages/bookings/quotations/editQuotation";
import AddCar from "../feature-module/admin/pages/rentals/cars/addCar";
import EditCar from "../feature-module/admin/pages/rentals/cars/editCar";
import ReservationDetails from "../feature-module/admin/pages/bookings/reservations/reservationDetails";
import AdminInvoiceDetails from "../feature-module/admin/pages/finance/adminInvoiceDetails";
import CustomerDetails from "../feature-module/admin/pages/manage/customerDetails";
import CompanyDetails from "../feature-module/admin/pages/manage/companyDetails";
import QuotationDetails from "../feature-module/admin/pages/bookings/quotations/quotationDetails";
import CarDetails from "../feature-module/admin/pages/rentals/cars/carDetails";
import PermissionsList from "../feature-module/admin/pages/user-management/permissionsList";
import EditMenu from "../feature-module/admin/pages/cms/editMenu";
import AddBlog from "../feature-module/admin/pages/cms/blogs/addBlog";
import EditBlog from "../feature-module/admin/pages/cms/blogs/editBlog";
import AddPages from "../feature-module/admin/pages/cms/addPages";
import EditPages from "../feature-module/admin/pages/cms/editPages";
import AdminChat from "../feature-module/admin/pages/others/adminChat";
import AddInvoice from "../feature-module/admin/pages/finance/addInvoice";
import EditInvoice from "../feature-module/admin/pages/finance/editInvoice";
import TrackingMap from "../feature-module/admin/pages/rentals/trackingMap";
import AdminBlogDetails from "../feature-module/admin/pages/cms/blogs/blogDetails";
import ListingDetails from "../feature-module/listings/listingDetails";
import CarPartnerList from "../feature-module/admin/pages/manage/carPartnerList";
import CarPartnerDashboard from "../feature-module/Car Partner/pages/dashboard/CarPartnerDashboard";
import CarPartnerLogin from "../feature-module/Car Partner/auth/login";
import CarPartnerForgotPassword from "../feature-module/Car Partner/auth/forgot-password";
import CarPartnerOtp from "../feature-module/Car Partner/auth/otp";
import CarPartnerResetPassword from "../feature-module/Car Partner/auth/reset-password";
import CarPartnerProfileSettings from "../feature-module/Car Partner/pages/settings/account-settings/profileSettings";
import CarPartnerSecuritySettings from "../feature-module/Car Partner/pages/settings/account-settings/securitySetting";
import CarPartnerNotificationsSetting from "../feature-module/Car Partner/pages/settings/account-settings/notificationsSetting";
import CarPartnerIntegrationsSettings from "../feature-module/Car Partner/pages/settings/account-settings/integrationsSettings";
import CarPartnerTrackerSetting from "../feature-module/Car Partner/pages/settings/account-settings/trackerSetting";
import CarPartnerCarsList from "../feature-module/Car Partner/pages/rentals/cars/carsList";
import CarPartnerBrandsList from "../feature-module/Car Partner/pages/rentals/car-attributes/brandsList";
import CarPartnerTypesList from "../feature-module/Car Partner/pages/rentals/car-attributes/typesList";
import CarPartnerModelsList from "../feature-module/Car Partner/pages/rentals/car-attributes/modelsList";
import CarPartnerTransmissionsList from "../feature-module/Car Partner/pages/rentals/car-attributes/transmissionsList";
import CarPartnerFuelList from "../feature-module/Car Partner/pages/rentals/car-attributes/fuelList";
import CarPartnerColorList from "../feature-module/Car Partner/pages/rentals/car-attributes/colorList";
import CarPartnerSteeringList from "../feature-module/Car Partner/pages/rentals/car-attributes/steeringList";
import CarPartnerSeatsList from "../feature-module/Car Partner/pages/rentals/car-attributes/seatsList";
import CarPartnerCylindersList from "../feature-module/Car Partner/pages/rentals/car-attributes/cylindersList";
import CarPartnerDoorsList from "../feature-module/Car Partner/pages/rentals/car-attributes/doorsList";
import CarPartnerFeaturesList from "../feature-module/Car Partner/pages/rentals/car-attributes/featuresList";
import CarPartnerSafetyFeaturesList from "../feature-module/Car Partner/pages/rentals/car-attributes/safetyFeaturesList";
import CarPartnerExtraServicesList from "../feature-module/Car Partner/pages/rentals/extraServicesList";
import CarPartnerPricingList from "../feature-module/Car Partner/pages/rentals/pricingList";
import CarPartnerAddCar from "../feature-module/Car Partner/pages/rentals/cars/addCar";
import CarPartnerEditCar from "../feature-module/Car Partner/pages/rentals/cars/editCar";
import CarPartnerCarDetails from "../feature-module/Car Partner/pages/rentals/cars/carDetails";
import CarPartnerInspectionsList from "../feature-module/Car Partner/pages/rentals/inspectionsList";
import CarPartnerReviewsList from "../feature-module/Car Partner/pages/rentals/reviewsList";
import CarPartnerCountriesList from "../feature-module/Car Partner/pages/cms/locations/countriesList";
import CarPartnerStateList from "../feature-module/Car Partner/pages/cms/locations/stateList";
import CarPartnerCityList from "../feature-module/Car Partner/pages/cms/locations/cityList";
import CarPartnerAddReservation from "../feature-module/Car Partner/pages/bookings/reservations/addReservation";
import CarPartnerEditReservation from "../feature-module/Car Partner/pages/bookings/reservations/editReservation";
import CarPartnerReservationDetails from "../feature-module/Car Partner/pages/bookings/reservations/reservationDetails";
import CarPartnerCustomersList from "../feature-module/Car Partner/pages/manage/customersList";
import CarPartnerCustomerDetails from "../feature-module/Car Partner/pages/manage/customerDetails";
import CarPartnerCustomersCompaniesList from "../feature-module/Car Partner/pages/manage/customersCompaniesList";
import CarPartnerCompanyDetails from "../feature-module/Car Partner/pages/manage/companyDetails";
import CarPartnerInvoicesList from "../feature-module/Car Partner/pages/finance/invoicesList";
import CarPartnerAdminInvoiceDetails from "../feature-module/Car Partner/pages/finance/adminInvoiceDetails";
import CarPartnerAddInvoice from "../feature-module/Car Partner/pages/finance/addInvoice";
import CarPartnerEditInvoice from "../feature-module/Car Partner/pages/finance/editInvoice";
import CarPartnerPaymentsList from "../feature-module/Car Partner/pages/finance/paymentsList";
import CarPartnerCouponsList from "../feature-module/Car Partner/pages/others/couponsList";
import CarPartnerContactMessagesList from "../feature-module/Car Partner/pages/support/contactMessagesList";
import CarPartnerUsersList from "../feature-module/Car Partner/pages/user-management/usersList";
import CarPartnerRolesPermissionsList from "../feature-module/Car Partner/pages/user-management/rolesPermissionsList";
import CarPartnerPermissionsList from "../feature-module/Car Partner/pages/user-management/permissionsList";
// import BookingCalendar from "../user/bookings-calendar";

const routes = all_routes;

export const publicRoutes = [
   {
    path: "/home",
    element: <Navigate to="/index" />,
  },
  {
    path: routes.homeOne,
    element: <HomeOne />,
  },
  {
    path: routes.homeTwo,
    element: <HomeTwo />,
  },
  {
    path: routes.homeThree,
    element: <HomeThree />,
  },
  {
    path: routes.homeFour,
    element: <HomeNew />,
  },
  // {
  //   path: routes.contactUs,
  //   element: <Contact />,
  // },
];

export const listingroutes = [
  {
    path: routes.listingGrid,
    element: <ListingGrid />,
  },
  {
    path: routes.listingList,
    element: <Listingslist />,
  },
  {
    path: routes.listingDetails,
    element: <ListingDetails/>,
  },
  {
    path: routes.listingMap,
    element: <ListingMap />,
  },
  {
    path: routes.addListing,
    element: <AddListing />,
  },
];

export const pageroutes = [
  {
    path: routes.aboutUs,
    element: <AboutUs />,
  },
    {
    path: routes.contactUs,
    element: <Contact />,
  },
  {
    path: routes.pricing,
    element: <Pricing />,
  },
  {
    path: routes.faq,
    element: <Faq />,
  },
  {
    path: routes.gallery,
    element: <Gallerys />,
  },
  {
    path: routes.bookingCheckout,
    element: <BookingCheckout />,
  },
  {
    path: routes.booking,
    element: <Booking />,
  },
  {
    path: routes.invoiceDetails,
    element: <InvoiceDetails />,
  },
  {
    path: routes.ourTeam,
    element: <OurTeam />,
  },
  {
    path: routes.testimonial,
    element: <Testimonials />,
  },
  {
    path: routes.termsConditions,
    element: <TermsCondition />,
  },
  {
    path: routes.privacyPolicy,
    element: <PrivacyPolicy />,
  },
  {
    path: routes.bookingAddon,
    element: <BookingAddon />,
  },
  {
    path: routes.bookingCheckout,
    element: <BookingCheckout />,
  },
  {
    path: routes.bookingDetail,
    element: <BookingDetail />,
  },
  {
    path: routes.bookingPayment,
    element: <BookingPayment />,
  },
  {
    path: routes.bookingSuccess,
    element: <BookingSuccess />,
  },
];

export const blogroutes = [
  {
    path: routes.blogList,
    element: <BlogList />,
  },
  {
    path: routes.blogGrid,
    element: <BlogGrid />,
  },
  {
    path: routes.blogDetails,
    element: <BlogDetails />,
  },
];

export const authenticationRoute = [
  {
    path: routes.register,
    element: <Login />,
  },
  {
    path: routes.login,
    element: <Login />,
  },
  {
    path: routes.forgotPassword,
    element: <ForgotPassword />,
  },
  {
    path: routes.resetPassword,
    element: <ResetPassword />,
  },
  {
    path: routes.error404,
    element: <Error404 />,
  },
  {
    path: routes.error500,
    element: <Error500 />,
  },
  {
    path: routes.maintenance,
    element: <Maintenance />,
  },
  {
    path: routes.comingSoon,
    element: <ComingSoon />,
  },
];

export const usermodule = [
  {
    path: routes.userDashboard,
    element: <UserDashboard />,
  },
  {
    path: routes.userSettings,
    element: <UserSettings />,
  },
  {
    path: routes.userIntegration,
    element: <UserIntegration />,
  },
  {
    path: routes.userSecurity,
    element: <UserSecurity />,
  },
  {
    path: routes.preference,
    element: <UserPreferences />,
  },
  {
    path: routes.notification,
    element: <UserNotification />,
  },
  {
    path: routes.userWallet,
    element: <UserWallet />,
  },
  {
    path: routes.userWishlist,
    element: <UserWishList />,
  },
  {
    path: routes.userMessages,
    element: <UserMessages />,
  },
  {
    path: routes.userPayment,
    element: <UserPayment />,
  },
  {
    path: routes.userReviews,
    element: <UserReview />,
  },
  {
    path: routes.userBookingCancelled,
    element: <UserBookingCancelled />,
  },
  {
    path: routes.userBookingCancelled,
    element: <UserBookingCancelled />,
  },
  {
    path: routes.userBookings,
    element: <UserBookings />,
  },
  {
    path: routes.userBookingUpcoming,
    element: <UserBookingUpcoming />,
  },
  {
    path: routes.userBookingComplete,
    element: <UserBookingComplete />,
  },
  {
    path: routes.userBookingCancelled,
    element: <UserBookingCancelled />,
  },
  {
    path: routes.userBookingInprogress,
    element: <UserBookingInprogress />,
  },
  {
    path: routes.BookingCalendar,
    element: <BookingCalendar />,
  },
  {
    path: routes.BookingCompleteCalendar,
    element: <BookingCompleteCalendar />,
  },
  {
    path: routes.BookingCancelledCalendar,
    element: <BookingCancelledCalendar />,
  },
  {
    path: routes.BookingInprogressCalendar,
    element: <BookingInprogressCalendar />,
  },
  {
    path: routes.BookingUpcomingCalendar,
    element: <BookingUpcomingCalendar />,
  },
  // {
  //   path: routes.bookingCalendar,
  //   element: <BookingCalendar />,
  // },
];
export const adminRoutes = [
  {
    path: routes.adminDashboard,
    element: <AdminDashboard />,
  },
  {
    path: routes.adminReservationsList,
    element: <ReservationsList />,
  },
  {
    path: routes.adminQuotationsList,
    element: <QuotationsList />,
  },
  {
    path: routes.adminEnquiriesList,
    element: <EnquiriesList />,
  },
  {
    path: routes.adminCustomerList,
    element: <CustomersList />,
  },
  {
    path: routes.adminCustomersCompaniesList,
    element: <CustomersCompaniesList />,
  },
  {
    path: routes.adminDriversList,
    element: <DriversList />,
  },
  {
    path: routes.adminCarPartnerList,
    element: <CarPartnerList/>,
  },
  {
    path: routes.adminLocationsList,
    element: <LocationsList />,
  },
  {
    path: routes.adminCarsList,
    element: <CarsList />,
  },
  {
    path: routes.adminBrandsList,
    element: <BrandsList />,
  },
  {
    path: routes.adminTypesList,
    element: <TypesList />,
  },
  {
    path: routes.adminModelsList,
    element: <ModelsList />,
  },
  {
    path: routes.adminTransmissionsList,
    element: <TransmissionsList />,
  },
  {
    path: routes.adminFuelList,
    element: <FuelList />,
  },
  {
    path: routes.adminColorList,
    element: <ColorList />,
  },
  {
    path: routes.adminSteeringList,
    element: <SteeringList />,
  },
  {
    path: routes.adminSeatsList,
    element: <SeatsList />,
  },
  {
    path: routes.adminCylindersList,
    element: <CylindersList />,
  },
  {
    path: routes.adminDoorsList,
    element: <DoorsList />,
  },
  {
    path: routes.adminFeaturesList,
    element: <FeaturesList />,
  },
  {
    path: routes.adminSafetyFeaturesList,
    element: <SafetyFeaturesList />,
  },
  {
    path: routes.adminCalender,
    element: <Calender />,
  },
  {
    path: routes.adminExtraServicesList,
    element: <ExtraServicesList />,
  },
  {
    path: routes.adminPricingList,
    element: <PricingList />,
  },
  {
    path: routes.adminInspectionsList,
    element: <InspectionsList />,
  },
  {
    path: routes.adminMaintenanceList,
    element: <MaintenanceList />,
  },
  {
    path: routes.adminReviewsList,
    element: <ReviewsList />,
  },
  {
    path: routes.adminInvoicesList,
    element: <InvoicesList />,
  },
  {
    path: routes.adminAddReservations,
    element: <AddReservation />,
  },
  {
    path: routes.adminEditReservations,
    element: <EditReservation />,
  },
  {
    path: `${routes.adminEditReservations}/:id`,
    element: <EditReservation />,
  },
  {
    path: routes.adminPaymentsList,
    element: <PaymentsList />,
  },
  {
    path: routes.adminCouponsList,
    element: <CouponsList />,
  },
  {
    path: routes.adminNewslettersList,
    element: <NewslettersList />,
  },
  {
    path: routes.adminUnavailabilityRequests,
    element: <UnavailabilityRequests />,
  },
  {
    path: routes.adminPagesList,
    element: <PagesList />,
  },
  {
    path: routes.adminMenuManagementList,
    element: <MenuManagementList />,
  },
  {
    path: routes.adminBlogsList,
    element: <BlogsList />,
  },
  {
    path: routes.adminBlogCategoriesList,
    element: <BlogCategoriesList />,
  },
  {
    path: routes.adminBlogCommentsList,
    element: <BlogCommentsList />,
  },
  {
    path: routes.adminBlogTagsList,
    element: <BlogTagsList />,
  },
  {
    path: routes.adminCountriesList,
    element: <CountriesList />,
  },
  {
    path: routes.adminStateList,
    element: <StateList />,
  },
  {
    path: routes.adminCityList,
    element: <CityList />,
  },
  {
    path: routes.adminTestimonialsList,
    element: <TestimonialsList />,
  },
  {
    path: routes.adminFaqList,
    element: <FaqList />,
  },
  {
    path: routes.adminFaqCategoryList,
    element: <FaqCategoryList />,
  },
  {
    path: routes.adminContactMessagesList,
    element: <ContactMessagesList />,
  },
  {
    path: routes.adminAnnouncementsList,
    element: <AnnouncementsList />,
  },
  {
    path: routes.adminTicketsList,
    element: <TicketsList />,
  },
  {
    path: routes.adminUsersList,
    element: <UsersList />,
  },
  {
    path: routes.adminRolesPermissionsList,
    element: <RolesPermissionsList />,
  },
  {
    path: routes.adminPermissionsList,
    element: <PermissionsList />,
  },
  {
    path: routes.adminIncomeReportList,
    element: <IncomeReportList />,
  },
  {
    path: routes.adminEarningsReportList,
    element: <EarningsReportList />,
  },
  {
    path: routes.adminRentalReportList,
    element: <RentalReportList />,
  },
  {
    path: routes.addQuotation,
    element: <AddQuotation />,
  },
  {
    path: routes.editQuotation,
    element: <EditQuotation />,
  },
  {
    path: routes.addCar,
    element: <AddCar />,
  },
  {
    path: routes.adminEditMenu,
    element: <EditMenu />,
  },
  {
    path: routes.adminAddBlog,
    element: <AddBlog />,
  },
  {
    path: routes.adminEditBlog,
    element: <EditBlog />,
  },
  {
    path: routes.adminAddPages,
    element: <AddPages />,
  },
  {
    path: routes.adminEditPages,
    element: <EditPages />,
  },
  {
    path: routes.editCar,
    element: <EditCar />,
  },
  {
    path: routes.reservationDetails,
    element: <ReservationDetails />,
  },
  {
    path: `${routes.reservationDetails}/:id`,
    element: <ReservationDetails />,
  },
  {
    path: "/admin/invoice-details",
    element: <Navigate to={routes.adminInvoicesList} replace />,
  },
  {
    path: routes.admininvoiceDetails,
    element: <AdminInvoiceDetails />,
  },
  {
    path: routes.customerDetails + "/:id",
    element: <CustomerDetails />,
  },
  {
    path: routes.companyDetails,
    element: <CompanyDetails />,
  },
  {
    path: routes.quotationDetails,
    element: <QuotationDetails />,
  },
  {
    path: routes.carDetails,
    element: <CarDetails />,
  },
  {
    path: routes.adminChat,
    element: <AdminChat />,
  },
  {
    path: routes.adminAddInvoice,
    element: <AddInvoice />,
  },
  {
    path: "/admin/edit-invoice",
    element: <Navigate to={routes.adminInvoicesList} replace />,
  },
  {
    path: routes.adminEditInvoice,
    element: <EditInvoice />,
  },
  {
    path: routes.adminTrackingMap,
    element: <TrackingMap />,
  },
  {
    path: routes.adminblogDetails,
    element: <AdminBlogDetails />,
  },

]
export const adminAuth = [
  {
    path: routes.adminlogin,
    element: <AdminLogin />,
  },  
  {
    path: routes.adminForgotPassword,
    element: <AdminForgotPassword />,
  },
  {
    path: routes.adminOtp,
    element: <AdminOtp />,
  },
  {
    path: routes.adminResetPassword,
    element: <AdminResetPassword />,
  },

]
export const uiInterface = [
  {
    path: routes.clipboard,
    element: <ClipBoard />,
  },
  {
    path: routes.counter,
    element: <Counter />,
  },
  {
    path: routes.draganddrop,
    element: <DragAndDrop />,
  },
  {
    path: routes.texteditor,
    element: <TextEditor />,
  },
  {
    path: routes.timeline,
    element: <Timeline />,
  },
  {
    path: routes.apexchart,
    element: <Apexchart />,
  },
  {
    path: routes.chartjs,
    element: <ChartJs />,
  },
  {
    path: routes.fontawesome,
    element: <FontawesomeIcons />,
  },
  {
    path: routes.flagicons,
    element: <FlagIcons />,
  },
  {
    path: routes.materialicons,
    element: <MaterialIcons />,
  },
  {
    path: routes.pe7icons,
    element: <PE7Icons />,
  },
  {
    path: routes.themifyicons,
    element: <ThemifyIcons />,
  },
  {
    path: routes.TablerIcon,
    element: <TablerIcons />,
  },
  {
    path: routes.typicons,
    element: <TypiconIcons />,
  },
  {
    path: routes.basicinput,
    element: <BasicInputs />,
  },
  {
    path: routes.iconweather,
    element: <WeatherIcons />,
  },
  {
    path: routes.checkboxradio,
    element: <CheckboxRadios />,
  },
  {
    path: routes.inputgroup,
    element: <InputGroup />,
  },
  {
    path: routes.gridgutters,
    element: <GridGutters />,
  },
  {
    path: routes.formselect,
    element: <FormSelect />,
  },
  {
    path: routes.formmask,
    element: <FormMask />,
  },
  {
    path: routes.fileupload,
    element: <FileUpload />,
  },
  {
    path: routes.formhorizontal,
    element: <FormHorizontal />,
  },
  {
    path: routes.formvertical,
    element: <FormVertical />,
  },
  {
    path: routes.floatinglabel,
    element: <FloatingLabel />,
  },
  {
    path: routes.formvalidation,
    element: <FormValidation />,
  },
  {
    path: routes.select2,
    element: <FormSelect2 />,
  },
  {
    path: routes.wizard,
    element: <FormWizard />,
  },
  {
    path: routes.datatable,
    element: <DataTables />,
  },
  {
    path: routes.tablebasic,
    element: <TablesBasic />,
  },
  {
    path: routes.ionicicons,
    element: <IonicIcons />,
  },
  {
    path: routes.placeholder,
    element: <Placeholder />,
  },
  {
    path: routes.alerts,
    element: <Alert />,
  },
  {
    path: routes.sweetalerts,
    element: <SweetAlert />,
  },
  {
    path: routes.tooltip,
    element: <Tooltips />,
  },
  {
    path: routes.ribbon,
    element: <Ribbon />,
  },
  {
    path: routes.SwiperJs,
    element: <Swiperjs />,
  },
  {
    path: routes.Sortable,
    element: <Sortable />,
  },

  {
    path: routes.BootstrapIcon,
    element: <BootstrapIcons />,
  },
  {
    path: routes.remixIcon,
    element: <RemixIcons />,
  },
  {
    path: routes.FormPicker,
    element: <FormPikers />,
  },
  {
    path: routes.Leaflets,
    element: <Leaflet />,
  },
  {
    path: routes.accordion,
    element: <Accordion />,
  },
  {
    path: routes.avatar,
    element: <Avatar />,
  },
  {
    path: routes.badges,
    element: <Badges />,
  },
  {
    path: routes.borders,
    element: <Borders />,
  },
  {
    path: routes.breadcrumb,
    element: <Breadcrumb />,
  },
  {
    path: routes.buttons,
    element: <Buttons />,
  },
  {
    path: routes.buttonsgroup,
    element: <ButtonsGroup />,
  },
  {
    path: routes.cards,
    element: <Cards />,
  },
  {
    path: routes.carousel,
    element: <Carousel />,
  },
  {
    path: routes.colors,
    element: <Colors />,
  },
  {
    path: routes.dropdowns,
    element: <Dropdowns />,
  },
  {
    path: routes.grid,
    element: <Grid />,
  },
  {
    path: routes.images,
    element: <Images />,
  },
  {
    path: routes.lightbox,
    element: <Lightboxes />,
  },
  {
    path: routes.media,
    element: <Media />,
  },
  {
    path: routes.modals,
    element: <Modals />,
  },
  {
    path: routes.navtabs,
    element: <NavTabs />,
  },
  {
    path: routes.offcanvas,
    element: <Offcanvas />,
  },
  {
    path: routes.pagination,
    element: <Pagination />,
  },
  {
    path: routes.popover,
    element: <Popovers />,
  },
  {
    path: routes.rangeslider,
    element: <RangeSlides />,
  },
  {
    path: routes.progress,
    element: <Progress />,
  },
  {
    path: routes.spinner,
    element: <Spinner />,
  },

  {
    path: routes.typography,
    element: <Typography />,
  },
  {
    path: routes.video,
    element: <Video />,
  },
  {
    path: routes.toasts,
    element: <Toasts />,
  },
]
export const settingsRoute = [
  {
    path: routes.profileSettings,
    element: <ProfileSettings />,
  },
  {
    path: routes.securitySetting,
    element: <SecuritySetting />,
  },
  {
    path: routes.notificationsSetting,
    element: <NotificationsSetting />,
  },
  {
    path: routes.integrationsSettings,
    element: <IntegrationsSettings />,
  },
  {
    path: routes.trackerSetting,
    element: <TrackerSetting />,
  },
  {
    path: routes.pluginManagers,
    element: <PluginManagers />,
  },
  {
    path: routes.aiConfiguration,
    element: <AiConfiguration />,
  },
  {
    path: routes.loginSetting,
    element: <LoginSetting />,
  },
  {
    path: routes.maintenanceMode,
    element: <MaintenanceMode />,
  },
  {
    path: routes.language2Setting,
    element: <Language2Setting />,
  },
  {
    path: routes.languageSetting,
    element: <LanguageSetting />,
  },
  {
    path: routes.seoSetup,
    element: <SeoSetup />,
  },
  {
    path: routes.prefixes,
    element: <Prefixes />,
  },
  {
    path: routes.localizationSetting,
    element: <LocalizationSetting />,
  },
  {
    path: routes.companySetting,
    element: <CompanySetting />,
  },
  {
    path: routes.insuranceSetting,
    element: <InsuranceSetting />,
  },
  {
    path: routes.rentalSetting,
    element: <RentalSetting />,
  },
  {
    path: routes.customFields,
    element: <CustomFields />,
  },
  {
    path: routes.signaturesSetting,
    element: <SignaturesSetting />,
  },
  {
    path: routes.invoiceTemplate,
    element: <InvoiceTemplate />,
  },
  {
    path: routes.invoiceSetting,
    element: <InvoiceSetting />,
  },
  {
    path: routes.gdprCookies,
    element: <GdprCookies />,
  },
  {
    path: routes.smsGateways,
    element: <SmsGateways />,
  },
  {
    path: routes.emailTemplates,
    element: <EmailTemplates />,
  },
  {
    path: routes.emailSetting,
    element: <EmailSetting />,
  },
  {
    path: routes.currencies,
    element: <Currencies />,
  },
  {
    path: routes.taxRates,
    element: <TaxRates />,
  },
  {
    path: routes.bankAccounts,
    element: <BankAccounts />,
  },
  {
    path: routes.paymentMethods,
    element: <PaymentMethods />,
  },
  {
    path: routes.systemUpdate,
    element: <SystemUpdate />,
  },
  {
    path: routes.databaseBackup,
    element: <DatabaseBackup />,
  },
  {
    path: routes.systemBackup,
    element: <SystemBackup />,
  },
  {
    path: routes.cronjob,
    element: <Cronjob />,
  },
  {
    path: routes.storage,
    element: <Storage />,
  },
  {
    path: routes.clearCache,
    element: <ClearCache />,
  },
  {
    path: routes.sitemap,
    element: <Sitemap />,
  },
]




export const carPartnerRoutes = [
  {
    path: routes.carPartnerDashboard,
    element: <CarPartnerDashboard />,
  },
  {
    path: routes.carPartnerReservationsList,
    element: <CarPartnerReservationsList />,
  },
  {
    path: "/car-partner/cars",
    element: <CarPartnerCarsList />,
  },
  {
    path: "/car-partner/brands",
    element: <CarPartnerBrandsList />,
  },
  {
    path: "/car-partner/types",
    element: <CarPartnerTypesList />,
  },
  {
    path: "/car-partner/models",
    element: <CarPartnerModelsList />,
  },
  {
    path: "/car-partner/transmissions",
    element: <CarPartnerTransmissionsList />,
  },
  {
    path: "/car-partner/fuel",
    element: <CarPartnerFuelList />,
  },
  {
    path: "/car-partner/color",
    element: <CarPartnerColorList />,
  },
  {
    path: "/car-partner/steering",
    element: <CarPartnerSteeringList />,
  },
  {
    path: "/car-partner/seats",
    element: <CarPartnerSeatsList />,
  },
  {
    path: "/car-partner/cylinders",
    element: <CarPartnerCylindersList />,
  },
  {
    path: "/car-partner/doors",
    element: <CarPartnerDoorsList />,
  },
  {
    path: "/car-partner/features",
    element: <CarPartnerFeaturesList />,
  },
  {
    path: "/car-partner/safety-features",
    element: <CarPartnerSafetyFeaturesList />,
  },
  {
    path: "/car-partner/extra-services",
    element: <CarPartnerExtraServicesList />,
  },
  {
    path: "/car-partner/pricing",
    element: <CarPartnerPricingList />,
  },
  {
    path: "/car-partner/countries",
    element: <CarPartnerCountriesList />,
  },
  {
    path: "/car-partner/state",
    element: <CarPartnerStateList />,
  },
  {
    path: "/car-partner/city",
    element: <CarPartnerCityList />,
  },
  {
    path: "/car-partner/add-car",
    element: <CarPartnerAddCar />,
  },
  {
    path: "/car-partner/edit-car",
    element: <CarPartnerEditCar />,
  },
  {
    path: "/car-partner/car-details",
    element: <CarPartnerCarDetails />,
  },
  // ── Bookings CRUD ─────────────────────────────────────────────────────────
  {
    path: "/car-partner/add-reservation",
    element: <CarPartnerAddReservation />,
  },
  {
    path: "/car-partner/edit-reservation",
    element: <CarPartnerEditReservation />,
  },
  {
    path: routes.carPartnerReservationDetails,
    element: <CarPartnerReservationDetails />,
  },
  {
    path: `${routes.carPartnerReservationDetails}/:id`,
    element: <CarPartnerReservationDetails />,
  },

  // ── Manage ────────────────────────────────────────────────────────────────
  {
    path: "/car-partner/customers",
    element: <CarPartnerCustomersList />,
  },
  {
    path: "/car-partner/customer-details",
    element: <CarPartnerCustomerDetails />,
  },
  {
    path: "/car-partner/companies",
    element: <CarPartnerCustomersCompaniesList />,
  },
  {
    path: "/car-partner/company-details",
    element: <CarPartnerCompanyDetails />,
  },

  // ── Rentals extras ────────────────────────────────────────────────────────
  {
    path: "/car-partner/inspections",
    element: <CarPartnerInspectionsList />,
  },
  {
    path: "/car-partner/reviews",
    element: <CarPartnerReviewsList />,
  },

  // ── Finance ───────────────────────────────────────────────────────────────
  {
    path: "/car-partner/invoices",
    element: <CarPartnerInvoicesList />,
  },
  {
    path: "/car-partner/invoice-details",
    element: <CarPartnerAdminInvoiceDetails />,
  },
  {
    path: "/car-partner/add-invoice",
    element: <CarPartnerAddInvoice />,
  },
  {
    path: "/car-partner/edit-invoice",
    element: <CarPartnerEditInvoice />,
  },
  {
    path: "/car-partner/payments",
    element: <CarPartnerPaymentsList />,
  },

  // ── Others ────────────────────────────────────────────────────────────────
  {
    path: "/car-partner/coupons",
    element: <CarPartnerCouponsList />,
  },

  // ── Support ───────────────────────────────────────────────────────────────
  {
    path: "/car-partner/contact-messages",
    element: <CarPartnerContactMessagesList />,
  },

  // ── User Management ───────────────────────────────────────────────────────
  {
    path: "/car-partner/users",
    element: <CarPartnerUsersList />,
  },
  {
    path: "/car-partner/roles-permissions",
    element: <CarPartnerRolesPermissionsList />,
  },
  {
    path: "/car-partner/permissions",
    element: <CarPartnerPermissionsList />,
  },

]
export const carPartnerAuth = [
  {
    path: routes.carPartnerLogin,
    element: <CarPartnerLogin />,
  },  
  {
    path: routes.carPartnerForgotPassword,
    element: <CarPartnerForgotPassword />,
  },
  {
    path: routes.carPartnerOtp,
    element: <CarPartnerOtp />,
  },
  {
    path: routes.carPartnerResetPassword,
    element: <CarPartnerResetPassword />,
  },

]

export const carPartnerSettingsRoute = [
  {
    path: routes.carPartnerProfileSettings,
    element: <CarPartnerProfileSettings />,
  },
  {
    path: routes.carPartnerSecuritySettings,
    element: <CarPartnerSecuritySettings />,
  },
  {
    path: routes.carPartnerNotificationsSetting,
    element: <CarPartnerNotificationsSetting />,
  },
  {
    path: routes.carPartnerIntegrationsSettings,
    element: <CarPartnerIntegrationsSettings />,
  },
  {
    path: routes.carPartnerTrackerSetting,
    element: <CarPartnerTrackerSetting />,
  },
]