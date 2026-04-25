"use client";

import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import toast from "react-hot-toast";
import Link from "next/link";

export default function CartPage() {

    const { cart, removeFromCart, totalPrice } = useContext(CartContext);

    return (
        <main className="max-w-5xl mx-auto px-4 py-10">

            <h1 className="text-3xl md:text-4xl font-bold text-primary text-center mb-3">
                Your <span className="text-secondary">Cart</span>
            </h1>

            {
                cart.length === 0 ? (
                    <p className="text-gray-500 mt-2 text-sm md:text-base text-center">Cart is empty</p>
                ) : (
                    <>
                        <div className="space-y-4">

                            {
                                cart.map((item, index) => (
                                    <div key={index} className="flex items-center gap-4 border p-4 rounded-xl">

                                        <img src={item.image} className="w-20 h-20 object-cover rounded" />

                                        <div className="flex-1">
                                            <h2 className="font-semibold">{item.title}</h2>
                                            <p className="text-sm text-gray-500">৳ {item.price}</p>
                                        </div>

                                        <button
                                            onClick={() => removeFromCart(index)}
                                            className="text-red-500"
                                        >
                                            Remove
                                        </button>

                                    </div>
                                ))
                            }

                        </div>

                        {/* TOTAL */}
                        <div className="mt-6 border-t pt-4 flex justify-between items-center">
                            <h2 className="text-xl font-bold">
                                Total: ৳ {totalPrice}
                            </h2>



                            <Link href="/order-now">
                                <button className="bg-secondary text-white px-6 py-2 rounded-xl" >
                                    Order Now
                                </button>
                            </Link>
                        </div>
                    </>
                )
            }

        </main>
    );
}