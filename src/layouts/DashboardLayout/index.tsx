import { Balance, SideMenu } from "./components";
import type { DashboardLayoutType } from "./types";

export const DashboardLayout: DashboardLayoutType = ({
  children,
  contentClassName = "",
  withoutBalance = false,
}) => {
  return (
    <div
      className={`flex flex-col-reverse xl:gap-16 md:flex-row w-full ${contentClassName}`}
    >
      <SideMenu className="hidden md:block" />
      <div className="w-full flex flex-col-reverse lg:flex-row gap-4 lg:gap-0 xl:gap-8 mt-4 md:mt-8 lg:mt-12 ">
        <div className="flex flex-col w-full xl:w-[70%] h-full px-4">
          {children}
        </div>
        {!withoutBalance && <Balance />}
      </div>
    </div>
  );
};

export default DashboardLayout;
