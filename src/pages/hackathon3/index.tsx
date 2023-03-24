import type { NextPageWithLayout } from "types";
import { NoSsr } from "components";
import Drawer from "components/Drawer";
import { useCurrentUser, useLogout } from "features/authentication";
import DashboardLayout from "layouts/DashboardLayout";

const Hackathon3: NextPageWithLayout = () => {
  const { user } = useCurrentUser();
  const logout = useLogout();
  return (
    <NoSsr>
      <DashboardLayout>world</DashboardLayout>
    </NoSsr>
  );
};

Hackathon3.mainLayoutProps = {
  title: "Talents Valley Home",
  pageDescription: "Home page description",
  contentClassName: "!items-start pt-[70px] h-full !px-0 relative",
};

export default Hackathon3;
