"use client";
import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "winter vacation",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: 2,
    title: "winter vacation",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: 13,
    title: "winter vacation",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
];

export default function EventCalender() {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-white p-4 rounded-md flex flex-col gap-4">
      {/* EVENTS CALENDER */}
      <Calendar onChange={onChange} value={value} />

      {/* TITLE */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold capitalize">Events</h1>
        <Image
          src={"/moreDark.png"}
          alt="more"
          width={20}
          height={20}
          className={""}
        />
      </div>

      {/* EVENTS */}
      {events.map((event) => (
        <div
          className="p-5 round-md ring-2 ring-gray-100 border-t-4 odd:border-t-sky even:border-t-purple"
          key={event?.id}
        >
          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-gray-600">{event?.title}</h1>
            <span className="text-gray-300 text-xs">{event?.time}</span>
          </div>
          <p className="mt-2 text-gray-400 text-sm">{event?.description}</p>
        </div>
      ))}
    </div>
  );
}
