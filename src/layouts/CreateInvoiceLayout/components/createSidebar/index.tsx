import React from "react";
import Link from "next/link";
import { URL_PATHS } from "data/routes";
export const CreateSideBar = () => {
  return (
    <div className="my-4 text-lg text-gray-dark">
      <label id="create" className=" font-semibold">
        Create
      </label>
      <ul id="create" className="mx-4 font-normal flex md:block ">
        <li className="my-2 mx-2 max-sm:border-b-2 md:border-l-2 px-4 ">
          <Link href={URL_PATHS.INVOICES.CREATE.INVOICE}>Invoice</Link>
        </li>
        <li className="my-2  mx-2  max-sm:border-b-2 md:border-l-2 px-4 ">
          <Link href={URL_PATHS.INVOICES.CREATE.LINK}>Link</Link>
        </li>
      </ul>
    </div>
  );
};

export default CreateSideBar;
