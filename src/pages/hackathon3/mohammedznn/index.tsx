import axios from "axios";
import { Image, Modal, InvoicePreview, Button, Timeline } from "components";
import TestDrawer from "features/invoiceSystem/components/TestDrawer";
import { COOKIES_KEYS, API_ENDPOINT } from "data";
import { useCurrentUser, useLogout } from "features/authentication";
import { Download } from "lib/@heroicons";
import { getCookie } from "lib/js-cookie";
import { useSWR } from "lib/swr";

import useModal from "hooks/useModal";

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
  const res = await axios.post(
    url,
    {
      status: "cancelled",
    },
    {
      headers: {
        Authorization: `Bearer ${currentUser?.accessToken}`,
        // "Content-Type": "application/json",
      },
    }
  );
  // console.log(res.data.data);
  return res.data.data;
};

const MohammedZnn = ({ invoice_id }: any) => {
  const { user } = useCurrentUser();
  const logout = useLogout();

  const previewModal = useModal();
  const actionModalOnDrawer = useModal();

  const { data, error, isLoading } = useSWR(
    `${API_ENDPOINT}/invoice/641c8a53e524b0786800d179`,
    fetcherGet
  );

  const getButtonText = (s: string) => {
    switch (s) {
      case "paid":
        return { text: "nothing", img: "15-Checked.svg", status: s };
      case "pending_approval":
        return { text: "Cancel", img: "wall-clock.svg", status: s };
      case "cancelled":
        return { text: "Delete", img: "blocked.svg", status: s };
      case "sent":
        return { text: "Cancel", img: "send.svg", status: s };
      case "Disapproved":
        return { text: "Delete", img: "warning.svg", status: s };
      default:
        return "Close Drawer";
    }
  };

  return (
    <TestDrawer
      title="Invoice"
      actionButtonText={getButtonText(data?.invoice.status)}
      actionButtonFunction={actionModalOnDrawer.openModal}
    >
      {isLoading ? (
        <p>loading ...</p>
      ) : (
        <>
          {data?.invoice.status === "Disapproved" && (
            <div className="flex justify-between mb-5 bg-white p-4">
              <div className="flex gap-4 items-start">
                <Image
                  src={`/assets/img/${getButtonText("Disapproved").img}`}
                  alt="blocked"
                  width={20}
                  height={20}
                />
                <div className="flex flex-col">
                  <p>Invoice {data?.invoice.status} Review:</p>
                  <p className="text-gray-dark">- Description.</p>
                  <p className="text-gray-dark">- Amount.</p>
                </div>
              </div>
              <Button
                className="bg-white h-full text-blue-500 border border-gray-300 hover:bg-transparent"
                onClick={() => console.log("edit")}
              >
                Edit
              </Button>
            </div>
          )}

          <div className="flex justify-between">
            <div className="flex gap-2">
              <Image
                src={`/assets/img/${getButtonText(data?.invoice.status).img}`}
                alt="blocked"
                width={30}
                height={30}
              />
              <div className="flex flex-col">
                <p
                  className={`text-xl font-semibold ${
                    data?.invoice.status === "pending_approval"
                      ? "text-[#DAA545]"
                      : "text-black"
                  }`}
                >
                  {data?.invoice.status}
                </p>
                <p className="text-xs text-gray-dark">
                  {data?.invoice.status === "paid" ? (
                    <p className=" flex gap-1">
                      Paid by
                      <Image
                        src={`/assets/img/paypal (2).svg`}
                        alt="blocked"
                        width={10}
                        height={10}
                      />
                      Paypal
                    </p>
                  ) : (
                    "Estimate: 24 hours."
                  )}
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-dark">8 June 2022</p>
          </div>

          {data &&
            data?.invoice.fixed.map((item: any) => (
              <div className="flex justify-between mt-5" key={item._id}>
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

          <div className="mt-5">
            <Timeline history={data?.invoice.history} />
          </div>

          <div>
            <InvoicePreview
              data={data}
              isLoading={isLoading}
              className="!w-fit-content"
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
              <InvoicePreview
                data={data}
                className="scale-100"
                // isOpen={previewModal.isOpen}
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
                  onClick={() => {
                    fetcherPost(
                      "https://talents-valley-backend.herokuapp.com/api/invoice/change-status/" +
                        data?.invoice._id
                    );
                    actionModalOnDrawer.closeModal();
                  }}
                >
                  Yes
                </Button>
              </div>
            </div>
          </Modal>
        </>
      )}
    </TestDrawer>
  );
};

MohammedZnn.mainLayoutProps = {
  title: "Talents Valley Home",
  pageDescription: "Home page description",
};

export default MohammedZnn;
