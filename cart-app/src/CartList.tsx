import React from 'react';
import { useCartStore } from './store';

export default function CartList() {
    const { cartItems, removeFromCart } = useCartStore();

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Cart</h2>
            {cartItems.length === 0 ? (
                <p className="text-gray-500 text-lg">Your cart is empty.</p>
            ) : (
                <div className="flex flex-col gap-4 w-full">
                    {cartItems.map((item, index) => (
                        <div key={index} className="flex flex-row justify-between items-center border border-gray-200 p-4 rounded-xl shadow-sm bg-white w-full">
                            <div>
                                <h3 className="font-semibold text-lg">{item.name}</h3>
                                <p className="text-gray-500">${item.price}</p>
                            </div>
                            <button 
                                onClick={() => removeFromCart(index)}
                                className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}