import { data } from "react-router-dom"
import Choice from "./Choice"
import CompleteTitle from "./CompleteTitle"
import TestHeader from "./HeaderTest"
import React from 'react'

const ChoiceItem = ()=>{
    const data = [
        { id: 'emergency', title: 'اورژانسی  285.000 تومان', des1: 'مبلغ نمونه گیری و هزینه انجام آزمایشات شما', des2: '6 صبح تا 12 شب / انتظار 30 دقیقه تا 4 ساعت بعد از ثبت' },
        { id: 'Timekeeper', title: 'زماندار  285.000 تومان', des1: 'مبلغ نمونه گیری و هزینه انجام آزمایشات شما', des2: '6 صبح تا 12 شب / انتظار 30 دقیقه تا 4 ساعت بعد از ثبت' },

    ]
    return(
        <div>
            <CompleteTitle title={"انتخاب مورد"} />
            <Choice Data={data}/>
        </div>
    )
}
export default ChoiceItem