import React, { useState, useEffect } from "react";
import { Input, TextArea } from "components";
import { JobDetailsType, InvoiceFiledsForm } from "../../types";
import { useFormContext } from "react-hook-form";

const JobDetails: JobDetailsType = ({
  id = 0,
  currencyFormat,
  setJopData,
  jopData,
}) => {
  const {
    register,
    formState: { errors },
    clearErrors,
  } = useFormContext<InvoiceFiledsForm>();
  const [singleJop, setsingleJop] = useState<any>({
    serviceName: "",
    serviceAmount: "",
  });

  const handleJopData = () => {
    setJopData({
      ...jopData,
      service: [...jopData.service, singleJop],
    });
    console.log(id);
  };
  useEffect(() => {
    setJopData({
      ...jopData,
      service: [...jopData.service, singleJop],
    });
    console.log(id);
  }, [id]);

  return (
    <div className="overflow-auto ">
      <p className="text-gray-dark font-semibold mb-2">Job Details</p>
      <div className="flex gap-6" onChange={handleJopData}>
        <Input
          id="jobTitle-input"
          placeholder="Job Title"
          inputSize="small"
          className="h-12 basis-[85%]"
          {...register(`fixed.${id}.itemName`, {
            // onChange: () => clearErrors("jobTitle"),
            onChange: (e) =>
              setsingleJop({
                ...singleJop,
                serviceName: e.target.value,
              }),
          })}
        />
        <Input
          id="amount-input"
          placeholder={`${currencyFormat[0] ?? "$"} 0.00 ${
            currencyFormat[1] || ""
          }`}
          inputSize="small"
          className="h-12 basis-[20%]"
          {...register(`fixed.${id}.price`, {
            valueAsNumber: true,
            required: true,
            onChange: (e) =>
              setsingleJop({
                ...singleJop,
                serviceAmount: e.target.value,
              }),
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
          {...register(`fixed.${id}.describtion`)}
        />
      </div>
    </div>
  );
};

export default JobDetails;
