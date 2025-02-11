import Image from "next/image";
import React from "react";
import left_leaf from "@/public/images/left-leaf.png";
import right_leaf from "@/public/images/right-leaf.png";
import circle from "@/public/images/circle.png";
import Link from "next/link";
import facebook from "@/public/images/facebook.png";
import linkedin from "@/public/images/linkedin.png";
import twiter from "@/public/images/twiter.png";
import youtube from "@/public/images/youtube.png";

function Footer() {
	return (
		<div className=" bg-green-200">
			<div className="relative flex justify-evenly pt-10 pb-5">
				<div className="absolute left-0 -top-0">
					<Image src={left_leaf} alt="" width={100} />
				</div>
				<div className="absolute right-0 top-14">
					<Image src={right_leaf} alt="" width={100} />
				</div>
				<div>
					<Link href={"./home"} className="flex items-center gap-2">
						<Image src={circle} alt="" className=" w-5 h-5" />
						<p className="font-semibold text-xl">
							GreeNet<span className="text-green-400">.</span>{" "}
						</p>
					</Link>
				</div>
				<div className="flex gap-16 items-center">
					<Link href={"./home"}>Home</Link>
					<Link href={"./home"}>Dashboard</Link>
					<Link href={"./home"}>About Us</Link>
					<Link href={"./home"}>FAQs</Link>
				</div>
				<div className="flex gap-4 items-center">
					<Link href={"./home"}>
						<Image src={facebook} alt="" />
					</Link>
					<Link href={"./home"}>
						<Image src={linkedin} alt="" />
					</Link>
					<Link href={"./home"}>
						<Image src={twiter} alt="" />
					</Link>
					<Link href={"./home"}>
						<Image src={youtube} alt="" />
					</Link>
				</div>
			</div>
			<div className="flex flex-col items-center justify-center w-full">
				<div className="border-b-2 border-solid border-gray-300 w-[60%]"></div>
				<div className="flex gap-5 py-5 text-sm text-gray-500">
					<div>&copy;2024 GreeNet. All rights reserved.</div>
					<div>Terms</div>
					<div>Privacy</div>
					<div>Cookies</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
