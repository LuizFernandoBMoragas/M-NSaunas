import ProductsImages from "@/components/ProductsImages";
import Add from '@/components/Add';
import { wixClientServer } from "@/lib/wixClientServer";
import { notFound } from "next/navigation";
import DOMPurify from "isomorphic-dompurify";
import { Suspense } from "react";
import SafeHTML from "@/components/SafeHTML";

const SinglePage = async ({params}:{params:{slug: string}}) => {

    const wixClient = await wixClientServer();
    const products = await wixClient.products
    .queryProducts()
    .eq("slug", params.slug)
    .find();

    if(!products.items[0]){
        return notFound();
    };

    const product = products.items[0];

    return (
        <div className="px-4 pt-12 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative bg-bgGray flex flex-col lg:flex-row gap-16">
            {/* IMG */}
            <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
                <ProductsImages items={product.media?.items}/>
            </div>
            {/* TEXT */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <h1 className="text-4xl text-logoWhite font-normal">{product.name}</h1>
                <span
                className="text-logoWhite font-thin"
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(product.description || "") }}
                />
                <div className="h-[0.5px] bg-text"/>
                    {product.price?.price === product.price?.discountedPrice ? 
                    (<h2 className="text-text font-medium text-2xl">€{product.price?.discountedPrice}</h2>) : (
                        <div className="flex items-center gap-4">
                            <h3 className="text-text text-xl line-through">€{product.price?.price}</h3> 
                        </div>
                    )}
                <div className="h-[0.5px] bg-text"/>
                <Add/>
                <div className="h-[0.5px] bg-text"/>
                {product.additionalInfoSections?.map((section: any) => (
                    <div className="text-sm text-text" key={section.title} >
                        <h4 className="font-medium mb-4">{section.title}</h4>
                        <Suspense fallback={<div>Loading section...</div>}>
                            <SafeHTML html={section.description} />
                        </Suspense>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SinglePage;