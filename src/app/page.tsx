import ProductList from '@/components/ProductList';
import CategoryList from '@/components/CategoriesList';
import MainImg from '@/components/MainImg';

const HomePage = () => {
  return (
    <>
    <MainImg/>
    <div className='p-20 px-4 bg-bgGray'>
        <h1 className='text-2xl text-logoWhite pl-4'>Categories</h1>
        <CategoryList/>
    </div>
    <div className='p-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-bgGray'>
        <h1 className='text-2xl text-logoWhite lg:pl-0'>Featured Products</h1>
        <ProductList/>
    </div>
    </>
  )
}

export default HomePage;