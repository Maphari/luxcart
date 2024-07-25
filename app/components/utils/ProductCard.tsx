import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

export interface IProductCard {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;

  header: string;
  rating: string;
  price: string;
}

export const ProductCard: React.FC<IProductCard> = ({
  src,
  alt,
  width,
  height,
  header,
  className,
  price,
  rating,
}) => {
  return (
    <section className="bg-gray-200 p-3 rounded max-w-[18rem]">
      <Image
        src={src}
        alt={alt ? alt : header}
        width={width || 250}
        height={height || 0}
      />
      <section className="w-full">
        <h3 className="text-sm line-clamp-2 mt-3 font-semibold">{header}</h3>
        <div className="flex items-center text-sm">
          <FaStar className="text-yellow-500 mr-1 my-2" />{" "}
          <span className="text-xs">{rating} Rating</span>
        </div>
        <div className="flex items-center justify-between">
          <h4 className="text-xl font-bold">{price}</h4>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="button-primary flex items-center gap-2 justify-center"
            >
              <IoCartOutline className="text-xl text-white" />
            </button>
            <button
              type="button"
              className="button-outlined flex items-center gap-2 justify-center text-black hover:text-white"
            >
              <IoIosHeartEmpty className="text-xl text-red-500" />
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};
