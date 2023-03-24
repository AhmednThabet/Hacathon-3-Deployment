const inv = {
  _id: "641cba8e4a984c6dd372fdfe",
  invoice: {
    client: {
      _id: "63b5d6d66003306b9cde9048",
      mobile: "+970597044342",
      email: "test@gmail.com",
      address: {
        country: "Palestine",
      },
    },
    currency: "USD",
    revenue: 0,
    fixed: [
      {
        itemName: "test",
        description: "tstst",
        price: 44,
        _id: "641cba8e4a984c6dd372fdf8",
      },
    ],
    freelancer: {
      _id: "63e104aa8bba2cb3f754d7db",
      firstName: "Heba",
      lastName: "SKHAIL",
    },
    invoiceNo: "INV139",
    status: "pending_approval",
  },
  type: "invoice",
  updatedAt: "2023-03-23T20:46:06.758Z",
};
const InvoiceDrawer = ({ invoiceId }: any) => {
  // TODO:SWR data fetch for the invoice using its id
  // TODO: disapproaved case
};

export default InvoiceDrawer;
