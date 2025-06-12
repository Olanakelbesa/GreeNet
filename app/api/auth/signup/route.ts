import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import {connectToDB} from "@/lib/mongodb";
import User from "@/models/User"

export async function POST(req: Request) {
    try{
        const {name, email, password} = await req.json();
        const hashedPassword = await bcrypt.hash(password, 10);

        await connectToDB();

        const existingUser = await User.findOne({email});
        if(existingUser) return NextResponse.json({message: "Email already exist"}, {status: 400});

        const newUser = new User({name, email, password: hashedPassword});
        await newUser.save();

        return NextResponse.json({message: "User created successfully"}, {status: 201});

    } catch(e) {
        const error = e as Error;
        return NextResponse.json({message: error.message}, {status: 500});
    }
}