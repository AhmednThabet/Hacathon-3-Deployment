import { CreateInvoice as CreateInvoiceForm } from "../CreateComponents";

export const CreateInvoice = ({ formData, setFormData }: any) => {
  return (
    <CreateInvoiceForm
      formData={formData}
      setFormData={setFormData}
      id="641e9fd273ac594b84ecdc71"
      url="https://talents-valley-backend.herokuapp.com/api/invoice/edit/"
      data={{
        client: {
          fullName: "taymaa",
          email: "taymaa@gmail.com",
          address: {
            country: "Palestinee",
          },
        },
        fixed: [
          {
            itemName: "Create App UI design",
            description: " this is new invoice from postman",
            price: 500,
          },
          {
            itemName: "new job",
            description: "test invoice",
            price: 150,
          },
        ],
        currency: "USD",
      }}
    />
  );
};

export default CreateInvoice;
