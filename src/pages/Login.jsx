import React from "react";
import LogoApp from "../components/logoApp";
import LoginAppTitle from "../components/LoginAppTitle";
import LoginBox from "../components/LoginBox";
import LoaderProvider from "./LoaderProvider";
export default function LoginApp(){
    return(
      <LoaderProvider>
            <div className="w-[90%] mt-10 mx-auto flex flex-col items-center">
                <LogoApp></LogoApp>
                <LoginAppTitle></LoginAppTitle>
                <LoginBox></LoginBox>
            </div>
      </LoaderProvider>
    )
}