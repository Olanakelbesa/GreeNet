import React from "react";
import { IoFilterOutline, IoSettingsOutline } from "react-icons/io5";

function Setting() {
	return (
		<div className="flex gap-4  w-full ">
			<button className="flex items-center gap-2 border border-[#29bb49] dark:bg-[#282828] border-opacity-20 rounded-lg p-2 px-3 ">
				<IoSettingsOutline />
				<p>Setting</p>
			</button>
			<button className="flex items-center gap-2 border border-[#29bb49] dark:bg-[#282828] border-opacity-20 rounded-lg p-2 px-3 ">
				<IoFilterOutline />
				<p>Filter</p>
			</button>
		</div>
	);
}

export default Setting;
