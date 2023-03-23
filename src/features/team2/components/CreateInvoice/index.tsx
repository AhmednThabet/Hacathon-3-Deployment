import { CreateInvoice as CreateInvoiceForm } from "../CreateComponents";

export const CreateInvoice = ({ formData, setFormData }: any) => {
  return <CreateInvoiceForm formData={formData} setFormData={setFormData} />;
};

export default CreateInvoice;
