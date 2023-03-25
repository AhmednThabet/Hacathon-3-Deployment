import { useToggleDrawer } from "features/invoiceSystem/hooks/useToggleDrawer";
import { columns } from "features/team2/data";
import React, { useState } from "react";
import MohammedZiyad from "../mohammed-ziyad";
import TableHeader from "../TableHeader";
import TableRows from "../TableRows";

const Table = ({ type, search, sort, setSort, selectedOptions }: any) => {
  const [getId, setGetId] = useState();
  const [linkDrawer, setLinkDrawer] = useState(false);
  const [invoiceDrawer, setInvoiceDrawer] = useState(false);
  const { isToggled, toggleDrawer }: any = useToggleDrawer(false);
  console.log(getId);

  return (
    <div>
      <table className="w-full">
        <TableHeader columns={columns} setSort={setSort} />
        <TableRows
          type={type}
          search={search}
          sort={sort}
          selectedOptions={selectedOptions}
          setGetId={setGetId}
          setLinkDrawer={setLinkDrawer}
          setInvoiceDrawer={setInvoiceDrawer}
          toggleDrawer={toggleDrawer}
        />
      </table>
      <MohammedZiyad
        linkId={getId}
        invoiceId={getId}
        toggleDrawer={toggleDrawer}
        isToggled={isToggled}
        linkDrawer={linkDrawer}
        invoiceDrawer={invoiceDrawer}
      />
    </div>
  );
};

export default Table;
