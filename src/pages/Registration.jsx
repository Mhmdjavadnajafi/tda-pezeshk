import React from "react";
import HeaderRegistration from "../components/headerRegistration";
import MessageRegistration from "../components/messageRegistration";
import InputNumber from "../components/InputNumberPhone";
import Timer from "../components/Timer";
import InputText from "../components/InputText";
import GenderSelector from "../components/genderSelectors";
import ButtonSubmit from "../components/ButtonSubmit";
import MessageLogin from "../components/messageLogin";
import { useNavigate } from "react-router-dom";

const Registration = ()=>{
    const navigate = useNavigate()
    return(
        <div className="w-[90%] mx-auto mt-20">
            <HeaderRegistration></HeaderRegistration>
            <MessageRegistration numberPhone={'09216919291'}></MessageRegistration>
            <InputNumber placeholder={'ورود کد'} maxNumber={6}></InputNumber>
            <Timer></Timer>
            <InputText placeholder={"نام و نام خانوادگی "}></InputText>
            <GenderSelector></GenderSelector>
            <ButtonSubmit onClick={()=>navigate('/content')} text={'ورود'} color={"text-white"} bg="bg-blue-600" borderColor={'border-blue-500'}></ButtonSubmit>
            <MessageLogin></MessageLogin>
        </div>
    )
}
export default Registration;