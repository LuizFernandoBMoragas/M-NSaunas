"use client"

import { useEffect, useState } from "react";
import Link from 'next/link';
import { usePathname, useRouter } from "next/navigation";
import CartModal from "./CartModal";
import { useWixClient } from "@/hooks/useWixClient";
import Cookies from "js-cookie";
import { useCartStore } from "@/hooks/useCartStore";

const Navicons = () => {
    const [isProfileOpen, setProfileOpen] = useState(false);
    const [isCartOpen, setCartOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const wixClient = useWixClient();
    const isLoggedIn = wixClient.auth.loggedIn();

    const handleProfile = () => {
        if(!isLoggedIn){
            router.push('/login')
        }
        setProfileOpen((prev)=>!prev)
    };
    
    const handleLogout = async () => {
        setIsLoading(true);
        Cookies.remove("refreshToken");
        const { logoutUrl } = await wixClient.auth.logout(window.location.href);
        setIsLoading(false);
        setProfileOpen(false);
        router.push(logoutUrl);
    };

    const {cart, counter, getCart} = useCartStore();

    useEffect(()=>{
        getCart(wixClient);
    },[wixClient,getCart]);

    return (
        <div className='flex flex-row relative'>
            <div className='mr-4' onClick={handleProfile}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" color='rgb(254, 254, 254)' className="size-6 cursor-pointer hover:text-fireOrange">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
            </div>
            {isProfileOpen && 
                <div className="absolute p-4 rounded-md top-12 left-0 text-sm bg-fireOrange z=20 shadow-xl">
                    <Link href='/profile' className="text-logoWhite hover:text-black">Profile</Link>
                    <div className="mt-2 cursor-pointer text-logoWhite hover:text-black" onClick={handleLogout}>{isLoading ? "Logging out" : "Logout"}</div>
                </div>}


            <div className='mr-4 relative cursor-pointer' onClick={() => setCartOpen((prev) => !prev)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" color='rgb(254, 254, 254)' className="size-6 cursor-pointer hover:text-fireOrange">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-logoWhite rounded-full text-bgGray text-sm flex items-center justify-center">{counter}</div>
            </div>
            {isCartOpen && 
                <div className="">
                    <CartModal/>
                </div>}
        </div>
    );
};

export default Navicons;