"use client";

const announcements = [
  {
    id: 1,
    title: "winter vacation",
    date: "12/5/2024",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: 2,
    title: "winter vacation",
    date: "12/5/2024",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: 13,
    title: "winter vacation",
    date: "12/5/2024",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
];
const colors = ["bg-skyLight", "bg-purpleLight", "bg-yellowLight"]; // Add as many colors as you need

export default function Announcements() {
  return (
    <div className="bg-white rounded-xl p-4 w-full h-full">
      {/* TITLE */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold capitalize">Announcements</h1>
        <button className="text-xs text-gray-400 capitalize">View All</button>
      </div>

      {/* ANNOUNCEMENTS */}
      <div className="flex flex-col gap-4">
        {/* announcements */}
        {announcements.map((item, index) => (
          <div
            className={`p-4 round-md ${colors[index % colors.length]}`}
            key={item?.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{item?.title}</h1>
              <span className="text-gray-300 text-xs bg-white p-1 rounded-md">
                {item?.date}
              </span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{item?.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
