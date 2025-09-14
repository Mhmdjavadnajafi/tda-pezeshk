import React from "react";
import InputNumber from "./InputNumberPhone";
import Label from "./labelCard";
import InputText from "./InputText";
import TextBoxAboutMe from "./TextBoxAboutMe";
const InputsEditProfile = ({ onChange }) => {
    return (
        <div className="w-full mx-auto mt-7 mb-20">
            <Label labelName="نام و نام خانوادگی" />
            <InputText placeholder="اشکان حسنوندی" onChange={onChange} />

            <div className="mt-3">
                <Label labelName="شماره همراه" />
                <InputNumber
                    placeholder="09216919291"
                    maxNumber={11}
                    onChange={onChange} 
                />
            </div>

            <div className="mt-3">
                <Label labelName="کد ملی" />
                <InputNumber
                    placeholder="4060405531"
                    maxNumber={11}
                    onChange={onChange} 
                />
            </div>

            <div className="mt-3">
                <Label labelName="درباره من" />
                <TextBoxAboutMe placeholder="اشکان حسنوندی" onChange={onChange} />
            </div>
        </div>
    );
};
export default InputsEditProfile;