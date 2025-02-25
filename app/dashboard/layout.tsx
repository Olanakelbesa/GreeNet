import SideBar from "@/components/Dashboard/Sidebar";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, fab)

export default function DashBoardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex gap-2">
			<div className="w-[20%]">
				<SideBar />
			</div>
			<div className="w-[80%] overflow-y-auto ">{children}</div>
		</div>
	);
}
