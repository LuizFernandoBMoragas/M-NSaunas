import Image from 'next/image';

const MainImg = () => {
    return(
        <div className='h-[calc(100vh-80px)] overflow-hidden relative'>
            <div className='w-max h-full flex md:hidden'>
                {/* <Image src='/your_wellness_comes_first_vert.png' alt='' fill/> */}
                <Image src='/wellnessvert.png' alt='' fill/>
            </div>
            <div className='w-max h-full hidden md:flex'>
                {/* <Image src='/your_wellness_comes_first_hor.png' alt='' fill/> */}
                {/* <Image src='/wellnesfirst.png' alt='' fill/> */}
                <Image src='/wellnesshoriz.png' alt='' fill/>
            </div>
        </div>
    );
};

export default MainImg;