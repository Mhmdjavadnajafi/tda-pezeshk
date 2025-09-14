import { useNavigate } from "react-router-dom"
import BorderGeneral from "../components/BordergeneralTest"
import CompleteTitle from "../components/CompleteTitle"
import Cost from "../components/cost"
import TestHeader from "../components/HeaderTest"
import InputNumber from "../components/InputNumberPhone"
import Ordersummary from "../components/Ordersummary"
import Payable from "../components/Payable"
import RequestButton from "../components/RequestButton"
const Payment = ()=>{
    let navigate = useNavigate()
    return (
     <div>
            <TestHeader onClick={() => navigate('/Complete2')} title={'تایید و پرداخت'}></TestHeader>
            <CompleteTitle title={"خلاصه سفارش"} />
            <Ordersummary/>
            <BorderGeneral/>
            <RequestButton text={'انتقال به درگاه'}/>
            <CompleteTitle title={'صورت حساب'}/>
            <div className="w-[90%] mx-auto my-3">
                <InputNumber placeholder={'کد تخفیف'} />
            </div>
            <Cost/>
            <Payable/>
     </div>
    )
}
export default Payment