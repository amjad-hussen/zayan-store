import React from 'react';
import { LuShieldCheck } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { IoMdPricetags } from "react-icons/io";
import { BiSupport } from "react-icons/bi";

const Features = () => {
    return (
        <div className='relative z-50 grid grid-cols-2 md:grid-cols-4 gap-20 -mt-22 mx-10 my-5 shadow-xl px-5 py-5 bg-white rounded-2xl'>
            <div className='flex gap-2 items-center border-r-2 border-gray-300'>
                <LuShieldCheck className='btn shadow-none bg-primary rounded-md text-white px-3 py-2  '></LuShieldCheck> 
                <div>
                    <p className='text-[15px] font-bold'>Best Quality </p>
                    <p className='text-[9px]'>We ensure the best quality<br /> product for you.</p>
                </div>
            </div>
            <div className='flex gap-2 items-center border-r-2 border-gray-300'>
                <TbTruckDelivery className='btn shadow-none bg-primary rounded-md text-white px-3 py-2   '></TbTruckDelivery>
                <div>
                    <p className='text-[15px] font-bold'>Fast Delivery </p>
                    <p className='text-[9px]'>Get your product delivered <br /> to your door. </p>
                </div>
            </div>
            <div className='flex gap-2 items-center border-r-2 border-gray-300'>
                <IoMdPricetags className='btn shadow-none bg-primary rounded-md text-white px-3 py-2  '></IoMdPricetags>
                <div>
                    <p className='text-[15px] font-bold'>Best Prices </p>
                    <p className='text-[9px]'> Affordable prices for <br /> every household.</p>
                </div>
            </div>
            <div className='flex gap-2 items-center '>
                <BiSupport className='btn shadow-none bg-primary rounded-md text-white px-3 py-2  '></BiSupport>
                <div>
                    <p className='text-[15px] font-bold'>24/7 Support </p>
                    <p className='text-[9px]'>We are here to help<br /> anytime .</p>
                </div>
            </div>
        </div>
    );
};

export default Features;