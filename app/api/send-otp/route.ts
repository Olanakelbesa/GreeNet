import { NextRequest, NextResponse } from 'next/server';
import twilio from 'twilio';
import { connectToDB } from '../../../lib/mongodb'; // Import the DB connection function
import User from '../../../models/User'; // Import the User model

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

async function sendOtpToPhone(phoneNumber: string, otp: string) {
  await client.messages.create({
    body: `Your OTP is: ${otp}`,
    from: process.env.TWILIO_PHONE_NUMBER as string,
    to: phoneNumber,
  });
}

export async function POST(req: NextRequest) {
  try {
    const { phoneNumber } = await req.json();
    const otp = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP

    // Connect to MongoDB
    await connectToDB();

    // Store OTP in the database, upserting by phoneNumber
    await User.updateOne(
      { phoneNumber },
      { $set: { otp: otp.toString(), verified: false } },
      { upsert: true }
    );

    // Send OTP via SMS using Twilio
    await sendOtpToPhone(phoneNumber, otp.toString());

    return NextResponse.json({ message: 'OTP sent successfully' });
  } catch (error) {
    console.error('Error sending OTP:', error);
    return NextResponse.json({ error: 'Error sending OTP' }, { status: 500 });
  }
}
