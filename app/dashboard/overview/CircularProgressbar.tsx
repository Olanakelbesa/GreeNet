import { BiUpArrow } from "react-icons/bi";

interface ProgressProps {
	progress: number;
	name: string;
	percentage: number;
	isTemperature: boolean;
	isWindSpeed: boolean;
	progressIcon: React.ReactNode;
}

const CircularProgressbar: React.FC<ProgressProps> = ({
	progress,
	name,
	percentage,
	isTemperature,
	isWindSpeed,
	progressIcon,
}) => {
	const radius = 50; // Radius of the circle
	const circumference = 2 * Math.PI * radius; // Circumference of the circle
	const offset = circumference - (progress / 100) * circumference; // Calculate the offset for the open part

	return (
		<div className=" flex-1 border border-solid border-[#29bb49] rounded-lg bg-[#29bb49] bg-opacity-5">
			<div className="flex justify-between p-3">
				<p>{name}</p>
				<div className={`flex justify-between items-center bg-gray-100 dark:bg-[#3f3f3f] rounded-lg text-xs ${percentage < 10 ? "text-red-300" : "text-[#29bb49]"} w-10 px-1`}>
					<BiUpArrow />
					<p>{percentage}%</p>
				</div>
			</div>
			<div className="flex justify-center py-2">
				<div className="relative flex justify-center items-center w-32 h-32">
					{/* SVG for the circular progress */}
					<svg className="w-full h-full transform -rotate-90">
						<circle
							className="text-gray-200 stroke-current" // Background circle
							strokeWidth="8"
							fill="transparent"
							r={radius}
							cx="60"
							cy="60"
						/>
						<circle
							className="text-[#29bb49] stroke-current" // Progress circle
							strokeWidth="8"
							strokeDasharray={circumference}
							strokeDashoffset={offset}
							fill="transparent"
							r={radius}
							cx="60"
							cy="60"
						/>
					</svg>

					{/* Temperature number */}
					<div className="absolute flex justify-center items-center ">
						{progressIcon}
					</div>
				</div>
			</div>
			<div className="flex justify-center py-2 pb-3 text-2xl font-bold text-[#29bb49]">
				{progress}
				{isTemperature ? "°" : isWindSpeed ? "Km/hr" : "%"}
			</div>
		</div>
	);
};

export default CircularProgressbar;
