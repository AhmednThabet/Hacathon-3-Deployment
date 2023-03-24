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
  console.log(res.data.data);
  return res.data.data;
};

const TableRows = ({ type, search, sort }: any) => {
  const { data, error, isLoading } = useSWR(
    `https://talents-valley-backend.herokuapp.com/api/transactions/invoice-service-listing?limit=10&sort=${sort}&search=${search}&filter=sent%2Cpending&offset=0&type=${type}`,
    handeller
  );

  const rows = data?.transactions?.map((row: any) => {
    // const date = new Date(row.updatedAt);
    const name = row.invoice?.fixed;
    return (
      <tr key={row._id} className="border-y text-base h-[75px]">
        <td key={row._id} className="pl-5">
          {(() => {
            if (name?.length === 1) {
              return name[0].itemName;
            } else if (name?.length === 2) {
              return `${name[0].itemName.slice(0, 10)}...+${name[1].itemName.slice(0, 10)}...`;
            } else {
              return `${name[0].itemName.slice(0, 10)}...+Other`;
            }
          })()}
          <td>{row.updatedAt}</td>
        </td>
        <td></td>
        <td>
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

{
  /* {row.invoice?.fixed?.map((row1: any, _id: number) => {
            return (
              <>{row.invoice.fixed?.length <= 2 ? row1.itemName : "hello"}</>
            );
          })} */
}

{
  /* {name?.length  === 1 && name[0].itemName || name.length  === 2 && `${name[0].itemName}+${name[1].itemName}` || name.length  === 3 &&`${name[0].itemName}+ Other`} */
}
