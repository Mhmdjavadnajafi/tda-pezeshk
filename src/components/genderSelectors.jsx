import React from "react";
import Gender from "./gender"
const GenderSelector=()=>{
    return(
        <div className="grid grid-cols-12 gap-5">
            <Gender genderName={'زن'}></Gender>
            <Gender genderName={'مرد'}></Gender>
        </div>
    )
}
export default GenderSelector