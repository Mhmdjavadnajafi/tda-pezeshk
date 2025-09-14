import React from "react";
import ProfileIMG from "./ProfileImg"
import Elliplse from '../assets/images/Ellipse 41.png'
import ProfileHeaderUserName from "./ProfileHeaderUserName";
const ProfileHeaderInformation = () => {
    return (
        <div className="flex items-center gap-3">
            <ProfileIMG src={Elliplse}></ProfileIMG>
            <ProfileHeaderUserName name={'اشکان حسنوند'} inventory={'254.120'}></ProfileHeaderUserName>
        </div>
    )
}
export default ProfileHeaderInformation