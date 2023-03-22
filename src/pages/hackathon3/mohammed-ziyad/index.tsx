import { useCurrentUser, useLogout } from "features/authentication";
import { HomeLayout } from "layouts/HomeLayout";

const MohammedZiyad = () => {
  const { user } = useCurrentUser();
  const logout = useLogout();

  return <HomeLayout>s</HomeLayout>;
};

MohammedZiyad.mainLayoutProps = {
  title: "Talents Valley Home",
  pageDescription: "Home page description",
};

export default MohammedZiyad;
