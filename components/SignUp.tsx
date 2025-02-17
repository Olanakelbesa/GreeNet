"use client"

import Image from "next/image";
import React, { useState } from "react";
import person2 from "@/public/images/person2.png";
import google from "@/public/images/google.png";
import phone from "@/public/images/call-calling.png";
import emailIcon from "@/public/icons/envelope-outlined-shape.png"
import user from "@/public/icons/user.png";
import viewPassword from "@/public/icons/view.png";
import hidePassword from "@/public/icons/hidden.png";
import Link from "next/link";

function SignUp() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [showPdw, setShowPdw] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if(password != confirmPassword) {
			alert("Passwords do not match!");
			return;
		}

		const result = await fetch("http://localhost:3000/api/auth/signup", {
			method: "Post",
			headers: {"Constent-Type": "application/json"},
			body: JSON.stringify({name, email, password}),
		});

		const data = await result.json();
		 
		console.log(data);

		if(result.ok){
			alert("Account created successfully! Pleasse log in.");
			window.location.href = "/login";
		} else {
			alert(`Signup failed : ${data.message}`);
		}
	}

	const handlePdwShow = () =>{
		setShowPdw(!showPdw);
	}

	return (
		<div className="flex justify-center items-center h-screen ">
			<div className="w-[60%] border-2 border-solid border-gray-400 border-opacity-30 flex items-center rounded-xl bg-gray-50 ">
				<div className="w-[500px]">
					<form onSubmit={handleSubmit} className="w-full pl-10 p-8">
						<p className="text-center text-4xl">GreeNet</p>
						<div className="w-full mx-auto">
							<div className="flex flex-col gap-3 pb-5">
								<div className="flex flex-col gap-2">
									<label htmlFor="" className="text-sm">
										Name
									</label>
									<div className="relative">
										<input
											type="text"
											onChange={(e) => setName(e.target.value)}
											placeholder="John Smith"
											className=" text-sm p-2 w-full rounded-lg border-2 border-solid border-gray-400 border-opacity-20"
										/>
										<Image
											src={user}
											alt="email icon"
											width={18}
											height={18}
											className="absolute right-3 top-3"
										/>
									</div>
								</div>
								<div className="flex flex-col gap-2">
									<label htmlFor="" className="text-sm">
										Email
									</label>
									<div className="relative">
										<input
											type="email"
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
											type={showPdw? "text" : "password"}
											onChange={(e) => setPassword(e.target.value)}
											placeholder="password"
											className=" text-sm p-2 w-full rounded-lg border-2 border-solid border-gray-400 border-opacity-20"
										/>
										<Image
											src={showPdw? hidePassword : viewPassword}
											onClick={handlePdwShow}
											alt="password icon"
											width={18}
											height={18}
											className="absolute right-3 top-3"
										/>
									</div>
								</div>
								<div className="flex flex-col gap-2">
									<label htmlFor="" className="text-sm">
										Confirm
									</label>
									<div className="relative">
										<input
											type={showPdw? "text" : "password"}
											onChange={(e) => setConfirmPassword(e.target.value)}
											placeholder="confirm"
											className=" text-sm p-2 w-full rounded-lg border-2 border-solid border-gray-400 border-opacity-20"
										/>
										<Image
											src={showPdw? hidePassword : viewPassword}
											onClick={handlePdwShow}
											alt="password icon"
											width={18}
											height={18}
											className="absolute right-3 top-3"
										/>
									</div>
								</div>
							</div>

							<button type="submit" className="bg-green-500 text-white w-full p-2 rounded-lg text-md  hover:bg-green-400">
								SignUp
							</button>
							<div className="flex justify-center items-center pt-3 py-5">
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
									<p className="text-center w-full">
										Continue with Phone number
									</p>
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
									<p>Already have an Account yet?</p>
									<Link
										href={"/login"}
										className="text-green-400 underline hover:no-underline hover:text-green-300  "
									>
										LogIn
									</Link>
								</div>
							</div>
						</div>
					</form>
				</div>
				<div className=" flex justify-end">
					<Image
						src={person2}
						alt="person"
						width={430}
						height={600}
						className="p-3"
					/>
				</div>
			</div>
		</div>
	);
}

export default SignUp;
