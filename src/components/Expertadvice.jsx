import ICON from '../assets/images/Group 3819.png'
import BorderGeneral from './BordergeneralTest'

const Expertadvice = ({ historyTitle, CasesTitle, dr, status, code }) => {
    return (
        <div>
            <div className='w-[90%] mx-auto'>
                <div className="vazir-medium gap-3 font-bold text-3 flex items-center">
                    <img className='h-3 w-3' src={ICON} alt="" /> موضوع : {historyTitle}
                </div>
                <div className='vazir-medium mt-1 gap-3 text-sm text-gray-600 flex items-center'>
                    موارد : {CasesTitle}
                </div>
                <div className='vazir-medium mt-1 gap-3 text-sm text-gray-600 flex items-center'>
                    پزشک : {dr}
                </div>
                <div className='vazir-medium mt-1 text-sm text-gray-600 flex items-center'>
                    وضعیت : {status} {code !== "" ? (<>/ کد پیگیری <span className='text-red-500 mr-1'>{code}</span></>) : null}
                </div>
            </div>
            <BorderGeneral/>
        </div>
    )
}
export default Expertadvice