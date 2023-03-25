import type { NextPageWithLayout } from "types";
import { NoSsr, Timeline, Drawer, Button } from "components";
import { useCurrentUser, useLogout } from "features/authentication";
import DashboardLayout from "layouts/DashboardLayout";
import { useToggleDrawer } from "features/invoiceSystem/hooks/useToggleDrawer";
import LinkDrawer from "features/invoiceSystem/components/LinkDrawer";
import InvoiceDrawer from "features/invoiceSystem/components/InvoiceDrawer";
import { useState } from "react";

const MohammedZiyad: NextPageWithLayout = () => {
  const { user } = useCurrentUser();
  const logout = useLogout();

  const { isToggled, toggleDrawer } = useToggleDrawer(false);
  const [linkDrawer, setLinkDrawer] = useState(false);
  const [invoiceDrawer, setInvoiceDrawer] = useState(false);
  const type: string = "link";
  const handleClick = () => {
    if (type === "invoice") {
      setInvoiceDrawer(true);
      toggleDrawer();
    } else {
      setLinkDrawer(true);
      toggleDrawer();
    }
  };
  return (
    <NoSsr>
      <DashboardLayout>
        <Button onClick={handleClick}>open link drawer</Button>
        {linkDrawer && (
          <LinkDrawer
            linkId="641de73c73ac594b84ec5e1f"
            isToggled={isToggled}
            toggleDrawer={toggleDrawer}
          />
        )}
        {invoiceDrawer && (
          <InvoiceDrawer invoiceId="641df914440ad52d259532e1" />
        )}
      </DashboardLayout>
    </NoSsr>
  );
};

MohammedZiyad.mainLayoutProps = {
  title: "Talents Valley Home",
  pageDescription: "Home page description",
  contentClassName: "!items-start pt-[70px] h-full !px-0 relative",
};

export default MohammedZiyad;
