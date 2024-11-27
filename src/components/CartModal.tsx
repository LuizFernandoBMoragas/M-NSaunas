"use client"

import Image from 'next/image';

const CartModal = () => {

    const cartItems = true;

    return (
        <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-fireOrange top-12 right-0 felx flex-col gap-6 z-20 text-logoWhite">
            {!cartItems ? (
                <div className="">Cart is Empty</div>
            ) : (
                <>
                <h2 className='text-xl'>Shopping Cart</h2>
                {/* List */}
                <div className='flex flex-col mt-4 gap-8'>
                    {/* ITEM */}
                    <div className="flex gap-4">
                        <Image src='https://images.pexels.com/photos/15857058/pexels-photo-15857058/free-photo-of-de-madeira-fogao-forno-estufa.jpeg?auto=compress&cs=tinysrgb&w=800' alt='' width={72} height={97} className='object-cover rounded'/>
                        <div className='flex flex-col justify-between w-full'>
                            {/* TOP */}
                            <div className=''>
                                {/* TITTLE */}
                                <div className='flex items-center justify-between gap-8'>
                                    <h3 className='font-semibold'>Product Name</h3>
                                    <div className='p-1 bg-deeperFireOrange rounded-sm'>$49,99</div>
                                </div>
                                {/* DESCRIPTION */}
                                <div className='text-sm text-bgGray'>
                                    Available
                                </div>
                            </div>
                            {/* BOTTOM */}
                            <div className='flex justify-between text-sm'>
                                <span className='text-bgGray'>Qty. 2</span>
                                <span className='text-blue hover:cursor-pointer'>Remove</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <Image src='https://images.pexels.com/photos/15857058/pexels-photo-15857058/free-photo-of-de-madeira-fogao-forno-estufa.jpeg?auto=compress&cs=tinysrgb&w=800' alt='' width={72} height={97} className='object-cover rounded'/>
                        <div className='flex flex-col justify-between w-full'>
                            {/* TOP */}
                            <div className=''>
                                {/* TITTLE */}
                                <div className='flex items-center justify-between gap-8'>
                                    <h3 className='font-semibold'>Product Name</h3>
                                    <div className='p-1 bg-deeperFireOrange rounded-sm'>$49,99</div>
                                </div>
                                {/* DESCRIPTION */}
                                <div className='text-sm text-bgGray'>
                                    Available
                                </div>
                            </div>
                            {/* BOTTOM */}
                            <div className='flex justify-between text-sm'>
                                <span className='text-bgGray'>Qty. 2</span>
                                <span className='text-blue hover:cursor-pointer'>Remove</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Bottom */}
                <div className=''>
                    <div className='flex items-center justify-between font-semibold mt-4'>
                        <div className=''>Subtotal</div>
                        <div className=''>$49</div>
                    </div>
                    <p className='text-bgGray text-sm font-normal mt-2 mb-4'>Don't worry about Shipping and Taxes. It's on us!</p>
                    <div className='flex justify-between text-sm'>
                        <button className='rounded-md py-3 px-4 ring-1 ring-bgGray hover:font-semibold shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>View Cart</button>
                        <button className='rounded-md py-3 px-4 bg-black hover:font-semibold shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>Checkout</button>
                    </div>
                </div>
            </>
            )}
        </div>
    );
};

export default CartModal;