import Announcements from "@/components/Announcements";
import BigCalender from "@/components/BigCalender";
import PerformancePieChart from "@/components/PerformancePieChart";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SingleTeacherPage() {
  return (
    <div className="flex-1 p-4 flex gap-4 flex-col xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col xl:flex-row gap-4">
          {/* USER CARD INFO */}
          <div className="bg-sky rounded-md py-6 px-4 flex-1 flex  gap-4">
            {/* IMAGE */}
            <div className="w-1/3">
              <Image
                src={`https://www.pexels.com/photo/woman-apple-school-top-7005236/`}
                alt={""}
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            {/* DETAILS */}
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-xl font-semibold">MD Naznin Khan</h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>

              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src={"/blood.png"} alt={""} width={14} height={14} />
                  <span>A+</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src={"/date.png"} alt={""} width={14} height={14} />
                  <span>January 2025</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src={"/mail.png"} alt={""} width={14} height={14} />
                  <span>mail@mail.com</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src={"/phone.png"} alt={""} width={14} height={14} />
                  <span>01321185898</span>
                </div>
              </div>
            </div>
          </div>

          {/* SMALL CARDS */}
          <div className="flex-1 flex flex-wrap items-center gap-4">
            {/* Card */}
            <div
              className="bg-white p-4 rounded-md flex items-center gap-4 w-full md:w-[48%] 
            xl:w-[45%] 2xl:w-[48%]"
            >
              <Image
                src={"/singleAttendance.png"}
                alt=""
                width={24}
                height={24}
                className="object-cover w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl text-semibold">90%</h1>
                <span className=" text-xs text-gray5-500">Attendance</span>
              </div>
            </div>
            {/* Card */}
            <div
              className="bg-white p-4 rounded-md flex items-center gap-4 w-full md:w-[48%] 
            xl:w-[45%] 2xl:w-[48%]"
            >
              <Image
                src={"/singleBranch.png"}
                alt=""
                width={24}
                height={24}
                className="object-cover w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl text-semibold">2</h1>
                <span className=" text-xs text-gray5-500">Branches</span>
              </div>
            </div>
            {/* Card */}
            <div
              className="bg-white p-4 rounded-md flex items-center gap-4 w-full md:w-[48%] 
            xl:w-[45%] 2xl:w-[48%]"
            >
              <Image
                src={"/singleLesson.png"}
                alt=""
                width={24}
                height={24}
                className="object-cover w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl text-semibold">90%</h1>
                <span className=" text-xs text-gray5-500">Lessons</span>
              </div>
            </div>
            {/* Card */}
            <div
              className="bg-white p-4 rounded-md flex items-center gap-4 w-full md:w-[48%] 
            xl:w-[45%] 2xl:w-[48%]"
            >
              <Image
                src={"/singleClass.png"}
                alt=""
                width={24}
                height={24}
                className="object-cover w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl text-semibold">90%</h1>
                <span className=" text-xs text-gray5-500">Class</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="bg-white mt-4 rounded-md h-[800px]">
          <h1>Teacher&apos;s Schedule</h1>
          <BigCalender />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        {/* SHORTCUT */}
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Shortcut</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link href={`/`} className="p-3 rounded-md bg-skyLight">
              Teacher&apos;s Classes
            </Link>
            <Link href={`/`} className="p-3 rounded-md bg-purpleLight">
              Teacher&apos;s Students
            </Link>
            <Link href={`/`} className="p-3 rounded-md bg-yellowLight">
              Teacher&apos;s Lessons
            </Link>
            <Link href={`/`} className="p-3 rounded-md bg-pink-50">
              Teacher&apos;s Exams
            </Link>
            <Link href={`/`} className="p-3 rounded-md bg-skyLight">
              Teacher&apos;s Assignments
            </Link>
          </div>
        </div>

        {/* PERFORMANCE CHART */}
        <PerformancePieChart />

        {/* ANNOUNCEMENTS */}
        <Announcements />
      </div>
    </div>
  );
}
