"use client";

import React, { useMemo } from "react";
import Pagination from "@/components/Pagination";
import Table, { Column } from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { classesData, subjectsData } from "@/libs/data";
import Image from "next/image";
import FormModal from "@/components/modals/FormModal";

type TClass = {
  id: number;
  name: string;
  capacity: number;
  grade: number;
  supervisor: string;
};

export default function ClassListPage() {
  // const router = useRouter();

  const handleEdit = (item: TClass) => {
    console.log("Edit", item);
  };

  const handleDelete = (item: TClass) => {
    console.log("Delete", item);
  };

  const columns: Column<TClass>[] = useMemo(
    () => [
      // name
      {
        header: "Name",
        accessorKey: "name",
        className: "table-cell",
      },
      // capacity
      {
        header: "Capacity",
        accessorKey: "capacity",
        className: "table-cell",
      },
      // grade
      {
        header: "Grade",
        accessorKey: "grade",
        className: "table-cell",
      },
      // supervisor
      {
        header: "Supervisor",
        accessorKey: "supervisor",
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
            getVisibility: (item: TClass) => true,
            getRenderCell: (item: TClass) => (
              <FormModal table="class" type="view" data={item} />
            ),
          },
          {
            title: "Edit",
            icon: <Image src={"/edit.png"} alt="edit" width={20} height={20} />,
            handler: handleEdit,
            getVisibility: (item: TClass) => true,
            getRenderCell: (item: TClass) => (
              <FormModal table="class" type="update" data={item} />
            ),
          },
          {
            title: "Delete",
            icon: (
              <Image src={"/delete.png"} alt="delete" width={20} height={20} />
            ),
            handler: handleDelete,
            getVisibility: (item: TClass) => true,
            getRenderCell: (item: TClass) => (
              <FormModal table="class" type="delete" id={item.id} />
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
            <FormModal table="class" type="create" />
          </div>
        </div>
      </div>

      {/*TABLE LIST */}
      <Table columns={columns} data={classesData} />
      {/* PAGINATION */}
      <Pagination />
    </section>
  );
}
