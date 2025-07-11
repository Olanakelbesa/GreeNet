"use client";

import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const PhoneNumberForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);

  const handlePhoneNumberSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!phoneNumber.trim()) {
      toast.error("Phone number is required.");
      return;
    }

    try {
      const response = await fetch("/api/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);
        setIsOtpSent(true);
      } else {
        toast.error(data.message || "Failed to send OTP.");
      }
    } catch (error) {
      console.error("Send OTP error:", error);
      toast.error("Something went wrong while sending OTP.");
    }
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!otp.trim()) {
      toast.error("OTP is required.");
      return;
    }

    try {
      const response = await fetch("/api/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber, otp }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);
      } else {
        toast.error(data.message || "OTP verification failed.");
      }
    } catch (error) {
      console.error("Verify OTP error:", error);
      toast.error("Something went wrong during verification.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-xl font-semibold mb-4 text-center">Phone OTP Login</h2>

        <form onSubmit={handlePhoneNumberSubmit} className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="e.g. +251912345678"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="mt-3 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
          >
            Send OTP
          </button>
        </form>

        {isOtpSent && (
          <form onSubmit={handleOtpSubmit}>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Enter OTP
            </label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <button
              type="submit"
              className="mt-3 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Verify OTP
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default PhoneNumberForm;
