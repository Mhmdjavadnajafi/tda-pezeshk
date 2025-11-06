import { useNavigate } from "react-router-dom"
import Depatment from "./deparment"
import Ip from '../assets/images/inprogress.png'
import Hd from '../assets/images/Historyofdoctorconsultation.png'
import Pc from '../assets/images/Paraclinicalhistory.png'
const Treatmenthistorysections = () => {
    const navigate = useNavigate('')
    return (
        <div className="w-[90%] gap-2 mt-5 mx-auto grid grid-cols-12">
            <Depatment onClick={() => navigate('/Inprogress')} imgSrc={Ip}></Depatment>
            <Depatment onClick={() => navigate('/Doctorconsultationhistory')} imgSrc={Hd}></Depatment>
            <Depatment onClick={() => navigate('/ParaClinicconsultationhistory')} imgSrc={Pc}></Depatment>
        </div>
    )
}
export default Treatmenthistorysections