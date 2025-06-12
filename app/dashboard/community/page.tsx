import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import BlogCard from "../overview/BlogCard";
import AlertOverview from "../overview/AlertOverview";
import VideoCard from "../overview/video";
import Setting from "@/components/Dashboard/Setting";
import { MdOutlineWebStories } from "react-icons/md";
import { PlayCircleIcon } from "lucide-react";
import { GoDiscussionClosed } from "react-icons/go";

function page() {
  return (
    <div className="px-6 dark:text-white">
      <div className="flex justify-between items-center ">
        <div className="text-2xl font-semibold  py-3">Community</div>
        <div>
          <div className="flex gap-4  w-full ">
            <Setting />
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="left-side w-[70%] ">
          <form className=" relative w-full flex gap-2 items-center py-4">
            <IoSearchOutline className="absolute left-3 text-gray-400" />
            <input
              type="text"
              placeholder="Find farming info"
              className=" border-2 w-[80%] border-[#3f3f3f] border-opacity-40 dark:bg-[#3f3f3f] focus:outline-none focus:border-[#29bb49] rounded-lg p-2 px-10"
            />
            <button
              type="submit"
              className="w-[20%] text-center bg-[#29bb49] hover:bg-opacity-80 p-2 rounded-lg text-white font-semibold cursor-pointer"
            >
              Find
            </button>
          </form>
          <div className="flex gap-4">
            <div className="px-4 py-2 border dark:border-none shadow-md dark:bg-[#282828] rounded-lg">
              <p>All</p>
            </div>
            <div className="flex items-center gap-2 border dark:border-none rounded-lg shadow-md dark:bg-[#282828] px-4 py-2">
              <div className="bg-[#29bb49] bg-opacity-10 p-1 rounded-lg ">
                <MdOutlineWebStories className=" rotate-180 " />
              </div>
              <p>Blog</p>
            </div>
            <div className="flex items-center gap-2 border dark:border-none rounded-lg shadow-md dark:bg-[#282828] px-4 py-2">
              <div className="bg-[#29bb49] bg-opacity-10 p-1 rounded-lg ">
                <PlayCircleIcon size={18} />
              </div>
              <p>Video</p>
            </div>
            <div className="flex items-center gap-2 border dark:border-none rounded-lg shadow-md dark:bg-[#282828] px-4 py-2">
              <div className="bg-[#29bb49] bg-opacity-10 p-1 rounded-lg ">
                <GoDiscussionClosed />
              </div>
              <p>Discussions</p>
            </div>
          </div>
          <div className="py-4">
            <div className="grid grid-cols-2 gap-4 bg-gray-100 dark:bg-[#28bb49] dark:bg-opacity-5 rounded-lg  p-4 ">
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </div>
          </div>
        </div>
        <div className="right-side w-[30%] mt-36 flex flex-col gap-2">
          <AlertOverview />
          <VideoCard />
          <VideoCard />
        </div>
      </div>
    </div>
  );
}

export default page;
