import ICON from '../assets/images/Group 3819.png'
import BorderGeneral from './BordergeneralTest'
import Faciliti from './Facilities'
const Registration_and_purchase_of_medicine_paper = ({historyTitle,code,AttachedservicesTitle,paramName,pike,status})=>{
    return(
        <div className='pb-10'>
            <div className='w-[90%] mx-auto'>
                <div className="vazir-medium gap-3 font-bold text-3 flex items-center">
                    <img className='h-3 w-3' src={ICON} alt="" /> موضوع : {historyTitle}
                </div>
                <div className='my-4'>
                    <div src='' className='h-20 w-30 border border-gray-500 rounded-xl flex items-center justify-center text-center vazir-medium text-gray-600'>
                        تصویر <br></br>
                        نسخه دارو
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='vazir-medium text-gray-600 text-sm mt-2'>وضعیت : {status}</div>
                    <button className='bg-gray-200 vazir-medium text-sm py-2 px-3 rounded-xl text-gray-600'>پرداخت</button>
                </div>
            </div>
            <div className='w-[90%] mx-auto mt-4'>
                <div className="vazir-medium gap-3 font-bold text-3 flex items-center">
                    <img className='h-3 w-3' src={ICON} alt="" /> خدمات ضمیمه : {AttachedservicesTitle}
                </div>
                <div className='flex justify-between items-center mt-3'>
                    <div className='vazir-medium text-gray-600 text-sm mt-2'>داروخانه : {paramName}</div>
                    <button className='bg-gray-200 vazir-medium text-sm py-2 px-3 rounded-xl text-gray-600'>تماس</button>
                </div>
                <div className='flex justify-between items-center mt-3'>
                    <div className='vazir-medium text-gray-600 text-sm mt-2'>پیک : {pike}</div>
                    <button className='bg-gray-200 vazir-medium text-sm py-2 px-3 rounded-xl text-gray-600'>تماس</button>
                </div>
            </div>
            <div className='w-[90%] mx-auto'>
                <div className="vazir-medium gap-3 font-bold text-3 flex items-center  mt-4">
                    <img className='h-3 w-3' src={ICON}></img>  امکانات
                </div>
                <div className='mt-2 flex w-full items-center gap-2'>
                    <Faciliti text={'text-[0.8rem]'} name={"دریافت رسید داروخانه"}></Faciliti>
                    <Faciliti text={'text-[0.8rem]'} name={"درخواست مجدد دارو"}></Faciliti>
                </div>
            </div>
            {/* <BorderGeneral /> */}
        </div>
    )
}
export default Registration_and_purchase_of_medicine_paper