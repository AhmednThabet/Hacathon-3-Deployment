import axios from "axios";
import { NoSsr, Image, Modal, Preview, Button } from "components";
import Drawer from "components/Drawer";
// import TimeLine from "components/TimeLine";
import { COOKIES_KEYS } from "data";
import { useCurrentUser, useLogout } from "features/authentication";
import { DashboardLayout } from "layouts/DashboardLayout";
import { XMarkIconMini } from "lib/@heroicons";
import { getCookie } from "lib/js-cookie";
import { useSWR } from "lib/swr";
import { useState } from "react";

const getInvoice = async (url: string) => {
  const currentUser = getCookie(COOKIES_KEYS.currentUser);
  const res = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${currentUser?.accessToken}`,
      "Content-Type": "application/json",
    },
  });
  // console.log(res.data.data);
  return res.data.data;
};

const MohammedZnn = () => {
  const { user } = useCurrentUser();
  const logout = useLogout();

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const { data, error, isLoading } = useSWR(
    "https://talents-valley-backend.herokuapp.com/api/invoice/641c4939e524b0786800aa2b",
    getInvoice
  );

  const dataInvoice = {
    email: data?.invoice.freelancer.email,
    fixed: data?.invoice.fixed,
  };

  console.log(dataInvoice);

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
                <p className="text-xl font-semibold">{data?.invoice.status}</p>
                <p className="text-xs text-gray-dark">Estimate: 24 hours.</p>
              </div>
            </div>
            <p className="text-xs text-gray-dark">8 June 2022</p>
          </div>

          {data &&
            data?.invoice.fixed.map((item: any) => (
              <div className="flex justify-between mt-5">
                <div>
                  <p className="text-xl font-semibold">{item.itemName}</p>
                  <p className="text-sm text-gray-dark">{item.description}</p>
                </div>
                <div>
                  <p className="text-xl">${item.price}</p>
                </div>
              </div>
            ))}

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
                  <p className="text-gray-dark text-sm">
                    ${data?.invoice.subTotal}
                  </p>
                  <p className="text-gray-dark text-sm">
                    ${data?.invoice.paymentFee}
                  </p>
                  <p className="text-lg block">${data?.invoice.balance}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 mt-5">
            <h3>Timeline</h3>
            {/* <TimeLine /> */}
          </div>

          <div>
            <Preview
              data={data}
              withClintInfo={true}
              className="w-full !mx-0 scale-100 mt-5"
            />
          </div>

          <p onClick={openModal}>Show Invoice</p>

          <Modal closeModal={closeModal} isOpen={isOpen}>
            <div className="relative py-5 bg-red">
              <div className="flex  absolute top-0 right-0">
                <Button type="button" buttonSize="small" className="">
                  Download
                </Button>
                <button className="transition duration-500 border-0 text-lg h-12 w-36 bg-red-500 hover:bg-red-700 text-white mt-2 px-3 rounded-md">
                  <span>Download</span>
                  <i className="bx bx-down-arrow-alt animate-bounce text-xl"></i>
                </button>
                <XMarkIconMini className="w-5 h-5" />
              </div>
              <Preview
                data={data}
                withClintInfo={true}
                className="w-full !mx-0 "
              />
            </div>
          </Modal>
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
