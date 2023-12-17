import { products } from "@/app/utils/Prouducts"
import Header from "../general/Header"
import ProductCards from "./ProductCards"


const Prouducts = () => {
  return (
    <div>
        <Header text="Butun Mehsullar"/>
        <div>
            {
                products.map(product=>(
                    <ProductCards key={product.id} product={product}/>
                ))
            }
        </div>
    </div>
  )
}

export default Prouducts