import { Button, Input, Link } from "components";
import { PaperAirplan } from "components/svg/PaperAirplan";
import { taps } from "features/team2/data";
import { PlusIcon, SearchIcon } from "lib/@heroicons";
import React, { useState } from "react";
import FillterCheckBox from "../FillterCheckBox";
import Table from "../Table";

const TableWraber = () => {
  const [type, setType] = useState("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [selectedOptions, setSelectedOptions] = useState(["pending"]);
  console.log(selectedOptions);
  return (
    <>
      <div className="flex flex-row align-center -mb-4">
        <Input
          className="w-[50%]"
          placeholder="Search for invoice, title, client or description"
          endIcon={<SearchIcon className="w-5 h-5" />}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex justify-between ml-16 gap-4 ">
          <Button className="flex flex-row  h-12  bg-white !text-[#4375FF] hover:!bg-slate-50 px-7">
            <Link href="/hackathon3/createLink">
              <PlusIcon className="h-4 w-4 mr-2 mt-1.5" />
              <span>Link</span>
            </Link>
          </Button>
          <Button className="flex flex-row  h-12 bg-white !text-[#4375FF] hover:!bg-slate-50 px-5.5">
            <Link href="/hackathon3/createInvoice">
              <PaperAirplan
                className="text-blue-light mr-2 mt-1.5"
                width={16}
                height={16}
              />
              <span>Invoice</span>
            </Link>
          </Button>
          <FillterCheckBox
            setSelectedOptions={setSelectedOptions}
            type={type}
          />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md ">
        <div className="border-b h-[40px] mx-5  text-md text-[#9E9E9E] font-[600] pt-2 cursor-pointer ">
          {taps.map((tap: any) => {
            return (
              <span
                key={tap.key}
                className="pr-10 hover:text-[#4375FF] border-[#4375FF] hover:border-b-[3px] pb-2 "
                onClick={() => setType(tap.key)}
              >
                {tap.tap}
              </span>
            );
          })}
        </div>
        <Table
          type={type}
          search={search}
          sort={sort}
          setSort={setSort}
          selectedOptions={selectedOptions}
        />
      </div>
    </>
  );
};

export default TableWraber;
