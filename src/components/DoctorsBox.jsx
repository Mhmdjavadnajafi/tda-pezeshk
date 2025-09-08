import React from "react";
import HeaderDoctors from "./DoctorsHeader";
import DoctorsCard from "./DoctorsCard";
const DoctorsBox = ()=>{
    return(
        <div className="w[85%] mx-auto py-5 h-[400px] bg-[#E6F9F7] mt-8  py-5">
            <HeaderDoctors></HeaderDoctors>
            <DoctorsCard></DoctorsCard>
        </div>
    )
}
export default DoctorsBox