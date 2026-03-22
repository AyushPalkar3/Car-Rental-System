export const userBookingCancelledData = {
  getData() {
    return [
      {
        bookingId: "#1001",
        carName: "Ferrari 458 MM Speciale",
        img: "assets/img/cars/car-04.jpg",
        deliveryStatus: "Delivery",
        rentalType: "Hourly",
        pickupDeliveryLocation1: "45, Avenue ,Mark Street,",
        pickupDeliveryLocation2: "USA 15 Sep 2023, 09:30AM",
        dropoffLocation1: "21, Avenue, Windham,",
        dropoffLocation2: "USA 15 Sep 2023, 11:30AM",
        bookedOn: "15 Sep 2023, 09:00 AM",
        total: "$300",
        cancelledBy: "User",
        status: "Refund Started",
      },
      {
        bookingId: "#1006",
        carName: "Acura Sport Version",
        img: "assets/img/cars/car-06.jpg",
        deliveryStatus: "Sel pickup",
        rentalType: "Hourly",
        pickupDeliveryLocation1: "78 Cityview Drive,",
        pickupDeliveryLocation2: "Glenolden 24 Nov 2023, 06:40AM",
        dropoffLocation1: "66 Ottis Street,",
        dropoffLocation2: "Shawnee 24 Nov 2023, 08:40AM",
        bookedOn: "24 Oct 2023, 05:40 PM",
        total: "$250",
        cancelledBy: "Admin",
        status: "Cancelled",
      },
      {
        bookingId: "#1007",
        carName: "Toyota Tacoma 4WD",
        img: "assets/img/cars/car-08.jpg",
        deliveryStatus: "Delivery",
        rentalType: "Monthly",
        pickupDeliveryLocation1: "41 Duke Lane,",
        pickupDeliveryLocation2: "Branchburg 15 Dec 2023, 04:30PM",
        dropoffLocation1: "80 Glory Road,",
        dropoffLocation2: "Nashville 15 Jan 2024, 04:30PM",
        bookedOn: "02 Nov 2023, 07:30 AM",
        total: "$1000",
        cancelledBy: "User",
        status: "Refund Completed",
      },
    ];
  },

  getUserBookingCancelledSmall() {
    return Promise.resolve(this.getData().slice(0, 10));
  },

  getUserBookingCancelledMedium() {
    return Promise.resolve(this.getData().slice(0, 50));
  },

  getUserBookingCancelledLarge() {
    return Promise.resolve(this.getData().slice(0, 200));
  },

  getUserBookingCancelledXLarge() {
    return Promise.resolve(this.getData());
  },
};
