import React from 'react';

export interface Product {
    id: number;
    name: string;
    price: number;
}

const dummyProducts: Product[] = [
    { id: 1, name: 'Wireless Headphones', price: 99 },
    { id: 2, name: 'Mechanical Keyboard', price: 149 },
    { id: 3, name: 'Gaming Mouse', price: 59 },
    { id: 4, name: '4K Monitor', price: 299 }
];

export default function ProductsList() {
    const handleAddToCart = (product: Product) => {
        window.dispatchEvent(new CustomEvent<Product>('ADD_TO_CART', { detail: product }));
        alert(`${product.name} added to cart!`);
    };

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Available Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {dummyProducts.map((product) => (
                    <div key={product.id} className="border rounded-xl p-4 shadow-sm hover:shadow-md transition bg-white flex flex-col justify-between">
                        <div>
                            <h3 className="font-semibold text-lg text-gray-800">{product.name}</h3>
                            <p className="text-gray-500 mb-4">${product.price}</p>
                        </div>
                        <button
                            onClick={() => handleAddToCart(product)}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition"
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}