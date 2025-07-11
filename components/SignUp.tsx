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
import { Toaster, toast } from "react-hot-toast";
import { signIn } from "next-auth/react";

interface SignUpResponse {
  message: string;
}

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({});
  const router = useRouter();

  const validateEmail = (email: string) =>
    /\S+@\S+\.\S+/.test(email.trim());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { [key: string]: string } = {};

    if (!name.trim()) errors.name = "Name is required.";
    if (!email.trim()) errors.email = "Email is required.";
    else if (!validateEmail(email)) errors.email = "Invalid email format.";
    if (!password) errors.password = "Password is required.";
    if (!confirmPassword)
      errors.confirmPassword = "Confirm password is required.";
    if (password && confirmPassword && password !== confirmPassword)
      errors.confirmPassword = "Passwords do not match!";

    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    try {
      const result = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = (await result.json()) as SignUpResponse;

      if (result.ok) {
        toast.success("Account created successfully! Please log in.");
        // Clear form
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setTimeout(() => router.push("/login"), 1500);
      } else {
        setFieldErrors({
          general: data.message || "Signup failed. Please try again.",
        });
        toast.error(data.message || "Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Signup error:", error);
      setFieldErrors({
        general: "An unexpected error occurred. Please try again later.",
      });
      toast.error("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen px-4 bg-gray-50">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="border-2 border-gray-400 shadow-lg border-opacity-30 flex flex-col md:flex-row items-center rounded-xl bg-white max-w-4xl w-full">
        <div className="w-full max-w-[430px]">
          <form onSubmit={handleSubmit} className="w-full py-6 px-6 md:px-8">
            <Link href="/" className="text-green-500 hover:text-green-600">
              <p className="text-center text-4xl">GreeNet</p>
            </Link>

            <div className="w-full mx-auto py-3">
              <div className="flex flex-col gap-4 pb-5">
                {/* Name Field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm">Name</label>
                  <div className="relative">
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Smith"
                      className="text-sm p-2 w-full rounded-lg border border-gray-300"
                    />
                    <Image
                      src={user}
                      alt="user icon"
                      width={18}
                      height={18}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    />
                  </div>
                  {fieldErrors.name && (
                    <p className="text-red-500 text-xs">{fieldErrors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm">Email</label>
                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="example@gmail.com"
                      className="text-sm p-2 w-full rounded-lg border border-gray-300"
                    />
                    <Image
                      src={emailIcon}
                      alt="email icon"
                      width={18}
                      height={18}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    />
                  </div>
                  {fieldErrors.email && (
                    <p className="text-red-500 text-xs">{fieldErrors.email}</p>
                  )}
                </div>

                {/* Password Field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="password" className="text-sm">Password</label>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      className="text-sm p-2 w-full rounded-lg border border-gray-300"
                    />
                    <Image
                      src={showPassword ? hidePassword : viewPassword}
                      onClick={() => setShowPassword(!showPassword)}
                      alt="toggle password"
                      width={18}
                      height={18}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    />
                  </div>
                  {fieldErrors.password && (
                    <p className="text-red-500 text-xs">{fieldErrors.password}</p>
                  )}
                </div>

                {/* Confirm Password Field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="confirmPassword" className="text-sm">Confirm Password</label>
                  <div className="relative">
                    <input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm Password"
                      className="text-sm p-2 w-full rounded-lg border border-gray-300"
                    />
                    <Image
                      src={showConfirmPassword ? hidePassword : viewPassword}
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      alt="toggle password"
                      width={18}
                      height={18}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    />
                  </div>
                  {fieldErrors.confirmPassword && (
                    <p className="text-red-500 text-xs">{fieldErrors.confirmPassword}</p>
                  )}
                </div>
              </div>

              {fieldErrors.general && (
                <p className="text-red-500 text-center pb-2">
                  {fieldErrors.general}
                </p>
              )}

              <button
                type="submit"
                className="bg-green-500 text-white w-full p-2 rounded-lg text-md hover:bg-green-400"
              >
                Sign Up
              </button>

              <div className="flex justify-center items-center pt-3 py-5">
                <div className="border-t-2 border-gray-400 w-24"></div>
                <p className="px-2 text-gray-500">OR</p>
                <div className="border-t-2 border-gray-400 w-24"></div>
              </div>

              {/* Social Login */}
              <div className="flex flex-col items-center gap-2 pt-3">
                <button
                  type="button"
                  className="flex items-center bg-gray-800 text-white w-full p-2 rounded-lg hover:bg-gray-700 gap-2 justify-center"
                >
                  <Image src={phone} alt="phone icon" width={20} height={20} />
                  <span>Continue with Phone</span>
                </button>

                <button
                  type="button"
                  onClick={() => signIn("google", {callbackUrl: "/personalization"})}
                  className="flex items-center border border-gray-500 w-full p-2 rounded-lg hover:bg-gray-200 gap-2 justify-center"
                >
                  <Image src={google} alt="google icon" width={20} height={20} />
                  <span>Continue with Google</span>
                </button>

                <p className="text-sm">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="text-green-500 hover:underline"
                  >
                    Log In
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>

        {/* Image Section */}
        <div className="hidden md:block md:shrink-0">
          <Image
            src={person2}
            alt="person illustration"
            width={430}
            height={600}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
