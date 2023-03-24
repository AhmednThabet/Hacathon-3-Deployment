import React, { useState } from "react";
import { useSWR } from "lib/swr";
import { useRouter } from "next/router";
import { useAxios } from "hooks";
import JobDetails from "./JobDetails";
import ClintInfo from "./ClintInfo";
import InvoiceFormHeader from "./InvoiceFormHeader";
import axios from "axios";
import { useFormContext, useFieldArray } from "lib/react-hook-form";
import { Button, Link } from "components";
import { InvoiceFiledsForm } from "../../types";
import { getCuntrySymbole } from "../../utils";
import { getAuthorizationHeader } from "utils";
import { XCircleIcon } from "lib/@heroicons";
import { CreateInvoiceProps } from "../../types";
import { getCookie } from "lib/js-cookie";
import { useSwrMutationFetch } from "../../hooks";
export const CreateInvoice = ({
  formData,
  setFormData,
}: CreateInvoiceProps) => {
  const methods = useFormContext<InvoiceFiledsForm>();
  const { watch, register, control, handleSubmit } = methods;
  const [applyRequest, setApplyRequest] = useState(false);
  const { fields, append, remove, replace } = useFieldArray({
    control,
    name: "fixed",
  });

  const authHeader = getAuthorizationHeader();
  const router = useRouter();

  const {
    fetchData: createInvoice,
    error,
    loading,
  } = useAxios<any, any>({
    config: {
      url: "https://talents-valley-backend.herokuapp.com/api/invoice/create",
      method: "POST",
      headers: authHeader,
    },
    options: {
      manual: true,
    },
    onSuccess: () => {
      router.push("/");
    },
  });
  const onSubmit = handleSubmit((data: any) => {
    createInvoice(data);
    console.log(data, "from Create Link");
  });

  return (
    <form
      className="bg-white mt-[3rem] px-[5%] w-[45%] h-screen"
      onSubmit={onSubmit}
    >
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
              // singleJop={singleJop}
              // setSingleJop={setSingleJop}
            />
          </div>
        ))}
      </div>
      <p
        tabIndex={0}
        className="text-blue-light cursor-pointer mb-8"
        onClick={() => {
          append({
            itemName: "",
            description: "",
            price: "",
          });
        }}
      >
        + Add item or sevice{" "}
      </p>
      <Button buttonSize="medium" type="submit" fullWidth={true}>
        {" "}
        {loading ? "Loading ..." : "Send Invoice"}
      </Button>
      <Button
        buttonSize="medium"
        fullWidth={true}
        className="!bg-white text-black border font-semibold  shadow-[#00000029] my-4"
      >
        {" "}
        Back
      </Button>
    </form>
  );
};

export default CreateInvoice;
