export const userWalletData = {
  getData() {
    return [
      {
        refId: "#1001",
        transactionFor: "Self Deposit Paypal",
        date: "15 Sep 2023, 09:00 AM",
        total: "+ $300",
        status: "Completed",
      },
      {
        refId: "#1002",
        transactionFor: "Audi A3 2019 new",
        date: "23 Oct 2023, 12:00 PM",
        total: "- $500",
        status: "Completed",
      },
      {
        refId: "#1003",
        transactionFor: "Self Deposit Stripe",
        date: "02 Nov 2023, 10:30 AM",
        total: "+ $600",
        status: "Completed",
      },
      {
        refId: "#1004",
        transactionFor: "Audi A3 2020 new",
        date: "18 Dec 2023, 02:30 PM",
        total: "+ $1500",
        status: "Pending",
      },
      {
        refId: "#1005",
        transactionFor: "Self Deposit Stripe",
        date: "05 Jan 2024, 08:00 AM",
        total: "- $450",
        status: "Failed",
      },
      {
        refId: "#1006",
        transactionFor: "Self Deposit Paypal",
        date: "20 Feb 2024, 11:30 PM",
        total: "+ $1000",
        status: "Completed",
      },
    ];
  },

  getUserWalletSmall() {
    return Promise.resolve(this.getData().slice(0, 10));
  },

  getUserWalletMedium() {
    return Promise.resolve(this.getData().slice(0, 50));
  },

  getUserWalletLarge() {
    return Promise.resolve(this.getData().slice(0, 200));
  },

  getUserWalletXLarge() {
    return Promise.resolve(this.getData());
  },
};
