"use client";

import React, { useMemo } from "react";
import Pagination from "@/components/Pagination";
import Table, { Column } from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { eventsData } from "@/libs/data";
import Image from "next/image";
import FormModal from "@/components/modals/FormModal";

type TEvent = {
  id: number;
  title: string;
  class: string;
  date: string;
  startTime: string;
  endTime: string;
};

export default function EventListPage() {
  // const router = useRouter();

  const handleEdit = (item: TEvent) => {
    console.log("Edit", item);
  };

  const handleDelete = (item: TEvent) => {
    console.log("Delete", item);
  };

  const columns: Column<TEvent>[] = useMemo(
    () => [
      // title
      {
        header: "Title",
        accessorKey: "title",
        className: "table-cell",
      },
      // class
      {
        header: "Class",
        accessorKey: "class",
        className: "table-cell",
      },
      // date
      {
        header: "Date",
        accessorKey: "date",
        className: "table-cell",
      },
      // startTime
      {
        header: "Start Time",
        accessorKey: "startTime",
        className: "table-cell",
      },
      // endTime
      {
        header: "End Time",
        accessorKey: "endTime",
        className: "table-cell",
      },

      // ACTIONS
      {
        header: "Action",
        accessorKey: "action",
        className: "text-center",
        actions: [
          {
            title: "View",
            icon: <Image src={"/view.png"} alt="edit" width={20} height={20} />,
            handler: handleEdit,
            getVisibility: (item: TEvent) => true,

            getRenderCell: (item: TEvent) => (
              <FormModal table="event" type="view" data={item} />
            ),
          },
          {
            title: "Edit",
            icon: <Image src={"/edit.png"} alt="edit" width={20} height={20} />,
            handler: handleEdit,
            getVisibility: (item: TEvent) => true,
            getRenderCell: (item: TEvent) => (
              <FormModal table="event" type="update" data={item} />
            ),
          },
          {
            title: "Delete",
            icon: (
              <Image src={"/delete.png"} alt="delete" width={20} height={20} />
            ),
            handler: handleDelete,
            getVisibility: (item: TEvent) => true,
            getRenderCell: (item: TEvent) => (
              <FormModal table="event" type="delete" id={item.id} />
            ),
          },
        ],
      },
    ],
    []
  );

  return (
    <section className="flex-1 bg-white  rounded-md p-4 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Teachers</h1>

        <div className="flex flex-col md:flex-row text-lg gap-4 w-full md:w-auto">
          {/* TABLE SEARCH */}
          <TableSearch />

          {/* SORT */}
          <div className="flex gap-4 items-center self-end">
            <button
              type="button"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow"
            >
              <Image src={"/filter.png"} alt="filter" width={14} height={14} />
            </button>
            <button
              type="button"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow"
            >
              <Image src={"/sort.png"} alt="filter" width={14} height={14} />
            </button>
            <FormModal table="event" type="create" />
          </div>
        </div>
      </div>

      {/*TABLE LIST */}
      <Table columns={columns} data={eventsData} />
      {/* PAGINATION */}
      <Pagination />
    </section>
  );
}
