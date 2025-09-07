import React from "react";
import Doctor from '../assets/images/Group 3447 (2).png';
import Nurse from '../assets/images/Group 3446 (2).png';
import Medicine from '../assets/images/Group 3448.png';
import Test from '../assets/images/Group 3528.png';
const IconsCategory = ()=>{
    return(
        <div className="grid gap-1 grid-cols-8 mt-1 w-[90%] mx-auto">
            <div className="col-span-2 h-[113px]">
                <img src={Doctor}></img>
            </div>
            <div className="col-span-2 h-[113px]">
                <img src={Nurse}></img>
            </div>
            <div className="col-span-2 h-[113px]">
                <img src={Medicine}></img>
            </div>
            <div className="col-span-2 h-[113px]">
                <img src={Test}></img>
            </div>
        </div>
    )
}
export default IconsCategory;