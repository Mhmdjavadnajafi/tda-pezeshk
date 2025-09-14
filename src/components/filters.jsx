import { useNavigate } from "react-router-dom"
import TextVisit from '../assets/images/vizit-text.png'
import EmergencyCall from '../assets/images/Emergencycall.png'
import Examination from "./examination"
import Contactscheduler from "../assets/images/Contact scheduler.png"
import VideoCall from "../assets/images/VideoCall.png"
import Presence from "../assets/images/presence.png"
const Filters = () => {
    const toFilter = useNavigate()
    return (
        <div className="w-[90%] gap-2 mt-10 mx-auto grid grid-cols-12">
            {/* <Examination onClick={() => toFilter('/CheckTest')} imgSrc={TextVisit}></Examination> */}
            <Examination onClick={() => toFilter('/CheckTest')} imgSrc={EmergencyCall}></Examination>
            <Examination onClick={() => toFilter('/CheckTest')} imgSrc={Contactscheduler}></Examination>
            <Examination onClick={() => toFilter('/CheckTest')} imgSrc={TextVisit}></Examination>
            <Examination onClick={() => toFilter('/CheckTest')} imgSrc={VideoCall}></Examination>
            <Examination onClick={() => toFilter('/CheckTest')} imgSrc={Presence}></Examination>
        </div>
    )
}
export default Filters