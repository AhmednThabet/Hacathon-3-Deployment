import { useState } from "react";
import { Logo, Link, Portal } from "components";
import { Bars3Icon } from "lib/@heroicons";
import { URL_PATHS } from "data";
import { SideMenu } from "layouts/DashboardLayout/components";

export const Navbar = () => {
  const [responsiveSidebarToggle, setResponsiveSidebarToggle] = useState(false);
  const handleResponsiveSidebarToggle = () => {
    setResponsiveSidebarToggle((prev) => !prev);
  };
  return (
    <nav className="flex justify-between items-center fixed inset-x-0 w-full bg-white py-2 px-6 shadow-md z-10">
      <Link href={URL_PATHS.HOME}>
        <div className="inline-flex items-center">
          <Logo className="cursor-pointer" />
          <span className="text-base font-medium tracking-wider text-center ml-2">
            Talents Valley
          </span>
        </div>
      </Link>
      {responsiveSidebarToggle && (
        <Portal
          className="items-center"
          backdropDismiss={handleResponsiveSidebarToggle}
        >
          <div className="w-[40vw] pt-14 bg-gray-200 h-full">
            <SideMenu />
          </div>
        </Portal>
      )}
      <div className="block md:hidden">
        <Bars3Icon
          title="burger-menu"
          width={20}
          height={20}
          className="cursor-pointer"
          onClick={handleResponsiveSidebarToggle}
        />
      </div>
    </nav>
  );
};
export default Navbar;
