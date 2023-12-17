"use client"


const Category = () => {
    const categoryList = [
        {
        name:"House"
        },
        {
            name:"House"
        },
        {
            name:"House"
        },
        {
            name:"House"
        },
        {
            name:"House"
        }
       
    ]
  return (
    <div className="flex items-center justify-center px-2 md:px-8 py-6 md:py-10 overflow-x-auto gap-2 md:gap-10">
        {categoryList.map((category,index)=>(
            <div className="border text-gray-500 rounded-full min-w-[120px] text-center flex flex-1 items-center justify-center cursor-pointer py-2 md:py-2 px-2 md:px-4" key={index}>{category.name}</div>
        ))

        }
    </div>
  )
}

export default Category