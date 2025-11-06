import { useNavigate } from "react-router-dom"
import LoaderProvider from "./LoaderProvider"
import TestHeader from "../components/HeaderTest"
import CompleteTitle from "../components/CompleteTitle"
import Persons from "../components/Person"

const ComplateDriver = ()=>{
    const navigate = useNavigate()
    return(
        <LoaderProvider>
            <div className='w-[100%] mx-auto relative'>
                <TestHeader onClick={() => navigate('/Drugregistration')} title={'تکمیل درخواست'} />
                <CompleteTitle title={'دریافت خدمات'} />
                <Persons></Persons>
                <div className='w-[90%] mx-auto my-4'>
                    <Label labelName={'نام و نام خانوادگی بیمار'}></Label>
                    <InputText placeholder={"مثال : اشکان حسنوندی"}></InputText>
                </div>
                <div className='w-[90%] mx-auto my-4'>
                    <Label labelName={'کد ملی '}></Label>
                    <InputNumber placeholder={"مثال :123456890 "}></InputNumber>
                </div>
                <Chooseinsurance />
                <Symptoms></Symptoms>
                <RequestButton onClick={() => navigate('/CompletingthedrugRequest')} text={'تکمیل اطلاعات'} />
            </div>
        </LoaderProvider>        
    )
}
export default ComplateDriver