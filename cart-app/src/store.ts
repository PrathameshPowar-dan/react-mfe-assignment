import { create } from 'zustand';

export interface Product {
    id: number;
    name: string;
    price: number;
}

interface CartState {
    cartItems: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (index: number) => void;
}

export const useCartStore = create<CartState>((set) => ({
    cartItems: [],
    addToCart: (product) => set((state) => ({ cartItems: [...state.cartItems, product] })),
    removeFromCart: (index) => set((state) => ({
        cartItems: state.cartItems.filter((_, i) => i !== index)
    }))
}));