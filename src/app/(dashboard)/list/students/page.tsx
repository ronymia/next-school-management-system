"use client";

import React, { useMemo } from "react";
import Pagination from "@/components/Pagination";
import Table, { Column } from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { studentsData } from "@/libs/data";
import Image from "next/image";
import { useRouter } from "next/navigation";

type TStudent = {
  id: number;
  studentId: string;
  name: string;
  email: string;
  photo: string;
  phone: string;
  grade: number;
  class: number;
  address: string;
};

export default function StudentListPage() {
  const router = useRouter();

  const handleView = (item) => {
    router.push(`/list/teachers/${item.id}`);
  };

  const handleEdit = (item: TStudent) => {
    console.log("Edit", item);
  };

  const handleDelete = (item: TStudent) => {
    console.log("Delete", item);
  };

  const columns: Column<TStudent>[] = useMemo(
    () => [
      // INFO INCLUDES PHOTO, NAME, EMAIL
      {
        header: "User",
        accessorKey: "user",
        getRenderCell: (_, item: TStudent) => (
          <div className="flex items-center gap-4 p-4">
            <Image
              src={item.photo}
              alt={item.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-xs text-gray-500">{item.email}</p>
            </div>
          </div>
        ),
      },
      // TEACHER ID
      {
        header: "Student ID",
        accessorKey: "studentId",
        className: "hidden md:table-cell",
      },
      // SUBJECTS
      {
        header: "Grade",
        accessorKey: "grade",
        className: "hidden md:table-cell",
        // getRenderCell: (_, item: TStudent) => item?.subjects?.join(", "),
      },
      // CLASSES
      {
        header: "Class",
        accessorKey: "class",
        className: "hidden md:table-cell",
        // getRenderCell: (_, item: TStudent) => item?.classes?.join(","),
      },
      // PHONE
      {
        header: "Phone",
        accessorKey: "phone",
        className: "hidden lg:table-cell",
      },
      // ADDRESS
      {
        header: "Address",
        accessorKey: "address",
        className: "hidden lg:table-cell",
      },
      // ACTIONS
      {
        header: "Action",
        accessorKey: "action",
        actions: [
          {
            title: "View",
            icon: <Image src={"/view.png"} alt="edit" width={20} height={20} />,
            handler: handleView,
            getVisibility: (item: TStudent) => true,
          },
          {
            title: "Edit",
            icon: <Image src={"/edit.png"} alt="edit" width={20} height={20} />,
            handler: handleEdit,
            getVisibility: (item: TStudent) => true,
          },
          {
            title: "Delete",
            icon: (
              <Image src={"/delete.png"} alt="delete" width={20} height={20} />
            ),
            handler: handleDelete,
            getVisibility: (item: TStudent) => true,
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
            <button
              type="button"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow"
            >
              <Image src={"/plus.png"} alt="filter" width={14} height={14} />
            </button>
          </div>
        </div>
      </div>

      {/*TABLE LIST */}
      <Table columns={columns} data={studentsData} />
      {/* PAGINATION */}
      <Pagination />
    </section>
  );
}
