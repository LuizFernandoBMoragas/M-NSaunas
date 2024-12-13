import Link from 'next/link';
import Image from 'next/image';
import { wixClientServer } from '@/lib/wixClientServer';
import { products } from '@wix/stores';
import DOMPurify from 'isomorphic-dompurify';
import Pagination from './Pagination';

const PRODUCT_PER_PAGE = 20;

const ProductList = async ({categoryId, limit, searchParams}:{categoryId:string;limit?:number;searchParams?:any}) => {

    const wixClient = await wixClientServer();
    const res = await wixClient.products
    .queryProducts()
    .eq("collectionIds", categoryId)
    .limit(limit || PRODUCT_PER_PAGE)
    .skip(searchParams?.page ? parseInt(searchParams.page) * (limit || PRODUCT_PER_PAGE) : 0)
    .find();

    return (
        <>
        <div className="mt-12 flex gap-x-4 gap-y-16 justify-between flex-wrap">
            {res.items.map((product:products.Product)=>(
                <Link href={'/'+product.slug} className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[25%]' key={product._id}>
                    <div className='relative w-full h-80'>
                        <Image src={product.media?.mainMedia?.image?.url || '/product.png'} 
                        alt='' 
                        fill 
                        sizes='25vw' 
                        className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'/>
                        {product.media?.items && 
                            <Image src={product.media?.items[1]?.image?.url || '/product.png'} 
                            alt='' 
                            fill 
                            sizes='25vw' 
                            className='rounded-md'/>
                        }
                    </div>
                    <div className='flex justify-between'>
                        <span className='font-medium text-logoWhite'>{product.name}</span>
                        <span className='font-semibold text-logoWhite'>€{product.price?.price}</span>
                    </div>
                    <button className='rounded-2xl ring-1 ring-fireOrange py-2 px-4 w-max text-sm hover:bg-deeperFireOrange hover:text-logoWhite text-logoWhite'>
                        Add to Cart
                    </button>
                </Link>
            ))}
        </div>
        {searchParams?.cat || searchParams?.name ? <Pagination currentPage={res.currentPage || 0} hasPrev={res.hasPrev()} hasNext={res.hasNext()} /> : null}
        </>
    );
};

export default ProductList;