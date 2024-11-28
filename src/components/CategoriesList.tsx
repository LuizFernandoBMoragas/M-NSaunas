import Link from 'next/link';
import Image from 'next/image';

const CategoryList = () => {
    return (
        <div className="mt-12 px-4 overflow-x-scroll scrollbar-hide">
            <div className="flex gap-4 md:gap-10">
                <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-[31%]'>
                    <div className='relative bg-slate-100 w-full h-96'>
                    <Image src='https://images.pexels.com/photos/15857058/pexels-photo-15857058/free-photo-of-de-madeira-fogao-forno-estufa.jpeg?auto=compress&cs=tinysrgb&w=800' alt='' fill sizes='20vw' className='object-cover'/>
                    </div>
                    <h1 className='mt-8 font-light text-cl tracking-wide text-logoWhite'>Category Name</h1>
                </Link>
                <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-[31%]'>
                    <div className='relative bg-slate-100 w-full h-96'>
                    <Image src='https://images.pexels.com/photos/15857058/pexels-photo-15857058/free-photo-of-de-madeira-fogao-forno-estufa.jpeg?auto=compress&cs=tinysrgb&w=800' alt='' fill sizes='20vw' className='object-cover'/>
                    </div>
                    <h1 className='mt-8 font-light text-cl tracking-wide text-logoWhite'>Category Name</h1>
                </Link>
                <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-[31%]'>
                    <div className='relative bg-slate-100 w-full h-96'>
                    <Image src='https://images.pexels.com/photos/15857058/pexels-photo-15857058/free-photo-of-de-madeira-fogao-forno-estufa.jpeg?auto=compress&cs=tinysrgb&w=800' alt='' fill sizes='20vw' className='object-cover'/>
                    </div>
                    <h1 className='mt-8 font-light text-cl tracking-wide text-logoWhite'>Category Name</h1>
                </Link>
                <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-[31%]'>
                    <div className='relative bg-slate-100 w-full h-96'>
                    <Image src='https://images.pexels.com/photos/15857058/pexels-photo-15857058/free-photo-of-de-madeira-fogao-forno-estufa.jpeg?auto=compress&cs=tinysrgb&w=800' alt='' fill sizes='20vw' className='object-cover'/>
                    </div>
                    <h1 className='mt-8 font-light text-cl tracking-wide text-logoWhite'>Category Name</h1>
                </Link>
            </div>
        </div>
    );
};

export default CategoryList;