import React from "react";
import LogoApp from "../components/logoApp";
import LoginAppTitle from "../components/LoginAppTitle";
import LoginBox from "../components/LoginBox";
export default function LoginApp(){
    return(
        <div className="w-[90%] mt-10 mx-auto flex flex-col items-center">
            <LogoApp></LogoApp>
            <LoginAppTitle></LoginAppTitle>
            <LoginBox></LoginBox>
        </div>
    )
}