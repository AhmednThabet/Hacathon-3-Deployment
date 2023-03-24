import axios from "axios";
import { NoSsr, Image, Modal, Preview, Button, Timeline } from "components";
import Drawer from "components/Drawer";
import { COOKIES_KEYS } from "data";
import { useCurrentUser, useLogout } from "features/authentication";
import { DashboardLayout } from "layouts/DashboardLayout";
import { Download } from "lib/@heroicons";
import { getCookie } from "lib/js-cookie";
import { useSWR } from "lib/swr";

import useModal from "hooks/useModal";

// import PendingApprovalLink from "./components/PendingApprovalLink";

const fetcherGet = async (url: any) => {
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

const fetcherPost = async (url: string) => {
  const currentUser = getCookie(COOKIES_KEYS.currentUser);
  const res = await axios.post(url, {
    headers: {
      Authorization: `Bearer ${currentUser?.accessToken}`,
      // "Content-Type": "application/json",
    },
    body: {
      status: "cancelled",
    },
  });
  console.log(res.data.data);
  return res.data.data;
};

const MohammedZnn = () => {
  const { user } = useCurrentUser();
  const logout = useLogout();

  const previewModal = useModal();
  const actionModalOnDrawer = useModal();

  const { data, error, isLoading } = useSWR(
    "https://talents-valley-backend.herokuapp.com/api/invoice/641c9687e524b0786800df3e",
    fetcherGet
  );

  const dataInvoice = {
    email: data?.invoice.freelancer.email,
    fixed: data?.invoice.fixed,
  };

  console.log(dataInvoice);

  return (
    <NoSsr>
      <DashboardLayout>
        world
        <Drawer
          actionButtonText="Cancel"
          actionButtonFunction={actionModalOnDrawer.openModal}
        >
          {isLoading ? (
            <p>loading ...</p>
          ) : (
            <>
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <Image
                    src="/assets/img/wall-clock.svg"
                    alt="blocked"
                    width={30}
                    height={30}
                  />
                  <div className="flex flex-col">
                    <p className="text-xl font-semibold text-[#DAA545]">
                      {data?.invoice.status}
                    </p>
                    <p className="text-xs text-gray-dark">
                      Estimate: 24 hours.
                    </p>
                  </div>
                </div>
                <p className="text-xs text-gray-dark">8 June 2022</p>
              </div>

              {data &&
                data?.invoice.fixed.map((item: any) => (
                  <div className="flex justify-between mt-5">
                    <div>
                      <p className="text-xl font-semibold">{item.itemName}</p>
                      <p className="text-sm text-gray-dark">
                        {item.description}
                      </p>
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

              <div className="mt-5">
                <Timeline history={data?.invoice.history} />
              </div>

              <div>
                <Preview
                  data={data}
                  withClintInfo={true}
                  className="w-full !mx-0 scale-100 mt-5"
                />
              </div>

              <p
                onClick={previewModal.openModal}
                className="text-blue-dark cursor-pointer"
              >
                Show Invoice
              </p>
              {/* Modal show preview */}
              <Modal
                closeModal={previewModal.closeModal}
                isOpen={previewModal.isOpen}
              >
                <div className="">
                  <div className="flex justify-end mr-14">
                    <Button
                      type="button"
                      buttonSize="small"
                      className="flex gap-1 bg-white text-blue-500 border border-gray-300 hover:bg-transparent"
                    >
                      <Download className="w-5 h-5" />
                      Download
                    </Button>
                  </div>

                  {/* <XMarkIconMini
                  className="w-5 h-5 cursor-pointer"
                  onClick={previewModal.closeModal}
                /> */}
                  <Preview
                    data={data}
                    withClintInfo={true}
                    className="w-full !mx-0 "
                  />
                </div>
              </Modal>

              <Modal
                closeModal={actionModalOnDrawer.closeModal}
                isOpen={actionModalOnDrawer.isOpen}
              >
                <div className="">
                  <p className="w-[282px]">
                    Are you sure you want to cancel your invoice?
                  </p>
                  <div className=" gap-3 my-5 w-full flex ">
                    <Button
                      className="bg-white text-black border border-gray-300 hover:bg-transparent"
                      fullWidth
                      onClick={actionModalOnDrawer.closeModal}
                    >
                      No
                    </Button>
                    <Button
                      className="bg-[#D84242] text-white border border-gray-300 hover:bg-transparent hover:text-[#D84242]"
                      fullWidth
                      onClick={() =>
                        fetcherPost(
                          "https://talents-valley-backend.herokuapp.com/api/invoice/change-status/" +
                            data?.invoice._id
                        )
                      }
                    >
                      Yes
                    </Button>
                  </div>
                </div>
              </Modal>
            </>
          )}
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
