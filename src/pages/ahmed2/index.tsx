import React, { useState } from "react";
import { Preview } from "components";
import { CreateLink } from "features/team2";
import CreateInvoiceLayout from "layouts/CreateInvoiceLayout";
const index = () => {
  const [previewData, setPreviewData] = useState({
    fullName: "",
    email: "",
    service: [],
  });

  return (
    <CreateInvoiceLayout>
      <CreateLink formData={previewData} setFormData={setPreviewData} />
      <Preview data={previewData} withClintInfo={false} className="w-[500px]" />
    </CreateInvoiceLayout>
  );
};
index.mainLayoutProps = {
  title: "Creat Link",
  pageDescription: "Invoices page description",
  contentClassName: "!p-0 !justify-start",
  footerClassName:
    "!md:justify-center md:fixed md:bottom-[0%] md:right-[12%]  ",
};
export default index;
