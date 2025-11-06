import { useNavigate } from "react-router-dom"
import Calendar from "../components/Calendar"
import CompleteTitle from "../components/CompleteTitle"
import TestHeader from "../components/HeaderTest"
import HistoryContainerParaClinic from "../components/historyContainerParaClinic"
import Registration_and_purchase_of_medicine from "../components/Registration_and_purchase_of_medicine"
import Registration_and_purchase_of_medicine_elct from "../components/Registration_and_purchase_of_medicine_elct"
import Registration_and_purchase_of_medicine_paper from "../components/Registration_and_purchase_of_medicine_paper"
import Sonography from "../components/Sonography"
import HistoryTest from "../components/Testhistory"

const ParaClinicconsultationhistory = ()=>{
    const navigate = useNavigate()
    return(
        <div>
            <TestHeader title={"سابقه پاراکلینیک"} onClick={() => navigate('/Medicalrecords')}></TestHeader>
            <CompleteTitle title={"انتخاب تاریخ"} />
            <Calendar/>
            <div className="mt-5">
                <HistoryTest historyTitle={"آزمایش سلامت مردان"} CasesTitle={"- bun - na - k - cbc diff"} DrName={"محمد علی دانش"} Expertise={"فوق تخصص بیماری های داخلی"} status={"ثبت شد"} code={"4658795"} sampler={"اشکان حسنوند"} Servicecenter={"آزمایشگاه نور"} />
            </div>
            <Sonography AttachedservicesTitle={"ثبت نوبت مرکز تصویر برداری"} historyTitle={"سونوگرافی"} CasesTitle={'شکم و لگن - دست چپ'} DrName={"محمد علی دانش"} numberPhoneCenter={"09216919291"} Expertise={"فوق تخصص بیماری های داخلی"} status={"ثبت شد"} code={"4658795"} Servicecenter={"مرکز تصویربرداری میهن"}/>
            <Registration_and_purchase_of_medicine historyTitle={"ثبت و خرید دارو"} CasesTitle={"سفالکسین 500 - متادون 40 سیبلب لثبسنخخ نشن خنسنن نخنخن خن خنضشخنزخ نبنز خن ن ظخنزن خنخ نشخنزحخ خن حخنشخن"} dr={"محمد علی دانش / فوق تخصص بیماری های داخلی "} code={"4658795"} status={"در انتظار پرداخت هزینه داروخانه"} paramName={"دکتر حسنوندی"} pike={"اشکان حسنوندی"}/>
            <Registration_and_purchase_of_medicine_elct historyTitle={"خرید دارو / نسخه الکترونیک"} code={"4658795"} status={"در انتظار پرداخت هزینه داروخانه"} AttachedservicesTitle={"خرید و ارسال دارو"} paramName={"دکتر حسنوندی"} pike={'اشکان حسنوندی'} />
            <Registration_and_purchase_of_medicine_paper historyTitle={"خرید دارو / نسخه کاغذی"} status={"در انتظار پرداخت هزینه داروخانه"} paramName={"داروخانه دکتر حسنوندی"} pike={"اشکان حسنوندی"} AttachedservicesTitle={"خرید و ارسال دارو"} />
        </div>
    )
}
export default ParaClinicconsultationhistory