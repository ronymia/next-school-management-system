"use client";
export default function Pagination() {
  return (
    <div className="flex items-center justify-center gap-4 text-gray-500">
      {/* PREVIOUS BUTTON */}
      <button
        type="button"
        className="px-4 py-2 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 cursor-not-allowed"
      >
        Prev
      </button>

      {/* CURRENT PAGE */}
      <div className="flex gap-2 items-center text-sm">
        <button type="button" className="px-2 rounded-md bg-sky">
          1
        </button>
        <button type="button" className="px-2 rounded-md ">
          2
        </button>
        <button type="button" className="px-2 rounded-md ">
          3
        </button>
        ...
        <button type="button" className="px-2 rounded-md ">
          10
        </button>
      </div>

      {/* NEXT BUTTON */}
      <button
        type="button"
        className="px-4 py-2 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
}
