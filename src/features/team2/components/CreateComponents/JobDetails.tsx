import React, { useState, useEffect } from "react";
import { Input, TextArea } from "components";
import { JobDetailsType, InvoiceFiledsForm } from "../../types";
import { useFormContext } from "react-hook-form";
import { FORM_VALIDATION } from "data";
const JobDetails: JobDetailsType = ({ id = 0, currencyFormat }) => {
  const {
    register,
    formState: { errors },
    clearErrors,
    watch,
  } = useFormContext<InvoiceFiledsForm>();

  console.log(watch("currency"));

  return (
    <div className="overflow-auto ">
      <p className="text-gray-dark font-semibold mb-2">Job Details</p>
      <div className="flex gap-6">
        <Input
          id="jobTitle-input"
          placeholder="Job Title"
          inputSize="small"
          className="h-12 basis-[85%]"
          {...register(`fixed.${id}.itemName`, {
            ...FORM_VALIDATION.itemName,
            onChange: () => clearErrors(`fixed.${id}.itemName`),
          })}
        />
        <Input
          id="amount-input"
          // placeholder={`${currencyFormat[0] ?? "$"} 0.00 ${
          //   currencyFormat[1] || ""
          //   }`}
          endIcon={watch("currency")}
          inputSize="small"
          className="h-12 basis-[20%]"
          {...register(`fixed.${id}.price`, {
            ...FORM_VALIDATION.itemPrice,
            onChange: () => clearErrors(`fixed.${id}.itemName`),
          })}
        />
      </div>
      <div>
        <TextArea
          id="description-input"
          cols={10}
          rows={3}
          placeHolder="Discription"
          // inputClassName="h-20 placeholder:top-0"
          className="w-full basis-[100%] rounded-md  border  mb-0 border-gray"
          {...register(`fixed.${id}.description`)}
        />
      </div>
    </div>
  );
};

export default JobDetails;
