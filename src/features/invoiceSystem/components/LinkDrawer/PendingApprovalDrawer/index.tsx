import { Button, Card, Timeline } from "components";
import { PendingApproval } from "components/svg/PendingApproval";
import { useState } from "react";
import { LinkCopy } from "../../LinkCopy";

export const PendingApprovalDrawer = ({ data }: any) => {
  const service = data?.service;

  return (
    <>
      <Card className="flex flex-col p-5 mb-4">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <PendingApproval />
            <div className="flex flex-col">
              <h3 className="text-[#DAA545] text-xl font-medium">
                Pending Approval
              </h3>
              <p className="text-gray-400">Estimate: 24 hours.</p>
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
      <LinkCopy linkId={service?._id} disabled />
      <Card className="flex items-start justify-between w-full my-4">
        <div className="flex flex-col items-center">
          <p className="text-gray-400 ">Balance</p>
          <p className="font-medium">$ {service?.balance}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-gray-400">Paid INV.</p>
          <p className="font-medium">{service?.paidInvoice}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-gray-400">Fees</p>
          <p className="font-medium">{service?.ourFee}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-gray-400">Total</p>
          <p className="font-medium">{service?.subTotal}</p>
        </div>
      </Card>
      <Timeline history={service?.history} />
    </>
  );
};

export default PendingApprovalDrawer;
