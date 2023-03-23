import { Dispatch, FC, SetStateAction } from "react";

export type JopDetailsProps = {
  id?: number;
  currencyFormat: [string, string];
  replace: any;
  setJopData: Dispatch<
    SetStateAction<{
      fullName: string;
      email: string;
      service: {
        serviceName: string;
        serviceAmount: string;
      }[];
    }>
  >;
  jopData: {
    fullName: string;
    email: string;
    service: { serviceName: string; serviceAmount: string }[];
  };
};

export type JobDetailsType = FC<JopDetailsProps>;

export type InvoiceFiledsForm = {
  client: {
    fullName: string;
    email: string;
    address: {
      country: string;
    };
  };
  fixed: {
    itemName: string;
    describtion: string;
    price: number;
  }[];
  currency: string;
};
export type CreateInvoiceProps = {
  setFormData: Dispatch<
    SetStateAction<{
      fullName: string;
      email: string;
      service: {
        serviceName: string;
        serviceAmount: string;
      }[];
    }>
  >;
  formData: {
    fullName: string;
    email: string;
    service: {
      serviceName: string;
      serviceAmount: string;
    }[];
  };
};
