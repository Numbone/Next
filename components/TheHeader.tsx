import Link from "next/link";
import React from "react";
import { IoLogoBitcoin } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";

const TheHeader = () => {
  return (
    <header className="flex space-x-6  px-1 bg-slate-300">
      <div className="w-full flex justify-between items-center py-3 container mx-auto">
        <IoLogoBitcoin className="w-8 h-8" />
        <div className="flex space-x-4 py-3">
          <Link className="font-sans" href="/">
            Home
          </Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
        </div>
        <div className="flex space-x-4">
          <div className="w-8 h-8">
            <AiOutlineUser className="w-full h-full" />
          </div>
          <div className="w-8 h-8">
            <AiOutlineSearch className="w-full h-full" />
          </div>
          <div className="w-8 h-8">
            <SlBasket className="w-full h-full" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TheHeader;
