import React from "react";
import ProfileHeader from "../components/ProfileHEader";
import ProfileMenu from "../components/ProfileMenu";
import RequestDoctor from "../components/RequestDoctor";
import Navbar from "../layouts/Navbar";

const Profile = ()=>{
    return(
        <div className="pb-5">
            <ProfileHeader></ProfileHeader>
            <ProfileMenu></ProfileMenu>
            <RequestDoctor></RequestDoctor>
            <Navbar></Navbar>
        </div>
    )
}
export default Profile