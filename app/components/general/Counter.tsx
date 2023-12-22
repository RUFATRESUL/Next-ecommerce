import { CardProductProps } from "../detail/DetailClient"

interface CounterProps{
    cardProduct: CardProductProps,
    increaseFunc:() => void
    decreaseFunc:() => void
}

const Counter:React.FC<CounterProps> = ({cardProduct,increaseFunc,decreaseFunc}) => {
  return (
    <div className="flex items-center justify-start">
        <div className=" w-8 h-8 bg-orange-600 text-white text-center text-2xl font-bold cursor-pointer" onClick={decreaseFunc}>-</div>
        <div className="w-8 h-8 text-center text-lg md:text-xl bg-gray-100">{cardProduct?.quantity}</div>
        <div className=" w-8 h-8 bg-orange-600 text-white text-center text-2xl font-bold cursor-pointer" onClick={increaseFunc}>+</div>
    </div>
  )
}

export default Counter