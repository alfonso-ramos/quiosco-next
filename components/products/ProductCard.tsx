import { formatCurrency } from "@/src/utils"
import { Product } from "@prisma/client"
import Image from 'next/image';
import AddProductBtn from "./AddProductBtn";


type ProductCardProps = {
    product: Product
}
export default function ProductCard({product} : ProductCardProps) {
  return (
    <div className="border bg-white">
        <Image 
            width={400}
            height={500}
            src={`/products/${product.image}.jpg`}
            alt={product.name}
            quality={75}
        />
        <div className="p-5 ">
            <h3 className="text-3xl font-bold">{product.name}</h3>
            <p className="mt-5 font-black text-2xl text-amber-500">{formatCurrency(product.price)}</p>
            <AddProductBtn
                product={product}
            />
        </div>
    </div>
  )
}
