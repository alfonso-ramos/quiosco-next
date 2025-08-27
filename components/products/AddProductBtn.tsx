import { useStore } from "@/src/store";
import { Product } from "@prisma/client";

type AddProductBtnProps = {
    product: Product
}

export default function AddProductBtn({product}: AddProductBtnProps) {

    const addToOrder = useStore((state) => state.addToOrder)
    return (
        <button
            type="button"
            onClick={() => addToOrder}
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
        >
            Agregar   
        </button>
    );
}
