import ProductsImages from "@/components/ProductsImages";
import Add from '@/components/Add';

const SinglePage = () => {
    return (
        <div className="px-4 pt-12 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative bg-bgGray flex flex-col lg:flex-row gap-16">
            {/* IMG */}
            <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
                <ProductsImages/>
            </div>
            {/* TEXT */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <h1 className="text-4xl text-logoWhite font-normal">Product Name</h1>
                <span className="text-logoWhite font-thin">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, ex voluptas aperiam commodi corruptiea molestias minima!</span>
                <div className="h-[0.5px] bg-text"/>
                <div className="flex items-center gap-4">
                    <h3 className="text-text text-xl line-through">$3500,00</h3>
                    <h2 className="text-text font-medium text-2xl">$2999,00</h2>
                </div>
                <div className="h-[0.5px] bg-text"/>
                <Add/>
                <div className="h-[0.5px] bg-text"/>
                <div className="text-sm text-text">
                    <h4 className="font-medium mb-4">Title</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, soluta fugit sunt beatae distinctio ullam reiciendis hic autem ea! Nobis, deleniti corrupti non earum ducimus facere atque obcaecati! Quisquam, vitae.</p>
                </div>
                <div className="text-sm text-text">
                    <h4 className="font-medium mb-4">Title</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, soluta fugit sunt beatae distinctio ullam reiciendis hic autem ea! Nobis, deleniti corrupti non earum ducimus facere atque obcaecati! Quisquam, vitae.</p>
                </div>
                <div className="text-sm text-text">
                    <h4 className="font-medium mb-4">Title</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, soluta fugit sunt beatae distinctio ullam reiciendis hic autem ea! Nobis, deleniti corrupti non earum ducimus facere atque obcaecati! Quisquam, vitae.</p>
                </div>
            </div>
        </div>
    );
};

export default SinglePage;
