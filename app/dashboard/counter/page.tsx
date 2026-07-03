import { CartCounter } from "@/app/shoping-cart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "Un simple contador",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <span>Productos en el carrito</span>

      <CartCounter value={20} />
    </div>
  );
}
