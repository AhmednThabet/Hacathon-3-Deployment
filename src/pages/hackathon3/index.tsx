import type { NextPageWithLayout } from "types";
import { NoSsr } from "components";
import DashboardLayout from "layouts/DashboardLayout";

import TableWraber from "features/team2/components/TableWraber";

const InvoiceTable: NextPageWithLayout = () => {
  return (
    <NoSsr>
      <DashboardLayout>
        <TableWraber />
      </DashboardLayout>
    </NoSsr>
  );
};

InvoiceTable.mainLayoutProps = {
  title: "Talents Valley Home",
  pageDescription: "Home page description",
  contentClassName: "!items-start pt-[70px] h-full !px-0 relative",
};

export default InvoiceTable;
