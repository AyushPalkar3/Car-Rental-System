import { contactData } from "../json/contactus_data";
import { listingGridData } from "../json/listinggrid_data";
import { listingListData } from "../json/listinglist_data";
import { ourTeamData } from "../json/ourteam_data";
import { pricingData } from "../json/pricing_data";
import { testimonial } from "../json/testimonial_data";
import { userWalletData } from "../json/userwallet_data";

const initialState = {
  listing_grid: listingGridData,
  listing_list: listingListData,
  pricingdata: pricingData,
  ourTeamData: ourTeamData,
  testimonialdata: testimonial,
  contactdata: contactData,
  userwallet_data:userWalletData,
  mobileSidebar: false,
  current_route: { base: '', page: '', last: '' },
  current_route_array: []
};

export default initialState;
