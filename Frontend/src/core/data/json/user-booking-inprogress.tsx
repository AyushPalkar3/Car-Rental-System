export const userBookingInprogressData = {
  getData() {
    return [
      {
        bookingId: "#1002",
        carName: "Toyota Camry SE 350",
        deliveryStatus: "Self Pickup",
        rentalType: "Day",
        pickupDeliveryLocation1: "1646 West St, Grand Rapids",
        pickupDeliveryLocation2: "18 Sep 2023, 09:00 AM",
        dropoffLocation1: "26 Platinum Drive, Canonsburg",
        dropoffLocation2: "15 Sep 2023, 11:30 AM",
        bookedOn: "18 Sep 2023, 08:10 PM",
        total: "$500",
        status: "Inprogress",
        img: "assets/img/cars/car-01.jpg",
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
    ];
  },

  getUserBookingInprogressSmall() {
    return Promise.resolve(this.getData().slice(0, 10));
  },

  getUserBookingInprogressMedium() {
    return Promise.resolve(this.getData().slice(0, 50));
  },

  getUserBookingInprogressLarge() {
    return Promise.resolve(this.getData().slice(0, 200));
  },

  getUserBookingInprogressXLarge() {
    return Promise.resolve(this.getData());
  },
};
