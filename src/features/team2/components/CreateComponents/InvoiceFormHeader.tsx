import React from "react";
import { Link } from "components";
import { BackArrowIcon, XMark } from "lib/@heroicons";

const InvoiceFormHeader = ({ headerData }: any) => {
  return (
    <div
      id="InvoiceHeader"
      className="flex justify-between mt-[2rem]  mb-6 relative"
    >
      <div className="flex items-center">
        <BackArrowIcon
          height={30}
          width={30}
          className="absolute left-[-40px]"
        />
        <Link
          href="/"
          className="mr-8 underline-offset-2 text-gray-700 text-xl font-semibold flex items-center"
        >
          {headerData[0]}
          <BackArrowIcon
            className=" text-gray-400 text-2xl rotate-180 mt-1"
            height={20}
            width={20}
          />
        </Link>

        <span className="text-gray-400 text-xl font-semibold">
          {headerData[1]}
        </span>
      </div>
      <div>
        <XMark height={30} width={30} />
      </div>
    </div>
  );
};

export default InvoiceFormHeader;
