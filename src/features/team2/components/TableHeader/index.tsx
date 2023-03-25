import React from "react";


const TableHeader = ({ columns ,setSort}: any) => {
  const headers = columns.map((column: any) => {
    const style = {
      width: column.width ?? 130,
      paddingLeft: column.paddingLeft ?? 0,
      borderBottom: "1px solid #d6d4d4" ,
      textAlign: "left",
      color: "#9E9E9E",
      fontSize: "17px",
      fontWeight: "600",
    };
    return (
      <td key={column.key} style={style}>
        <div className="flex flex-row ">
          <div style={column.header == "Date" ? { marginLeft: "-110px" } : null}>
            {column.header}
          </div>
          <div className="text-xs flex flex-col pl-2 cursor-pointer">
            <span onClick={() => setSort(`${column.key}`)}>▲</span>
            <span onClick={() => setSort(`-${column.key}`)}>▼</span>
          </div>
        </div>
      </td>
    );
  });

  return (
    <thead>
      <tr className="h-[50px]">{headers}</tr>
    </thead>
  );
};

export default TableHeader;
