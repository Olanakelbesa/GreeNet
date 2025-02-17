"use client";
import Image from "next/image";
import React, { useState } from "react";
import person1 from "@/public/images/person.png";
import google from "@/public/images/google.png";
import phone from "@/public/images/call-calling.png";
import emailIcon from "@/public/icons/envelope-outlined-shape.png";
import hidePwd from "@/public/icons/hidden.png";
import viewPwd from "@/public/icons/view.png";
import Link from "next/link";
import { signIn } from "next-auth/react";

function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPwd, setShowPwd] = useState(false);

	const handleShowPwd = () => {
		setShowPwd(!showPwd);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const result = await signIn("credentials", {
			email,
			password,
			redirect: false,
		});
		console.log(result);
		if (!result?.error) {
			window.location.href = "/dashboard";
		} else {
			alert("Invaild cedentials");
		}
	};

	return (
		<div className="flex justify-center items-center h-screen ">
			<div className="w-[60%] border-2 border-solid border-gray-400 border-opacity-30 flex items-center gap-8 rounded-xl bg-gray-50 ">
				<div>
					<Image
						src={person1}
						alt="person"
						width={430}
						height={550}
						className="p-2 "
					/>
				</div>
				<div className="w-[400px]">
					<p className="text-center text-4xl">GreeNet</p>
					<div className="w-full mx-auto">
						<form onSubmit={handleSubmit}>
							<div className="flex flex-col gap-3">
								<div className="flex flex-col gap-2">
									<label htmlFor="" className="text-sm">
										Email
									</label>
									<div className="relative">
										<input
											type="email"
											required
											onChange={(e) => setEmail(e.target.value)}
											placeholder="example@gmail.com"
											className=" text-sm p-2 w-full rounded-lg border-2 border-solid border-gray-400 border-opacity-20"
										/>
										<Image
											src={emailIcon}
											alt="email icon"
											width={18}
											height={18}
											className="absolute right-3 top-3"
										/>
									</div>
								</div>
								<div className="flex flex-col gap-2">
									<label htmlFor="" className="text-sm">
										Password
									</label>
									<div className="relative">
										<input
											type={showPwd ? "text" : "password"}
											required
											onChange={(e) => setPassword(e.target.value)}
											placeholder="password"
											className=" text-sm p-2 w-full rounded-lg border-2 border-solid border-gray-400 border-opacity-20"
										/>
										<Image
											src={showPwd ? hidePwd : viewPwd}
											onClick={handleShowPwd}
											alt="email icon"
											width={18}
											height={18}
											className="absolute right-3 top-3"
										/>
									</div>
								</div>
							</div>
							<div className="text-green-500 underline text-sm text-end hover:text-green-400 hover:no-underline pt-2 pb-4 ">
								Forget password?
							</div>
							<button
								type="submit"
								className="bg-green-500 text-white w-full p-2 rounded-lg  hover:bg-green-400"
							>
								Login
							</button>
						</form>
						<div className="flex justify-center items-center pt-3">
							<div className="border-t-2 border-gray-500 w-28 mt-1"></div>
							<div className=" border-2 border-solid border-gray-500 rounded-full w-8 text-center text-sm">
								Or
							</div>
							<div className="border-t-2 border-gray-500 w-28 mt-1"></div>
						</div>
						<div className="flex flex-col items-center gap-2 pt-3">
							<button className="flex items-center  bg-gray-800 text-white w-full p-2 rounded-lg hover:text-gray-400 hover:bg-gray-700">
								<Image
									src={phone}
									alt="cell phone icon"
									width={20}
									height={20}
									className="ml-5 "
								/>
								<p className="text-center w-full">Continue with Phone number</p>
							</button>
							<button className="flex items-center  border-2 border-solid border-gray-500 w-full p-2 rounded-lg hover:text-gray-400">
								<Image
									src={google}
									alt="google icon"
									width={20}
									height={20}
									className="ml-5"
								/>
								<p className="text-center w-full">Continue with Google</p>
							</button>

							<div className="flex justify-center text-sm gap-2">
								<p>Don&apos;t have Account yet?</p>
								<Link
									href={"/signup"}
									className="text-green-400 underline hover:no-underline hover:text-green-300  "
								>
									SignUp
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LoginPage;
