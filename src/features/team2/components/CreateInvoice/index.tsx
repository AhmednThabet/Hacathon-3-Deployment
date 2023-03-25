import { CreateInvoice as CreateInvoiceForm } from "../CreateComponents";

export const CreateInvoice = ({ formData, setFormData, id, data }: any) => {
  return (
    <CreateInvoiceForm
      formData={formData}
      setFormData={setFormData}
      id={id}
      url="https://talents-valley-backend.herokuapp.com/api/invoice/edit/"
      data={data && JSON.parse(data)}
    />
  );
};

export default CreateInvoice;
