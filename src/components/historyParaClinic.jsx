import ICON from '../assets/images/Group 3819.png'
import BorderGeneral from './BordergeneralTest'
import Faciliti from './Facilities'
const HistoryParaClinic = ({ historyTitle, CasesTitle, DrName, Expertise, status, code, AttachedservicesTitle, sampler, Servicecenter }) => {
    return (
        <div>
            <div className='w-[90%] mx-auto'>
                <div className="vazir-medium gap-3 font-bold text-3 flex items-center">
                    <img className='h-3 w-3' src={ICON}></img>  موضوع : {historyTitle}
                </div>
                <div className='vazir-medium mt-1 gap-3 text-sm text-gray-600 flex items-center'>
                    موارد : {CasesTitle}
                </div>
                <div className='vazir-medium mt-1 text-sm text-gray-600 flex items-center'>
                    پزشک : {DrName} / {Expertise}
                </div>
                <div className='vazir-medium mt-1 text-sm text-gray-600 flex items-center'>
                    وضعیت : {status} / کد پیگیری <span className='text-red-500 mr-1'>{code}</span>
                </div>
            </div>
            <div className='w-[90%] mx-auto mt-8'>
                <div className="vazir-medium gap-3 font-bold text-3 flex items-center">
                    <img className='h-3 w-3' src={ICON}></img>  خدمات ضمیمه : {AttachedservicesTitle}
                </div>
                <div className='vazir-medium mt-1 gap-3 text-sm text-gray-600 flex items-center'>
                    نمونه گیر : {sampler}
                </div>
                <div className='vazir-medium mt-1 text-sm text-gray-600 flex items-center'>
                    مرکز خدمات : {Servicecenter}
                </div>
            </div>
            <div className='w-[90%] mx-auto'>
                <div className="vazir-medium gap-3 font-bold text-3 flex items-center  mt-8">
                    <img className='h-3 w-3' src={ICON}></img>  امکانات
                </div>
                <div className='mt-2 flex w-full items-center gap-2'>
                    <Faciliti name={"دریافت نسخه چاپی"}></Faciliti>
                    <Faciliti name={"اشتراک‌گذاری"}></Faciliti>
                    <Faciliti name={"نمایش"}></Faciliti>
                    <Faciliti name={"کپی"}></Faciliti>
                </div>
            </div>
            <BorderGeneral />
        </div>
    )
}
export default HistoryParaClinic