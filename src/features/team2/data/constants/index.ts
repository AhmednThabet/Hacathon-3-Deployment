export const columns = [
  {
    key: "itemName",
    header: "Name",
    paddingLeft: 20,
    width: 220,
  },
  {
    key: "updatedAt",
    header: "Date",
    width: 100,
  },
  {
    key: "subTotal",
    header: "Amount",
  },
  {
    key: "fullName",
    header: "Client",
  },
  {
    key: "status",
    header: "Status",
  },
];

export const taps = [
  { key: "all", tap: "All" },
  { key: "invoice", tap: "Invoices" },
  { key: "service", tap: "Links" },
];

export const options = [
  { id: "paid", select: "Paid" },
  { id: "sent", select: "Sent" },
  { id: "pending", select: "Pending" },
  { id: "cancelled", select: "Cancelled" },
  { id: "active", select: "Active" },
  { id: "inactive", select: "Inactive" },
  { id: "refunded", select: "Refunded" },
  { id: "rejected", select: " Rejected" },
];
export const invoiceOptions = [
  { id: "paid", select: "Paid" },
  { id: "sent", select: "Sent" },
  { id: "pending", select: "Pending" },
  { id: "cancelled", select: "Cancelled" },
  { id: "refunded", select: "Refunded" },
  { id: "rejected", select: " Rejected" },
];
export const ServiceOptions = [
  { id: "pending", select: "Pending" },
  { id: "active", select: "Active" },
  { id: "inactive", select: "Inactive" },
  { id: "rejected", select: " Rejected" },
];
