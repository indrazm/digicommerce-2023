import Image from "next/image";
import { ChevronRight, Eye, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { trimString } from "@/lib/modifier/stringTrimmer";

export const ProductCard = ({ name, price, featuredImage, slug }) => {
  return (
    <div className="rounded-2xl overflow-hidden bg-black">
      <div className="relative cursor-pointer w-full h-[300px] lg:h-[320px] xl:h-[240px]">
        <div className="opacity-0 text-secondary-200 hover:opacity-100 absolute z-10 w-full h-full flex gap-4 justify-center items-center bg-black/50 backdrop-blur-xl transition duration-200">
          <Link href={`/products/${slug}`}>
            <Eye size={32} className="cursor-pointer hover:text-secondary-50" />
          </Link>
          <ShoppingBag size={32} className="cursor-pointer hover:text-secondary-50" />
        </div>
        <Image src={featuredImage} fill className="object-cover" />
      </div>
      <div className="bg-black/40 p-4">
        <div className="flex justify-between">
          <div>{trimString(name, 27)}</div>
          <div>${price}</div>
        </div>
        {/* <div className="flex gap-2 items-center">
          <div>Author</div>
          <ChevronRight size={16} strokeWidth={3} />
          <div>Category</div>
        </div> */}
      </div>
    </div>
  );
};
