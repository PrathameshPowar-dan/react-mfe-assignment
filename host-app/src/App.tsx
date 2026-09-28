import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const ProductsList = React.lazy(() => import('products/ProductsList'));
const CartList = React.lazy(() => import('cart/CartList'));

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm p-4 flex gap-6 justify-center text-lg font-medium">
          <Link to="/products" className="text-blue-600 hover:text-blue-800">Products</Link>
          <Link to="/cart" className="text-blue-600 hover:text-blue-800">Cart</Link>
        </nav>
        
        <main className="p-8">
          <Suspense fallback={<div className="text-center text-xl mt-10">Loading Microfrontend...</div>}>
            <Routes>
              <Route path="/" element={<h1 className="text-center text-2xl mt-10">Welcome to the Host App. Select a route above.</h1>} />
              <Route path="/products" element={<ProductsList />} />
              <Route path="/cart" element={<CartList />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </BrowserRouter>
  );
}