import Image from 'next/image';
import Link from 'next/link';
import { BsCart3 } from "react-icons/bs";

const Banner = () => {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">

      <Image
        src="/banner.png"
        alt="Zayan Store Banner"
        fill
        sizes="100vw"
        className="object-cover rounded-b-2xl"
        priority
      />

      <div className="absolute inset-0 bg-black/50 rounded-b-2xl"></div>
      
      <div className="absolute inset-0 flex flex-col justify-center items-start px-4 md:px-10 text-white">

        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3">
          Your Daily Needs, <br /> <span className='text-secondary'>Our Pririty</span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg mb-5 max-w-xl">
          Fresh products with the best quality you can trust, <br /> delivering reliable and friendly service to meet your everyday needs.
        </p>

        <Link href={'/items'} className="btn btn-secondary">
         <BsCart3></BsCart3> Shop Now
        </Link>

      </div>
    </div>
  );
};

export default Banner;