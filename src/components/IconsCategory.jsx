import React from "react";
import Doctor from '../assets/images/Group 3447 (6).png';
import Nurse from '../assets/images/Group 3446 (5).png';
import Medicine from '../assets/images/Group 3448 (5).png';
import Test from '../assets/images/Group 3528 (6).png';
import { useNavigate } from "react-router-dom";
const IconsCategory = ()=>{
    const navigate = useNavigate('')
    return(
        <div className="grid gap-1 grid-cols-8 mt-1 w-[90%] mx-auto">
            <div className="col-span-2 h-[113px]">
                <img onClick={() => navigate('/doctors')} src={Doctor}></img>
            </div>
            <div className="col-span-2 h-[113px]">
                <img src={Nurse}></img>
            </div>
            <div className="col-span-2 h-[113px]" onClick={() => navigate('/paraclinic')}>
                <img src={Test}></img>
            </div>
            <div className="col-span-2 h-[113px]" onClick={() => navigate('/Pharmacy')}>
                <img src={Medicine}></img>
            </div>
        </div>
    )
}
export default IconsCategory;