"use client"

import Image from "next/image"
import PageContainer from "../container/PageContainer"
import Counter from "../general/Counter"
import { useState } from "react"
import { Rating } from "@mui/material"
import Button from "../general/Button"
import Comment from "./Comment"
import Header from "../general/Header"

export type CardProductProps = {
  id:string
  name:string
  description:string
  price:string
  quantity:number
  image:string
  inStock:boolean
}

const DetailClient = ({prouduct}:{prouduct:any}) => {
  const [cardProduct, setCardProduct] = useState<CardProductProps>({
    id:prouduct.id,
    name:prouduct.name,
    description:prouduct.description,
    price:prouduct.price,
    quantity:0,
    image:prouduct.image,
    inStock:prouduct.inStock
  })
  console.log(prouduct,"prouduct");
  
  const increaseFunc = () =>{
    if(cardProduct.quantity == 10) return
    setCardProduct(prev =>({...prev, quantity:prev.quantity + 1}))
  }
  const decreaseFunc = () =>{
    if(cardProduct.quantity == 1) return
    setCardProduct(prev =>({...prev,quantity:prev.quantity - 1}))
    
  }
  let review = prouduct?.reviews?.reduce((acc:number,item:any)=> acc + item.rating,0) / prouduct?.reviews?.length
  return (
    <div className="my-10">
      <PageContainer>
        <div className=" block md:flex gap-10 justify-center">
          <div className="relative h-[200px] md:h-[500px] w-[200px] md:w-[400px]  flex-1">
            <Image src={prouduct?.image} fill alt=""/>
          </div>
          <div className="w-1/2 space-y-4  ">
            <div className="text-xl md:text-2xl">
              {prouduct?.name}
            </div>
            <Rating name="read-only" value={review} readOnly />
            <div className="text-slate-500">
              {prouduct?.description}
            </div>
            <div className="text-orange-500 text-lg border-2 border-orange-500 p-2 w-28 text-center rounded-3xl">
              {prouduct?.price} AZN
            </div>
            <div className="flex items-center gap-2">
            <div>Stok Sayisi:</div>
          {
            prouduct.inStock ? <div className="text-green-500">Mehsul stokda var</div> :<div className="text-red-500">Mehsul stokda yoxdur</div>
          }
            </div>
            <Counter increaseFunc={increaseFunc} decreaseFunc={decreaseFunc} cardProduct={cardProduct}/>
            
            <Button text="Sebete elave et" onClick={() => {}} small/>
          </div>
         
        </div>
        <Header text="Yorumlar"/>
        <div className="border-gray-300 border-2">
          {
            prouduct?.reviews?.map((prd: any) =>(
              <Comment key={prd.id} prd={prd}/>
            ))
          }
        </div>
      </PageContainer>
    </div>
  )
}

export default DetailClient