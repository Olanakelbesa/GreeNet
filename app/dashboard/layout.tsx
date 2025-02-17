import SideBar from "@/components/Dashboard/Sidebar";

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
