import { Button, Card, Drawer, Timeline } from "components";
import { Link } from "components/svg";
import { useState } from "react";

const ActiveDrawer = ({ data, isToggled, toggleDrawer }: any) => {
  const service = data?.service;

  return (
    <>
      <Card className="flex flex-col p-5 mb-4">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <Link fill="#4375FF" />
            <div className="flex flex-col">
              <h3 className="text-blue-light text-xl font-medium">Active</h3>
              <p className="text-gray-400">Your link can be send.</p>
            </div>
          </div>
          <p>
            {new Date(data?.service?.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              day: "numeric",
              month: "long",
            })}
          </p>
        </div>
        <div className="flex mt-4">
          <div className="flex w-full items-start justify-between">
            <div className="flex flex-col">
              <h2 className="text-xl font-bold ">
                {service?.fixed[0]?.itemName}
              </h2>
              <p className="text-gray-400">{service?.fixed[0]?.description}</p>
            </div>
            <p className="text-xl font-bold ">${service?.fixed[0]?.price}</p>
          </div>
        </div>
      </Card>
      <LinkCopy linkId={service?._id} />
      <Card className="flex items-start justify-between w-full my-4">
        <div className="flex flex-col items-center">
          <p className="text-gray-400 ">Balance</p>
          <p className="font-medium">$ {service?.balance}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-gray-400">Paid INV.</p>
        </div>
        <div className="flex flex-col">
          <p className="text-gray-400">Fees</p>
        </div>
        <div className="flex flex-col">
          <p className="text-gray-400">Total</p>
        </div>
      </Card>
      <Timeline history={service?.history} />
    </>
  );
};

export default ActiveDrawer;

export const LinkCopy = ({ linkId }: any) => {
  const [serviceLink, setServiceLink] = useState(
    `http://localhost:3111/hackathon3/previewService/${linkId}`
  );
  return (
    <div className="flex gap-3">
      <input
        className="border-none w-full"
        type="text"
        value={serviceLink}
        readOnly
        disabled
      />
      <Button
        buttonSize="large"
        onClick={() => {
          navigator.clipboard.writeText(serviceLink);
        }}
      >
        copy
      </Button>
    </div>
  );
};
