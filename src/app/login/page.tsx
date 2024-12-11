"use client"

import { useWixClient } from "@/hooks/useWixClient";
import { useState } from "react";

enum MODE{
    LOGIN= "LOGIN",
    REGISTER= "REGISTER",
    RESET_PASSWORD= "RESET_PASSWPRD",
    EMAIL_VERIFICATION= "EMAIL_VERIFICATION"
}

const LoginPage = () => {
    const [mode, setMode] = useState(MODE.LOGIN);  

    const [userame, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailCode, setEmailCode] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    const formTitle = 
    mode===MODE.LOGIN 
    ? "Log in" : mode===MODE.REGISTER 
    ? "Register" : mode===MODE.RESET_PASSWORD 
    ? "Reset Your Password" 
    :  "Email Your Verification";
    
    const buttonTitle = 
    mode===MODE.LOGIN 
    ? "Login" : mode===MODE.REGISTER 
    ? "Register" : mode===MODE.RESET_PASSWORD 
    ? "Reset" 
    :  "Verify";

    const wixClient = useWixClient();

    return (
        <>
        <div className="h-[calc(100vh-80px)] pt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex justify-center bg-bgGray">
            <form className="flex flex-col gap-8 w-[calc(100vw-100px)] md:w-1/3 lg:w-1/4">
                <h1 className="text-2xl font-semibold text-text">{formTitle}</h1>
                {mode===MODE.REGISTER ? (
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-logoWhite">Username</label>
                        <input type="text" name="username" placeholder="John" className="ring-2 ring-fireOrange rounded-md p-4"/>
                    </div>
                ) : null}
                {mode !==MODE.EMAIL_VERIFICATION ? (
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-logoWhite">E-mail</label>
                        <input type="email" name="email" placeholder="john@gmail.com" className="ring-2 ring-fireOrange rounded-md p-4"/>
                    </div>
                ) :
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-logoWhite">Verification Code</label>
                        <input type="text" name="emailCode" placeholder="Code" className="ring-2 ring-fireOrange rounded-md p-4"/>
                    </div> 
                }
                {mode === MODE.LOGIN || mode === MODE.REGISTER ? (
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-logoWhite">Password</label>
                        <input type="password" name="password" placeholder="Enter your password" className="ring-2 ring-fireOrange rounded-md p-4"/>
                    </div>
                ) : null}
                <button 
                className='rounded-2xl ring-1 ring-fireOrange py-2 px-4 w-full text-md hover:bg-deeperFireOrange hover:text-logoWhite text-logoWhite disabled:bg-disabledOrange disabled:text-Gray500 disabled:cursor-not-allowed' 
                disabled={isLoading}
                >
                    {isLoading ? "Loading..." : buttonTitle}
                </button>
                {error && <div className="text-errorRed">{error}</div>}

            </form>
        </div>
        <div className="h-[0.5px] bg-text"/>
        </>
    );
};

export default LoginPage;