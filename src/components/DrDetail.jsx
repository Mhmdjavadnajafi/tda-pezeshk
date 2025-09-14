import RadarCircle from "./Radar"
import DoctorOne from '../assets/images/پزشک زن.jpg'
import DrDetailBox from "./DrDetailBox"
const DrDetail = () => {
    return (
        <div className="w-[90%] mx-auto flex justify-between">
            <div className="relative flex-2">
                <RadarCircle />
                <div className="w-[80px] h-[80px] border border-blue-400 rounded-full">
                    <img className="h-[70px] rounded-full w-[70px]" src={DoctorOne}></img>
                </div>
            </div>
            <div className="grid grid-cols-12 flex-3 gap-2">
                <DrDetailBox/>
                <DrDetailBox />
                <DrDetailBox />
            </div>
        </div>
    )
}
export default DrDetail