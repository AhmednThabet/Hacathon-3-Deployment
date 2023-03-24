import { Card, Link } from "components";
import { ResBalance } from "../";
import { URL_PATHS } from "data/routes";
import { ArrowDownTrayIcon, PlusIcon } from "lib/@heroicons";
import { PaperAirplan } from "components/svg/PaperAirplan";
import { useCurrentUser } from "features/authentication";
import { devideBalance } from "./devideBalance";

const Balance = () => {
  const { user } = useCurrentUser();
  const { bigBalance, decimals } = devideBalance(user?.balance);
  return (
    <>
      <div className="hidden sm:block px-4">
        <Card className="sticky lg:top-36  px-5 xl:min-w-[360px]">
          <p className="text-gray-400 text-xl my-2">Balance</p>
          <div className="flex items-center gap-4 text-3xl mb-4 font-semibold">
            <p>
              ${bigBalance}
              <span className="text-lg">.{decimals}</span>
            </p>
            <Link
              href={URL_PATHS.HOME}
              className="bg-[#F3F6FF] rounded-lg p-2 py-[7px] px-[7px] hover:hover:bg-blue-300"
            >
              <ArrowDownTrayIcon
                className="text-blue-light"
                width={16}
                height={16}
              />
            </Link>
          </div>
          <div className="flex items-center md:max-xl:flex-col gap-4 my-3 w-full">
            <Link
              href={URL_PATHS.HOME}
              className="bg-[#F3F6FF] flex text-sm px-1 justify-center gap-1 md:gap-2 text-blue-light items-center rounded-lg hover:bg-blue-300 lg:px-3 py-2 md:max-xl:w-full md:max-xl:min-w-[170px] w-1/2"
            >
              <PlusIcon className="text-blue-light" width={16} height={16} />{" "}
              Create Link
            </Link>
            <Link
              href={URL_PATHS.HOME}
              className="bg-[#F3F6FF] flex text-sm px-1 justify-center gap-1 md:gap-2 text-blue-light items-center rounded-lg hover:bg-blue-300 lg:px-3 py-2 md:max-xl:w-full md:max-xl:min-w-[170px] w-1/2"
            >
              <PaperAirplan
                className="text-blue-light"
                width={16}
                height={16}
              />{" "}
              Send Invoice
            </Link>
          </div>
        </Card>
      </div>
      <ResBalance />
    </>
  );
};

export default Balance;
