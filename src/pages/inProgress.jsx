import { useNavigate } from "react-router-dom"
import Expertadvice from "../components/Expertadvice"
import TestHeader from "../components/HeaderTest"
import Registration_and_purchase_of_medicine from "../components/Registration_and_purchase_of_medicine"
import Registration_and_purchase_of_medicine_elct from "../components/Registration_and_purchase_of_medicine_elct"
import Registration_and_purchase_of_medicine_paper from "../components/Registration_and_purchase_of_medicine_paper"
import HistoryTest from "../components/Testhistory"   
import TriageHistory from "../components/TestTriage"

const InProgress = () => {
    const navigate = useNavigate()
    return (
        <div>
            <TestHeader title="در حال انجام" onClick={() => navigate('/Medicalrecords')}/>

            <HistoryTest
                Servicecenter="آزمایشگاه نور"
                historyTitle="آزمایش سلامت مردان"
                AttachedservicesTitle="نمونه گیری و انجام آزمایش"
                CasesTitle="- bun - na - k - cbc - diff"
                DrName="محمد علی دانش / فوق تخصص بیماری های داخلی"
                status="در انتظار ثبت پزشک"
                code=""
                sampler="اشکان حسنوندی"
            />

            <TriageHistory
                historyTitle="درخواست تریاژ"
                CasesTitle="ناحیه سینه و شکم"
                description="سلام چند روزی هست در ناحیه سینه و شکم درد شدید و یوبوست دارم"
                status="در انتظار تریاژ کارشناس"
                code=""
                AttachedservicesTitle="راهنمایی کارشناس"
                drName="فیروز شاه مرادی"
            />
            <Expertadvice historyTitle={'مشاوره متخصص'} CasesTitle={'ویزیت اورژانسی پزشکی'} dr={'محمد علی دانش / فوق تخصص بیماری های داخلی'} code={""} status={"در انتظار شروع مشاوره با پزشک"} />
            <Registration_and_purchase_of_medicine historyTitle={"ثبت و خرید دارو"} CasesTitle={" سفالکسین 500 - متادون 40 سیبلب لثبسنخخ نشن خنسنن نخنخن خن خنضشخنزخ نبنز خن ن ظخنزن خنخ نشخنزحخ خن حخنشخن"} dr={"محمد علی دانش / فوق تخصص بیماری های داخلی"} code={"4658795"} AttachedservicesTitle={"خرید و ارسال دارو"} status={"در انتظار پرداخت هزینه داروخانه"} paramName={'دکتر حسنوندی'} pike={"اشکان حسنوندی"} />
            <Registration_and_purchase_of_medicine historyTitle={"ثبت و خرید دارو"} CasesTitle={" سفالکسین 500 - متادون 40 سیبلب لثبسنخخ نشن خنسنن نخنخن خن خنضشخنزخ نبنز خن ن ظخنزن خنخ نشخنزحخ خن حخنشخن"} dr={"محمد علی دانش / فوق تخصص بیماری های داخلی"} code={"4658795"} AttachedservicesTitle={"خرید و ارسال دارو"} status={"در انتظار پرداخت هزینه داروخانه"} paramName={'دکتر حسنوندی'} pike={"اشکان حسنوندی"} />
            <Registration_and_purchase_of_medicine_elct historyTitle={"خرید دارو / نسخه الکترونیک"} code={"4658795"} status={"در انتظار پرداخت هزینه داروخانه"} AttachedservicesTitle={"خرید و ارسال دارو"} paramName={"دکتر حسنوندی"} pike={'اشکان حسنوندی'} />
            <Registration_and_purchase_of_medicine_paper historyTitle={"خرید دارو / نسخه کاغذی"} status={"در انتظار پرداخت هزینه داروخانه"} paramName={"داروخانه دکتر حسنوندی"} pike={"اشکان حسنوندی"} AttachedservicesTitle={"خرید و ارسال دارو"} />

        </div>
    )
}

export default InProgress
