import { taps } from "features/team2/data";
import React, { useState } from "react";
import Table from "../Table";

const TableWraber = () => {
const [type ,setType]= useState("all")
  return (
    <div className="bg-white rounded-lg shadow-md ">
      <div className="border-b h-[40px] mx-5  text-md text-[#9E9E9E] font-[600] pt-2 cursor-pointer ">
        {taps.map((tap:any) => {
         return <span key={tap.key} className="pr-10 hover:text-[#4375FF] " onClick={()=>setType(tap.key)}>{tap.tap}</span>;
        })}
      </div>
      <Table type={type}/>
    </div>
  );
};

export default TableWraber;
