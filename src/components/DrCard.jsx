import RadarCircle from "./Radar";
import DoctorOne from '../assets/images/womandr.jpg'
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import StarBox from "./StarBox";
import ExperienceBox from "./ExperienceBox";
import DoctorName from "./DoctorName";
import DoctorExp from "./expertiseDoctor";
import StartCounseling from "./StartCounseling";
import Communication from "./communication";
import { FaRegStar } from "react-icons/fa";
import { CiVideoOn } from "react-icons/ci";
import { FiTrello } from "react-icons/fi";
import CmBox from "./cmBox";
import StartCounselingCard from "./StartCounselingDrCard";
const DrCard = ({ profileImg, profileName, profileExp,onClick }) => {
    return (
        <div className="py-4 w-[90%] mx-auto rounded-xl flex flex-col items-center justify-center shadow bg-white">
            <div className="flex w-[90%] mx-auto items-center justify-between">
                <div className="flex items-center gap-2 justify-center">
                    <div className="relative">
                        <RadarCircle />
                        <div className="w-17 mx-auto h-17 border border-blue-400 rounded-full">
                            <img className="h-full rounded-full w-full" src={DoctorOne}></img>
                        </div>
                    </div>
                    <div>
                        <div className="vazir-medium text-lg">دکتر مینا بیرانوند</div>
                        <div className="vazir-medium max-w-40 text-sm text-gray-600">دکترای تخصصی روانشناسی و مشاوره</div>
                    </div>
                </div>
                <div>
                    <div className="w-15 text-[#FF9E33] gap-2 px-1 rounded h-6 bg-[#F2F2F2] flex flex-row-reverse items-center justify-center">
                        <FaRegStar />
                        <div className="vazir-medium text-bold text-[15px] relative top-[4px] ">4.7</div>
                    </div>
                    <div className="w-15 mt-1 text-[#006ECF] bg-[#F2F2F2] rounded h-11 flex flex-col items-center justify-center">
                        <div className="vazir-medium text-sm text-bold">+1000</div>
                        <div className="vazir-medium text-[0.6rem] p-1">مشاوره موفق</div>
                    </div>
                </div>
            </div>
            <div className="w-[90%] max-w-[500px] flex-wrap mx-auto flex mt-5 gap-1 justify-center">
                <CmBox icon={<BsTelephone />} text={"اورژانسی"} />
                <CmBox icon={<BsTelephone />} text={"تلفنی"} />
                <CmBox icon={<BsTelephone />} text={"متنی"} />
                <CmBox icon={<CiVideoOn />} text={"تصویری"} />
                <CmBox icon={<FiTrello />} text={"حضوری"} />
            </div>




            <StartCounselingCard onClick={onClick}/>
        </div>
    )
}
export default DrCard