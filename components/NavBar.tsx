"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { IoNotificationsOutline } from "react-icons/io5";
import { Menu } from "lucide-react";
import profilepic from "@/public/images/profilepic.jpg";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const NavBar = () => {
  const { data: session } = useSession();
  const [userName, setUserName] = useState(session?.user?.name || "");

  useEffect(() => {
    if (session?.user?.name) {
      setUserName(session.user.name[0].toUpperCase() + session.user.name.slice(1));
    }
  }, [session]);

  return (
    <header className="fixed top-0 z-50 w-full mb-2  bg-white dark:bg-[#282828] dark:text-white shadow-sm border-b">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 h-16">
        {/* Logo */}
        <Link href={"/"} className="flex items-center gap-2">
          <Image src="/logo.svg" alt="logo" width={30} height={30} />
          <p className="text-xl font-semibold">
            GreeNet<span className="text-green-500 text-2xl">.</span>
          </p>
        </Link >

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 font-semibold">
          <Link href="/">Home</Link>
          <Link href="#feature">Feature</Link>
          <Link href="#howitwork">How it work</Link>
          <Link href="#testimoney">Testimoney</Link>
          <Link href="#pricing">Pricing</Link>
        </nav>

        {/* Auth / Profile (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          {session ? (
            <div className="flex items-center gap-3">
              <IoNotificationsOutline className="text-2xl text-green-500" />
              <Separator orientation="vertical" className="h-8 bg-green-500" />
              <Avatar>
                <AvatarImage
                  src={session.user.image || profilepic.src}
                  alt="profile"
                />
                <AvatarFallback>{userName[0]}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <p className="font-semibold text-sm">{userName}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {session.user.email}
                </p>
              </div>
            </div>
          ) : (
            <>
              <Button asChild variant="outline" className="text-green-500 border-green-500">
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild className="bg-green-500 hover:bg-green-600">
                <Link href="/signup">SignUp</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6 text-green-600" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <div className="mb-6 mt-4">
                <p className="text-xl font-semibold">
                  GreeNet<span className="text-green-500 text-2xl">.</span>
                </p>
              </div>
              <nav className="flex flex-col gap-4 font-semibold">
                <Link href="/" onClick={() => {}}>Home</Link>
                <Link href="#feature" onClick={() => {}}>Feature</Link>
                <Link href="#howitwork" onClick={() => {}}>How it work</Link>
                <Link href="#testimoney" onClick={() => {}}>Testimoney</Link>
                <Link href="#pricing" onClick={() => {}}>Pricing</Link>
              </nav>
              <Separator className="my-4" />
              {session ? (
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage
                      src={session.user.image || profilepic.src}
                      alt="profile"
                    />
                    <AvatarFallback>{userName[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <p className="font-semibold text-sm">{userName}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {session.user.email}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  <Button asChild variant="outline" className="text-green-500 border-green-500">
                    <Link href="/login">Login</Link>
                  </Button>
                  <Button asChild className="bg-green-500 hover:bg-green-600">
                    <Link href="/signup">SignUp</Link>
                  </Button>
                </div>
              )}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
