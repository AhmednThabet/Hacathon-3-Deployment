import { Sidebar } from "./components";
import { Balance } from "./components";

export const HomeLayout = ({ children }: any) => {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div className="w-[100%]">{children}</div>
      <div>
        <Balance />
      </div>
    </div>
  );
};

export default HomeLayout;
