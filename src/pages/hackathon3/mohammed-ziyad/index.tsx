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
  const data = [
    {
      _id: "641c43b486abbe326e82bc8e",
      type: "service",
      action: "change status",
      status: "active",
      createdBy: "637237329ef107f214a23fc5",
      createdAt: "2023-03-23T12:19:00.044Z",
      updatedAt: "2023-03-23T12:19:00.044Z",
    },
    {
      _id: "641c43ac86abbe326e82bc81",
      type: "service",
      action: "change status",
      status: "active",
      createdBy: "637237329ef107f214a23fc5",
      createdAt: "2023-03-23T12:18:52.040Z",
      updatedAt: "2023-03-23T12:18:52.040Z",
    },
    {
      _id: "641c422686abbe326e82bc24",
      type: "service",
      action: "edit",
      status: "pending_approval",
      createdBy: "63e104aa8bba2cb3f754d7db",
      createdAt: "2023-03-23T12:12:22.799Z",
      updatedAt: "2023-03-23T12:12:22.799Z",
    },
    {
      _id: "641c418f86abbe326e82bc11",
      type: "service",
      action: "create",
      status: "pending_approval",
      createdBy: "63e104aa8bba2cb3f754d7db",
      createdAt: "2023-03-23T12:09:51.571Z",
      updatedAt: "2023-03-23T12:09:51.571Z",
    },
  ];
  const { isToggled, toggleDrawer } = useToggleDrawer(true);
  const [linkDrawer, setLinkDrawer] = useState(false);
  const [invoiceDrawer, setInvoiceDrawer] = useState(false);
  const type: string = "invoice";
  const handleClick = () => {
    if (type === "invoice") {
      setInvoiceDrawer(true);
    } else setLinkDrawer(true);
  };
  return (
    <NoSsr>
      <DashboardLayout>
        {/* <Drawer title="Link" isToggled={isToggled} toggleDrawer={toggleDrawer}>
          <Timeline history={data} />
        </Drawer> */}
        <Button onClick={handleClick}>open link drawer</Button>
        {linkDrawer && <LinkDrawer linkId="641de73c73ac594b84ec5e1f" />}
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
