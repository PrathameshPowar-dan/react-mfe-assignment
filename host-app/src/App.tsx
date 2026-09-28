import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// @ts-ignore
import "./index.css";

const ProductsList = React.lazy(() => import('products/ProductsList'));
const CartList = React.lazy(() => import('cart/CartList'));

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <nav className="flex justify-center gap-8 p-6 bg-white shadow-sm border-b border-gray-200">
          <Link to="/products" className="text-xl font-semibold text-blue-600 hover:text-blue-800 transition-colors">Products</Link>
          <Link to="/cart" className="text-xl font-semibold text-blue-600 hover:text-blue-800 transition-colors">Cart</Link>
        </nav>
        
        <main className="p-8 max-w-6xl mx-auto">
          <Suspense fallback={<div className="text-center text-xl mt-10 font-medium text-gray-600">Loading Microfrontend...</div>}>
            <Routes>
              <Route path="/" element={<h1 className="text-center text-3xl mt-10 font-bold">Welcome to the Host App. Select a route above.</h1>} />
              <Route path="/products" element={<ProductsList />} />
              <Route path="/cart" element={<CartList />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </BrowserRouter>
  );
}

const el = document.getElementById("app") || document.getElementById("root");
if (el) {
    const root = createRoot(el);
    root.render(<App />);
}