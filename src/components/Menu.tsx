"use client"

import Image from "next/image";
import Link from "next/link"
import { useState } from "react";

const Menu = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="">
            <Image 
                src='/iconwhite-removebg-preview.png'  
                alt='' 
                width={34} 
                height={34} 
                className="cursor-pointer" 
                onClick={()=> setOpen(prev=>!prev)}
            />
            {
                open && (
                    <div className="absolute bg-bgGray text-text left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col pt-10 items-start pl-10 justify-items-start gap-12 uppercase font-thin">
                        <Link href={'/'} className='hover:text-fireOrange'>Homepage</Link>
                        <Link href={'/'} className='hover:text-fireOrange'>Finnish Saunas</Link>
                        <Link href={'/'} className='hover:text-fireOrange'>Infrared Saunas</Link>
                        <Link href={'/'} className='hover:text-fireOrange'>Mixed Saunas</Link>
                        <Link href={'/'} className='hover:text-fireOrange'>About us</Link>
                        <Link href={'/'} className='hover:text-fireOrange'>Contact</Link>
                    </div>
                )
            }
        </div>
    );
};




export default Menu;