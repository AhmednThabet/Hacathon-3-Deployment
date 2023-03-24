import { NavLink } from "components";
import { sideLinks } from "../../data";
import { useLogout } from "features/authentication";
import { ArrowRightOnRectangleIcon, Cog8ToothIcon } from "lib/@heroicons";

const SideMenu = (props: any) => {
  const logout = useLogout();
  return (
    <aside
      className={`w-full md:w-[30%] lg:w-[15%] md:block py-3 text-gray-dark ${props?.className}`}
    >
      <div className="sticky top-[82px]">
        <h3 className="text-xl md:text-2xl py-4 text-gray-400 pl-3 md:pl-6 xl:pl-9">
          Main Menu
        </h3>
        <div className="flex flex-col h-[calc(100vh-150px)] md:h-[calc(100vh-250px)] justify-between font-semibold">
          <div>
            {sideLinks.map((item, index) => (
              <NavLink
                className="flex items-center flex-between gap-2 md:gap-6 pl-3 md:pl-6 xl:pl-9 p-3 rounded-md hover:bg-[#EAEEF2]"
                activeClassName="bg-[#EAEEF2] text-blue-light fill-blue-light"
                key={index}
                href={item.path}
              >
                {item.icon} {item.title}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideMenu;
