import ICON from '../assets/images/Group 3819.png'
import BorderGeneral from './BordergeneralTest'
import Faciliti from './Facilities'

const TriageHistory = ({ historyTitle, CasesTitle, description, status, code, AttachedservicesTitle, drName }) => {
    return (
        <>
            <div>
                <div className='w-[90%] mx-auto'>
                    <div className="vazir-medium gap-3 font-bold text-3 flex items-center">
                        <img className='h-3 w-3' src={ICON} alt="" /> موضوع : {historyTitle}
                    </div>
                    <div className='vazir-medium mt-1 gap-3 text-sm text-gray-600 flex items-center'>
                        موارد : {CasesTitle}
                    </div>
                    <div className='vazir-medium mt-1 text-sm text-gray-600 flex items-center'>
                        توضیحات : {description}
                    </div>
                    <div className='vazir-medium mt-1 text-sm text-gray-600 flex items-center'>
                        وضعیت : {status} {code !== "" ? (<>/ کد پیگیری <span className='text-red-500 mr-1'>{code}</span></>) : null}
                    </div>
                </div>

                <div className='w-[90%] mx-auto mt-4'>
                    <div className="vazir-medium gap-3 font-bold text-3 flex items-center">
                        <img className='h-3 w-3' src={ICON} alt="" /> خدمات ضمیمه : {AttachedservicesTitle}
                    </div>
                    <div className='vazir-medium mt-1 text-sm text-gray-600'>
                        <div>دوست عزیز با توجه به موارد ذکر شده شما نیاز به مراجعه به پزشک متخصص جراحی عمومی دارید</div>
                        <div className='mt-2'>احتمال نیاز به آزمایشات مرتبط با موضوع بیماری وجود دارد و اگر مدارک و سابقه قبلی دارید در موقع ویزیت ذکر کنید</div>
                        <div className='mt-2'>موارد در بخش توضیحات نیامده و میتواند کمک کننده به تشخیص بهتر پزشک شود.</div>
                    </div>
                </div>

                <div className='w-[90%] mx-auto mt-4 text-sm text-gray-600 vazir-medium'>
                    برای ویزیت پزشک پیشنهادی، {drName} متخصص جراحی عمومی کلیک کنید
                </div>
                <div className='w-[90%] mx-auto mt-3 flex justify-between vazir-medium items-center'>
                    <div className='text-blue-600 font-bold'>www.tda24.ir / 1245785</div>
                    <div>
                        <button className='bg-gray-200 px-3 text-xs flex items-center justify-center rounded-xl text-gray-500 py-2'>رفتن به صفحه</button>
                    </div>
                </div>

                <div className='w-[90%] mx-auto vazir-medium text-sm mt-5 text-gray-700 font-bold'>
                    لیست کامل پزشک متخصصین جراحی عمومی
                </div>
                <div className='w-[90%] mx-auto mt-1 flex justify-between vazir-medium items-center'>
                    <div className='text-blue-600 font-bold' dir='ltr'>www.tda24.ir/1452</div>
                    <div>
                        <button className='bg-gray-200 text-xs px-3 flex items-center justify-center rounded-xl text-gray-500 py-2'>رفتن به صفحه</button>
                    </div>
                </div>
            </div>
            <BorderGeneral />
        </>
    )
}

export default TriageHistory
