import React from "react";
const TextBoxAboutMe = ({placeholder,onChange,value})=>{
    return(
        <textarea placeholder={placeholder} onChange={onChange} value={value} className="w-full py-3 h-[212px] rounded-xl vazir-medium text-gray-500 border border-gray-500 text-[1.2rem] px-5 my-3">

        </textarea>
    )
}
export default TextBoxAboutMe