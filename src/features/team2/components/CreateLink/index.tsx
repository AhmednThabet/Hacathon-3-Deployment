import React from "react";
import { Button, Select } from "components";
import { useFormContext, useFieldArray } from "lib/react-hook-form";
import InvoiceFormHeader from "../CreateComponents/InvoiceFormHeader";
import { InvoiceFiledsForm } from "../../types";
import { XCircleIcon } from "lib/@heroicons";
import JobDetails from "../CreateComponents/JobDetails";
import { getCuntrySymbole } from "../../utils";

export const CreateLink = ({ formData, setFormData }: any) => {
  const methods = useFormContext<InvoiceFiledsForm>();
  const { watch, register, control } = methods;
  const { fields, append, remove, replace } = useFieldArray({
    control,
    name: "fixed",
  });
  return (
    <div className="bg-white mt-[3rem] px-[5%] w-[45%]">
      <InvoiceFormHeader headerData={["Invoices", "Create Link"]} />
      <Select
        label="Currency"
        options={[
          { value: "usd", label: "USD" },
          { value: "Erue", label: "ERU" },
        ]}
      />
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

export default CreateLink;
