import { useState } from "react"
import TestHeader from "../components/HeaderTest"
import Label from "../components/labelCard"
import Suggestedamount from "../components/Suggestedamount"
import InputIncrease from "./InputIncrease"
import LoaderProvider from "./LoaderProvider"
import Transfertotheportal from "../components/Transfertotheportal"
import { useNavigate } from "react-router-dom"
const Inventoryincrease = ()=>{
    const[value,setValue] = useState('')
    const navigate = useNavigate('')
    return(
        <LoaderProvider>
            <div className='w-[100%] mx-auto relative'>
                <TestHeader title={'افزایش موجودی'} onClick={()=>navigate('/profile')} />
                <div className="w-[90%] mx-auto mt-8">
                    <Label labelName={"ورود مبلغ"}></Label>
                    <InputIncrease value={value} onChange={(e)=>setValue(e.target.value)}/>
                    <div className="flex mt-5 gap-3 mb-8">
                        <Suggestedamount onClick={()=>setValue('50000')} value={"50.000 تومان"}/>
                        <Suggestedamount onClick={()=>setValue('100000')} value={"100.000 تومان"} />
                        <Suggestedamount onClick={() => setValue('300000')} value={"300.000 تومان"} />
                    </div>
                    <Transfertotheportal text={"انتقال به درگاه"}/>
                </div>
            </div>
        </LoaderProvider>
    )
}
export default Inventoryincrease