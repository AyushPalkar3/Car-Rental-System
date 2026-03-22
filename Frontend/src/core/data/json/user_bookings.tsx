export const userBookingsData = {
  getData() {
    return [
      {
        bookingId: "#1001",
        carName: "Ferrari 458 MM Speciale",
        deliveryStatus: "Delivery",
        rentalType: "Hourly",
        pickupDeliveryLocation1: "45, Avenue ,Mark Street,",
        pickupDeliveryLocation2: "USA 15 Sep 2023, 09:30 AM",
        dropoffLocation1: "21, Avenue, Windham,",
        dropoffLocation2: "USA 15 Sep 2023, 11:30 AM",
        bookedOn: "15 Sep 2023, 09:00 AM",
        total: "$300",
        status: "Upcoming",
        img: "assets/img/cars/car-04.jpg",
      },
      {
        bookingId: "#1002",
        carName: "Toyota Camry SE 350",
        deliveryStatus: "Self Pickup",
        rentalType: "Day",
        pickupDeliveryLocation1: "1646 West St, Grand Rapids",
        pickupDeliveryLocation2: "18 Sep 2023, 09:00 AM",
        dropoffLocation1: "26 Platinum Drive,Canonsburg",
        dropoffLocation2: "15 Sep 2023, 11:30 AM",
        bookedOn: "18 Sep 2023, 08:10 PM",
        total: "$500",
        status: "Inprogress",
        img: "assets/img/cars/car-01.jpg",
      },
      {
        bookingId: "#1003",
        carName: "Kia Soul 2016",
        deliveryStatus: "Delivery",
        rentalType: "Weekly",
        pickupDeliveryLocation1: "14 Straford Park, Pittsburg",
        pickupDeliveryLocation2: "03 Oct 2023, 10:15 AM",
        dropoffLocation1: "11 Pleasant Hill,Pittsburg",
        dropoffLocation2: "10 Oct 2023, 10:15 AM",
        bookedOn: "21 Sep 2023, 04:15 PM",
        total: "$600",
        status: "Cancelled",
        img: "assets/img/cars/car-05.jpg",
      },
      {
        bookingId: "#1004",
        carName: "Audi A3 2019 new",
        deliveryStatus: "Self Pickup",
        rentalType: "Monthly",
        pickupDeliveryLocation1: "63 White Pine Lane, Martinsville",
        pickupDeliveryLocation2: "05 Nov 2023, 02:30 PM",
        dropoffLocation1: "14 Roane Avenue, Herndon",
        dropoffLocation2: "05 Dec 2023, 02:30 PM",
        bookedOn: "04 Oct 2023, 08:00 AM",
        total: "$1500",
        status: "Inprogress",
        img: "assets/img/cars/car-03.jpg",
      },
      {
        bookingId: "#1005",
        carName: "2018 Chevrolet Camaro",
        deliveryStatus: "Delivery",
        rentalType: "Day",
        pickupDeliveryLocation1: "24 Better Street, Kansas City",
        pickupDeliveryLocation2: "16 Nov 2023, 10:20 AM",
        dropoffLocation1: "77 Geraldine Lane, Newyork",
        dropoffLocation2: "17 Nov 2023, 10:20 AM",
        bookedOn: "16 Oct 2023, 12:30 PM",
        total: "$450",
        status: "Cancelled",
        img: "assets/img/cars/car-05.jpg",
      },
      {
        bookingId: "#1006",
        carName: "Acura Sport Version",
        deliveryStatus: "Self pickup",
        rentalType: "Hourly",
        pickupDeliveryLocation1: "78 Cityview Drive, Glenolden",
        pickupDeliveryLocation2: "24 Nov 2023, 06:40 AM",
        dropoffLocation1: "66 Ottis Street, Shawnee",
        dropoffLocation2: "24 Nov 2023, 08:40 AM",
        bookedOn: "24 Oct 2023, 05:40 PM",
        total: "$250",
        status: "Completed",
        img: "assets/img/cars/car-06.jpg",
      },
      {
        bookingId: "#1007",
        carName: "Toyota Tacoma 4WD",
        deliveryStatus: "Delivery",
        rentalType: "Monthly",
        pickupDeliveryLocation1: "41 Duke Lane, Branchburg",
        pickupDeliveryLocation2: "15 Dec 2023, 04:30 PM",
        dropoffLocation1: "80 Glory Road, Nashville",
        dropoffLocation2: "15 Jan 2024, 04:30 PM",
        bookedOn: "02 Nov 2023, 07:30 AM",
        total: "$1000",
        status: "Cancelled",
        img: "assets/img/cars/car-08.jpg",
      },
    ];
  },

  getUserBookingsSmall() {
    return Promise.resolve(this.getData().slice(0, 10));
  },

  getUserBookingsMedium() {
    return Promise.resolve(this.getData().slice(0, 50));
  },

  getUserBookingsLarge() {
    return Promise.resolve(this.getData().slice(0, 200));
  },

  getUserBookingsXLarge() {
    return Promise.resolve(this.getData());
  },

};
