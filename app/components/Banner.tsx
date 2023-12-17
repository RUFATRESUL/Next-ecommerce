

import Image from 'next/image'

type Image ={
    bannerImage:string
}
const Banner = () => {
  return (
    <div className='h-[210px] bg-black flex items-center justify-center'>
        <div className='h-[180px] relative w-full'>
           <Image  src={"/bannerOne.jpg"} fill alt='' className='object-cover'/> 
        </div>
    </div>
  )
}

export default Banner