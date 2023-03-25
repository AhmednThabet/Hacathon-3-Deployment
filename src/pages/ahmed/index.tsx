import React, { useState } from "react";
import { Preview } from "components";
import { CreateInvoice } from "features/team2";
import CreateInvoiceLayout from "layouts/CreateInvoiceLayout";
const CreateInvoicePage = () => {
  const [previewData, setPreviewData] = useState({
    fullName: "",
    email: "",
    service: [],
  });

  return (
    <CreateInvoiceLayout>
      <CreateInvoice formData={previewData} setFormData={setPreviewData} />
      <Preview data={previewData} withClintInfo={true} className="w-[500px]" />
    </CreateInvoiceLayout>
  );
};
CreateInvoicePage.mainLayoutProps = {
  title: "Creat Invoice",
  pageDescription: "Invoices page description",
  contentClassName: "!p-0 !justify-start",
  footerClassName:
    "!md:justify-center md:fixed md:bottom-[0%] md:right-[12%]  ",
};
export default CreateInvoicePage;
