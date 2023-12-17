import Image from "next/image"

const ProductCards = ({product}:{product:any}) => {
  return (
    <div className="w-[240px] shadow-lg p-2 rounded-md">
        <div className="relative h-[200px]">
            <Image src={product.image} fill alt="" className="object-contain"/>

        </div>
        <div>
            <div>{product.name}</div>
            <div>{product.price}</div>
        </div>
    </div>
  )
}

export default ProductCards