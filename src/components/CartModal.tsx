"use client"

import { useCartStore } from '@/hooks/useCartStore';
import Image from 'next/image';
import {media as wixMedia} from '@wix/sdk';
import { useWixClient } from '@/hooks/useWixClient';
import { currentCart } from "@wix/ecom";
import { redirects } from "@wix/redirects";

const CartModal = () => {
    //TEMPORARY
    // const cartItems = true;

    const wixClient = useWixClient();
    const { cart, isLoading, removeItem } = useCartStore();

    const handleCheckout = async () => {
        try {
          const checkout =
            await wixClient.currentCart.createCheckoutFromCurrentCart({
              channelType: currentCart.ChannelType.WEB,
            });
    
          const { redirectSession } =
            await redirects.createRedirectSession({
              ecomCheckout: { checkoutId: checkout.checkoutId },
              callbacks: {
                postFlowUrl: window.location.origin,
                thankYouPageUrl: `${window.location.origin}/success`,
              },
            });
    
          if (redirectSession?.fullUrl) {
            window.location.href = redirectSession.fullUrl;
          }
        } catch (err) {
          console.log(err);
        }
      };

    return (
        <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-fireOrange top-12 right-0 felx flex-col gap-6 z-20 text-logoWhite">
            {!cart.lineItems ? (
                <div className="">Cart is Empty</div>
            ) : (
                <>
                <h2 className='text-xl'>Shopping Cart</h2>
                {/* List */}
                <div className='flex flex-col mt-4 gap-8'>
                    {/* ITEM */}
                    {cart.lineItems.map(item=>( 
                        <div className="flex gap-4" key={item._id}>
                            {item.image && <Image src={wixMedia.getScaledToFillImageUrl(item.image,72,96,{})} alt='' width={72} height={97} className='object-cover rounded'/>}
                            <div className='flex flex-col justify-between w-full'>
                                {/* TOP */}
                                <div className=''>
                                    {/* TITTLE */}
                                    <div className='flex items-center justify-between gap-8'>
                                        <h3 className='font-semibold'>{item.productName?.original}</h3>
                                        <div className='p-1 bg-deeperFireOrange rounded-sm flex items-center gap-2'>
                                            {item.quantity && item.quantity > 1 && (
                                            <div className="text-xs text-green-500">
                                                {item.quantity} x{" "}
                                            </div>
                                            )} €{item.price?.amount}</div>
                                        </div>
                                    {/* DESCRIPTION */}
                                    <div className='text-sm text-bgGray'>
                                        {item.availability?.status}
                                    </div>
                                </div>
                                {/* BOTTOM */}
                                <div className='flex justify-between text-sm'>
                                    <span className='text-bgGray'>Qty. {item.quantity}</span>
                                    <span className='text-blue' style={{cursor:isLoading ? "not-allowed" : "pointer"}} onClick={()=>removeItem(wixClient,item._id!)}>Remove</span>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
                {/* Bottom */}
                <div className=''>
                    <div className='flex items-center justify-between font-semibold mt-4'>
                        <div className=''>Subtotal</div>
                        <div className=''>€{cart.subtotal.amount}</div>
                    </div>
                    <p className='text-bgGray text-sm font-normal mt-2 mb-4'></p>
                    <div className='flex justify-between text-sm gap-2'>
                        <button className='rounded-md py-3 px-4 ring-1 ring-bgGray hover:font-semibold shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>View Cart</button>
                        <button 
                        className='rounded-md py-3 px-4 bg-black hover:font-semibold shadow-[0_3px_10px_rgb(0,0,0,0.2)] disabled:cursor-not-allowed disabled:opacity-75' 
                        disabled={isLoading}
                        onClick={handleCheckout}
                        >Checkout</button>
                    </div>
                </div>
            </>
            )}
        </div>
    );
};

export default CartModal;