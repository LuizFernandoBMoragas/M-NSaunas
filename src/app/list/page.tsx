import ProductList from '@/components/ProductList';

const ListPage = () => {
    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative bg-bgGray">
            <h1 className='pt-12 text-xl font-semibold text-logoWhite'>Saunas</h1>
            <ProductList/>
        </div>
    );
};

export default ListPage;