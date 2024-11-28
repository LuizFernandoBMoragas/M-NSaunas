import ProductList from '@/components/ProductList';
import MainImg from '@/components/MainImg';



const HomePage = () => {
  return (
    <>
    <MainImg/>
    <div className='mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
        <h1 className='text-2xl'>Featured Products</h1>
        <ProductList/>
    </div>
    </>
  )
}

export default HomePage;