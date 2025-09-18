import React from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const ArrowProfile = ()=>{
    let navigate = useNavigate()
    return(
        <div className="text-gray-400 text-xl">
            <MdOutlineArrowBackIos onClick={() => navigate('/edit-profile')} />
        </div>
    )
}
export default ArrowProfile