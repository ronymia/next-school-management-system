"use client";
import React, { ReactNode } from "react";

export interface Action<T> {
  title?: string;
  icon: ReactNode;
  handler: (item: T) => void;
  getVisibility?: (item: T) => boolean; // A function to determine if the action should be visible
}

export interface Column<T> {
  header: string;
  accessorKey?: keyof T | string | any;
  width?: number;
  className?: string;
  getRenderCell?: (value: T[keyof T], item: T) => React.ReactNode;
  rowClassName?: (item: T) => string; // Function to get row class based on item
  actions?: Action<T>[]; // Array of actions to render in the last cell
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  isPending?: boolean;
}

export default function Table<T>({
  columns,
  data,
  isPending = false,
}: TableProps<T>) {
  // Identify if there's an action column
  const actionColumn = columns.find((col) => col.actions);

  return (
    <div className="relative w-full mt-4">
      <table className="w-full">
        {/* TABLE HEADER */}
        <thead>
          <tr className="text-left text-gray-500 text-sm">
            {/*  */}
            {columns.map((col, index) => (
              <th
                key={index}
                style={{ width: col?.width }}
                className={col?.className}
              >
                {col?.header}
              </th>
            ))}
          </tr>
        </thead>

        {/* TABLE BODY */}
        <tbody>
          {isPending ? (
            <tr>
              <td colSpan={columns.length} className="text-center py-4">
                <span className="text-gray-500">Loading...</span>
              </td>
            </tr>
          ) : (
            data.map((item) => (
              <tr
                key={(item as any).id}
                className={`border-b border-gray-200 text-sm ${
                  columns.find((col) => col.rowClassName)?.rowClassName
                    ? columns.find((col) => col.rowClassName)!.rowClassName!(
                        item
                      )
                    : ""
                }`}
              >
                {/*  */}
                {columns.map((col, index) => (
                  <td
                    key={index}
                    style={{ width: col?.width }}
                    className={col?.className}
                  >
                    {col?.getRenderCell
                      ? col?.getRenderCell(
                          item[col?.accessorKey as keyof T],
                          item
                        )
                      : col?.accessorKey
                      ? (item[col?.accessorKey] as ReactNode)
                      : null}
                  </td>
                ))}

                {/* Render actions in the last cell */}
                {/* Render actions in the last cell */}
                {actionColumn && (
                  <td
                    // style={{ width: col?.width }}
                    className={actionColumn?.className}
                  >
                    <div className="flex gap-2">
                      {actionColumn.actions?.map((action, index) =>
                        action?.getVisibility ? (
                          action?.getVisibility(item) && (
                            <button
                              key={index}
                              onClick={() => action?.handler(item)}
                              title={action?.title}
                              className="text-blue-500"
                            >
                              {action?.icon}
                            </button>
                          )
                        ) : (
                          <button
                            key={index}
                            onClick={() => action?.handler(item)}
                            title={action?.title}
                            className="text-blue-500"
                          >
                            {action?.icon}
                          </button>
                        )
                      )}
                    </div>
                  </td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
