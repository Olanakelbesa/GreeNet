"use client";

import Image from "next/image";
import React, { useState } from "react";
import person2 from "@/public/images/person2.png";
import google from "@/public/images/google.png";
import phone from "@/public/images/call-calling.png";
import emailIcon from "@/public/icons/envelope-outlined-shape.png";
import user from "@/public/icons/user.png";
import viewPassword from "@/public/icons/view.png";
import hidePassword from "@/public/icons/hidden.png";
import Link from "next/link";
import { useRouter } from "next/navigation";

function SignUp() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [showPdw, setShowPdw] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setErrorMessage("");

		if (password != confirmPassword) {
			setErrorMessage("Passwords do not match!");
			return;
		}
		if (!name || !email || !password) {
			setErrorMessage("All fields are required.");
			return;
		}

		try {
			const result = await fetch("http://localhost:3000/api/auth/signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ name, email, password }),
			});

			const data = await result.json();

			if (result.ok) {
				alert("Account created successfully! Please log in.");
				router.push("/login");
			} else {
				setErrorMessage(data.message || "Signup failed. Please try again.");
			}
		} catch (e) {
			setErrorMessage("An unexpected error occurred. Please try again later.");
		}
	};

	const handlePdwShow = () => {
		setShowPdw(!showPdw);
	};

	return (
		<div className="flex justify-center items-center h-screen px-4 bg-gray-50 ">
			<div className="border-2 border-gray-400 shadow-lg border-opacity-30 flex flex-col md:flex-row items-center rounded-xl bg-gray-50 max-w-4xl w-full">
				<div className="w-full max-w-[430px]">
					<form onSubmit={handleSubmit} className="w-full py-6 px-6 md:px-8">
						<p className="text-center text-3xl md:text-4xl font-semibold">GreeNet</p>
						<div className="w-full mx-auto py-3">
							<div className="flex flex-col gap-4 pb-5">
								{/* Name Field */}
								<div className="flex flex-col gap-2">
									<label className="text-sm">Name</label>
									<div className="relative">
										<input
											type="text"
											onChange={(e) => setName(e.target.value)}
											placeholder="John Smith"
											className="text-sm p-2 w-full rounded-lg border border-gray-300"
										/>
										<Image
											src={user}
											alt="user icon"
											width={18}
											height={18}
											className="absolute right-3 top-3"
										/>
									</div>
								</div>

								{/* Email Field */}
								<div className="flex flex-col gap-2">
									<label className="text-sm">Email</label>
									<div className="relative">
										<input
											type="email"
											onChange={(e) => setEmail(e.target.value)}
											placeholder="example@gmail.com"
											className="text-sm p-2 w-full rounded-lg border border-gray-300"
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

								{/* Password Field */}
								<div className="flex flex-col gap-2">
									<label className="text-sm">Password</label>
									<div className="relative">
										<input
											type={showPdw ? "text" : "password"}
											onChange={(e) => setPassword(e.target.value)}
											placeholder="Password"
											className="text-sm p-2 w-full rounded-lg border border-gray-300"
										/>
										<Image
											src={showPdw ? hidePassword : viewPassword}
											onClick={handlePdwShow}
											alt="password icon"
											width={18}
											height={18}
											className="absolute right-3 top-3 cursor-pointer"
										/>
									</div>
								</div>

								{/* Confirm Password Field */}
								<div className="flex flex-col gap-2">
									<label className="text-sm">Confirm Password</label>
									<div className="relative">
										<input
											type={showPdw ? "text" : "password"}
											onChange={(e) => setConfirmPassword(e.target.value)}
											placeholder="Confirm Password"
											className="text-sm p-2 w-full rounded-lg border border-gray-300"
										/>
										<Image
											src={showPdw ? hidePassword : viewPassword}
											onClick={handlePdwShow}
											alt="password icon"
											width={18}
											height={18}
											className="absolute right-3 top-3 cursor-pointer"
										/>
									</div>
								</div>
							</div>

							{errorMessage && <p className="text-red-500 text-center pb-2">{errorMessage}</p>}

							<button type="submit" className="bg-green-500 text-white w-full p-2 rounded-lg text-md hover:bg-green-400">
								Sign Up
							</button>

							<div className="flex justify-center items-center pt-3 py-5">
								<div className="border-t-2 border-gray-400 w-24"></div>
								<p className="px-2 text-gray-500">OR</p>
								<div className="border-t-2 border-gray-400 w-24"></div>
							</div>

							{/* Social Login */}
							<div className="flex flex-col items-center gap-2 pt-3">
								<button className="flex items-center bg-gray-800 text-white w-full p-2 rounded-lg hover:bg-gray-700">
									<Image src={phone} alt="cell phone icon" width={20} height={20} className="ml-5" />
									<p className="text-center w-full">Continue with Phone</p>
								</button>
								<button className="flex items-center border border-gray-500 w-full p-2 rounded-lg hover:bg-gray-200">
									<Image src={google} alt="google icon" width={20} height={20} className="ml-5" />
									<p className="text-center w-full">Continue with Google</p>
								</button>

								<p className="text-sm">
									Already have an account?{" "}
									<Link href={"/login"} className="text-green-500 hover:underline">
										Log In
									</Link>
								</p>
							</div>
						</div>
					</form>
				</div>

				{/* Image Section */}
				<div className="hidden md:block md:shrink-0 ">
					<Image src={person2} alt="person" width={430} height={600} className="object-cover " />
				</div>
			</div>
		</div>
	);
}

export default SignUp;
