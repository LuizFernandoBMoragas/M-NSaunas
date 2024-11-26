import Link from 'next/link';
import Menu from './Menu';
import Navicons from './Navicons';


const Navbar = () => {
    return (
        <div className="h-20 px-4 md:px-8 md:h-40 lg:px-16 xl:px-32 2xl:px-64 relative bg-bgGray border-b-2 border-text">
            <div className='h-full flex items-center justify-between'>
                {/* MOBILE */}
                <div className='flex flex-row md:hidden'>
                    <Menu/>
                    <Link href="/">
                        <div className='text-2xl tracking-wide text-logoWhite font-serif pl-4 hover:text-fireOrange'>M&N Saunas</div>
                    </Link>
                </div>
                <div className='md:hidden'>
                    <Navicons/>
                </div>
                {/* BIGGER SCREENS */}
                <div className='hidden md:flex flex-col w-full h-full items-center justify-evenly'>
                    <div className='flex flex-row w-full items-center justify-between pb-6'>
                        <div></div>
                        <div>
                            <Link href="/">
                            <div className='text-3xl tracking-wide text-logoWhite font-serif hover:text-fireOrange'>M&N Saunas</div>
                            </Link>
                        </div>
                        <Navicons/>
                    </div>
                    <div className="bg-bgGray text-text w-full flex flex-row items-center justify-evenly uppercase font-normal">
                        <Link href={'/'} className='hover:text-fireOrange'>Homepage</Link>
                        <Link href={'/'} className='hover:text-fireOrange'>Finnish Saunas</Link>
                        <Link href={'/'} className='hover:text-fireOrange'>Infrared Saunas</Link>
                        <Link href={'/'} className='hover:text-fireOrange'>Mixed Saunas</Link>
                        <Link href={'/'} className='hover:text-fireOrange'>About us</Link>
                        <Link href={'/'} className='hover:text-fireOrange'>Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;