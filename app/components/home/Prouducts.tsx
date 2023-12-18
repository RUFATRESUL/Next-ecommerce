import { products } from "@/app/utils/Prouducts"
import Header from "../general/Header"
import ProductCards from "./ProductCards"


const Prouducts = () => {
  return (
    <div>
        <Header text="Butun Mehsullar"/>
        <div className="flex flex-wrap items-center gap-3 md:gap-10 px-3 md:px-10">
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