'use client';

import { useState } from 'react';

const PhoneNumberForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);

  const handlePhoneNumberSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/send-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phoneNumber }),
    });

    const data = await response.json();
    setMessage(data.message);
    setIsOtpSent(true);
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/verify-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phoneNumber, otp }),
    });

    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <div>
      <form onSubmit={handlePhoneNumberSubmit}>
        <label>
          Phone Number:
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter your phone number"
          />
        </label>
        <button type="submit">Send OTP</button>
      </form>

      {isOtpSent && (
        <form onSubmit={handleOtpSubmit}>
          <label>
            OTP:
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
            />
          </label>
          <button type="submit">Verify OTP</button>
        </form>
      )}

      {message && <p>{message}</p>}
    </div>
  );
};

export default PhoneNumberForm;
