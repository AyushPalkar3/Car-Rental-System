export const userBookingCompleteData = {
  getData() {
    return [
      {
        bookingId: "#1006",
        carName: "Acura Sport Version",
        img: "assets/img/cars/car-06.jpg",
        rentalType: "Hourly",
        deliveryStatus: "Sel pickup",
        pickupDeliveryLocation1: "78 Cityview Drive,",
        pickupDeliveryLocation2: "Glenolden 24 Nov 2023, 06:40 AM",
        dropoffLocation1: "66 Ottis Street,",
        dropoffLocation2: "Shawnee 24 Nov 2023, 08:40 AM",
        bookedOn: "24 Oct 2023, 05:40 PM",
        total: "$250",
        status: "Completed",
      },
      {
        bookingId: "#1007",
        carName: "Toyota Tacoma 4WD",
        img: "assets/img/cars/car-08.jpg",
        rentalType: "Monthly",
        deliveryStatus: "Delivery",
        pickupDeliveryLocation1: "41 Duke Lane,",
        pickupDeliveryLocation2: "Branchburg 15 Dec 2023, 04:30 PM",
        dropoffLocation1: "80 Glory Road,",
        dropoffLocation2: "Nashville 15 Jan 2024, 04:30 PM",
        bookedOn: "02 Nov 2023, 07:30 AM",
        total: "$1000",
        status: "Completed",
      },
    ];
  },

  getUserBookingCompleteSmall() {
    return Promise.resolve(this.getData().slice(0, 10));
  },

  getUserBookingCompleteMedium() {
    return Promise.resolve(this.getData().slice(0, 50));
  },

  getUserBookingCompleteLarge() {
    return Promise.resolve(this.getData().slice(0, 200));
  },

  getUserBookingCompleteXLarge() {
    return Promise.resolve(this.getData());
  },
};
