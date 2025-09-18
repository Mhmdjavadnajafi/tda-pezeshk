import { useNavigate } from "react-router-dom"
import BorderGeneral from "../components/BordergeneralTest"
import CompleteTitle from "../components/CompleteTitle"
import Cost from "../components/cost"
import TestHeader from "../components/HeaderTest"
import InputNumber from "../components/InputNumberPhone"
import Ordersummary from "../components/Ordersummary"
import Payable from "../components/Payable"
import RequestButton from "../components/RequestButton"
import LoaderProvider from "./LoaderProvider"
import OrdersummaryUltrasound from "../components/OrdersummaryUltrasound"
const PaymentUltrasound = () => {
    let navigate = useNavigate()
    return (
        <LoaderProvider>
            <div>
                <TestHeader onClick={() => navigate('/compUltrasound')} title={'تایید و پرداخت'}></TestHeader>
                <CompleteTitle title={"خلاصه سفارش"} />
                <OrdersummaryUltrasound/>
                <BorderGeneral />
                <RequestButton text={'انتقال به درگاه'} />
                <CompleteTitle title={'صورت حساب'} />
                <div className="w-[90%] mx-auto my-3">
                    <InputNumber placeholder={'کد تخفیف'} />
                </div>
                <Cost Firstcost={"ویزیت پزشک برای ثبت آزمایش 216.000 تومان"} Secondcost={"هزینه تصویر برداری 3.415.000 تومان"} />
                <Payable />
            </div>
        </LoaderProvider>
    )
}
export default PaymentUltrasound