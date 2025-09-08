import React, { useState } from "react";
const SearchBox = ()=>{
    const[len,setLen]=useState(0)
    return(
        <div className="w-[85%] h-15 relative">
            <input onChange={(e)=>setLen(e.target.value.length)} className="rounded-xl bg-gray-200 text-[1.2rem] px-5 vazir-medium text-gray-500 h-[100%] w-[100%]" placeholder="جستجو"></input>
            <div className={`absolute top-[40%] text-[13px] left-[10%] vazir-medium text-bold text-[#00C0E8] ${len > 0?'opacity-0':"opacity-100"}`}> پزشک، تخصص، بیماری و ...</div>
       </div>
    )
}
export default SearchBox;