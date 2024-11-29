import React from "react";
import { MdNotifications } from "react-icons/md";

function Notification() {
  return (
    <div className="flex items-center justify-center relative bg-neutral-50 hover:bg-neutral-200 size-9 rounded-lg border border-neutral-400 mt-2 dark:bg-[#111827] dark:border-neutral-700 hover:dark:border-neutral-400">
      <button>
        <MdNotifications size={18} className="text-black dark:text-white "/>
      </button>
      <span className="size-2 bg-red-700 absolute top-1 right-1 rounded-full -translate-y-[6px] translate-x-[6px]"></span>
    </div>
  );
}

export default Notification;
