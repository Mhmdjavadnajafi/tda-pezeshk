import { useNavigate } from "react-router-dom"
import LoaderProvider from "./LoaderProvider"
import TestHeader from "../components/HeaderTest"
import CompleteTitle from "../components/CompleteTitle"
import Persons from "../components/Person"
import Label from "../components/labelCard"
import InputNumberPhone from "../components/InputNumberPhone"
import Chooseinsurance from "../components/Chooseinsurance"
import Symptoms from "../components/symptoms"
import RequestButton from "../components/RequestButton"
import InputText from "../components/InputText"
import OrdersummaryTriage from "../components/OrdersummaryTriage"
const CompletetheapplicationTriageOne = ()=>{
    const navigate = useNavigate('')
    return(
        <LoaderProvider>
            <div className='w-[100%] mx-auto relative'>
                <TestHeader onClick={() => navigate('/triage')} title={'تکمیل درخواست'} />
                <CompleteTitle title={'دریافت خدمات'} />
                <Persons></Persons>
                <div className='w-[90%] mx-auto my-4'>
                    <Label labelName={'نام و نام خانوادگی بیمار'}></Label>
                    <InputText placeholder={"مثال : اشکان حسنوندی"}></InputText>
                </div>
                <div className='w-[90%] mx-auto my-4'>
                    <Label labelName={'کد ملی '}></Label>
                    <InputNumberPhone placeholder={"مثال :123456890 "}></InputNumberPhone>
                </div>
                <Chooseinsurance />
                <Symptoms></Symptoms>
                <OrdersummaryTriage/>
                <RequestButton onClick={() => navigate('/')} text={'تکمیل اطلاعات'} />
            </div>
        </LoaderProvider>
    )
}
export default CompletetheapplicationTriageOne