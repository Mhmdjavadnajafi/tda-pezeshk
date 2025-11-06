import React from "react";
import { formatNumber } from '../utils/formatNumber';
const ProfileHeaderUserName = ({ name,inventory })=>{
    return(
        <div>
            <div className="vazir-medium text-gray-700 text-[20px] text-bold">{name}</div>
            <div className="text-[#B2B2B2] mt-1 vazir-medium">موجودی : {formatNumber(inventory)} تومان</div>
        </div>
    )
}
export default ProfileHeaderUserName;