import React, { useEffect } from "react";
import { Input, Select } from "components";
import { countriesList, countriesCurrency, FORM_VALIDATION } from "data";
import useForm, { useFormContext } from "lib/react-hook-form";
import { InvoiceFiledsForm } from "../../types";
import { CreateInvoiceProps } from "../../types";
import { getFieldHelperText } from "utils";
const countruCurrency = [
  countriesCurrency.map((item) => {
    return { value: item?.currency?.code, label: item?.currency?.code };
  }),
];
const flatcountryCurrency = countruCurrency.flat(1);
const ClintInfo = ({ formData, setFormData }: any) => {
  const {
    register,
    formState: { errors },
    clearErrors,
    watch,
  } = useFormContext<InvoiceFiledsForm>();

  return (
    <div className="flex flex-col">
      <p className="text-gray-dark font-semibold mb-2">Client Informaion</p>

      <Input
        id="client-firstName-input"
        placeholder="Full Name"
        inputSize="small"
        inputClassName="w-[100%]"
        className="h-12 mb-[1.25rem] "
        {...register("client.fullName", {
          ...FORM_VALIDATION.fullName,
          onChange: () => clearErrors("client.fullName"),
          onBlur: (e) =>
            setFormData({
              ...formData,
              fullName: e.target.value,
            }),
        })}
        error={!!errors.client?.fullName}
        helperText={getFieldHelperText(
          "error",
          errors.client?.fullName?.message
        )}
      />

      <div>
        <Input
          id="clint-email-input"
          placeholder="Email"
          inputSize="small"
          className="h-12 mb-[1.25rem]"
          {...register("client.email", {
            ...FORM_VALIDATION.email,
            onChange: () => clearErrors("client.email"),
            onBlur: (e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              }),
          })}
          error={!!errors.client?.email}
          helperText={getFieldHelperText(
            "error",
            errors.client?.email?.message
          )}
        />
      </div>
      <div className="flex gap-4">
        <Select
          options={countriesList}
          id="country-select"
          placeholder="Country"
          className="basis-[80%]"
          selectSize="small"
          {...register("client.address.country", {
            ...FORM_VALIDATION.country,
            onChange: () => clearErrors("client.address.country"),
          })}
          error={!!errors.client?.address?.country}
          helperText={getFieldHelperText(
            "error",
            errors.client?.address?.country?.message
          )}
        />
        <Select
          options={flatcountryCurrency}
          id="currency-select"
          selectSize="small"
          className="basis-[20%]"
          selectClassName="py-2"
          {...register("currency", {
            ...FORM_VALIDATION.currency,
            onChange: () => clearErrors("currency"),
          })}
          error={!!errors.currency}
          helperText={getFieldHelperText("error", errors.currency?.message)}
        />
      </div>
    </div>
  );
};

export default ClintInfo;
