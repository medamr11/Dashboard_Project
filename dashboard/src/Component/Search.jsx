import React from "react";
import { MdSearch } from "react-icons/md";
function Search() {
  return (
    <div className="flex items-center   h-16  relative">
      <input
        type="search"
        placeholder="Search..."
        className=" border rounded-lg hover:border-neutral-600 outline-none  w-56 h-9 mt-2 pl-10 dark:bg-[#05070A] dark:border-neutral-600 hover:dark:border-neutral-400"
      />
      <MdSearch size={20} className="absolute  left-2 top-5 translate-y-2 dark:text-white" />
    </div>
  );
}

export default Search;
