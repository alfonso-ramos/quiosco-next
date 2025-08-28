"use client";

import { useStore } from "@/src/store";
import { toast } from "react-toastify";
import { useMemo } from "react";
import ProductDetails from "./ProductDetails";
import { formatCurrency } from "@/src/utils";
import { createOrder } from "@/actions/create-order-action";
import { OrderSchema } from "@/src/schema";

export default function OrderSummary() {
  const order = useStore((state) => state.order);

  const total = useMemo(() => order.reduce((total, item) => total + (item.price * item.quantity), 0), [order]);

  const handleCreateOrder = (formData: FormData) => {
    // Lógica para crear el pedido
    const data ={
      name: formData.get('name')
    }
    const result = OrderSchema.safeParse(data);

    if (!result.success) {
      result.error.issues.forEach(issue => {
        toast.error(issue.message);
      });
      return;
    }
    createOrder();
  }
  return (
    <aside className="lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-5">
      <h1 className="text-4xl text-center font-black">Mi pedido</h1>

      {order.length === 0 ? (
        <p className="text-center my-10">El pedido esta vacio</p>
      ) : (
        <div className="mt-5">
          {order.map((product) => (
            <ProductDetails key={product.id} product={product} />
          ))}

          <p className="text-2xl mt-20 text-center">
            Total a pagar: {''}
            <span className="font-bold">{formatCurrency(total)}</span>
          </p>

          <form 
            className="w-full mt-10 space-y-5"
            action={handleCreateOrder}
          >
            <input 
              type="text"
              placeholder="Tu nombre"
              className="bg-white border border-gray-100 p-2 w-full"
              name="name"
            />
            <input 
              type="submit"
              className="py-2 rounded text-white uppercase bg-black w-full text-center cursor-pointer font-bold"
              value="Confirmar Pedido" />
          </form>
        </div>
      )}
    </aside>
  );
}
