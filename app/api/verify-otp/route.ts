import { NextRequest, NextResponse } from 'next/server';
import { connectToDB } from '../../../lib/mongodb';
import User from '../../../models/User';

export async function POST(req: NextRequest) {
  try {
    const { phoneNumber, otp } = await req.json();

    // Connect to MongoDB
    await connectToDB();

    // Find the user by phoneNumber and check OTP
    const user = await User.findOne({ phoneNumber });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Check if the OTP matches
    if (user.otp === otp) {
      // OTP is correct, mark user as verified
      await User.updateOne(
        { phoneNumber },
        { $set: { verified: true } }
      );

      return NextResponse.json({ message: 'Phone number verified successfully' });
    } else {
      return NextResponse.json({ error: 'Invalid OTP' }, { status: 400 });
    }
  } catch (error) {
    console.error('Error verifying OTP:', error);
    return NextResponse.json({ error: 'Error verifying OTP' }, { status: 500 });
  }
}
