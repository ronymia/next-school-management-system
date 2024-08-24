// "use client";

import React from "react";

interface ITableProps {
  children?: React.ReactNode;
  columns: {
    header: string;
    accessorKey: string;
    className?: string;
  }[];
  renderRow: (item: any) => React.ReactNode;
  data: any[];
}

export default function Table({ columns, renderRow, data }: ITableProps) {
  return (
    <table className="w-full mt-4">
      {/* TABLE HEADER */}
      <thead className="text-left text-gray-500 text-sm">
        {columns?.map((cols) => (
          <th key={cols?.accessorKey} className={cols?.className}>
            {cols?.header}
          </th>
        ))}
      </thead>

      {/* TABLE BODY */}
      {data?.map((item) => renderRow(item))}
    </table>
  );
}
