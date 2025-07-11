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
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({});
  const router = useRouter();

  const validateEmail = (email: string) =>
    /\S+@\S+\.\S+/.test(email.trim());

  const handleShowPwd = () => {
    setShowPwd(!showPwd);
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signIn("google", { callbackUrl: "/personalization" });
      if (result?.error) {
        toast.error("Google sign-in failed: " + result.error);
      }
    } catch (error) {
      console.error("Google sign-in error:", error);
      toast.error("Google sign-in error. Please try again.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { [key: string]: string } = {};

    if (!email.trim()) errors.email = "Email is required.";
    else if (!validateEmail(email)) errors.email = "Invalid email format.";
    if (!password) errors.password = "Password is required.";

    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (!result?.error) {
      toast.success("Login successful!");
      setTimeout(() => router.push("/personalization"), 1200);
    } else {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50 px-4">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex items-center rounded-xl bg-white shadow-lg border-2 border-gray-400 border-opacity-30 max-w-4xl w-full">
        {/* Image Section */}
        <div className="hidden md:block w-full max-w-[430px]">
          <Image
            src={person1}
            alt="person"
            width={430}
            height={550}
            className="object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="w-full max-w-[400px] px-8 py-6">
          <Link href="/" className="text-green-500 hover:text-green-600 block text-center mb-6">
            <p className="text-4xl font-semibold">GreeNet</p>
          </Link>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Email */}
            <div className="flex flex-col gap-1">
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

            {/* Password */}
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="text-sm">Password</label>
              <div className="relative">
                <input
                  id="password"
                  type={showPwd ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="text-sm p-2 w-full rounded-lg border border-gray-300"
                />
                <Image
                  src={showPwd ? hidePwd : viewPwd}
                  onClick={handleShowPwd}
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

            {/* Forgot password */}
            <div className="text-right">
              <button
                type="button"
                className="text-green-500 text-sm underline hover:text-green-400"
              >
                Forgot password?
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-green-500 text-white w-full p-2 rounded-lg hover:bg-green-400"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center justify-center gap-2 my-5">
            <div className="w-24 h-px bg-gray-300" />
            <span className="text-sm text-gray-500">OR</span>
            <div className="w-24 h-px bg-gray-300" />
          </div>

          {/* Social Buttons */}
          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={() => router.push("/phone-number")}
              className="flex items-center gap-2 justify-center bg-gray-800 text-white w-full p-2 rounded-lg hover:bg-gray-700"
            >
              <Image src={phone} alt="phone icon" width={20} height={20} />
              <span>Continue with Phone number</span>
            </button>

            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="flex items-center gap-2 justify-center border border-gray-400 w-full p-2 rounded-lg hover:bg-gray-100"
            >
              <Image src={google} alt="google icon" width={20} height={20} />
              <span>Continue with Google</span>
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="flex justify-center text-sm gap-2 mt-4">
            <span>Don&apos;t have an account?</span>
            <Link
              href="/signup"
              className="text-green-400 underline hover:text-green-300 hover:no-underline"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
