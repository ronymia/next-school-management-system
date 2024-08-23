"use client";
import Image from "next/image";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Sunday",
    present: 40,
    absent: 20,
  },
  {
    name: "Monday",
    present: 30,
    absent: 13,
  },
  {
    name: "Tuesday",
    present: 20,
    absent: 98,
  },
  {
    name: "Wednesday",
    present: 27,
    absent: 39,
  },
  {
    name: "Thursday",
    present: 18,
    absent: 48,
  },
  {
    name: "Friday",
    present: 23,
    absent: 38,
  },
];

export default function AttendanceChart() {
  return (
    <div className="bg-white rounded-xl p-4 w-full h-full">
      {/* TITLE */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold capitalize">Attendance</h1>
        <Image
          src={"/moreDark.png"}
          alt="more"
          width={20}
          height={20}
          className={""}
        />
      </div>

      {/* CHART */}
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#d1d5db" }}
          />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: "#d1d5db" }} />
          <Tooltip
            contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
          />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Bar
            dataKey="present"
            fill="#FAE27C"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="absent"
            fill="#C3EBFA"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
