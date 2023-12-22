"use client"
import textClip from "@/app/utils/textClip"
import { Rating } from "@mui/material"
import Image from "next/image"
import { useRouter } from "next/navigation"



const ProductCards = ({product}:{product:any}) => {
  const router = useRouter();
  let review = product?.reviews?.reduce((acc:number,item:any)=> acc + item.rating,0) / product?.reviews?.length
  
  
  return (
    <div onClick={()=>router.push(`product/${product.id}`)} className="w-[240px] shadow-lg p-2 rounded-md cursor-pointer flex flex-col flex-1">
        <div className="relative h-[200px]">
            <Image src={product.image} fill alt="" className="object-contain"/>

        </div>
        <div className="text-center mt-3 space-y-1">
            <div className="text-lg">{textClip(product.name)}</div>
            <Rating name="read-only" value={review} readOnly />
            <div className="text-orange-600">{product.price} AZN</div>
            
        </div>
    </div>
          
  )
}

export default ProductCards
