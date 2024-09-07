"use client";

import Image from "next/image";

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
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
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
  return (
    <button
      type="button"
      className={`${size} flex items-center justify-center rounded-full cursor-pointer ${bgColor}`}
    >
      <Image src={`/${type}.png`} alt={type} width={16} height={16} />
    </button>
  );
}
