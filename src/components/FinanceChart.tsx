"use client";

import Image from "next/image";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "January",
    income: 4000,
    expense: 2400,
  },
  {
    name: "February",
    income: 3000,
    expense: 1398,
  },
  {
    name: "March",
    income: 2000,
    expense: 9800,
  },
  {
    name: "April",
    income: 2780,
    expense: 3908,
  },
  {
    name: "May",
    income: 1890,
    expense: 4800,
  },
  {
    name: "June",
    income: 2390,
    expense: 3800,
  },
  {
    name: "July",
    income: 3490,
    expense: 4300,
  },
  {
    name: "August",
    income: 3490,
    expense: 4300,
  },
  {
    name: "September",
    income: 3490,
    expense: 4300,
  },
  {
    name: "October",
    income: 3490,
    expense: 4300,
  },
  {
    name: "November",
    income: 3490,
    expense: 4300,
  },
  {
    name: "December",
    income: 3490,
    expense: 4300,
  },
];

export default function FinanceChart() {
  return (
    <div className="bg-white rounded-xl p-4 w-full h-full">
      {/* TITLE  */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold capitalize">Finance</h1>
        <Image
          src={"/moreDark.png"}
          alt="more"
          width={20}
          height={20}
          className={""}
        />
      </div>

      {/* CHART  */}
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#d1d5db" }}
            tickMargin={10}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#d1d5db" }}
            tickMargin={20}
          />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#C3EBFA"
            strokeWidth={5}
          />
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#CFCEFF"
            strokeWidth={5}
          />
        </LineChart>
      </ResponsiveContainer>

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
