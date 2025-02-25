"use client";

import Footer from "../components/Footer";
import React from "react";
import { FaCartPlus } from "react-icons/fa";
import BasketItem from "../components/blocks/BasketItem";
import { useBasketStore } from "../store/basketStore";
import Link from "next/link";
import Title from "../components/blocks/Title";

export default function BasketPage() {
    const isShopperMode = useBasketStore((state) => state.isShopperMode);
    const basket = useBasketStore((state) => state.basket);
    const total = '£30000-35000'

    return (
        <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#e8e8e8] to-[#ffffff]">
            <div className="mx-auto p-5 shadow-lg w-full text-primary">
                <Title text="Your Basket" />
                <div className="p-4">
                    <h2 className="text-4xl text-center m-4">Items</h2>
                    <p className="text-primary text-center mb-4">
                        {basket.length === 0 ? "Your basket is empty." : `You have ${basket.length} item${basket.length > 1 ? "s" : ""} in your basket.`}
                    </p>
                    <div className="space-y-4 max-w-96 m-auto">
                        {basket.map((item) => (
                            <BasketItem
                                key={item.itemId}
                                itemId={item.itemId}
                                name={item.name}
                                quantity={item.quantity}
                                stock={item.stock}
                            />
                        ))}
                    </div>
                    <div className="checkout-card m-4 bg-brand-primary rounded-md shadow-md p-4 text-lg text-brand-text-inverse">
                        <h2>Checkout</h2>
                        <p>Total: {total}</p>
                        <button
                            className="mt-4 m-2 p-2 px-6 py-2 rounded-lg text-sm bg-primary text-secondary border-2 border-primary shadow-md hover:bg-secondary hover:text-primary transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                            type="button"
                        >
                            Checkout                    </button>
                    </div>
                    <Link
                        href="/"
                        className="m-2 p-2 mx-8 px-4 max-w-64 flex-1 rounded-lg text-sm bg-primary text-center border-primary border-2 shadow-md text-secondary hover:text-brand-button-inverse-hover hover:bg-brand-primary-hover"
                    >
                        Home
                    </Link>
                </div>
            </div>
            <Footer />
        </main>
    );
}
