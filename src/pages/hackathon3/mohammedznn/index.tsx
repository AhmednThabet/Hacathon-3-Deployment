import axios from "axios";
import { NoSsr, Image, Button } from "components";
import Drawer from "components/Drawer";
import TimeLine from "components/TimeLine";
import { COOKIES_KEYS } from "data";
import { useCurrentUser, useLogout } from "features/authentication";
import { DashboardLayout } from "layouts/DashboardLayout";
import { getCookie } from "lib/js-cookie";
import { useSWR } from "lib/swr";

const getInvoice = async (url: string) => {
  const currentUser = getCookie(COOKIES_KEYS.currentUser);
  const res = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${currentUser?.accessToken}`,
      "Content-Type": "application/json",
    },
  });
  console.log(res.data.data);
  return res.data.data;
};

const MohammedZnn = () => {
  const { user } = useCurrentUser();
  const logout = useLogout();

  const { data, error, isLoading } = useSWR(
    "https://talents-valley-backend.herokuapp.com/api/invoice/641c4939e524b0786800aa2b",
    getInvoice
  );

  console.log(data);

  return (
    <NoSsr>
      <DashboardLayout>
        {/* {data?.transactions[0]._id} */}
        world
        <Drawer actionButtonText="Delete">
          <div className="flex justify-between">
            <div className="flex gap-2">
              <Image
                src="/assets/img/blocked.svg"
                alt="blocked"
                width={30}
                height={30}
              />
              <div className="flex flex-col">
                <p className="text-xl font-semibold">Canceled</p>
                <p className="text-xs text-gray-dark">Estimate: 24 hours.</p>
              </div>
            </div>
            <p className="text-xs text-gray-dark">8 June 2022</p>
          </div>

          <h1>{data?.invoice._id}</h1>

          <div className="flex justify-between">
            <div>
              <p className="text-xl font-semibold">
                UI/UX Design for Talents Valley LLC
              </p>
              <p className="text-sm text-gray-dark">
                Design UI/UX App & web for Talents Valley
              </p>
            </div>
            <div>
              <p className="text-xl">$450</p>
            </div>
          </div>
          <hr className="h-px my-4 bg-gray-dark "></hr>

          <div className="flex justify-between">
            <div></div>
            <div className="w-[100px]">
              <div className="flex justify-between">
                <div>
                  <p className="text-gray-dark text-sm">Subtotal</p>
                  <p className="text-gray-dark text-sm">Fees</p>
                  <p className="text-lg">Total</p>
                </div>
                <div>
                  <p className="text-gray-dark text-sm">$450</p>
                  <p className="text-gray-dark text-sm">$..</p>
                  <p className="text-lg block">$..</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-5">
            <h3>Timeline</h3>
            <TimeLine />
          </div>

          <Button type="button" buttonSize="small" className="">
            Show Invoice
          </Button>
        </Drawer>
      </DashboardLayout>
    </NoSsr>
  );
};

MohammedZnn.mainLayoutProps = {
  title: "Talents Valley Home",
  pageDescription: "Home page description",
};

export default MohammedZnn;
