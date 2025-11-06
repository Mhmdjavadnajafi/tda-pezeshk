import { useNavigate } from 'react-router-dom'
import Amb from '../assets/images/vecteezy_ambulance-png-with-ai-generated_26773226 1.png'
const Ambulance = ()=>{
    const navigate = useNavigate()
    return(
        <div onClick={() => navigate('/Ambulance')} className="w-[90%] mx-auto h-[122px] bg-gray-100 mt-8 border border-gray-300 flex justify-between items-center px-3 rounded-xl mb-30">
            <div className='flex-2'>
                <div className='vazir-medium font-bold'>حمل بیمار به تمام شهرهای کشور</div>
                <div className='vazir-medium text-gray-600 text-md mt-2'>با کارشناس ورزیده و <br></br>
                    پشتیبانی پزشک</div>
            </div>
            <div className='flex-1'>
                <img src={Amb}></img>
            </div>
        </div>
    )
}
export default Ambulance