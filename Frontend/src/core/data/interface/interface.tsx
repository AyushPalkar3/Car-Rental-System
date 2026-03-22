export interface breadcrumbs {
  title: string;
  subtitle: string;
}

export interface listgrids {
  make: string;
  model: string;
  image: string;
  rating: number;
  features: {
    type: string;
    mileage: string;
    fuel: string;
    power: string;
    year: number;
    capacity: number;
  };
  location: string;
  price: string;
}

export interface pricing {
  pricingdata: any;
  image: string;
  level: string;
  description: string;
  price: string;
  billing: string;
  message: string;
  extend: string;
  tax: string;
  return: string;
  delivery: string;
  carsystem: string;
  validity: string;
}

export interface TeamMember {
  name: string;
  designation: string;
  image: string;
  socialLinks?: SocialLink[];
}

interface SocialLink {
  url: string;
  iconClass: string;
}

export interface Review {
  author: string;
  image: string;
  rating: number;
  reviewText: string;
}

export interface ContactUs {
  contactdata: any;
  type: string;
  icon: string;
  title: string;
  link: string;
  text: string;
}

export interface values {
  value: number | string | boolean;
}


export interface CarListing {
  id: number;
  category: string;
  title: string;
  rating: number;
  price: number;
  currency: string;
  details: {
    auto: string;
    distance: string;
    fuel: string;
    power: string;
    year: number;
    persons: string;
  };
  location: {
    icon: string;
    name: string;
    address: string;
  };
  button: string;
  image: string;
}

export interface userWalletData {
  userwallet_data: any;
  id: number;
  refid: string;
  transactionfor: string;
  date: string;
  total: string; // Assuming total is a string like "+ $300"
  status: string;
}
export interface UserPaymentData {
  userpayment_data: any;
  id: number;
  booking: string;
  carname: string;
  paidon: string;
  total: string; // Assuming total is a string like "+ $300"
  status: string;
}