import React from 'react'
import SearchBox from "./SearchBox"
import SearchBtn from './SearchButton';
const HeaderContent = ()=>{
    return(
        <div className="flex w-[90%] mx-auto gap-3">
           <SearchBox></SearchBox>
           <SearchBtn></SearchBtn>
        </div>
    )
}
export default HeaderContent;