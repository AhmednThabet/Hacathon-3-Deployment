import axios from "axios";
import { Image, Modal, Preview, Button, Timeline } from "components";
import { COOKIES_KEYS } from "data";
import { Download } from "lib/@heroicons";
import { getCookie } from "lib/js-cookie";
import { useSWR } from "lib/swr";

import useModal from "hooks/useModal";

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

const PendingApprovalLink = () => {
  const previewModal = useModal();

  const { data, error, isLoading } = useSWR(
    "https://talents-valley-backend.herokuapp.com/api/service/details/641ced364a984c6dd37320e9",
    getInvoice
  );

  return (
    <>
      {isLoading ? (
        <p>loading ...</p>
      ) : (
        <>
          <div className="bg-white p-4">
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
                    {data?.service.status}
                  </p>
                  <p className="text-xs text-gray-dark">Estimate: 24 hours.</p>
                </div>
              </div>
              <p className="text-xs text-gray-dark">8 June 2022</p>
            </div>

            {data &&
              data?.service.fixed.map((item: any) => (
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
          </div>

          <div></div>

          <div className="flex justify-between bg-white p-4 mt-5">
            <div className="">
              <p>test</p>
              <p>test</p>
            </div>
            <div className="">
              <p>test</p>
              <p>test</p>
            </div>
            <div className="">
              <p>test</p>
              <p>test</p>
            </div>
            <div className="">
              <p>test</p>
              <p>test</p>
            </div>
          </div>

          <div className="mt-5">
            <Timeline history={data?.service.history} />
          </div>

          {/* 
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
                >
                  Yes
                </Button>
              </div>
            </div>
          </Modal> */}
        </>
      )}
    </>
  );
};

export default PendingApprovalLink;
