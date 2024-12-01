"use client"

import Image from 'next/image';
import { useState } from 'react';

const images = [
    {
        id: 1, 
        url: 'https://images.pexels.com/photos/6667462/pexels-photo-6667462.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
        id: 2, 
        url: 'https://images.pexels.com/photos/6667174/pexels-photo-6667174.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
        id: 3, 
        url: 'https://images.pexels.com/photos/8285909/pexels-photo-8285909.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
        id: 4, 
        url: 'https://images.pexels.com/photos/6667423/pexels-photo-6667423.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
];

const ProductsImages = () => {
    const [index, setIndex] = useState(0)

    return (
        <div className="">
            <div className="h-[500px] relative">
                <Image 
                    src={images[index].url} 
                    alt='' 
                    fill 
                    sizes='50vw' 
                    className='object-cover rounded-md'
                    />
            </div>
            <div className="flex justify-between gap-8 mt-8">
                {images.map((img, i)=>(
                    <div className='w-1/4 h-32 relative gap-4 mt-8 cursor-pointer' key={img.id} onClick={()=>setIndex(i)}>
                        <Image 
                        src={img.url} 
                        alt='' 
                        fill 
                        sizes='30vw' 
                        className='object-cover rounded-md'
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsImages;