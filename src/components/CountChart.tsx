"use client";

import Image from "next/image";
import {
  Legend,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
const data = [
  {
    name: "Total",
    count: 106,
    fill: "white",
  },
  {
    name: "Girls",
    count: 53,
    fill: "#FAE27C",
  },
  {
    name: "Boys",
    count: 53,
    fill: "#C3EBFA",
  },
];

export default function CountChart() {
  return (
    <div className="bg-white rounded-xl p-4 w-full h-full">
      {/* TITLE  */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold capitalize">students</h1>
        <Image
          src={"/moreDark.png"}
          alt="more"
          width={20}
          height={20}
          className={""}
        />
      </div>

      {/* CHART  */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
            <Tooltip />
          </RadialBarChart>
        </ResponsiveContainer>

        <Image
          src={"/maleFemale.png"}
          alt={"male female"}
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* BOTTOM */}
      <div className="flex justify-center gap-16">
        {/* BOYS */}
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 rounded-full bg-sky" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-gray-300">Boys (55%)</h2>
        </div>
        {/* GIRLS */}
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 rounded-full bg-yellow" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-gray-300">Girls (45%)</h2>
        </div>
      </div>
    </div>
  );
}
