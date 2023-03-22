import { Card, Link } from "components";
import { useCurrentUser } from "features/authentication";
import { ArrowDownTrayIcon } from "lib/@heroicons";
import { URL_PATHS } from "data";
import { devideBalance } from "../../devideBalance";
import MoreActions from "../MoreActions";
const ResBalance = () => {
  const { user } = useCurrentUser();
  const { bigBalance, decimals } = devideBalance(user?.balance);
  return (
    <div className="sm:hidden w-full fixed bottom-0 ">
      <Card className=" flex items-center justify-between px-8 ">
        <div className="flex items-center gap-4 text-3xl font-semibold">
          <p>
            ${bigBalance}
            <span className="text-lg">.{decimals}</span>
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <Link
            href={URL_PATHS.HOME}
            className="bg-[#F3F6FF] flex text-sm justify-center gap-2 text-blue-light items-center rounded-lg hover:bg-blue-300 px-4 py-3 "
          >
            <ArrowDownTrayIcon
              className="text-blue-light"
              width={16}
              height={16}
            />{" "}
            Withdraw
          </Link>
          <MoreActions />
        </div>
      </Card>
    </div>
  );
};

export default ResBalance;
