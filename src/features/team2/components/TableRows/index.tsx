import axios from "lib/axios";
import { useSWR } from "lib/swr";
import React, { useState } from "react";
import { getAuthorizationHeader } from "utils";

const handeller = async (url: string) => {
  const res = await axios.get(url, {
    headers: {
      ...getAuthorizationHeader(),
    },
  });
  // console.log(res.data.data.transactions[1].invoice.fixed[1].itemName);
  console.log(res.data.data);
  return res.data.data;
};

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const TableRows = ({ type }:any) => {
  const { data, error, isLoading } = useSWR(
    `https://talents-valley-backend.herokuapp.com/api/transactions/invoice-service-listing?limit=10&sort=-createdAt&offset=0&type=${type}`,
    handeller
  );

  const rows = data?.transactions?.map((row: any) => {
    const date = new Date(row.updatedAt);
    return (
      <tr key={row._id} className="border-y text-base h-[75px]">
        <td key={row._id} className="pl-5">
          {row.invoice?.fixed?.map((row1: any, _id: number) => {
            return (
              <>{row.invoice.fixed?.length <= 2 ? row1.itemName : "hello"}</>
            );
          })}
          <td>
            {monthNames[date.getMonth()]}
            {date.getDate()}
          </td>
        </td>
        <td></td>
        {/* <td>${row.invoice.subTotal}</td> */}
        <td>
          {" "}
          {row.type == "invoice"
            ? row.invoice?.subTotal
            : row.service?.subTotal}
        </td>
        <td>
          {row.type == "invoice"
            ? `${row.invoice?.client?.fullName == null && "-"} `
            : "_"}
        </td>
        <td>
          {row.type == "invoice" ? row.invoice?.status : row.service?.status}
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

export default TableRows;

// <tr key={`row-${index}`}>
//   {columns.map((column, index1) => {
//     return <td key={`cell-${index1}`}>{row[column.key]}</td>;
//   })}
// </tr>
