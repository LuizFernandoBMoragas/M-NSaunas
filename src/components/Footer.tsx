import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className="py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-bgGray text-sm pt-16">
            <div className="md:h-[0.5px] md:bg-text md:my-24"/>
            {/* TOP */}
            <div className="flex flex-col md:flex-row justify-between gap-24 h-full">
                {/* LEFT */}
                <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
                    <Link href="/">
                        <div className='text-2xl tracking-wide text-fireOrange font-serif pl-4 hover:text-logoWhite'>M&N SAUNAS</div>
                    </Link>
                    <p className='text-logoWhite'>137 Triq Edgar Bernanrd, Gzira, GZR 1707, Malta</p>
                    <span className='font-semibold text-logoWhite'>mnsaunas@gmail.com</span>
                    <span className='font-semibold text-logoWhite'>+359 896478666</span>
                    <div className='flex gap-2'>
                        <Image src='/fbbg.png' alt='' width={40} height={40} className=''/>
                        <Image src='/intbg.png' alt='' width={40} height={40}/>
                    </div>
                </div>
                {/* MID */}
                <div className="hidden lg:flex justify-around w-1/2">
                    <div className='flex flex-col gap-8 items-center'>
                        <h1 className='font-medium text-xl text-fireOrange font-serif'>SHOP</h1>
                        <div className='flex flex-col gap-6'>
                            <Link href='/list?cat=finnish-saunas' className='text-logoWhite hover:text-fireOrange'>Finnish Saunas</Link>
                            <Link href='/list?cat=infrared-saunas' className='text-logoWhite hover:text-fireOrange'>Infrared Saunas</Link>
                            <Link href='/list?cat=mixed-infrared-finnish' className='text-logoWhite hover:text-fireOrange'>Mixed Saunas</Link>
                        </div>
                    </div>
                    <div className='flex flex-col gap-8 items-center'>
                        <h1 className='font-medium text-xl text-fireOrange font-serif'>COMPANY</h1>
                        <div className='flex flex-col gap-6'>
                            <Link href='/' className='text-logoWhite hover:text-fireOrange'>About us</Link>
                            <Link href='/' className='text-logoWhite hover:text-fireOrange'>Contact us</Link>
                        </div>
                    </div>
                </div>
                {/* RIGHT */}
                <div className="w-full md:w-1/2 lg:w-1/4 md:flex flex-col gap-6 md:items-center">
                    <h1 className='font-medium text-xl text-fireOrange font-serif pl-4'>SECURE PAYMENTS</h1>
                    <div className='flex md:flex-col justify-normal gap-4 md:justify-normal md:gap-4 lg:items-center'>
                        <Image src='/revolut.png' alt='' width={60} height={30}/>
                        <Image src='/paypal.png' alt='' width={60} height={30}/>
                        <Image src='/mastercard.png' alt='' width={60} height={30}/>
                        <Image src='/visa.png' alt='' width={60} height={30}/>
                    </div>
                </div>
            </div>
            {/* BOTTOM */}
            <div className="flex flex-col items-center justify-between gap-8 mt-24">
                <div className='text-logoWhite font-thin'>© 2024 M&N Saunas</div>
            </div>
        </div>
    );
};

export default Footer;