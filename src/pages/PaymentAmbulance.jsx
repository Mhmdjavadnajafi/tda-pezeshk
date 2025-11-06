import { useNavigate } from "react-router-dom"
import TestHeader from "../components/HeaderTest"
import LoaderProvider from "./LoaderProvider"
import CompleteTitle from "../components/CompleteTitle"
import RequestButton from "../components/RequestButton"

const PaymentAmbulance = ()=>{
    const navigate = useNavigate()
    return(
       <LoaderProvider>
            <TestHeader onClick={() => navigate('/ComplateAmbulance')} title={'تایید و پرداخت'}></TestHeader>
            <CompleteTitle title={"خلاصه سفارش"} />
            <div className="flex text-[#676767] flex-col w-[90%] mx-auto mt-2 vazir-medium text-[15px]">
                <p className="leading-7">اطلاعات بیمار شما در سامانه حمل و نقل کشوری ثبت شده است . </p>
                <p className="leading-7">به زودی با شماره همراه 09216919291 تماس گرفته میشود لطفا پاسخگو باشید .</p>
                <p className="leading-7">لطفا اطلاعات بیمار را قبل از تماس کارشناس آماده کنید، فهم درست از مشکلات بیمار در ارائه خدمات مطلوب و جلوگیری از خطرات احتمالی کمک کننده است . </p>
                <p className="leading-7">بعد از تماس کارشناس پنل پرداخت برای شما ارسال   به تکمیل سفارش نمایید .</p>
            </div>
            <RequestButton text={'ثبت درخواست'} color={'text-white'} bg={'bg-blue-500'}></RequestButton>
       </LoaderProvider>
    )
}
export default PaymentAmbulance