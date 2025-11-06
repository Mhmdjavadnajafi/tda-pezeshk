import React from "react";
import CommunicationBox from "./communicationBox";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import CommunicationBoxVideo from "./CommunicationBoxVideo";
const Communication = ()=>{
    return(
        <div className="w-[90%] my-[1px] mx-auto flex gap-1">
            <CommunicationBox icon={<BsTelephone />} title={'تلفنی'}></CommunicationBox>
            <CommunicationBox icon={<CiMail/>} title={'متنی'}></CommunicationBox>
            <CommunicationBoxVideo icon={<CiMail />} title={'تصویری'}></CommunicationBoxVideo>
        </div>
    )
}
export default Communication;