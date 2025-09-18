import RadarCircle from "./Radar"
import DoctorOne from '../assets/images/پزشک زن.jpg'
import DrDetailBox from "./DrDetailBox"
import { FaRegStar } from "react-icons/fa6";
import DoctorName from "./DoctorName";
import DrNameDoctorPage from "./DrNameDoctorPage";
const DrDetail = () => {
    return (
        <div className="w-[90%] mx-auto flex justify-between items-center">
            <div className="relative flex-2">
                <RadarCircle />
                <div className="w-[80px] h-[80px] border border-blue-400 rounded-full">
                    <img className="h-[70px] rounded-full w-[70px]" src={DoctorOne}></img>
                </div>
            </div>
            <div className="grid grid-cols-12 flex-4 gap-2">
                <DrDetailBox title={"از 7.120 امتیاز"} value={<div className="flex items-center justify-center"><FaRegStar /> 4.8</div>} bg={'bg-red-200'} color={'text-yellow-600'}/>
                <DrDetailBox title={"از 7.120 امتیاز"} value={'+11.000'} bg={'bg-blue-200'} color={'text-blue-700'} />
                <DrDetailBox title={"کد نظام پزشکی"} value={'1854654'} bg={'bg-gray-200'} color={"text-[#676767]"}/>
            </div>
        </div>
        
    )
}
export default DrDetail