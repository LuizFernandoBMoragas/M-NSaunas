"use client" 

import { useCartStore } from "@/hooks/useCartStore";
import { useWixClient } from "@/hooks/useWixClient";
import { useState } from "react";

const Add = ({productId, variantId, stockNumber}:{productId:string; variantId:string; stockNumber:number}) => {
    const [amount, setAmount] = useState(1);

    // TEMPORARY
    // const stock = 2;

    const handleAmount = (type: 'i' | 'd' ) => {
        if(type==='d' && amount > 1){
            setAmount((prev) => prev -1);
        }
        if(type==='i' && amount < stockNumber){
            setAmount((prev) => prev + 1);
        }
    };

    const wixClient = useWixClient();

    const {addItem, isLoading} = useCartStore();

    return (
        <div className="flex flex-col gap-4">
            <h4 className="text-text font-medium">Choose a Quantity</h4>
            <div className="flex justify-between">
                <div className="flex items-center gap-4">
                    <div className="bg-text py-2 px-4 rounded-3xl flex items-center justify-between w-32">
                        <button className="cursor-pointer text-xl" onClick={()=>handleAmount('d')}>-</button>
                        {amount}
                        <button className="cursor-pointer text-xl" onClick={()=>handleAmount('i')}>+</button>
                    </div>
                    {stockNumber<1 ? (<div className="text-text text-xs">Product is out of stock, your shipping might<br /> take up to 50 days.</div>) : (<div className="text-text text-xs">Only <span className="text-disabledOrange">{stockNumber} items</span> left! <br /> {"Don't"} miss it</div>)}
                </div>
                <button onClick={()=>addItem(wixClient,productId,variantId,amount)} disabled={isLoading} className="w-36 text-sm rounded-3xl ring-1 ring-fireOrange text-fireOrange py-2 px-4 hover:text-logoWhite hover:bg-fireOrange disabled:cursor-not-allowed disabled:text-text disabled:bg-disabledOrange disabled:ring-none">Add to Cart</button>
            </div>
        </div>
    );
};

export default Add;