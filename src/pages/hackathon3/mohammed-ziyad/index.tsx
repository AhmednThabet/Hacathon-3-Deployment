import { NoSsr } from "components";
import Drawer from "components/Drawer";
import { useCurrentUser, useLogout } from "features/authentication";
import { HomeLayout } from "layouts/HomeLayout";

const MohammedZiyad = () => {
  const { user } = useCurrentUser();
  const logout = useLogout();

  return (
    <NoSsr>
      <HomeLayout>
        world
        <Drawer>ssss</Drawer>
      </HomeLayout>
    </NoSsr>
  );
};

MohammedZiyad.mainLayoutProps = {
  title: "Talents Valley Home",
  pageDescription: "Home page description",
};

export default MohammedZiyad;
