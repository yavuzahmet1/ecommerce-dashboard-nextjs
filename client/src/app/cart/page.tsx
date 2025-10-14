"use client";

import { CartItemsType } from "@/types";
import { ArrowRight } from "lucide-react";

import { useRouter, useSearchParams } from "next/navigation";

const steps = [
  { id: 1, title: "Shopping Cart" },
  { id: 2, title: "Shipping Information" },
  { id: 3, title: "Payment Details" },
  { id: 4, title: "Review Order" },
];

const cartItems: CartItemsType = [
  {
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 39.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gr.png",
    },
    quantity: 2,
    selectedSize: "m",
    selectedColor: "gray",
  },
  {
    id: 2,
    name: "Puma Ultra Warm Zip",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 59.9,
    sizes: ["s", "m", "l", "xl"],
    colors: ["gray", "green"],
    images: { gray: "/products/2g.png", green: "/products/2gr.png" },
    quantity: 1,
    selectedSize: "l",
    selectedColor: "green",
  },
];

const CartPage = () => {
  const searhParams = useSearchParams();
  const router = useRouter();
  const activeStep = parseInt(searhParams.get("step") || "1");
  return (
    <div className="flex flex-col gap-6 items-center justify-center mt-12">
      <h1>Your Shopping Cart</h1>

      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`flex items-center gap-2 border-b-2 pb-4 ${
              activeStep === step.id ? "border-gray-800" : "border-gray-400"
            }`}
          >
            <div
              className={`w-6 h-6 rounded-full text-white p-4 flex items-center justify-center ${
                activeStep === step.id ? "bg-gray-800" : "bg-gray-400"
              }`}
            >
              {step.id}
            </div>
            <p
              className={`text-sm font-medium ${
                step.id === activeStep ? "text-gray-800" : "text-gray-400"
              }`}
            >
              {step.title}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-1">
        <div className="w-full lg:w-1/2 shadow-lg border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8"></div>
        <div className="w-full lg:w-1/3 shadow-lg border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8">
          <h2 className="font-semibold">Cart Details</h2>
          <div></div>
          <button className="w-full bg-gray-800 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center hover:bg-gray-900 transition">
            Continue
            <ArrowRight className="w-3 h-3 inline-block ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
