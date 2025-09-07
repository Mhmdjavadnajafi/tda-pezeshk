import React from "react";
import SearchBox from "../components/SearchBox";
import HeaderContent from "../components/HeaderContent";
import Categorys from "../components/Categorys";
import DoctorsBox from "../components/DoctorsBox";
const Content = ()=>{
    return(
        <div className="w-[100%] mx-auto mt-10">
            <HeaderContent></HeaderContent>
            <Categorys></Categorys>
            <DoctorsBox></DoctorsBox>
        </div>
    )
}
export default Content