export const header_data = () => ({ type: "HEADER_DATA" });
export const set_header_data = (payload: any) => ({
  type: "HEADER_DATA",
  payload,
});
export const toggleSidebar = () => ({ type: "TOOGLE_SIDEBAR_DATA" });
export const set_toggleSidebar_data = (payload: boolean) => ({
  type: "TOOGLE_SIDEBAR_DATA",
  payload,
});

export const set_listingsdata = (payload: any) => ({
  type: "ListingsData",
  payload,
});
export const set_listing_list_data = (payload: any) => ({
  type: "Listings_List_Data",
  payload,
});
export const set_pricing_data = (payload: any) => ({
  type: "Pricing_Data",
  payload,
});

export const set_our_teamdata = (payload: any) => ({
  type: "Our_team_data",
  payload,
});

export const set_testimonial_data = (payload: any) => ({
  type: "testimonial_data",
  payload,
});

export const set_contact_data = (payload: any) => ({
  type: "contact_data",
  payload,
});
export const set_userwallet_data = (payload: any) => ({
  type: "userwallet_data",
  payload,
});
export const set_userpayment_data = (payload: any) => ({
  type: "userpayment_data",
  payload,
});
export const set_is_mobile_sidebar = (payload: any) => ({
  type: 'MOBILE_SIDEBAR',
  payload,
});
export const current_route_array = () => ({ type: 'CURRENT_ROUTE_DATA' });
export const set_current_route_array = (payload: any) => ({
  type: 'CURRENT_ROUTE_ARRAY_DATA',
  payload,
});
export const current_route = () => ({ type: 'CURRENT_ROUTE_DATA' });
export const set_current_route = (payload: any) => ({
  type: 'CURRENT_ROUTE_DATA',
  payload,
});