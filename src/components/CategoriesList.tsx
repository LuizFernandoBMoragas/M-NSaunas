import Link from 'next/link';
import Image from 'next/image';
import { wixClientServer } from '@/lib/wixClientServer';

const CategoryList = async () => {

    const wixClient = await wixClientServer();
    const cats = await wixClient.collections.queryCollections().find();

    return (
        <div className="mt-12 px-4 overflow-x-scroll scrollbar-hide">
            <div className="flex gap-2 md:gap-10">
                {cats.items.map(item=>(
                    <Link 
                    href={`/list?cat=${item.slug}`} 
                    className='flex-shrink-0 w-full sm:w-1/2 lg:w-[31%]' 
                    key={item._id}>
                        <div className='relative bg-slate-100 w-full h-96'>
                        <Image 
                        src={item.media?.mainMedia?.image?.url || "cat.png"} 
                        alt='' 
                        fill 
                        sizes='20vw' 
                        className='object-cover rounded-md'/>
                        </div>
                        <h1 className='mt-8 font-light text-cl tracking-wide text-logoWhite'>{item.name}</h1>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategoryList;