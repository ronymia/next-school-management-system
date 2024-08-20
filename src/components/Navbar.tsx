import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex items-start justify-between p-4">
      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src={"/search.png"} alt="search" width={14} height={14} />
        <input
          type="text"
          name=""
          id=""
          placeholder="search..."
          className="w-[200px] p-2 bg-transparent outline-none"
        />
      </div>

      {/* ICONS AND USER */}
      <div className="flex items-start justify-end gap-6 w-full">
        {/* MESSAGE ICON */}
        <div className="bg-white rounded-full flex items-center justify-center cursor-pointer">
          <Image src={"/message.png"} alt="user" width={20} height={20} />
        </div>
        {/* NOTIFICATION ICON */}
        <div className="bg-white rounded-full flex items-center justify-center cursor-pointer relative">
          <Image src={"/announcement.png"} alt="user" width={20} height={20} />
          <div className="absolute -top-3 -right-3 w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center text-xs">
            1
          </div>
        </div>
        {/* USER */}
        <div className="flex flex-col">
          <span className="text-sm leading-3 font-medium">John Doe</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        {/* USER AVATAR */}
        <div className="">
          <Image
            src={"/avatar.png"}
            alt="user"
            width={36}
            height={36}
            className="rounded-full"
          />
        </div>
      </div>
    </nav>
  );
}
