"use client";
import { BiSearch } from "react-icons/bi";
import e from "express";

const Search = () => {
  return (
    <div
      className="border-[1px] w-full md:w-auto py-2 rounded-full hover:shadow-md
      transition cursor-pointer
  "
    >
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm font-semibold px-6">an</div>
        <div className="hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center">
          aw
        </div>
        <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
          <div className="hidden sm:block">add</div>
          <div className="p-2 bg-green-500 text-white rounded-full">
            <BiSearch size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Search;
