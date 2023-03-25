import type { NextPageWithLayout } from "types";
import { NoSsr, Timeline, Drawer, Button, Image } from "components";
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
  const { isToggled, toggleDrawer }: any = useToggleDrawer(false);
  const [linkDrawer, setLinkDrawer] = useState(false);
  const [invoiceDrawer, setInvoiceDrawer] = useState(false);
  const [toast, setToast] = useState(false);
  const type: string = "invoice";
  const handleClick = () => {
    if (type === "invoice") {
      setInvoiceDrawer(true);
      toggleDrawer(true);
    } else {
      setLinkDrawer(true);
      toggleDrawer(true);
    }
  };
  return (
    <NoSsr>
      <DashboardLayout>
        {/* <Drawer title="Link" isToggled={isToggled} toggleDrawer={toggleDrawer}>
          <Timeline history={data} />
        </Drawer> */}
        <Button onClick={handleClick}>open link drawer</Button>
        {linkDrawer && (
          <LinkDrawer
            isToggled={isToggled}
            toggleDrawer={toggleDrawer}
            linkId="641de73c73ac594b84ec5e1f"
          />
        )}
        {invoiceDrawer && (
          <InvoiceDrawer
            isToggled={isToggled}
            toggleDrawer={toggleDrawer}
            invoiceId="641da70873ac594b84ec3096"
          />
        )}

        <div className="mt-10 space-x-5">
          <button
            onClick={() =>
              setTimeout(function () {
                setToast(!toast);
              }, 5000)
            }
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white"
          >
            Show Toast
          </button>
        </div>
        <div
          id="myToast"
          className={`${
            toast ? "" : "hidden"
          }  fixed right-96 bottom-20 px-5 py-4 border border-gray-light bg-[#F2FFF3] drop-shadow-lg`}
        >
          <p className="text-xl font-semibold flex gap-3 items-center">
            <Image
              src="/assets/img/correct.svg"
              alt="correct"
              width={20}
              height={20}
            />
            Your link is deactivated successfully
          </p>
        </div>
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
