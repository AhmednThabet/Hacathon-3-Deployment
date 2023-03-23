import React, { useState } from "react";
import JobDetails from "./JobDetails";
import ClintInfo from "./ClintInfo";
import InvoiceFormHeader from "./InvoiceFormHeader";
import { useFormContext, useFieldArray } from "lib/react-hook-form";
import { Button, Link } from "components";
import { InvoiceFiledsForm } from "../../types";
import { getCuntrySymbole } from "../../utils";
import { XCircleIcon } from "lib/@heroicons";
import { CreateInvoiceProps } from "../../types";
export const CreateInvoice = ({
  formData,
  setFormData,
}: CreateInvoiceProps) => {
  // const { jopAmountList, handleAdditems, handleDeletitems } = useJobAmount();
  const methods = useFormContext<InvoiceFiledsForm>();
  const { watch, register, control } = methods;
  const { fields, append, remove, replace } = useFieldArray({
    control,
    name: "fixed",
  });
  // const handleREmoveItem = (index) => {
  //   () => remove(index);
  //   // remov one item from formDAta
  //   // handle it by passing the index of removed item

  // };

  return (
    <div className="bg-white mt-[3rem] px-[5%] w-[45%]">
      <InvoiceFormHeader headerData={["Invoices", "Create Invoice"]} />
      <ClintInfo formData={formData} setFormData={setFormData} />
      <div className=" h-[220px] overflow-y-auto ">
        {fields.map((field, index) => (
          <div key={index} className=" w-full max-h-[250px]">
            {fields.length > 1 ? (
              <button
                tabIndex={0}
                className=" mr-2  px-[5px]  float-right rounded-[50%] cursor-pointer"
                onClick={() => remove(index)}
              >
                <XCircleIcon height={20} width={20} />
              </button>
            ) : null}
            <JobDetails
              id={index | 0}
              currencyFormat={[getCuntrySymbole(watch("currency")), ""]}
              setJopData={setFormData}
              jopData={formData}
              replace={replace}
            />
          </div>
        ))}
      </div>
      <p
        tabIndex={0}
        className="text-blue-light cursor-pointer mb-8"
        onClick={() =>
          append({
            itemName: "",
            describtion: "",
            price: 0,
          })
        }
      >
        + Add item or sevice{" "}
      </p>
      <Button buttonSize="medium" fullWidth={true}>
        {" "}
        Send Invoice
      </Button>
      <Button
        buttonSize="medium"
        fullWidth={true}
        className="!bg-white text-black border font-semibold  shadow-[#00000029] my-4"
      >
        {" "}
        Back
      </Button>
    </div>
  );
};

export default CreateInvoice;
