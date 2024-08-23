import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT SIDEBAR */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
        {/* LOGO  */}
        <Link
          href={"/"}
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src={"/logo.png"} alt="logo" width={32} height={32} />
          <span className="hidden lg:block font-bold">School Management</span>
        </Link>

        {/* MENU LINKS */}
        <Menu />
      </div>

      {/* RIGHT SIDEBAR */}
      <div className="w-[86%] md:w-[92%] lg:w-[14%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
        {/* NAVBAR */}
        <Navbar />

        {/* CHILDREN */}
        {children}
      </div>
    </div>
  );
}
