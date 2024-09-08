"use client";

import Image from "next/image";
import { useState } from "react";
import TeacherForm from "../forms/TeacherForm";

export interface IFormModalProps {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete" | "view";
  data?: any;
  id?: number;
}

export default function FormModal({ table, type, data, id }: IFormModalProps) {
  // MODAL STATE
  const [modalOptions, setModalOptions] = useState({
    open: false,
    onClose: () => {},
    title: `${type.charAt(0).toUpperCase()} ${table.charAt(0).toUpperCase()}`,
  });

  // ACTION BUTTON SIZE
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  // ACTION BUTTON BACKGROUND COLOR
  const bgColor =
    type === "create"
      ? "bg-yellow"
      : type === "update"
      ? "bg-yellow"
      : type === "delete"
      ? "bg-purple"
      : type === "view"
      ? "bg-sky"
      : null;

  // FORM MODAL
  const Form = () => {
    return type === "delete" && !!id ? (
      <div className="mx-auto text-center my-4 w-56">
        {/* Trash icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="96"
          height="96"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-trash-2 mx-auto text-red-500"
        >
          <path d="M3 6h18" />
          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
          <line x1="10" x2="10" y1="11" y2="17" />
          <line x1="14" x2="14" y1="11" y2="17" />
        </svg>
        <div className="mx-auto my-4 w-48 ">
          {/* Title */}
          <h3 className="text-lg font-black text-gray-800">Confirm Delete</h3>
          {/* Description */}
          <p className="text-sm text-gray-500">
            Are you sure you want to delete this item?
          </p>
        </div>
        {/* Buttons */}
        <div className="flex gap-4">
          {/* Delete button */}
          <button
            type="button"
            // onClick={handleDelete}
            className="btn btn-danger w-full"
          >
            Delete
          </button>
          {/* Cancel button */}
          <button
            type="button"
            // onClick={onClose}
            className="btn btn-light w-full"
          >
            Cancel
          </button>
        </div>
      </div>
    ) : (
      <TeacherForm type="create" />
    );
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setModalOptions({ ...modalOptions, open: true })}
        className={`${size} flex items-center justify-center rounded-full cursor-pointer ${bgColor}`}
      >
        <Image src={`/${type}.png`} alt={type} width={16} height={16} />
      </button>

      {modalOptions.open && (
        <div
          className="w-screen h-screen absolute bg-black/50 bg-opacity-60 top-0 left-0
        z-50 flex items-center justify-center"
        >
          <div
            className="bg-white p-4 rounded-md relative w-[90%] 
          md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]"
          >
            <Form />
            <div
              role="button"
              onClick={() => setModalOptions({ ...modalOptions, open: false })}
              className="absolute top-4 right-4 cursor-pointer"
            >
              <Image src={`/close.png`} alt={"close"} width={14} height={14} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
