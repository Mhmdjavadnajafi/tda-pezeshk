import BorderGeneral from "../components/BordergeneralTest";
import CauseDisease from "../components/causeDisease";
import DoctorPaymentProfile from "../components/DoctorCardPayment"
import TestHeader from "../components/HeaderTest"
import InputNumber from "../components/InputNumberPhone";
import { IoCallSharp } from "react-icons/io5";
import RequestButton from "../components/RequestButton";
import LoaderProvider from "./LoaderProvider";
import { useNavigate } from "react-router-dom";
const DoctorPayment = ()=>{
    const navigate = useNavigate()
    return(
        <LoaderProvider>
            <div className="w-full mx-auto relative">
                <TestHeader title="تایید و پرداخت" onClick={()=>navigate('/doctor')} />
                <DoctorPaymentProfile name={'دکتر زهرا زهرایی'} expertise={'پزشک عمومی'} star={4.7} counseling={"1000"} />
                <BorderGeneral />
                <CauseDisease />
                <BorderGeneral />
                <div className="w-[90%] mx-auto my-3">
                    <div className="vazir-medium font-bold">صورت حساب</div>
                    <InputNumber placeholder={'کد تخفیف'} />
                    <div className="vazir-medium text-gray-500 text-[15px] mt-2 mb-7">ویزیت پزشک برای مشاوره تلفنی فوری 216.000 تومان</div>
                    <div className="vazir-medium text-gray-500 text-[15px] mb-30">قابل پرداخت 25.000.000 تومان</div>
                </div>
                <RequestButton text={'انتقال به درگاه'}></RequestButton>
            </div>
        </LoaderProvider>
    )
}
export default DoctorPayment