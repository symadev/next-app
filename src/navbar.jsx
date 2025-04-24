"use client";


import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


export default function NavBar() {
    const pathname = usePathname()
    console.log(pathname, pathname.includes("dashboard"));
    //console.log a jdi true show kore taile amra dashboard path take user-dashboard ar jaigai path hishabe set korte pari
    // now we can conditionally render the navbar
    if (!pathname.includes("dashboard")) {
        return (
            <div className='flex justify-center p-4'>
                <nav className='w-full max-w-md'>
                    <ul className='flex justify-between text-lg font-medium'>
                        <Link href="/">
                            <li>Home</li></Link>

                        <Link href="/posts">
                            <li>Posts</li></Link>

                        <Link href="/about">
                            <li>about</li></Link>

                    </ul>
                </nav>
            </div>
        )

    } else {
        return <></>
    }

}
