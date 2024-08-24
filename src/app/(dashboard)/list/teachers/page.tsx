import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { teachersData } from "@/libs/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type TTeacher = {
  id: number;
  teacherId: number;
  name: string;
  email: string;
  photo: string;
  phone: string;
  subjects: string[];
  classes: string[];
  address: string;
};

const columns = [
  {
    header: "Info",
    accessorKey: "info",
  },
  {
    header: "Teacher ID",
    accessorKey: "teacherId",
    className: "hidden md:table-cell",
  },
  {
    header: "Subjects",
    accessorKey: "subjects",
    className: "hidden md:table-cell",
  },
  {
    header: "Classes",
    accessorKey: "classes",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessorKey: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessorKey: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Action",
    accessorKey: "action",
  },
];

export default function TeacherListPage() {
  const renderRow = (item: TTeacher) => (
    <tr
      key={item?.id}
      className="border-b border-gray-200 even:bg-slate-50 hover:bg-skyLight text-sm"
    >
      <td className="flex items-center gap-4 p-4">
        <Image
          src={item.photo}
          alt={item.name}
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item?.name}</h3>
          <p className="text-xs text-gray-500">{item?.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.teacherId}</td>
      <td className="hidden md:table-cell">{item?.subjects?.join(",")}</td>
      <td className="hidden md:table-cell">{item?.classes?.join(",")}</td>
      <td className="hidden md:table-cell">{item?.phone}</td>
      <td className="hidden md:table-cell">{item?.address}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.teacherId}`}>
            <button
              type="button"
              className="w-7 h-7 flex items-center justify-center rounded-full bg-sky"
            >
              <Image
                src={"/view.png"}
                alt={"edit"}
                width={16}
                height={16}
                className={""}
              />
            </button>
          </Link>
          <Link href={`/list/teachers/${item.teacherId}`}>
            <button
              type="button"
              className="w-7 h-7 flex items-center justify-center rounded-full bg-purple"
            >
              <Image
                src={"/delete.png"}
                alt={"edit"}
                width={16}
                height={16}
                className={""}
              />
            </button>
          </Link>
        </div>
      </td>
    </tr>
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
      <Table columns={columns} renderRow={renderRow} data={teachersData} />
      {/* PAGINATION */}
      <Pagination />
    </section>
  );
}
