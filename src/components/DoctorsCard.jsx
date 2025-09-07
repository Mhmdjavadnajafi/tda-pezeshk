import React from "react";
import DoctorCard from "./DoctorCard";
const DoctorsCard = ()=>{
    return(
        <div className="w-[90%] mx-auto flex items-center justify-center gap-5 mt-5">
            <DoctorCard></DoctorCard>
            <DoctorCard></DoctorCard>
        </div>
    )
}
export default DoctorsCard;