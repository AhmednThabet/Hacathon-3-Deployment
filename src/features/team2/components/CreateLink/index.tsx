import React, { useMemo } from "react";
import { Button, NoSsr, Select } from "components";
import { useRouter } from "next/router";
import { useFormContext, useFieldArray } from "lib/react-hook-form";
import InvoiceFormHeader from "../CreateComponents/InvoiceFormHeader";
import { InvoiceFiledsForm } from "../../types";
import { XCircleIcon } from "lib/@heroicons";
import JobDetails from "../CreateComponents/JobDetails";
import { getCuntrySymbole } from "../../utils";
import { getAuthorizationHeader } from "utils";
import { useAxios } from "hooks";

export const CreateLink = ({ formData, setFormData, url, id, data }: any) => {
  const methods = useFormContext<InvoiceFiledsForm>();
  const { watch, register, control, handleSubmit, reset } = methods;
  const { fields, append, remove, replace } = useFieldArray({
    control,
    name: "fixed",
  });

  // const handleCurrancyChange = (e: any) => {
  //   setFormData({ ...formData, currency: e.target.value });
  // };

  const authHeader = getAuthorizationHeader();
  const router = useRouter();
  const mantineData = useMemo(() => {
    if (id) {
      reset(data);
    }
  }, []);
  const {
    fetchData: createLink,
    error,
    loading,
  } = useAxios<any, any>({
    config: {
      url: id
        ? url + id
        : "https://talents-valley-backend.herokuapp.com/api/service/create",
      method: id ? "PUT" : "POST",
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
    // handleSubmit(data);
    const linkBody = data;
    console.log(linkBody.fixed);
    console.log(linkBody.currency);

    createLink({ fixed: data.fixed, currency: data.currency });
  });

  return (
    <NoSsr>
      <form
        className="bg-white mt-[3rem] px-[5%] w-[45%] h-screen"
        onSubmit={onSubmit}
      >
        <InvoiceFormHeader headerData={["Invoices", "Create Link"]} />
        <Select
          label="Currency"
          options={[
            { value: "USD", label: "USD" },
            { value: "EUR", label: "EUR" },
          ]}
          {...register("currency")}
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
              description: "",
              price: undefined,
            })
          }
        >
          + Add item or sevice{" "}
        </p>
        <Button buttonSize="medium" type="submit" fullWidth={true}>
          {" "}
          {loading ? "Loading ..." : "Create Link"}
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
    </NoSsr>
  );
};

export default CreateLink;
