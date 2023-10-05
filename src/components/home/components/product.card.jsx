import Image from "next/image";
import { ChevronRight, Eye, ShoppingBag } from "lucide-react";

export const ProductCard = () => {
  return (
    <div className="rounded-2xl overflow-hidden bg-black">
      <div className="relative cursor-pointer w-full h-[240px]  ">
        <div className="opacity-0 text-secondary-200 hover:opacity-100 absolute z-10 w-full h-full flex gap-4 justify-center items-center bg-black/50 backdrop-blur-xl transition duration-200">
          <Eye size={32} className="cursor-pointer hover:text-secondary-50" />
          <ShoppingBag size={32} className="cursor-pointer hover:text-secondary-50" />
        </div>
        <Image src="/assets/1.png" fill className="object-cover" />
      </div>
      <div className="bg-black/40 p-4">
        <div className="flex justify-between">
          <div>Title</div>
          <div>Price</div>
        </div>
        <div className="flex gap-2 items-center">
          <div>Author</div>
          <ChevronRight size={16} strokeWidth={3} />
          <div>Category</div>
        </div>
      </div>
    </div>
  );
};
