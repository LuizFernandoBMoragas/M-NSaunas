"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";


const Pagination = ({currentPage, hasPrev, hasNext}:{currentPage:number; hasPrev:boolean; hasNext:boolean}) => {
    const pathName = usePathname();
    const searchParams = useSearchParams();
    const { replace } = useRouter();

    const createPageUrl = (pageNumber:number) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", pageNumber.toString());
        replace(`${pathName}?${params.toString()}`);
    };

    return (
        <div className="mt-36 flex justify-between w-full">
            <button 
            className="rounded-md bg-fireOrange text-logoWhite text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-disabledOrange disabled:text-Gray500" 
            disabled={!hasPrev}
            onClick={()=>createPageUrl(currentPage-1)}
            >
            Previous
            </button>
            <button 
            className="rounded-md bg-fireOrange text-logoWhite text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-disabledOrange disabled:text-Gray500" 
            disabled={!hasNext}
            onClick={()=>createPageUrl(currentPage+1)}
            >
            Next
            </button>
        </div>
    );
};

export default Pagination;