import Announcements from "@/components/Announcements";
import BigCalender from "@/components/BigCalender";
import EventCalender from "@/components/EventCalender";

export default function StudentPage() {
  return (
    <section className="p-4 flex flex-col gap-4 xl:flex-row">
      {/* LEFT */}
      <section className="w-full xl:w-2/3">
        {/* Calendar */}
        <div className="h-full p-4 rounded-md bg-white">
          <h1 className="text-xl font-semibold">Schedule (4A)</h1>
          <BigCalender />
        </div>
      </section>

      {/* RIGHT */}
      <aside className="w-full xl:w-1/3 flex flex-col gap-8">
        {/* Events and Announcements */}
        <EventCalender />
        <Announcements />
      </aside>
    </section>
  );
}
