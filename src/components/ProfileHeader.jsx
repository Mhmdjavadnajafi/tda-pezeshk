import React from "react";
import ProfileHeaderInformation from "./ProfileHeaderInformation";
import ArrowProfile from "./ProfileArrow";
const ProfileHeader = ()=>{
    return(
        <div className="w-[90%] mx-auto mt-10 flex items-center justify-between">
            <ProfileHeaderInformation></ProfileHeaderInformation>
            <ArrowProfile></ArrowProfile>
        </div>
    )
}
export default ProfileHeader