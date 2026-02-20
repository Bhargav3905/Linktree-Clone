"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname(); // move here
    const showNavbar = ["/"].includes(pathname); // use pathname here

    if (!showNavbar) return null; // Hide navbar if not on desired path

    return (
        <nav className='bg-white flex w-[80vw] justify-between fixed top-10 right-[10vw] rounded-full p-5 px-7 '>
            <div className="logo flex align-items gap-20 items-center">
                <Link href="/">
                    <img
                        className="h-8 nav-desktop-logo"
                        loading="eager"
                        src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg"
                        alt=""
                    />
                </Link>
                <ul className='flex gap-10'>
                    <Link href="/"><li>Templates</li></Link>
                    <Link href="/"><li>Marketplace</li></Link>
                    <Link href="/"><li>Discover</li></Link>
                    <Link href="/"><li>Pricing</li></Link>
                    <Link href="/"><li>Learn</li></Link>
                </ul>
            </div>

            <div className='flex gap-3'>
                <button className="login bg-gray-400 p-4 rounded-lg font-bold">Log in</button>
                <button className="signup bg-gray-900 text-white p-4 rounded-full font-bold">Sign up Free</button>
            </div>
        </nav>
    );
};

export default Navbar;