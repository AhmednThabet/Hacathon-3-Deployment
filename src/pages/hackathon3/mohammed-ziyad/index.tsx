import type { NextPageWithLayout } from "types";
import { NoSsr, Timeline, Drawer, Button } from "components";
import { useCurrentUser, useLogout } from "features/authentication";
import DashboardLayout from "layouts/DashboardLayout";

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
  return (
    <NoSsr>
      <DashboardLayout>
        <Button> open drawer</Button>
        <Drawer>
          <Timeline history={data} />
        </Drawer>
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
