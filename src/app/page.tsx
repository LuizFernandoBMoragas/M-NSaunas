import Image from 'next/image';

const HomePage = () => {
  return (
    
    <div className='h-[calc(100vh-80px)] overflow-hidden relative'>
      <div className='w-max h-full flex md:hidden'>
        <Image src='/your_wellness_comes_first_vert.png' alt='' fill/>
      </div>
      <div className='w-max h-full hidden md:flex'>
        <Image src='/your_wellness_comes_first_hor.png' alt='' fill/>
      </div>
    </div>
  )
}

export default HomePage;