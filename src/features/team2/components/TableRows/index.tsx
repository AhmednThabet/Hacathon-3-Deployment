import { IconButton } from "components";
import InvoiceDrawer from "features/invoiceSystem/components/InvoiceDrawer";
import LinkDrawer from "features/invoiceSystem/components/LinkDrawer";
import { useToggleDrawer } from "features/invoiceSystem/hooks/useToggleDrawer";
import { ArrowLeft, ArrowRight } from "lib/@heroicons";
import axios from "lib/axios";
import { useSWR } from "lib/swr";
import React, { useState } from "react";
import { getAuthorizationHeader } from "utils";
import MohammedZiyad from "../mohammed-ziyad";

const handeller = async (url: string) => {
  const res = await axios.get(url, {
    headers: {
      ...getAuthorizationHeader(),
    },
  });
  console.log(res.data.data);
  return res.data.data;
};

const TableRows = ({
  type,
  search,
  sort,
  selectedOptions,
  setLinkDrawer,
  setInvoiceDrawer,
  toggleDrawer,
  setGetId,
}: any) => {
  const [offset, setOffset] = useState(0);
  const [tranPersage, setTranPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);

  const { data, error, isLoading } = useSWR(
    `https://talents-valley-backend.herokuapp.com/api/transactions/invoice-service-listing?limit=${tranPersage}&sort=${sort}&search=${search}${
      selectedOptions && `&filter=${selectedOptions}`
    }&offset=${offset}&type=${type}`,
    handeller
  );
  const PaginationNext = () => {
    setOffset(offset + tranPersage);
    setCurrentPage(currentPage + 1);
  };
  const PaginationPrev = () => {
    setOffset(offset - tranPersage);
    setCurrentPage(currentPage - 1);
  };

  type = "invoice";
  const handleClick = (row: any) => {
    if (row.type === "invoice") {
      setGetId(row.invoice?._id);
      setInvoiceDrawer(true);
      toggleDrawer();
    } else {
      setGetId(row.service?._id);
      setLinkDrawer(true);
      toggleDrawer();
    }
  };

  const ColorforStatus = (status: any) => {
    if (status === "pending") {
      return "text-[#DAA545]";
    } else if (status === "sent") {
      return "text-green-light";
    } else if (status === "paid") {
      return "text-green-light";
    } else {
      return "text-gray-dark";
    }
  };
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const rows = data?.transactions?.map((row: any) => {
    const name =
      row.type === "all"
        ? row.type === "invoice"
          ? row.invoice?.fixed
          : row.service?.fixed
        : row.type === "invoice"
        ? row.invoice?.fixed
        : row.service?.fixed;
    const d = new Date(row.updatedAt);

    // const name =  row.type === 'all'?  row.type ==='invoice'?  row.invoice?.fixed : row.service?.fixed :  row.type === 'invoice' ? row.invoice?.fixed : row.service?.fixed;
    return (
      <tr
        key={row._id}
        className="border-y text-base h-[75px] text-[#707070] font-[600] hover:bg-slate-50 px-7"
        onClick={() => handleClick(row)}
      >
        {/* {linkDrawer && <LinkDrawer linkId={row.service._id} />}
        {invoiceDrawer && <InvoiceDrawer invoiceId={row.invoice._id} />} */}

        <td key={row._id} className="pl-5">
          {(() => {
            if (name?.length === 1) {
              return name[0].itemName;
            } else if (name?.length === 2) {
              return `${name[0]?.itemName.slice(
                0,
                10
              )}...+${name[1].itemName.slice(0, 10)}...`;
            } else if (name?.length >= 3) {
              return `${name[0]?.itemName.slice(0, 10)}...+Other`;
            } else {
              return " - ";
            }
          })()}
          <td>
            {months[d.getMonth()]} {d.getDate()}
          </td>
        </td>
        <td></td>
        <td>
          {row.type == "invoice"
            ? `$${row.invoice?.subTotal}`
            : `$${row.service?.subTotal}`}
        </td>
        <td>
          {/* {type == "invoice"? `${row.invoice?.client?.fullName == null && "_"} `: row.service?.paidInvoice}  */}
          {type === "all"
            ? row.invoice?.client?.fullName
            : "_" || type == "invoice"
            ? `${row.invoice?.client?.fullName == null && "_"} `
            : row.service?.paidInvoice >= 0 &&
              `${row.service?.paidInvoice}Client`}
        </td>
        <td className={ColorforStatus(row.invoice?.status)}>
          {row.type == "invoice"
            ? `${
                row.invoice?.status == "rejected"
                  ? "disapproved"
                  : row.invoice?.status
              }`
            : `${
                row.service?.status == "rejected"
                  ? "disapproved"
                  : row.service?.status
              }`}
          {row.invoice?.status === "unpaid" && "sent"}
        </td>
      </tr>
    );
  });

  return (
    <tbody>
      {rows}
      <tr>
        <td className=" text-[#9E9E9E] flex content-center  ">
          <IconButton>
            <ArrowLeft className="text-[#9E9E9E]" onClick={PaginationPrev} />
          </IconButton>
          <span className="pt-1">Page {currentPage} - 10</span>
          <IconButton>
            <ArrowRight className="text-[#9E9E9E]" onClick={PaginationNext} />
          </IconButton>
        </td>
      </tr>
    </tbody>
  );
};

export default TableRows;

// <tr key={`row-${index}`}>
//   {columns.map((column, index1) => {
//     return <td key={`cell-${index1}`}>{row[column.key]}</td>;
//   })}
// </tr>

{
  /* {name?.length  === 1 && name[0].itemName || name.length  === 2 && `${name[0].itemName}+${name[1].itemName}` || name.length  === 3 &&`${name[0].itemName}+ Other`} */
}
