import { Invoice } from "components/svg/Invoice";
import { Withdraw } from "components/svg/Withdraw";
import { Contact } from "components/svg/Contact";

import { Homeicon, Helpicon } from "lib/@heroicons";
import { Link } from "components";
import { ButtonSidebar } from "../ButtonSidebar";
import { URL_PATHS } from "data";
export const Sidebar = ({ classname }: any) => {
  return (
    <ul
      className={
        classname +
        "  -ml-5 fixed top-20 left-0 p-5 flex-col gap-3 hidden lg:flex-col lg:flex lg:justify-between"
      }
    >
      <div className={"flex flex-col gap-3"}>
        <h3 className="text-3xl p-3 mx-auto Main Menu text-[#BBBBBB]">
          Main Menu
        </h3>
        <ButtonSidebar classname={"homeButton"} icon={<Homeicon />}>
          Home
        </ButtonSidebar>
        <ButtonSidebar classname={"invoicesButton"} icon={<Invoice />}>
          Invoices
        </ButtonSidebar>

        <ButtonSidebar classname={"withdrawButton"} icon={<Withdraw />}>
          <Link href={URL_PATHS.HOME}>Balance</Link>
        </ButtonSidebar>

        <ButtonSidebar classname={"contactsButton"} icon={<Contact />}>
          <Link href="/user-manegment" prefetch={true}>
            Contacts
          </Link>
        </ButtonSidebar>
        <ButtonSidebar classname={"helpButton"} icon={<Helpicon />}>
          Help
        </ButtonSidebar>
      </div>
    </ul>
  );
};

export default Sidebar;
