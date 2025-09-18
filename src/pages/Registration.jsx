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
import Label from "../components/labelCard";
import LoaderProvider from "./LoaderProvider";

const Registration = ()=>{
    const navigate = useNavigate()
    return(
       <LoaderProvider>
            <div className="w-[90%] mx-auto mt-20">
                <HeaderRegistration></HeaderRegistration>
                <MessageRegistration numberPhone={'09216919291'}></MessageRegistration>
                <InputNumber placeholder={'ورود کد'} maxNumber={6}></InputNumber>
                <Timer></Timer>
                <Label labelName={'نام و نام خانوادگی'}></Label>
                <InputText placeholder={"مثال : اشکان حسنوندی"}></InputText>
                <div className="mt-2">
                    <Label labelName={'کد ملی / اختیاری'}></Label>
                    <InputNumber maxNumber={10} placeholder={'4060405531'}></InputNumber>
                </div>
                <ButtonSubmit onClick={() => navigate('/content')} text={'ورود'} color={"text-white"} bg="bg-blue-600" borderColor={'border-blue-500'}></ButtonSubmit>
                <MessageLogin></MessageLogin>
            </div>
       </LoaderProvider>
    )
}
export default Registration;