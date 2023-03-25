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
