"use client"


import { RxAvatar } from "react-icons/rx";

const Comment = ({prd}:{prd:any}) => {
    console.log(prd);
    
  return (
    <div className="border-gray-200 w-full md:w-1/2 p-22 rounded-lg">

        <div className="flex items-center gap-1">
        <RxAvatar size="25" />
        <div>{prd?.user?.name}</div>
        </div>
        <div className="text-slate-500">
            
        {prd.comment}
        </div>
    </div>
  )
}
console.log(Comment);


export default Comment