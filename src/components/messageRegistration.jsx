import React from "react";
const MessageRegistration=({numberPhone})=>{
    return(
        <div className="mt-8 vazir-medium text-sm text-[#676767] text-bold mb-4 text-justify">
            رمز ورود به شماره {numberPhone} ارسال گردید.لطفا آن را در کادر
            زیر وارد نمایید
        </div>
    )
}
export default MessageRegistration;