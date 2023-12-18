import textClip from "@/app/utils/textClip"
import { Rating } from "@mui/material"
import Image from "next/image"

const ProductCards = ({product}:{product:any}) => {
  let review = product?.reviews?.reduce((acc:number,item:any)=> acc + item.rating,0) / product?.reviews?.length
  
  
  return (
    <div className="w-[240px] shadow-lg p-2 rounded-md cursor-pointer flex flex-col flex-1">
        <div className="relative h-[200px]">
            <Image src={product.image} fill alt="" className="object-contain"/>

        </div>
        <div className="text-center mt-3 space-y-1">
            <div className="text-lg">{textClip(product.name)}</div>
            <Rating name="read-only" value={review} readOnly />
            <div className="text-gray-600">{product.price}</div>
            
        </div>
    </div>
          
  )
}

export default ProductCards