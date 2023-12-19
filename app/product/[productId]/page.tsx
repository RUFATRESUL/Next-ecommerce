import DetailClient from '@/app/components/detail/DetailClient';
import { products } from '@/app/utils/Prouducts';
import React from 'react'

type DetailProps = {
    productId? : any
}

const Detail = ({params}:{params:DetailProps}) => {
    const {productId} = params;
    
    const prouduct = products.find(product => product.id == productId)
    
    
    
  return (
    <div>
      <DetailClient prouduct={prouduct}/>
    </div>
  )
}

export default Detail;