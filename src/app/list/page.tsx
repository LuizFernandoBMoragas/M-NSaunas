import ProductList from '@/components/ProductList';
import { wixClientServer } from '@/lib/wixClientServer';
import { Suspense } from 'react';

const ListPage = async ({searchParams}:{searchParams:any}) => {
    const wixClient = await wixClientServer();
    const cat = await wixClient.collections.getCollectionBySlug(searchParams.cat || "all-products");

    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative bg-bgGray">
            <h1 className='pt-12 text-xl font-semibold text-logoWhite'>Saunas</h1>
            <Suspense fallback={"loading..."}>
                <ProductList categoryId={cat.collection?._id || "00000000-000000-000000-000000000001"} searchParams={searchParams}/>
            </Suspense>
        </div>
    );
};

export default ListPage;