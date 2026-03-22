export const userUpcomingData = {
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
          status: "Upcoming",
          img: "assets/img/cars/car-01.jpg",
        }
       
      ];
    },
  
    getUserUpcomingSmall() {
      return Promise.resolve(this.getData().slice(0, 10));
    },
  
    getUserUpcomingMedium() {
      return Promise.resolve(this.getData().slice(0, 50));
    },
  
    getUserUpcomingLarge() {
      return Promise.resolve(this.getData().slice(0, 200));
    },
  
    getUserUpcomingXLarge() {
      return Promise.resolve(this.getData());
    },
  
  };
  