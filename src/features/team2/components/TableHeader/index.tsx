import React from "react";


const TableHeader = ({ columns, className }: any) => {
  const headers = columns.map((column: any, index: any) => {
    const style = {
      width: column.width ?? 130,
      paddingLeft: column.paddingLeft ?? 0,
      borderBottom: "1px solid #F9F9F9",
      textAlign: "left",
      color: "#9E9E9E",
      fontSize: "17px",
      fontWeight: "600",
    };
    return (
      <td key={`headCell-${index}`} style={style}>
        <div className="flex flex-row ">
          <div style={column.header == "Date" ? { marginLeft: "-60px" } : null}>
            {column.header}
          </div>
          <div className="text-xs flex flex-col pl-2">
            <span>▲</span>
            <span>▼</span>
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
