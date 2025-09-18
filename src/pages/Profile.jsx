import React from "react";
import ProfileHeader from "../components/ProfileHEader";
import ProfileMenu from "../components/ProfileMenu";
import RequestDoctor from "../components/RequestDoctor";
import Navbar from "../layouts/Navbar";
import LoaderProvider from "./LoaderProvider";

const Profile = ()=>{
    return(
        <LoaderProvider>
            <div className="pb-5">
                <ProfileHeader></ProfileHeader>
                <ProfileMenu></ProfileMenu>
                <RequestDoctor></RequestDoctor>
                <Navbar></Navbar>
            </div>
        </LoaderProvider>
    )
}
export default Profile