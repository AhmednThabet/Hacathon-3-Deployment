import React from "react";
import useForm, { FormProvider } from "lib/react-hook-form";

import { CreateInvoiceLayoutType } from "layouts/types";
import { InvoiceFiledsForm } from "features/team2/types";
export const CreateInvoiceLayout: CreateInvoiceLayoutType = ({ children }) => {
  const methods = useForm<InvoiceFiledsForm>({
    defaultValues: {
      client: {
        fullName: "",
        email: "",
        address: {
          country: "",
        },
      },
      fixed: [
        {
          itemName: "",
          describtion: "",
          price: undefined,
        },
      ],
      currency: "USD",
    },
  });
  return (
    <div className=" container sm:mx-0  flex  w-full justify-between items-start  ">
      <FormProvider {...methods}>{children}</FormProvider>
    </div>
  );
};

export default CreateInvoiceLayout;
