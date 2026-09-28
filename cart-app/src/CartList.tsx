import React, { useState, useEffect } from 'react';

export interface Product {
    id: number;
    name: string;
    price: number;
}

export default function CartList() {
    const [cartItems, setCartItems] = useState<Product[]>([]);

    useEffect(() => {
        const handleAddToCart = (event: Event) => {
            const customEvent = event as CustomEvent<Product>;
            setCartItems((prev) => [...prev, customEvent.detail]);
        };

        window.addEventListener('ADD_TO_CART', handleAddToCart);
        return () => window.removeEventListener('ADD_TO_CART', handleAddToCart);
    }, []);

    const removeFromCart = (indexToRemove: number) => {
        setCartItems((prev) => prev.filter((_, index) => index !== indexToRemove));
    };

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Cart</h2>
            {cartItems.length === 0 ? (
                <p className="text-gray-500">Your cart is empty.</p>
            ) : (
                <div className="flex flex-col gap-4">
                    {cartItems.map((item, index) => (
                        <div key={index} className="flex justify-between items-center border p-4 rounded-xl shadow-sm bg-white">
                            <div>
                                <h3 className="font-semibold text-lg">{item.name}</h3>
                                <p className="text-gray-500">${item.price}</p>
                            </div>
                            <button
                                onClick={() => removeFromCart(index)}
                                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg"
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