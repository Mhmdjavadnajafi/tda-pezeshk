import ICON from '../assets/images/Group 3819.png'
import BorderGeneral from './BordergeneralTest'
import Faciliti from './Facilities'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
const Sonography = ({ historyTitle, CasesTitle, DrName, Expertise, status, code, AttachedservicesTitle, Servicecenter, numberPhoneCenter }) => {
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
                    وضعیت : {status} {code !== "" ? (<>/ کد پیگیری <span className='text-red-500 mr-1'>{code}</span></>) : <></>}
                </div>
            </div>
            <div className='w-[90%] mx-auto mt-4'>
                <div className="vazir-medium gap-3 font-bold text-3 flex items-center">
                    <img className='h-3 w-3' src={ICON} alt="" /> خدمات ضمیمه : {AttachedservicesTitle}
                </div>
                <div className='vazir-medium text-gray-600 text-sm mt-2'>مرکز : {Servicecenter}</div>
                <div className='flex justify-between items-center mt-3'>
                    <div className='vazir-medium text-gray-600 text-sm mt-2'>تماس با مرکز : {numberPhoneCenter}</div>
                    <button className='bg-gray-200 vazir-medium text-sm py-2 px-3 rounded-xl text-gray-600'>تماس</button>
                </div>
                <div className='flex justify-between items-center mt-3'>
                    <div className='vazir-medium text-gray-600 text-sm mt-2'>زمان مراجعه : </div>
                    <button className='bg-gray-200 vazir-medium text-sm py-2 px-3 rounded-xl text-gray-600'>لغو نوبت</button>
                </div>
                <div className='flex justify-between items-center mt-3'>
                    <div className='vazir-medium text-gray-600 text-sm mt-2'>لوکیشن : </div>
                    <button className='bg-gray-200 vazir-medium text-sm py-2 px-3 rounded-xl text-gray-600'>مسیر یابی</button>
                </div>
            </div>
            <div className='w-[90%] mx-auto'>
                <div className="vazir-medium gap-3 font-bold text-3 flex items-center  mt-4">
                    <img className='h-3 w-3' src={ICON}></img>  امکانات / در انتظار انجام
                </div>
                <div className='mt-2 flex w-full items-center gap-2'>
                    <Faciliti flex={"flex-3"} text={'text-[0.8rem]'} name={"دریافت نسخه چاپی"}></Faciliti>
                    <Faciliti flex={"flex-2"} text={'text-[0.8rem]'} name={"اشتراک‌گذاری"}></Faciliti>
                    <Faciliti flex={'flex-1'} text={'text-[0.8rem]'} name={"نمایش"}></Faciliti>
                    <Faciliti flex={'flex-1'} text={'text-[0.8rem]'} name={"کپی"}></Faciliti>
                </div>
            </div>
            <div className='w-[90%] mx-auto'>
                <div className="vazir-medium gap-3 font-bold text-3 flex items-center  mt-4">
                    <img className='h-3 w-3' src={ICON}></img>  خدمات بیشتر / در انتظار انجام
                </div>
                <div className='mt-2'>
                    <div className='w-full py-4 bg-gray-100 rounded-xl flex justify-between items-center px-4'>
                        <div>
                            <div className='vazir-medium text-md text-black font-bold'>نیاز به تفسیر پزشک دارید</div>
                            <div className='text-gray-600 mt-1 text-sm vazir-medium'>هزینه ویزیت پزشک 185.000 تومان</div>
                        </div>
                        <div>
                            <MdOutlineKeyboardArrowLeft className='text-gray-500 text-3xl' />
                        </div>
                    </div>
                    <div className='w-full mt-4 py-4 bg-gray-100 rounded-xl flex justify-between items-center px-4'>
                        <div>
                            <div className='vazir-medium text-md text-black font-bold'>تفسیر هوش مصنوعی تی دا</div>
                            <div className='text-gray-600 mt-1 text-sm vazir-medium'>رایگان</div>
                        </div>
                        <div>
                            <MdOutlineKeyboardArrowLeft className='text-gray-500 text-3xl' />
                        </div>
                    </div>
                </div>
            </div>
            <BorderGeneral/>
        </div>
    )
}
export default Sonography