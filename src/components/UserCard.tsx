import Image from "next/image";
import React from "react";

export default function UserCard({ type }: { type: string }) {
  return (
    <div className="rounded-2xl odd:bg-purple even:bg-yellow p-4 flex-1 min-[130px]:">
      <div className="flex items-center justify-between">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
          2024/08/25
        </span>
        <Image src={`/more.png`} alt="more" width={20} height={0} />
      </div>
      <h1 className="text-2xl font-semibold my-2">1,234</h1>
      <h2 className="capitalize text-sm font-medium text-gray-500">{type}s</h2>
    </div>
  );
}
