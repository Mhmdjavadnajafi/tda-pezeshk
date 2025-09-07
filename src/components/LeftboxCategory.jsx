import React from "react";
import MothersEye from "./mothersEye"
import Registrationrequest from "./Registrationrequest";
const LeftBoxCategory = ()=>{
    return(
        <div className="flex gap-1 col-span-6 flex-col items-center">
            <MothersEye></MothersEye>
            <Registrationrequest></Registrationrequest>
        </div>
    )
}
export default LeftBoxCategory;