import React, { useState } from "react";
import { Preview } from "components";
import { CreateLink } from "features/team2";
import CreateInvoiceLayout from "layouts/CreateInvoiceLayout";
const CreateLinkPage = () => {
  const [previewData, setPreviewData] = useState({
    currency: "",
    service: [],
  });
  // dynimac id from the route
  return (
    <CreateInvoiceLayout>
      <CreateLink
        formData={previewData}
        setFormData={setPreviewData}
        id="641e2c3073ac594b84eca5ef"
        url="https://talents-valley-backend.herokuapp.com/api/service/edit/"
        data={{
          client: {
            fullName: "Ahmed",
            email: "Thabet@gmail.com",
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
      <Preview data={previewData} withClintInfo={false} className="w-[500px]" />
    </CreateInvoiceLayout>
  );
};
CreateLinkPage.mainLayoutProps = {
  title: "Creat Link",
  pageDescription: "Invoices page description",
  contentClassName: "!p-0 !justify-start",
  footerClassName:
    "!md:justify-center md:fixed md:bottom-[0%] md:right-[12%]  ",
};
export default CreateLinkPage;
